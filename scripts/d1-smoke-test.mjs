// D1 smoke tests for the shop upgrade guards (migrations/0005_shop_upgrade.sql).
// Runs against the LOCAL D1 SQLite (wrangler --local) only — never touches the
// remote database. Usage:
//   node scripts/d1-smoke-test.mjs
//
// Verifies against real SQLite:
//   T1  anti-oversell reservation guard (conditional UPDATE on inventory)
//   T2  stripe_events exactly-once claim (PRIMARY KEY event_id)
//   T3  checkout_requests idempotency claim (UNIQUE idempotency_key_hash)
//   T4  order status flip idempotency anchor (guarded `status != 'paid'` UPDATE)
//   T5  discount usage_limit guarded increment
//   T6  reservation consume + backorder clamp (CHECK on_hand >= 0 holds)
import { execFileSync } from 'node:child_process';
import { writeFileSync, unlinkSync, existsSync } from 'node:fs';

const TOML = 'workers/shop-worker/wrangler.toml';
const TMP = '.tmp-d1-smoke.sql';
const MS_30MIN = 30 * 60 * 1000;

function run(sql) {
  writeFileSync(TMP, sql);
  try {
    const out = execFileSync(
      'npx',
      ['wrangler', 'd1', 'execute', 'paddleboardoverstock-db', '--local', '-c', TOML, '--file', TMP, '--json'],
      { encoding: 'utf8', shell: true, stdio: ['ignore', 'pipe', 'pipe'] }
    );
    const start = out.indexOf('[');
    const stmts = JSON.parse(out.slice(start, out.lastIndexOf(']') + 1));
    return { ok: true, stmts, raw: out };
  } catch (e) {
    return { ok: false, stmts: [], raw: (e.stdout || '') + (e.stderr || '') };
  }
}

// find the first row (searching backwards across statements) containing the given key
function val(r, key) {
  for (let i = r.stmts.length - 1; i >= 0; i--) {
    const res = r.stmts[i].results;
    if (res && res.length > 0 && key in res[0]) return res[0];
  }
  for (let i = r.stmts.length - 1; i >= 0; i--) {
    const res = r.stmts[i].results;
    if (res && res.length > 0) return res[0];
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

const CLEANUP = `DELETE FROM stripe_events WHERE event_id LIKE 'evt_smoke%';
DELETE FROM checkout_requests WHERE id LIKE 'cr_smoke%';
DELETE FROM \`order\` WHERE id LIKE 'order_smoke%';
DELETE FROM discounts WHERE code = 'SMOKE10';
DELETE FROM inventory_reservations WHERE order_id LIKE 'order_smoke%';
DELETE FROM inventory_movements WHERE order_id LIKE 'order_smoke%';
UPDATE inventory SET reserved = 0, on_hand = 25, updated_at = cast(unixepoch('subsecond')*1000 as integer) WHERE slug = 'sup-explorer-11';`;

// --- Setup ---
run(CLEANUP);

// --- T1: anti-oversell reservation guard ---
let r = run(
  `UPDATE inventory SET reserved = reserved + 20, updated_at = cast(unixepoch('subsecond')*1000 as integer) WHERE slug = 'sup-explorer-11' AND on_hand - reserved >= 20; SELECT changes() n;`
);
check('T1a reserve 20 (available 25)', r.ok && val(r, 'n').n === 1, 'n=' + val(r, 'n').n);

r = run(
  `UPDATE inventory SET reserved = reserved + 6 WHERE slug = 'sup-explorer-11' AND on_hand - reserved >= 6; SELECT changes() n;`
);
check('T1b oversell +6 blocked (only 5 left)', r.ok && val(r, 'n').n === 0, 'n=' + val(r, 'n').n);

r = run(
  `UPDATE inventory SET reserved = reserved + 5 WHERE slug = 'sup-explorer-11' AND on_hand - reserved >= 5; SELECT changes() n;`
);
check('T1c boundary +5 succeeds (exactly 0 left)', r.ok && val(r, 'n').n === 1, 'n=' + val(r, 'n').n);

r = run(
  `UPDATE inventory SET reserved = reserved + 1 WHERE slug = 'sup-explorer-11' AND on_hand - reserved >= 1; SELECT changes() n; SELECT reserved rv FROM inventory WHERE slug='sup-explorer-11';`
);
check(
  'T1d +1 blocked at zero availability, reserved stays 25',
  r.ok && val(r, 'n').n === 0 && val(r, 'rv').rv === 25,
  'n=' + val(r, 'n').n + ' reserved=' + val(r, 'rv').rv
);

// --- T2: stripe_events exactly-once claim ---
r = run(
  `INSERT INTO stripe_events (event_id, event_type, object_id, processing_status) VALUES ('evt_smoke_1', 'checkout.session.completed', 'cs_smoke_1', 'received');`
);
check('T2a stripe event claim insert', r.ok);

r = run(
  `INSERT INTO stripe_events (event_id, event_type, object_id, processing_status) VALUES ('evt_smoke_1', 'checkout.session.completed', 'cs_smoke_1', 'received');`
);
check('T2b duplicate stripe event rejected (UNIQUE)', !r.ok && /UNIQUE/i.test(r.raw), 'rejected=' + !r.ok);

// --- T3: checkout_requests idempotency claim ---
r = run(
  `INSERT INTO checkout_requests (id, idempotency_key_hash, request_fingerprint, status) VALUES ('cr_smoke_1', 'hash_smoke_1', 'fp_smoke_1', 'created');`
);
check('T3a checkout claim insert', r.ok);

r = run(
  `INSERT INTO checkout_requests (id, idempotency_key_hash, request_fingerprint, status) VALUES ('cr_smoke_2', 'hash_smoke_1', 'fp_smoke_1', 'created');`
);
check('T3b duplicate idempotency key rejected (UNIQUE)', !r.ok && /UNIQUE/i.test(r.raw), 'rejected=' + !r.ok);

// --- T4: order status flip idempotency anchor ---
r = run(
  `INSERT INTO \`order\` (id, provider, email, currency, subtotal, total) VALUES ('order_smoke_1', 'stripe', 'smoke@test.local', 'usd', 10000, 13900);`
);
check('T4a test order insert', r.ok);

r = run(
  `UPDATE \`order\` SET status = 'paid', paid_at = unixepoch(), updated_at = unixepoch() WHERE id = 'order_smoke_1' AND status != 'paid'; SELECT changes() n;`
);
check('T4b first paid flip (1 change)', r.ok && val(r, 'n').n === 1, 'n=' + val(r, 'n').n);

r = run(
  `UPDATE \`order\` SET status = 'paid', paid_at = unixepoch(), updated_at = unixepoch() WHERE id = 'order_smoke_1' AND status != 'paid'; SELECT changes() n; SELECT status st, paid_at FROM \`order\` WHERE id='order_smoke_1';`
);
check(
  'T4c repeat flip is a no-op (0 changes, still paid)',
  r.ok && val(r, 'n').n === 0 && val(r, 'st').st === 'paid',
  'n=' + val(r, 'n').n + ' status=' + val(r, 'st').st
);

// --- T5: discount usage_limit guarded increment ---
r = run(
  `INSERT INTO discounts (id, code, kind, value, usage_limit, usage_count) VALUES ('disc_smoke_1', 'SMOKE10', 'percent', 10, 1, 0);`
);
check('T5a discount insert', r.ok);

r = run(
  `UPDATE discounts SET usage_count = usage_count + 1, updated_at = cast(unixepoch('subsecond')*1000 as integer) WHERE id = 'disc_smoke_1' AND (usage_limit IS NULL OR usage_count < usage_limit); SELECT changes() n;`
);
check('T5b first redemption counts (1 change)', r.ok && val(r, 'n').n === 1, 'n=' + val(r, 'n').n);

r = run(
  `UPDATE discounts SET usage_count = usage_count + 1 WHERE id = 'disc_smoke_1' AND (usage_limit IS NULL OR usage_count < usage_limit); SELECT changes() n; SELECT usage_count uc FROM discounts WHERE id='disc_smoke_1';`
);
check(
  'T5c over-limit redemption blocked (0 changes, count stays 1)',
  r.ok && val(r, 'n').n === 0 && val(r, 'uc').uc === 1,
  'n=' + val(r, 'n').n + ' usage_count=' + val(r, 'uc').uc
);

// --- T6: reservation consume with backorder clamp ---
r = run(
  `INSERT INTO inventory_reservations (id, order_id, slug, qty, status, expires_at) VALUES ('res_smoke_1', 'order_smoke_1', 'sup-explorer-11', 25, 'active', cast(unixepoch('subsecond')*1000 as integer) + ${MS_30MIN});`
);
check('T6a reservation insert', r.ok);

// simulate on_hand shorted to 20 while the reservation holds 25
run(`UPDATE inventory SET on_hand = 20 WHERE slug = 'sup-explorer-11';`);
r = run(
  `UPDATE inventory_reservations SET status = 'consumed' WHERE id = 'res_smoke_1' AND status = 'active'; SELECT changes() n;`
);
check('T6b consume flip (1 change)', r.ok && val(r, 'n').n === 1, 'n=' + val(r, 'n').n);

r = run(
  `UPDATE inventory SET on_hand = MAX(0, on_hand - 25), reserved = MAX(0, reserved - 25) WHERE slug = 'sup-explorer-11'; SELECT on_hand oh, reserved rv FROM inventory WHERE slug='sup-explorer-11';`
);
check(
  'T6c backorder consume clamps at 0/0 (CHECK on_hand>=0 holds)',
  r.ok && val(r, 'oh').oh === 0 && val(r, 'rv').rv === 0,
  'on_hand=' + val(r, 'oh').oh + ' reserved=' + val(r, 'rv').rv
);

// --- T7: admin adjust optimistic concurrency (admin-worker pattern) ---
// T6c leaves on_hand=0. A matching precondition applies; a stale one is a no-op.
r = run(
  `UPDATE inventory SET on_hand = 5, updated_at = cast(unixepoch('subsecond')*1000 as integer) WHERE slug = 'sup-explorer-11' AND on_hand = 0; SELECT changes() n;`
);
check('T7a adjust applies when on_hand matches (1 change)', r.ok && val(r, 'n').n === 1, 'n=' + val(r, 'n').n);

r = run(
  `UPDATE inventory SET on_hand = 40 WHERE slug = 'sup-explorer-11' AND on_hand = 0; SELECT changes() n; SELECT on_hand oh FROM inventory WHERE slug='sup-explorer-11';`
);
check(
  'T7b stale adjust blocked (0 changes, value stays 5)',
  r.ok && val(r, 'n').n === 0 && val(r, 'oh').oh === 5,
  'n=' + val(r, 'n').n + ' on_hand=' + val(r, 'oh').oh
);

// --- Cleanup ---
run(CLEANUP);
if (existsSync(TMP)) unlinkSync(TMP);

console.log('\n' + pass + ' passed, ' + fail + ' failed');
process.exit(fail === 0 ? 0 : 1);
