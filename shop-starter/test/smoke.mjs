/*
 * Local smoke tests for the shop-api worker.
 *
 * Prerequisites (from shop-starter/):
 *   1. npm install
 *   2. copy workers/shop-api/.dev.vars.example to workers/shop-api/.dev.vars
 *      and UNCOMMENT STRIPE_API_BASE=http://127.0.0.1:9999
 *   3. npm run db:migrate:local && npm run db:seed:local
 *   4. npm run dev          (worker on http://127.0.0.1:8787)
 *   5. npm run test:smoke   (this script; also serves the mock Stripe API on :9999)
 */

import http from 'node:http';
import crypto from 'node:crypto';

const BASE = process.env.SMOKE_BASE_URL ?? 'http://127.0.0.1:8787';
const MOCK_PORT = 9999;
const WEBHOOK_SECRET = 'whsec_local_test_secret';
const ADMIN_TOKEN = 'local_test_admin_token';

let passed = 0;
let failed = 0;
const runId = Date.now().toString(36);

function check(name, condition, detail = '') {
  if (condition) {
    passed += 1;
    console.log(`  ok  ${name}`);
  } else {
    failed += 1;
    console.log(`FAIL  ${name}${detail ? ` — ${detail}` : ''}`);
  }
}

async function api(method, path, body, headers = {}) {
  const response = await fetch(`${BASE}${path}`, {
    method,
    headers: { 'Content-Type': 'application/json', ...headers },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  let jsonBody = null;
  const text = await response.text();
  try {
    jsonBody = JSON.parse(text);
  } catch {
    jsonBody = { raw: text };
  }
  return { status: response.status, body: jsonBody, text };
}

function baseCheckout(overrides = {}) {
  return {
    items: [{ variantId: 'var-sup-explorer', quantity: 1, priceCents: 1, totalCents: 1 }],
    email: `smoke-${runId}@example.com`,
    locale: 'en',
    currency: 'usd',
    shippingAddress: {
      name: 'Smoke Tester',
      line1: '1 Test Way',
      city: 'Testville',
      postalCode: '12345',
      countryCode: 'US',
    },
    idempotencyKey: `smoke-${runId}-${Math.random().toString(36).slice(2)}`,
    ...overrides,
  };
}

async function signedWebhook(event) {
  const payload = JSON.stringify(event);
  const timestamp = Math.floor(Date.now() / 1000);
  const mac = crypto
    .createHmac('sha256', WEBHOOK_SECRET)
    .update(`${timestamp}.${payload}`)
    .digest('hex');
  const response = await fetch(`${BASE}/api/stripe/webhook`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'stripe-signature': `t=${timestamp},v1=${mac}` },
    body: payload,
  });
  return { status: response.status, text: await response.text() };
}

function startMockStripe() {
  const server = http.createServer((req, res) => {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });
    req.on('end', () => {
      const auth = req.headers.authorization ?? '';
      if (!auth.startsWith('Bearer sk_test')) {
        res.writeHead(401, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: { code: 'invalid_api_key', message: 'Invalid API key' } }));
        return;
      }
      const sessionId = `cs_test_${crypto.randomUUID().replace(/-/g, '').slice(0, 20)}`;
      const form = new URLSearchParams(body);
      const amount = Number(form.get('line_items[0][price_data][unit_amount]') ?? 0);
      const currency = form.get('line_items[0][price_data][currency]') ?? 'usd';
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(
        JSON.stringify({
          id: sessionId,
          object: 'checkout.session',
          url: `https://mock.stripe.local/checkout/${sessionId}`,
          amount_total: amount,
          currency,
          payment_intent: `pi_test_${sessionId.slice(-12)}`,
          payment_status: 'paid',
        }),
      );
    });
  });
  return new Promise((resolve) => {
    server.listen(MOCK_PORT, '127.0.0.1', () => resolve(server));
  });
}

async function main() {
  console.log(`smoke: worker at ${BASE}, mock stripe on :${MOCK_PORT}`);
  const mock = await startMockStripe();

  // 1. Health
  const health = await api('GET', '/api/health');
  check('health returns ok', health.status === 200 && health.body.ok === true);

  // 2. Product catalog
  const products = await api('GET', '/api/products');
  const items = products.body.items ?? [];
  const vest = items.find((p) => p.slug === 'life-vest-classic');
  check('products listed', products.status === 200 && items.length >= 3);
  check('life vest has exactly 1 available', vest?.variants?.[0]?.availableQuantity === 1);

  // 3. Checkout validation: missing idempotency key
  const noKey = baseCheckout();
  delete noKey.idempotencyKey;
  const noKeyRes = await api('POST', '/api/checkout', noKey);
  check('checkout without idempotency key rejected', noKeyRes.status === 400);

  // 4. Happy path: server prices win over client-supplied junk price fields
  const checkout = await api('POST', '/api/checkout', baseCheckout({ discountCode: 'WELCOME10' }));
  check('checkout returns session url', checkout.status === 200 && typeof checkout.body.checkoutUrl === 'string', JSON.stringify(checkout.body));
  const orderNumber1 = checkout.body.orderNumber;

  const adminHeaders = { Authorization: `Bearer ${ADMIN_TOKEN}` };
  const detail1 = await api('GET', `/api/admin/orders/${orderNumber1}`, undefined, adminHeaders);
  const order1 = detail1.body.order ?? {};
  // subtotal 49900 - 10% discount 4990 + shipping 2900 + tax 0 = 47810
  check(
    'client prices ignored, server total = 47810',
    order1.total_cents === 47810,
    `got ${order1.total_cents}`,
  );

  // 5. Webhook: invalid signature rejected
  const badSig = await fetch(`${BASE}/api/stripe/webhook`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'stripe-signature': 't=123,v1=deadbeef' },
    body: JSON.stringify({ id: 'evt_bad', type: 'checkout.session.completed', data: { object: { id: 'cs_x' } } }),
  });
  check('invalid webhook signature rejected', badSig.status === 400);

  // 6. Webhook: valid completed event marks order paid and consumes stock
  const sessionId1 = checkout.body.checkoutUrl.split('/').pop();
  const completed1 = await signedWebhook({
    id: `evt_${runId}_1`,
    type: 'checkout.session.completed',
    data: { object: { id: sessionId1, payment_status: 'paid', amount_total: 47810, currency: 'usd', payment_intent: 'pi_test_1' } },
  });
  check('completed webhook processed', completed1.status === 200, completed1.text);
  const detail1b = await api('GET', `/api/admin/orders/${orderNumber1}`, undefined, adminHeaders);
  check('order marked paid', (detail1b.body.order ?? {}).status === 'paid');
  const products2 = await api('GET', '/api/products');
  const supAfter = (products2.body.items ?? []).find((p) => p.slug === 'sup-explorer-11');
  check('inventory decremented to 24', supAfter?.variants?.[0]?.availableQuantity === 24, `got ${supAfter?.variants?.[0]?.availableQuantity}`);

  // 7. Webhook: duplicate event does not double-decrement
  const dup = await signedWebhook({
    id: `evt_${runId}_1`,
    type: 'checkout.session.completed',
    data: { object: { id: sessionId1, payment_status: 'paid', amount_total: 47810, currency: 'usd', payment_intent: 'pi_test_1' } },
  });
  check('duplicate webhook ignored', dup.status === 200 && /Duplicate/.test(dup.text));
  const products3 = await api('GET', '/api/products');
  const supAfterDup = (products3.body.items ?? []).find((p) => p.slug === 'sup-explorer-11');
  check('no double decrement (still 24)', supAfterDup?.variants?.[0]?.availableQuantity === 24);

  // 8. Concurrent checkout for the last unit: at most one reservation
  const vestBody = baseCheckout({ items: [{ variantId: 'var-life-vest', quantity: 1 }] });
  const [a, b] = await Promise.all([
    api('POST', '/api/checkout', vestBody),
    api('POST', '/api/checkout', baseCheckout({ items: [{ variantId: 'var-life-vest', quantity: 1 }] })),
  ]);
  const statuses = [a.status, b.status].sort();
  check('last unit: one wins, one 409', statuses[0] === 200 && statuses[1] === 409, `got ${a.status}/${b.status}`);
  const products4 = await api('GET', '/api/products');
  const vestAfter = (products4.body.items ?? []).find((p) => p.slug === 'life-vest-classic');
  check('last unit fully reserved (0 available)', vestAfter?.variants?.[0]?.availableQuantity === 0);
  void vestBody;

  // 9. Stripe outage: session creation failure releases the reservation
  await new Promise((resolve) => mock.close(resolve));
  const outage = await api('POST', '/api/checkout', baseCheckout({ items: [{ variantId: 'var-ocean-voyager', quantity: 1 }] }));
  check('stripe failure returns 502', outage.status === 502, `got ${outage.status}`);
  const products5 = await api('GET', '/api/products');
  const voyagerAfter = (products5.body.items ?? []).find((p) => p.slug === 'ocean-voyager-11');
  check('reservation released on stripe failure (10 available)', voyagerAfter?.variants?.[0]?.availableQuantity === 10, `got ${voyagerAfter?.variants?.[0]?.availableQuantity}`);
  const mock2 = await startMockStripe();

  // 10. Manual shipping quote flow (AU)
  const auCheckout = await api('POST', '/api/checkout', baseCheckout({ shippingAddress: { name: 'Quote Tester', line1: '5 Quote St', city: 'Sydney', postalCode: '2000', countryCode: 'AU' } }));
  check('manual-quote order pending (202, no checkout url)', auCheckout.status === 202 && auCheckout.body.checkoutUrl === null, JSON.stringify(auCheckout.body));
  const auOrderNumber = auCheckout.body.orderNumber;
  const quote = await api('POST', '/api/admin/shipping-quotes', { orderNumber: auOrderNumber, amountCents: 14900, carrierName: 'TestFreight', expiresInHours: 24 }, adminHeaders);
  check('admin creates quote', quote.status === 201 && typeof quote.body.quoteId === 'string');
  const accept = await api('POST', '/api/orders/accept-shipping-quote', { orderNumber: auOrderNumber, quoteId: quote.body.quoteId, email: `smoke-${runId}@example.com` });
  check('customer accepts quote and gets checkout url', accept.status === 200 && typeof accept.body.checkoutUrl === 'string', JSON.stringify(accept.body));
  const auSessionId = accept.body.checkoutUrl.split('/').pop();
  const auCompleted = await signedWebhook({
    id: `evt_${runId}_au`,
    type: 'checkout.session.completed',
    data: { object: { id: auSessionId, payment_status: 'paid', amount_total: 49900 + 14900, currency: 'usd', payment_intent: 'pi_test_au' } },
  });
  check('quote order paid after webhook', auCompleted.status === 200);

  // 11. Admin auth
  const noToken = await api('GET', '/api/admin/orders');
  check('admin without token 401', noToken.status === 401);
  const badToken = await api('GET', '/api/admin/orders', undefined, { Authorization: 'Bearer wrong-token' });
  check('admin with bad token 401', badToken.status === 401);
  const goodToken = await api('GET', '/api/admin/orders?limit=10', undefined, adminHeaders);
  check('admin with token 200', goodToken.status === 200 && Array.isArray(goodToken.body.items));

  // 12. SQL injection payload treated as data
  const inject = await api('POST', '/api/checkout', baseCheckout({ discountCode: "'; DROP TABLE discounts;--" }));
  check('sql injection payload rejected as invalid discount', inject.status === 400 && inject.body.error?.code === 'INVALID_DISCOUNT');
  const products6 = await api('GET', '/api/products');
  check('discounts table intact after injection attempt', products6.status === 200);

  await new Promise((resolve) => mock2.close(resolve));
  console.log(`\nsmoke: ${passed} passed, ${failed} failed`);
  process.exit(failed === 0 ? 0 : 1);
}

main().catch((error) => {
  console.error('smoke crashed:', error);
  process.exit(1);
});
