// Portal gate smoke test v2 — run against `wrangler pages dev dist`.
// Usage: node scripts/smoke-portal.mjs [baseUrl] [password]
//   baseUrl defaults to http://127.0.0.1:8788
// Expects .dev.vars with PORTAL_PASSWORD=test123 (or pass password as 2nd arg).

const BASE = process.argv[2] || 'http://127.0.0.1:8788';
const PASSWORD = process.argv[3] || 'test123';
const EMAIL = 'buyer@coastlinewatersports.example';

let passed = 0;
let failed = 0;

function check(name, ok, detail = '') {
  if (ok) {
    passed++;
    console.log(`PASS  ${name}`);
  } else {
    failed++;
    console.log(`FAIL  ${name}${detail ? ' — ' + detail : ''}`);
  }
}

// 1. Unauthenticated GET /portal/ -> 401 + login form (email + password)
{
  const res = await fetch(`${BASE}/portal/`, { redirect: 'manual' });
  const body = await res.text();
  check('unauth GET /portal/ returns 401', res.status === 401, `status ${res.status}`);
  check('login form has email + password fields', body.includes('/portal/login') && body.includes('name="email"') && body.includes('name="password"'));
}

// 2. Unauthenticated direct asset access -> 401 (must not leak)
{
  const res = await fetch(`${BASE}/portal/assets/README.txt`, { redirect: 'manual' });
  check('unauth direct asset access blocked (401)', res.status === 401, `status ${res.status}`);
}

// 3. Unauthenticated session.json -> 401 JSON
{
  const res = await fetch(`${BASE}/portal/session.json`, { redirect: 'manual' });
  const body = await res.text();
  check('unauth session.json blocked (401)', res.status === 401, `status ${res.status}`);
  check('unauth session.json is JSON error', body.includes('unauthorized'), body.slice(0, 60));
}

// 4. Unauthenticated gated manifest.csv -> 401
{
  const res = await fetch(`${BASE}/portal/manifest.csv`, { redirect: 'manual' });
  check('unauth gated manifest.csv blocked (401)', res.status === 401, `status ${res.status}`);
}

// 5. Unauthenticated gated legal page -> 401
{
  const res = await fetch(`${BASE}/portal/legal/terms-of-sale/`, { redirect: 'manual' });
  check('unauth gated legal page blocked (401)', res.status === 401, `status ${res.status}`);
}

// 6. Invalid email -> 401
{
  const res = await fetch(`${BASE}/portal/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `email=not-an-email&password=${encodeURIComponent(PASSWORD)}`,
    redirect: 'manual',
  });
  check('invalid email rejected (401)', res.status === 401, `status ${res.status}`);
}

// 7. Wrong password -> 401
{
  const res = await fetch(`${BASE}/portal/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `email=${encodeURIComponent(EMAIL)}&password=wrong-password`,
    redirect: 'manual',
  });
  check('wrong password rejected (401)', res.status === 401, `status ${res.status}`);
}

// 8. Correct email + password -> 303 + session cookie
let cookie = '';
{
  const res = await fetch(`${BASE}/portal/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `email=${encodeURIComponent(EMAIL)}&password=${encodeURIComponent(PASSWORD)}`,
    redirect: 'manual',
  });
  check('correct email + password accepted (303)', res.status === 303, `status ${res.status}`);
  const setCookie = res.headers.get('set-cookie') || '';
  const m = setCookie.match(/portal_session=([^;]+)/);
  check('session cookie set (HttpOnly)', Boolean(m) && /httponly/i.test(setCookie), setCookie.slice(0, 80));
  cookie = m ? `portal_session=${m[1]}` : '';
}

// 9. session.json with cookie -> {email, exp}
if (cookie) {
  const res = await fetch(`${BASE}/portal/session.json`, { headers: { Cookie: cookie }, redirect: 'manual' });
  const body = await res.text();
  let ok = res.status === 200;
  let emailOk = false;
  let expOk = false;
  try {
    const data = JSON.parse(body);
    emailOk = data.email === EMAIL.toLowerCase();
    expOk = typeof data.exp === 'number' && data.exp > Date.now();
  } catch {
    ok = false;
  }
  check('auth session.json returns 200 with email + exp', ok && emailOk && expOk, body.slice(0, 80));
}

// 10. Authenticated GET /portal/ -> dashboard (not login form)
if (cookie) {
  const res = await fetch(`${BASE}/portal/`, { headers: { Cookie: cookie }, redirect: 'manual' });
  const body = await res.text();
  check('auth GET /portal/ returns 200', res.status === 200, `status ${res.status}`);
  check('auth page is the dashboard (not login form)', body.includes('Licensed to') && body.includes('Full manifest') && !body.includes('/portal/login'));
  check('dashboard has stowage simulator + RFQ panel', body.includes('Stowage simulator') && body.includes('RFQ panel'));
  check('dashboard has NDA signing gate before manifest download', body.includes('nda-modal') && body.includes('Buyer agrees not to advertise these goods under original brand trademarks'));
}

// 11. Authenticated gated manifest.csv -> 200 with HS code + net weights
if (cookie) {
  const res = await fetch(`${BASE}/portal/manifest.csv`, { headers: { Cookie: cookie }, redirect: 'manual' });
  const body = await res.text();
  check('auth gated manifest.csv returns 200', res.status === 200, `status ${res.status}`);
  check('gated manifest has HS code + net weight columns', body.includes('9506.99.00') && body.includes('Carton NW (kg)'), body.slice(0, 120));
}

// 12. Authenticated gated legal page -> 200 with legal entity
if (cookie) {
  const res = await fetch(`${BASE}/portal/legal/terms-of-sale/`, { headers: { Cookie: cookie }, redirect: 'manual' });
  const body = await res.text();
  check('auth gated legal page returns 200', res.status === 200, `status ${res.status}`);
  check('gated legal page contains terms of sale content', body.includes('AS-IS, WHERE-IS') && body.includes('CIETAC'));
}

// 13. Authenticated direct asset access -> 200
if (cookie) {
  const res = await fetch(`${BASE}/portal/assets/README.txt`, { headers: { Cookie: cookie }, redirect: 'manual' });
  check('auth direct asset access allowed (200)', res.status === 200, `status ${res.status}`);
}

// 14. Logout clears session
if (cookie) {
  const res = await fetch(`${BASE}/portal/logout`, { headers: { Cookie: cookie }, redirect: 'manual' });
  const setCookie = res.headers.get('set-cookie') || '';
  check(
    'logout redirects and clears cookie',
    res.status === 303 && /portal_session=;/.test(setCookie) && /Max-Age=0/.test(setCookie),
    setCookie.slice(0, 80),
  );
}

// 15. Public pages unaffected
{
  const res = await fetch(`${BASE}/`, { redirect: 'manual' });
  check('public site still served (200)', res.status === 200, `status ${res.status}`);
}

// 16. Public manifest.csv -> 200 but WITHOUT gated columns (no legal entity leak)
{
  const res = await fetch(`${BASE}/manifest.csv`, { redirect: 'manual' });
  const body = await res.text();
  check('public manifest.csv served (200)', res.status === 200, `status ${res.status}`);
  check('public manifest has no HS/net-weight columns or legal entity', !body.includes('9506.99.00') && !body.includes('Carton NW') && !body.includes('DONGJILIAN'), body.slice(0, 120));
}

// 17. Sitemap excludes /portal/
{
  const res = await fetch(`${BASE}/sitemap-0.xml`, { redirect: 'manual' });
  const body = await res.text();
  check('sitemap served (200)', res.status === 200, `status ${res.status}`);
  check('sitemap excludes /portal/', !body.includes('/portal'), 'portal found in sitemap');
}

// 18. New public v2 pages exist
{
  for (const path of ['/wholesale-inflatable-sup/', '/sup-overstock/', '/sup-boards-for-rental/', '/sup-boards-for-schools/', '/small-batch-sup-orders/', '/shipping/', '/how-to-buy/', '/about/', '/contact/']) {
    const res = await fetch(`${BASE}${path}`, { redirect: 'manual' });
    check(`public page ${path} served (200)`, res.status === 200, `status ${res.status}`);
  }
}

// 19. Custom 404 page served for unknown routes
{
  const res = await fetch(`${BASE}/this-lot-no-longer-exists/`, { redirect: 'manual' });
  const body = await res.text();
  check('unknown route returns 404', res.status === 404, `status ${res.status}`);
  check('custom 404 page rendered', body.includes('This lot or page has moved on'), body.slice(0, 80));
}

console.log(`\n${passed} passed, ${failed} failed`);
process.exit(failed > 0 ? 1 : 0);
