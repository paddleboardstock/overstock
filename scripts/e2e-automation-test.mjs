// End-to-end test of the automation worker's daily DB cleanup
// (`workers/automation-worker/src/db-cleanup.ts`) against a real
// `wrangler dev` instance with its own LOCAL D1 (no remote access).
// Usage:
//   node scripts/e2e-automation-test.mjs
//
// Verifies:
//   C1  stale checkout_requests claims (>90d) purged, fresh kept
//   C2  stale stripe_events (>90d) purged, fresh kept
//   C3  terminal reservations (consumed/released/expired) >90d purged;
//       fresh terminal kept; ACTIVE reservations never purged regardless of age
//   C4  admin_audit_logs never purged (append-only audit trail)
//   C5  inventory_movements never purged (append-only stock ledger)
//   C6  cleanup endpoint returns per-table purge counts
import { spawn, execFileSync } from 'node:child_process';
import { writeFileSync, unlinkSync, existsSync, readdirSync, readFileSync } from 'node:fs';

const PORT = 8792;
const BASE = `http://127.0.0.1:${PORT}`;
const TOML = 'workers/automation-worker/wrangler.toml';
const TMP_SQL = '.tmp-auto-e2e.sql';
const DAY_MS = 24 * 3600 * 1000;
const STALE_MS = Date.now() - 91 * DAY_MS; // beyond the 90-day retention
const FRESH_MS = Date.now() - 1 * DAY_MS;

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

// ---------------------------------------------------------------------------
// Schema: apply all migrations to the automation worker's fresh local D1
// ---------------------------------------------------------------------------
console.log('--- schema (automation-worker local D1) ---');
const hasSchema = scalar(d1("SELECT COUNT(*) n FROM sqlite_master WHERE type='table' AND name='inventory';"), 'n');
if (hasSchema !== 1) {
  const files = readdirSync('migrations')
    .filter((f) => /^\d{4}_.*\.sql$/.test(f))
    .sort();
  for (const f of files) {
    const r = d1(`-- apply ${f}\n` + readSql('migrations/' + f));
    console.log((r.ok ? '  applied ' : '  FAILED  ') + f);
    if (!r.ok) {
      console.error(r.raw.slice(-1500));
      process.exit(1);
    }
  }
} else {
  console.log('  schema already present');
}

function readSql(p) {
  return readFileSync(p, 'utf8');
}

// ---------------------------------------------------------------------------
// Seed stale + fresh rows (server NOT running)
// ---------------------------------------------------------------------------
console.log('--- seed ---');
const CLEANUP_SEED = `DELETE FROM checkout_requests WHERE id LIKE 'cr_auto_%';
DELETE FROM stripe_events WHERE event_id LIKE 'evt_auto_%';
DELETE FROM inventory_reservations WHERE id LIKE 'res_auto_%';
DELETE FROM admin_audit_logs WHERE id LIKE 'log_auto_%';
DELETE FROM inventory_movements WHERE id LIKE 'mov_auto_%';
INSERT INTO checkout_requests (id, idempotency_key_hash, request_fingerprint, status, created_at, updated_at)
  VALUES ('cr_auto_stale', 'hash_auto_stale', 'fp_auto', 'completed', ${STALE_MS}, ${STALE_MS});
INSERT INTO checkout_requests (id, idempotency_key_hash, request_fingerprint, status, created_at, updated_at)
  VALUES ('cr_auto_fresh', 'hash_auto_fresh', 'fp_auto', 'completed', ${FRESH_MS}, ${FRESH_MS});
INSERT INTO stripe_events (event_id, event_type, object_id, processing_status, received_at)
  VALUES ('evt_auto_stale', 'checkout.session.completed', 'cs_auto_1', 'processed', ${STALE_MS});
INSERT INTO stripe_events (event_id, event_type, object_id, processing_status, received_at)
  VALUES ('evt_auto_fresh', 'checkout.session.completed', 'cs_auto_2', 'processed', ${FRESH_MS});
INSERT INTO inventory_reservations (id, order_id, slug, qty, status, expires_at, created_at)
  VALUES ('res_auto_stale_term', 'order_auto_1', 'sup-explorer-11', 1, 'consumed', ${FRESH_MS}, ${STALE_MS});
INSERT INTO inventory_reservations (id, order_id, slug, qty, status, expires_at, created_at)
  VALUES ('res_auto_fresh_term', 'order_auto_2', 'sup-explorer-11', 1, 'released', ${FRESH_MS}, ${FRESH_MS});
INSERT INTO inventory_reservations (id, order_id, slug, qty, status, expires_at, created_at)
  VALUES ('res_auto_old_active', 'order_auto_3', 'sup-explorer-11', 1, 'active', ${FRESH_MS}, ${STALE_MS});
INSERT INTO admin_audit_logs (id, admin_id, admin_email, action, created_at)
  VALUES ('log_auto_stale', 'admin_auto_1', 'admin@test.local', 'inventory.adjust', ${STALE_MS});
INSERT INTO inventory_movements (id, slug, on_hand_delta, reserved_delta, reason, order_id, created_at)
  VALUES ('mov_auto_stale', 'sup-explorer-11', 0, 1, 'reserve', 'order_auto_1', ${STALE_MS});`;

const seed = d1(CLEANUP_SEED);
if (!seed.ok) {
  console.error('seed failed:\n' + seed.raw.slice(-2000));
  process.exit(1);
}
console.log('seed ok (stale + fresh rows in place)');

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
      const res = await fetch(BASE + '/api/automation/', { signal: AbortSignal.timeout(2000) });
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
// Trigger the cleanup endpoint and validate the response
// ---------------------------------------------------------------------------
const res = await fetch(BASE + '/api/automation/cleanup-db', { signal: AbortSignal.timeout(30000) });
const counts = await res.json();
check('C6a cleanup endpoint responds 200 with counts JSON', res.status === 200, 'status=' + res.status);
check(
  'C6b shop purge counts reported (1/1/1)',
  counts.checkoutRequestsPurged === 1 && counts.stripeEventsPurged === 1 && counts.reservationsPurged === 1,
  JSON.stringify({
    checkoutRequestsPurged: counts.checkoutRequestsPurged,
    stripeEventsPurged: counts.stripeEventsPurged,
    reservationsPurged: counts.reservationsPurged,
  })
);

// ---------------------------------------------------------------------------
// Stop dev server
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
let q = d1(`SELECT COUNT(*) n FROM checkout_requests WHERE id = 'cr_auto_stale';`);
check('C1a stale checkout claim purged', scalar(q, 'n') === 0, 'n=' + scalar(q, 'n'));
q = d1(`SELECT COUNT(*) n FROM checkout_requests WHERE id = 'cr_auto_fresh';`);
check('C1b fresh checkout claim kept', scalar(q, 'n') === 1, 'n=' + scalar(q, 'n'));

q = d1(`SELECT COUNT(*) n FROM stripe_events WHERE event_id = 'evt_auto_stale';`);
check('C2a stale stripe event purged', scalar(q, 'n') === 0, 'n=' + scalar(q, 'n'));
q = d1(`SELECT COUNT(*) n FROM stripe_events WHERE event_id = 'evt_auto_fresh';`);
check('C2b fresh stripe event kept', scalar(q, 'n') === 1, 'n=' + scalar(q, 'n'));

q = d1(`SELECT COUNT(*) n FROM inventory_reservations WHERE id = 'res_auto_stale_term';`);
check('C3a stale terminal reservation purged', scalar(q, 'n') === 0, 'n=' + scalar(q, 'n'));
q = d1(`SELECT COUNT(*) n FROM inventory_reservations WHERE id = 'res_auto_fresh_term';`);
check('C3b fresh terminal reservation kept', scalar(q, 'n') === 1, 'n=' + scalar(q, 'n'));
q = d1(`SELECT COUNT(*) n FROM inventory_reservations WHERE id = 'res_auto_old_active';`);
check('C3c old ACTIVE reservation never purged by cleanup', scalar(q, 'n') === 1, 'n=' + scalar(q, 'n'));

q = d1(`SELECT COUNT(*) n FROM admin_audit_logs WHERE id = 'log_auto_stale';`);
check('C4 stale audit log kept (append-only)', scalar(q, 'n') === 1, 'n=' + scalar(q, 'n'));

q = d1(`SELECT COUNT(*) n FROM inventory_movements WHERE id = 'mov_auto_stale';`);
check('C5 stale inventory movement kept (append-only ledger)', scalar(q, 'n') === 1, 'n=' + scalar(q, 'n'));

// ---------------------------------------------------------------------------
// Cleanup seed data
// ---------------------------------------------------------------------------
d1(CLEANUP_SEED.split(';').slice(0, 5).join(';') + ';');
if (existsSync(TMP_SQL)) unlinkSync(TMP_SQL);

console.log('\n' + pass + ' passed, ' + fail + ' failed');
process.exit(fail === 0 ? 0 : 1);
