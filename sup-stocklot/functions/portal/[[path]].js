// =============================================================================
// Gated portal — Cloudflare Pages Function (catch-all for /portal and /portal/*)
//
// Everything under /portal/ requires a valid session cookie:
//   - GET  /portal/...          unauth -> 401 + login form (HTML)
//   - POST /portal/login        email + PORTAL_PASSWORD (constant-time),
//                               HMAC-signed HttpOnly cookie carrying
//                               {exp, email}, 303 -> /portal/
//   - GET  /portal/session.json valid cookie -> {email, exp} (no-store JSON)
//                               invalid      -> 401 JSON
//   - GET  /portal/logout       clear cookie, 303 -> /
//   - anything else             valid cookie -> next() (serve static build output)
//
// Required env vars (Cloudflare Pages dashboard -> Settings -> Variables):
//   PORTAL_PASSWORD        shared portal password (delivered to verified buyers)
//   PORTAL_SESSION_SECRET  long random string (e.g. `openssl rand -hex 32`)
//
// NOTE: the in-memory rate limiter is per-isolate best-effort. For production,
// add a Cloudflare WAF rate-limiting rule on /portal/login as well.
// =============================================================================

const COOKIE_NAME = 'portal_session';
const SESSION_TTL_MS = 12 * 60 * 60 * 1000; // 12 hours
const MAX_LOGIN_ATTEMPTS = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000; // 10 minutes

/** @type {Map<string, number[]>} */
const attemptsByIp = new Map();

// ------------------------- small crypto helpers -----------------------------

function b64url(bytes) {
  let bin = '';
  const arr = new Uint8Array(bytes);
  for (const b of arr) bin += String.fromCharCode(b);
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function timingSafeEqualStr(a, b) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

async function hmacSign(secret, message) {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(message));
  return b64url(sig);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) && email.length <= 254;
}

async function makeToken(secret, email) {
  const payload = b64url(
    new TextEncoder().encode(JSON.stringify({ exp: Date.now() + SESSION_TTL_MS, email })),
  );
  const sig = await hmacSign(secret, payload);
  return `${payload}.${sig}`;
}

/**
 * @returns {Promise<{exp: number, email: string} | null>}
 */
async function verifyToken(token, secret) {
  if (!token || token.indexOf('.') === -1) return null;
  const payload = token.slice(0, token.indexOf('.'));
  const sig = token.slice(token.indexOf('.') + 1);
  const expected = await hmacSign(secret, payload);
  if (!timingSafeEqualStr(sig, expected)) return null;
  try {
    const json = atob(payload.replace(/-/g, '+').replace(/_/g, '/'));
    const data = JSON.parse(json);
    if (typeof data.exp !== 'number' || data.exp <= Date.now()) return null;
    if (typeof data.email !== 'string' || data.email.length === 0) return null;
    return { exp: data.exp, email: data.email };
  } catch {
    return null;
  }
}

async function readSession(request, secret) {
  const cookieHeader = request.headers.get('Cookie') || '';
  const match = cookieHeader.match(new RegExp(`(?:^|;\\s*)${COOKIE_NAME}=([^;]+)`));
  const token = match ? match[1] : '';
  return secret ? verifyToken(token, secret) : null;
}

// ------------------------------ rate limiting -------------------------------

function rateLimited(ip) {
  const now = Date.now();
  const list = (attemptsByIp.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  if (list.length >= MAX_LOGIN_ATTEMPTS) {
    attemptsByIp.set(ip, list);
    return true;
  }
  list.push(now);
  attemptsByIp.set(ip, list);
  return false;
}

// ------------------------------ login page ----------------------------------

function loginPage(status, errorMessage) {
  const errorHtml = errorMessage ? `<p class="error">${errorMessage}</p>` : '';
  return new Response(
    `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow, noarchive">
<title>Inventory Portal Login</title>
<style>
  * { box-sizing: border-box; }
  body { margin: 0; min-height: 100vh; display: flex; align-items: center; justify-content: center;
         background: #020617; color: #e2e8f0; font-family: system-ui, -apple-system, "Segoe UI", sans-serif; padding: 1rem; }
  .card { width: 100%; max-width: 24rem; background: #0f172a; border: 1px solid #1e293b; border-radius: 1rem; padding: 2rem; }
  h1 { font-size: 1.25rem; margin: 0 0 .25rem; }
  p.sub { margin: 0 0 1.5rem; font-size: .875rem; color: #94a3b8; }
  label { display: block; font-size: .875rem; margin: 1rem 0 .375rem; color: #cbd5e1; }
  label:first-of-type { margin-top: 0; }
  input { width: 100%; padding: .625rem .75rem; border-radius: .5rem; border: 1px solid #475569;
          background: #020617; color: #e2e8f0; font-size: 1rem; }
  input:focus { outline: none; border-color: #2dd4bf; }
  button { width: 100%; margin-top: 1.5rem; padding: .625rem; border: 0; border-radius: .5rem;
           background: #2dd4bf; color: #020617; font-size: 1rem; font-weight: 600; cursor: pointer; }
  button:hover { background: #5eead4; }
  .error { margin: 0 0 1rem; font-size: .875rem; color: #f87171; }
  p.back { margin: 1.5rem 0 0; font-size: .8rem; text-align: center; }
  p.back a { color: #64748b; }
</style>
</head>
<body>
  <main class="card">
    <h1>Inventory Portal</h1>
    <p class="sub">Verified buyers only. The password is delivered by our sales desk after verification. Sign in with your business email so your session is watermarked.</p>
    ${errorHtml}
    <form method="POST" action="/portal/login">
      <label for="email">Business email</label>
      <input id="email" name="email" type="email" autocomplete="username" required autofocus>
      <label for="password">Portal password</label>
      <input id="password" name="password" type="password" autocomplete="current-password" required>
      <button type="submit">Enter portal</button>
    </form>
    <p class="back"><a href="/">Back to the stocklot site</a></p>
  </main>
</body>
</html>`,
    {
      status,
      headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' },
    },
  );
}

// ------------------------------ main handler --------------------------------

export async function onRequest(context) {
  const { request, env, next } = context;
  const url = new URL(request.url);
  const path = url.pathname;
  const ip = request.headers.get('CF-Connecting-IP') || 'local';

  // Always protect /portal/index.html too (Astro may emit it alongside /portal/).
  if (!path.startsWith('/portal')) {
    return next();
  }

  const password = env.PORTAL_PASSWORD;
  const secret = env.PORTAL_SESSION_SECRET;

  // --- login ---
  if (path === '/portal/login') {
    if (!password || !secret) {
      return new Response('Portal not configured (missing PORTAL_PASSWORD / PORTAL_SESSION_SECRET).', { status: 500 });
    }
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405, headers: { Allow: 'POST' } });
    }
    if (rateLimited(ip)) {
      return loginPage(429, 'Too many attempts. Try again in 10 minutes.');
    }
    let submitted = '';
    let email = '';
    try {
      const form = await request.formData();
      submitted = String(form.get('password') || '');
      email = String(form.get('email') || '').trim().toLowerCase();
    } catch {
      return loginPage(400, 'Invalid request.');
    }
    if (!isValidEmail(email)) {
      return loginPage(401, 'Enter a valid business email address.');
    }
    const submittedHash = await hmacSign(secret, submitted);
    const expectedHash = await hmacSign(secret, password);
    if (!timingSafeEqualStr(submittedHash, expectedHash)) {
      return loginPage(401, 'Wrong password. Check with our sales desk on WhatsApp.');
    }
    const token = await makeToken(secret, email);
    return new Response(null, {
      status: 303,
      headers: {
        Location: '/portal/',
        'Set-Cookie': `${COOKIE_NAME}=${token}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=${SESSION_TTL_MS / 1000}`,
        'Cache-Control': 'no-store',
      },
    });
  }

  // --- logout ---
  if (path === '/portal/logout') {
    return new Response(null, {
      status: 303,
      headers: {
        Location: '/',
        'Set-Cookie': `${COOKIE_NAME}=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0`,
        'Cache-Control': 'no-store',
      },
    });
  }

  // --- session endpoint (drives the dashboard watermark + countdown) ---
  if (path === '/portal/session.json') {
    const session = await readSession(request, secret);
    if (!session) {
      return new Response(JSON.stringify({ error: 'unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
      });
    }
    return new Response(JSON.stringify({ email: session.email, exp: session.exp }), {
      headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
    });
  }

  // --- everything else: require a valid session ---
  const session = await readSession(request, secret);
  if (!session) {
    if (request.method === 'GET' || request.method === 'HEAD') {
      return loginPage(401, '');
    }
    return new Response('Unauthorized', { status: 401 });
  }
  return next();
}
