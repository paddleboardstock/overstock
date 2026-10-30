// End-to-end test of the shop-worker against a real `wrangler dev` instance
// with the LOCAL D1 database (no secrets configured — payment providers are
// absent on purpose, so checkout exercises the graceful-failure + rollback
// paths). Usage:
//   node scripts/e2e-shop-test.mjs
//
// HTTP scenarios (server running):
//   E1  invalid email                        -> 400
//   E2  unknown product slug                 -> 400
//   E3  incomplete shipping address          -> 400
//   E4  bogus discount code                  -> 400
//   E5  insufficient stock (pre-reserved)    -> 409
//   E6  stripe checkout, no STRIPE_SECRET_KEY-> 503 + full rollback
//   E7  idempotency-key fingerprint mismatch -> 409
//   E8  paypal checkout, no PAYPAL creds     -> 503 + rollback
//   E9  /verify without session_id           -> 400
//   E10 /webhook/stripe without secret       -> 503
// SQL assertions (after shutdown): every created order is 'failed', all
// reservations released, inventory reserved counters back to their pre-test
// values, no orphan idempotency claims.
import { spawn, execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { writeFileSync, unlinkSync, existsSync } from 'node:fs';

const PORT = 8791;
const BASE = `http://127.0.0.1:${PORT}`;
const TOML = 'workers/shop-worker/wrangler.toml';
const TMP_SQL = '.tmp-e2e.sql';
const EMAIL = 'e2e@test.local';
const CLAIM_ID = 'cr_e2e_claim';
const IDEM_KEY = 'e2e-key';
// wrangler dev runs locally with no cf-connecting-ip header -> ip = ''
const CLAIM_HASH = sha256(`${IDEM_KEY}:`);
const SLUG_SHORT = 'sup-explorer-11'; // pre-reserved to 25/25 for E5
const SLUG_OK = 'sup-dolphin-wave'; // normal stock for E6/E7/E8

const SHIPPING = { name: 'E2E Tester', address: '1 Harbor Rd', city: 'Weihai', postal: '264200', country: 'CN' };

function sha256(s) {
  return createHash('sha256').update(s).digest('hex');
}

function d1(sql) {
  writeFileSync(TMP_SQL, sql);
  try {
    const out = execFileSync(
      'npx',
      ['wrangler', 'd1', 'execute', 'paddleboardoverstock-db', '--local', '-c', TOML, '--file', TMP_SQL, '--json'],
      { encoding: 'utf8', shell: true, stdio: ['ignore', 'pipe', 'pipe'] }
    );
    const start = out.indexOf('[');
    const stmts = JSON.parse(out.slice(start, out.lastIndexOf(']') + 1));
    return { ok: true, stmts, raw: out };
  } catch (e) {
    return { ok: false, stmts: [], raw: (e.stdout || '') + (e.stderr || '') };
  }
}

function scalar(r, key) {
  for (let i = r.stmts.length - 1; i >= 0; i--) {
    const res = r.stmts[i].results;
    if (res && res.length > 0 && key in res[0]) return res[0][key];
  }
  return null;
}

let pass = 0;
let fail = 0;
function check(name, cond, detail) {
  if (cond) {
    pass++;
    console.log('PASS ' + name + (detail ? '  (' + detail + ')' : ''));
  } else {
    fail++;
    console.log('FAIL ' + name + (detail ? '  (' + detail + ')' : ''));
  }
}

const CLEANUP = `DELETE FROM inventory_movements WHERE order_id IN (SELECT id FROM \`order\` WHERE email = '${EMAIL}');
DELETE FROM inventory_reservations WHERE order_id IN (SELECT id FROM \`order\` WHERE email = '${EMAIL}');
DELETE FROM discount_redemptions WHERE order_id IN (SELECT id FROM \`order\` WHERE email = '${EMAIL}');
DELETE FROM order_item WHERE order_id IN (SELECT id FROM \`order\` WHERE email = '${EMAIL}');
DELETE FROM \`order\` WHERE email = '${EMAIL}';
DELETE FROM checkout_requests WHERE id = '${CLAIM_ID}';
DELETE FROM rate_limit WHERE key LIKE 'shop-checkout:%';
UPDATE inventory SET reserved = 25, on_hand = 25 WHERE slug = '${SLUG_SHORT}';
UPDATE inventory SET reserved = 0, on_hand = 25 WHERE slug = '${SLUG_OK}';`;

async function post(path, body, headers) {
  const res = await fetch(BASE + path, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...(headers || {}) },
    body: JSON.stringify(body),
  });
  let data = null;
  try {
    data = await res.json();
  } catch {
    /* non-json body */
  }
  return { status: res.status, data };
}

function cartBody(over) {
  return {
    email: EMAIL,
    method: 'stripe',
    lang: 'en',
    items: [{ slug: SLUG_OK, qty: 1 }],
    shipping: SHIPPING,
    ...(over || {}),
  };
}

// ---------------------------------------------------------------------------
// Setup (server NOT running)
// ---------------------------------------------------------------------------
console.log('--- setup (local D1) ---');
const setup = d1(`${CLEANUP}
INSERT INTO checkout_requests (id, idempotency_key_hash, request_fingerprint, status, created_at)
VALUES ('${CLAIM_ID}', '${CLAIM_HASH}', 'mismatch-fingerprint', 'created', ${Date.now()});`);
if (!setup.ok) {
  console.error('setup failed:\n' + setup.raw);
  process.exit(1);
}
console.log('setup ok (claim inserted, stock prepared)');

// ---------------------------------------------------------------------------
// Start wrangler dev
// ---------------------------------------------------------------------------
console.log('--- starting wrangler dev :' + PORT + ' ---');
const dev = spawn('npx', ['wrangler', 'dev', '-c', TOML, '--port', String(PORT), '--ip', '127.0.0.1'], {
  shell: true,
  env: { ...process.env, CI: 'true', WRANGLER_SEND_METRICS: 'false' },
  stdio: ['ignore', 'pipe', 'pipe'],
});
let devLog = '';
dev.stdout.on('data', (d) => (devLog += d.toString()));
dev.stderr.on('data', (d) => (devLog += d.toString()));

async function waitReady(timeoutMs) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    try {
      const res = await fetch(BASE + '/api/shop/verify', { signal: AbortSignal.timeout(2000) });
      if (res.status) return true;
    } catch {
      /* not up yet */
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  return false;
}

const ready = await waitReady(90000);
if (!ready) {
  console.error('wrangler dev did not become ready in 90s. Dev log tail:\n' + devLog.slice(-3000));
  try {
    execFileSync('taskkill', ['/PID', String(dev.pid), '/T', '/F'], { shell: true });
  } catch {
    /* best effort */
  }
  process.exit(1);
}
console.log('dev server ready');

// ---------------------------------------------------------------------------
// HTTP scenarios
// ---------------------------------------------------------------------------
try {
  let r = await post('/api/shop/checkout', cartBody({ email: 'not-an-email' }));
  check('E1 invalid email -> 400', r.status === 400, 'status=' + r.status);

  r = await post('/api/shop/checkout', cartBody({ items: [{ slug: 'does-not-exist', qty: 1 }] }));
  check(
    'E2 unknown slug -> 400',
    r.status === 400 && /no longer available/i.test(r.data?.error || ''),
    'status=' + r.status
  );

  r = await post('/api/shop/checkout', cartBody({ shipping: { ...SHIPPING, city: '' } }));
  check('E3 incomplete shipping -> 400', r.status === 400, 'status=' + r.status);

  r = await post('/api/shop/checkout', cartBody({ discountCode: 'BOGUS99' }));
  check('E4 bogus discount -> 400', r.status === 400, 'status=' + r.status);

  r = await post('/api/shop/checkout', cartBody({ items: [{ slug: SLUG_SHORT, qty: 1 }] }));
  check(
    'E5 insufficient stock -> 409',
    r.status === 409 && /Insufficient stock/i.test(r.data?.error || ''),
    'status=' + r.status + ' err=' + (r.data?.error || '').slice(0, 60)
  );

  r = await post('/api/shop/checkout', cartBody({ items: [{ slug: SLUG_OK, qty: 2 }] }));
  check(
    'E6 stripe no key -> 503',
    r.status === 503 && /not configured/i.test(r.data?.error || ''),
    'status=' + r.status + ' err=' + (r.data?.error || '').slice(0, 60)
  );

  r = await post('/api/shop/checkout', cartBody({ items: [{ slug: SLUG_OK, qty: 1 }] }), {
    'Idempotency-Key': IDEM_KEY,
  });
  check(
    'E7 idem fingerprint mismatch -> 409',
    r.status === 409 && /different cart/i.test(r.data?.error || ''),
    'status=' + r.status + ' err=' + (r.data?.error || '').slice(0, 60)
  );

  r = await post('/api/shop/checkout', cartBody({ method: 'paypal' }));
  check(
    'E8 paypal no creds -> 503',
    r.status === 503 && /not configured/i.test(r.data?.error || ''),
    'status=' + r.status + ' err=' + (r.data?.error || '').slice(0, 60)
  );

  const g = await fetch(BASE + '/api/shop/verify');
  const gd = await g.json().catch(() => null);
  check('E9 verify without session_id -> 400', g.status === 400, 'status=' + g.status + ' err=' + (gd?.error || ''));

  const w = await post('/api/shop/webhook/stripe', { id: 'evt_x', type: 'checkout.session.completed' });
  check('E10 stripe webhook without secret -> 503', w.status === 503, 'status=' + w.status);
} catch (e) {
  console.error('HTTP test error:', e);
  fail++;
}

// ---------------------------------------------------------------------------
// Stop dev server (kill the whole process tree)
// ---------------------------------------------------------------------------
console.log('--- stopping dev server ---');
try {
  execFileSync('taskkill', ['/PID', String(dev.pid), '/T', '/F'], { shell: true });
} catch {
  /* best effort */
}
await new Promise((r) => setTimeout(r, 2000));

// ---------------------------------------------------------------------------
// SQL assertions
// ---------------------------------------------------------------------------
console.log('--- sql assertions ---');
let q = d1(`SELECT COUNT(*) n FROM \`order\` WHERE email = '${EMAIL}';`);
check('A1a exactly 3 orders created (E5/E6/E8)', scalar(q, 'n') === 3, 'n=' + scalar(q, 'n'));

q = d1(`SELECT COUNT(*) n FROM \`order\` WHERE email = '${EMAIL}' AND status != 'failed';`);
check('A1b every created order is failed', scalar(q, 'n') === 0, 'n=' + scalar(q, 'n'));

q = d1(`SELECT reserved rv FROM inventory WHERE slug = '${SLUG_OK}';`);
check('A2 rollback: reserved counter restored to 0', scalar(q, 'rv') === 0, 'reserved=' + scalar(q, 'rv'));

q = d1(`SELECT reserved rv FROM inventory WHERE slug = '${SLUG_SHORT}';`);
check('A3 pre-reserved slug untouched (still 25)', scalar(q, 'rv') === 25, 'reserved=' + scalar(q, 'rv'));

q = d1(
  `SELECT COUNT(*) n FROM inventory_reservations r JOIN \`order\` o ON r.order_id = o.id WHERE o.email = '${EMAIL}' AND r.status = 'active';`
);
check('A4 no active reservations left', scalar(q, 'n') === 0, 'n=' + scalar(q, 'n'));

q = d1(`SELECT COUNT(*) n FROM checkout_requests WHERE id = '${CLAIM_ID}' AND status = 'created';`);
check('A5 pre-seeded idem claim untouched', scalar(q, 'n') === 1, 'n=' + scalar(q, 'n'));

q = d1(
  `SELECT COUNT(*) n FROM checkout_requests WHERE id != '${CLAIM_ID}' AND idempotency_key_hash = '${CLAIM_HASH}';`
);
check('A6 no duplicate claims created', scalar(q, 'n') === 0, 'n=' + scalar(q, 'n'));

q = d1(
  `SELECT COUNT(*) n FROM discount_redemptions WHERE order_id IN (SELECT id FROM \`order\` WHERE email = '${EMAIL}');`
);
check('A7 no discount redemptions recorded', scalar(q, 'n') === 0, 'n=' + scalar(q, 'n'));

// ---------------------------------------------------------------------------
// Cleanup
// ---------------------------------------------------------------------------
d1(CLEANUP);
if (existsSync(TMP_SQL)) unlinkSync(TMP_SQL);

console.log('\n' + pass + ' passed, ' + fail + ' failed');
process.exit(fail === 0 ? 0 : 1);
