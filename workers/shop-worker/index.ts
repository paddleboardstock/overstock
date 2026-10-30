import { eq } from 'drizzle-orm';
import { createDb, type DB } from '../shared/client';
import { order, orderItem, discountRedemption } from '../shared/schema';
import { CATALOG_BY_SLUG, shippingCostCents } from '../shared/catalog';
import {
  type CartLine,
  RESERVATION_TTL_MS,
  reserveStock,
  releaseExpiredReservations,
  markOrderPaidAndFulfill,
  failOrderAndRelease,
  mergeLines,
} from '../shared/inventory';

interface Env {
  DB: D1Database;
  STRIPE_SECRET_KEY?: string;
  STRIPE_WEBHOOK_SECRET?: string;
  PAYPAL_CLIENT_ID?: string;
  PAYPAL_CLIENT_SECRET?: string;
  PAYPAL_WEBHOOK_ID?: string;
  SHOP_BASE_URL?: string;
}

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Idempotency-Key',
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MAX_ITEMS = 20;
const RATE_LIMIT_MAX = 20;
const RATE_LIMIT_WINDOW_SECONDS = 3600;

/** A checkout_requests claim older than this is considered abandoned. */
const IDEMPOTENCY_CLAIM_STALE_MS = 120 * 1000;

/** Locales with localized cart/checkout pages (see src/pages/[lang]/cart.astro). */
const SUPPORTED_LANGS = new Set([
  'en', 'fr', 'de', 'es', 'pt', 'ar', 'it', 'ru', 'pl', 'nl', 'sv', 'no', 'el', 'fi', 'da',
  'cs', 'th', 'hr', 'tl', 'hu', 'ro', 'sk', 'bg', 'sl', 'sr', 'ja', 'ko', 'tr', 'id', 'he',
  'ms', 'lt', 'lv', 'et',
]);

const SITE_BASE = (env: Env): string => (env.SHOP_BASE_URL || 'https://paddleboardoverstock.com').replace(/\/+$/, '');
const PAYPAL_API_BASE = 'https://api-m.paypal.com';
const STRIPE_API_BASE = 'https://api.stripe.com';

function json(body: unknown, status = 200, extraHeaders: Record<string, string> = {}): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', ...CORS_HEADERS, ...extraHeaders },
  });
}

function sanitize(value: unknown, maxLen = 500): string {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, maxLen);
}

async function sha256Hex(input: string): Promise<string> {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(input));
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

/** D1-backed per-IP rate limit for checkout attempts (20/hour). */
async function isRateLimited(db: D1Database, ip: string): Promise<boolean> {
  const windowStart = Math.floor(Date.now() / 1000 / RATE_LIMIT_WINDOW_SECONDS);
  const key = `shop-checkout:${ip}:${windowStart}`;
  try {
    await db
      .prepare(
        `INSERT INTO rate_limit (key, count) VALUES (?1, 1)
        ON CONFLICT(key) DO UPDATE SET count = count + 1, updated_at = unixepoch()`
      )
      .bind(key)
      .run();
    const row = (await db.prepare('SELECT count FROM rate_limit WHERE key = ?1').bind(key).first()) as {
      count: number;
    } | null;
    return (row?.count ?? 0) > RATE_LIMIT_MAX;
  } catch {
    return false; // fail open
  }
}


/**
 * Recompute the order server-side from the generated catalog — client prices
 * are never trusted. Returns null when any line is invalid.
 */
function resolveLines(rawItems: unknown): CartLine[] | null {
  if (!Array.isArray(rawItems) || rawItems.length === 0 || rawItems.length > MAX_ITEMS) return null;
  const lines: CartLine[] = [];
  for (const raw of rawItems) {
    if (!raw || typeof raw !== 'object') return null;
    const record = raw as Record<string, unknown>;
    const slug = sanitize(record.slug, 200);
    const qty = Number(record.qty);
    if (!slug || !Number.isInteger(qty) || qty < 1 || qty > 99) return null;
    const entry = CATALOG_BY_SLUG[slug];
    if (!entry || !entry.inStock) return null;
    const lineTotal = entry.priceCents * qty;
    lines.push({
      slug: entry.slug,
      title: entry.title,
      unitPriceCents: entry.priceCents,
      qty,
      lineTotalCents: lineTotal,
    });
  }
  return lines;
}

function formatCents(cents: number): string {
  return (cents / 100).toFixed(2);
}

// ---------------------------------------------------------------------------
// Discount codes (server-side validation only)
// ---------------------------------------------------------------------------

interface AppliedDiscount {
  id: string;
  code: string;
  cents: number;
}

async function validateDiscount(
  d1: D1Database,
  rawCode: unknown,
  subtotalCents: number
): Promise<{ discount: AppliedDiscount | null; error: string | null }> {
  const code = sanitize(rawCode, 64).toUpperCase();
  if (!code) return { discount: null, error: null };
  const row = (await d1
    .prepare(
      `SELECT id, code, kind, value, active, starts_at, expires_at, usage_limit, usage_count
       FROM discounts WHERE code = ?1`
    )
    .bind(code)
    .first()) as {
    id: string;
    code: string;
    kind: string;
    value: number;
    active: number;
    starts_at: number | null;
    expires_at: number | null;
    usage_limit: number | null;
    usage_count: number;
  } | null;
  if (!row || row.active !== 1) return { discount: null, error: 'Invalid or expired discount code.' };
  const now = Date.now();
  if (row.starts_at !== null && row.starts_at > now) {
    return { discount: null, error: 'This discount code is not active yet.' };
  }
  if (row.expires_at !== null && row.expires_at < now) {
    return { discount: null, error: 'Invalid or expired discount code.' };
  }
  if (row.usage_limit !== null && row.usage_count >= row.usage_limit) {
    return { discount: null, error: 'This discount code has reached its usage limit.' };
  }
  const cents = row.kind === 'percent' ? Math.floor((subtotalCents * row.value) / 100) : Math.min(row.value, subtotalCents);
  if (cents <= 0) return { discount: null, error: 'Invalid or expired discount code.' };
  return { discount: { id: row.id, code: row.code.toUpperCase(), cents }, error: null };
}

/**
 * Stripe Checkout cannot take negative line items, so the discount is folded
 * into the per-unit prices (floor). The charged amounts are then exact on
 * both providers; the customer may pay a few cents less than the nominal
 * discount, never more.
 */
function applyDiscountToUnits(
  lines: CartLine[],
  discount: AppliedDiscount | null
): { lines: CartLine[]; discountCents: number } {
  if (!discount) return { lines, discountCents: 0 };
  const nominalSubtotal = lines.reduce((s, l) => s + l.lineTotalCents, 0);
  const target = Math.max(0, nominalSubtotal - discount.cents);
  const ratio = nominalSubtotal > 0 ? target / nominalSubtotal : 0;
  const adjusted: CartLine[] = lines.map((l) => {
    const unit = Math.max(0, Math.floor(l.unitPriceCents * ratio));
    return { ...l, unitPriceCents: unit, lineTotalCents: unit * l.qty };
  });
  const adjustedSubtotal = adjusted.reduce((s, l) => s + l.lineTotalCents, 0);
  return { lines: adjusted, discountCents: Math.max(0, nominalSubtotal - adjustedSubtotal) };
}

// ---------------------------------------------------------------------------
// Stripe REST helpers (no SDK — Workers-safe form-encoded calls)
// ---------------------------------------------------------------------------

async function stripeCreateSession(
  env: Env,
  params: URLSearchParams
): Promise<{ id: string; url: string } | null> {
  if (!env.STRIPE_SECRET_KEY) return null;
  const res = await fetch(`${STRIPE_API_BASE}/v1/checkout/sessions`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.STRIPE_SECRET_KEY}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params.toString(),
  });
  if (!res.ok) {
    console.error('Stripe session error:', (await res.text()).slice(0, 500));
    return null;
  }
  const data = (await res.json()) as { id?: string; url?: string };
  if (!data.id || !data.url) return null;
  return { id: data.id, url: data.url };
}

async function stripeGetSession(
  env: Env,
  sessionId: string
): Promise<{ paymentStatus?: string; amountTotal?: number; currency?: string } | null> {
  if (!env.STRIPE_SECRET_KEY) return null;
  try {
    const res = await fetch(`${STRIPE_API_BASE}/v1/checkout/sessions/${encodeURIComponent(sessionId)}`, {
      headers: { Authorization: `Bearer ${env.STRIPE_SECRET_KEY}` },
    });
    if (!res.ok) return null;
    return (await res.json()) as { paymentStatus?: string; amountTotal?: number; currency?: string };
  } catch {
    return null;
  }
}

/** Constant-time hex digest comparison. */
function timingSafeEqualHex(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

async function verifyStripeSignature(payload: string, header: string, secret: string): Promise<boolean> {
  const parts = header.split(',').map((p) => p.trim());
  let timestamp = '';
  const signatures: string[] = [];
  for (const part of parts) {
    if (part.startsWith('t=')) timestamp = part.slice(2);
    else if (part.startsWith('v1=')) signatures.push(part.slice(3));
  }
  if (!timestamp || signatures.length === 0) return false;
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const mac = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(`${timestamp}.${payload}`));
  const hex = Array.from(new Uint8Array(mac))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
  // Reject webhooks older than 10 minutes.
  const age = Math.abs(Date.now() / 1000 - Number(timestamp));
  if (!Number.isFinite(age) || age > 600) return false;
  return signatures.some((sig) => timingSafeEqualHex(sig, hex));
}

// ---------------------------------------------------------------------------
// PayPal REST helpers
// ---------------------------------------------------------------------------

async function paypalToken(env: Env): Promise<string | null> {
  if (!env.PAYPAL_CLIENT_ID || !env.PAYPAL_CLIENT_SECRET) return null;
  const basic = btoa(`${env.PAYPAL_CLIENT_ID}:${env.PAYPAL_CLIENT_SECRET}`);
  try {
    const res = await fetch(`${PAYPAL_API_BASE}/v1/oauth2/token`, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials',
    });
    if (!res.ok) return null;
    const data = (await res.json()) as { access_token?: string };
    return data.access_token || null;
  } catch {
    return null;
  }
}

async function paypalCreateOrder(
  env: Env,
  orderId: string,
  totalCents: number,
  returnUrl: string,
  cancelUrl: string
): Promise<{ id: string; approveUrl: string } | null> {
  const token = await paypalToken(env);
  if (!token) return null;
  try {
    const res = await fetch(`${PAYPAL_API_BASE}/v2/checkout/orders`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        intent: 'CAPTURE',
        purchase_units: [
          {
            reference_id: orderId,
            custom_id: orderId,
            amount: { currency_code: 'USD', value: formatCents(totalCents) },
          },
        ],
        application_context: {
          brand_name: 'Paddle Board Overstock',
          user_action: 'PAY_NOW',
          return_url: returnUrl,
          cancel_url: cancelUrl,
        },
      }),
    });
    if (!res.ok) {
      console.error('PayPal create-order error:', (await res.text()).slice(0, 500));
      return null;
    }
    const data = (await res.json()) as { id?: string; links?: Array<{ rel: string; href: string }> };
    const approve = data.links?.find((l) => l.rel === 'approve');
    if (!data.id || !approve) return null;
    return { id: data.id, approveUrl: approve.href };
  } catch {
    return null;
  }
}

async function paypalGetOrder(env: Env, paypalOrderId: string): Promise<{ status?: string } | null> {
  const token = await paypalToken(env);
  if (!token) return null;
  try {
    const res = await fetch(`${PAYPAL_API_BASE}/v2/checkout/orders/${encodeURIComponent(paypalOrderId)}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) return null;
    return (await res.json()) as { status?: string };
  } catch {
    return null;
  }
}

async function paypalCaptureOrder(env: Env, paypalOrderId: string): Promise<{ status?: string } | null> {
  const token = await paypalToken(env);
  if (!token) return null;
  try {
    const res = await fetch(`${PAYPAL_API_BASE}/v2/checkout/orders/${encodeURIComponent(paypalOrderId)}/capture`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: '{}',
    });
    if (!res.ok && res.status !== 422) {
      console.error('PayPal capture error:', (await res.text()).slice(0, 500));
      return null;
    }
    return (await res.json()) as { status?: string };
  } catch {
    return null;
  }
}

// ---------------------------------------------------------------------------
// Order persistence
// ---------------------------------------------------------------------------

interface CheckoutInput {
  lines: CartLine[];
  email: string;
  shipping: {
    name: string;
    address: string;
    city: string;
    postal: string;
    country: string;
  };
}

interface PersistedOrder {
  orderId: string;
  subtotalCents: number;
  shipping: number;
  discountCents: number;
  totalCents: number;
}

/**
 * Persist an order whose line prices already carry the folded-in discount
 * (see applyDiscountToUnits). total = subtotal + shipping; discount_cents
 * records the effective discount for bookkeeping.
 */
async function persistOrder(
  db: DB,
  input: CheckoutInput,
  discount: AppliedDiscount | null,
  ip: string,
  userAgent: string
): Promise<PersistedOrder> {
  const subtotalCents = input.lines.reduce((sum, l) => sum + l.lineTotalCents, 0);
  const shipping = shippingCostCents(subtotalCents);
  const discountCents = discount ? Math.max(0, discount.cents) : 0;
  const totalCents = subtotalCents + shipping;
  const orderId = crypto.randomUUID();

  await db.insert(order).values({
    id: orderId,
    provider: 'pending', // set once the payment method creates its session
    providerRef: null,
    email: input.email.toLowerCase(),
    status: 'pending',
    currency: 'USD',
    subtotal: subtotalCents,
    shippingCost: shipping,
    total: totalCents,
    discountCents,
    discountCode: discount ? discount.code : '',
    shippingName: input.shipping.name,
    shippingAddress: input.shipping.address,
    shippingCity: input.shipping.city,
    shippingPostal: input.shipping.postal,
    shippingCountry: input.shipping.country,
    ip,
    userAgent,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  for (const line of input.lines) {
    await db.insert(orderItem).values({
      id: crypto.randomUUID(),
      orderId,
      slug: line.slug,
      title: line.title,
      unitPrice: line.unitPriceCents,
      qty: line.qty,
      lineTotal: line.lineTotalCents,
    });
  }

  if (discount) {
    await db.insert(discountRedemption).values({
      id: crypto.randomUUID(),
      discountId: discount.id,
      orderId,
      code: discount.code,
      amountCents: discountCents,
    });
  }

  return { orderId, subtotalCents, shipping, discountCents, totalCents };
}

// ---------------------------------------------------------------------------
// Worker entry
// ---------------------------------------------------------------------------

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    const url = new URL(request.url);
    const path = url.pathname;
    const db = createDb(env.DB);
    const d1 = env.DB;
    const ip = request.headers.get('cf-connecting-ip') || '';
    const userAgent = request.headers.get('user-agent') || '';

    try {
      // --- POST /api/shop/checkout ---------------------------------------
      if (path === '/api/shop/checkout' && request.method === 'POST') {
        if (await isRateLimited(env.DB, ip || 'unknown')) {
          return json({ error: 'Too many checkout attempts. Please try again later.' }, 429);
        }

        let body: Record<string, unknown>;
        try {
          body = (await request.json()) as Record<string, unknown>;
        } catch {
          return json({ error: 'Invalid request body' }, 400);
        }

        const email = sanitize(body.email, 200);
        if (!EMAIL_RE.test(email)) return json({ error: 'A valid email address is required.' }, 400);

        const method = body.method === 'paypal' ? 'paypal' : 'stripe';
        const lines = resolveLines(body.items);
        if (!lines || lines.length === 0) {
          return json({ error: 'Your cart contains items that are no longer available.' }, 400);
        }

        const rawShipping = (body.shipping ?? {}) as Record<string, unknown>;
        const shipping = {
          name: sanitize(rawShipping.name, 200),
          address: sanitize(rawShipping.address, 400),
          city: sanitize(rawShipping.city, 200),
          postal: sanitize(rawShipping.postal, 40),
          country: sanitize(rawShipping.country, 100),
        };
        if (!shipping.name || !shipping.address || !shipping.city || !shipping.postal || !shipping.country) {
          return json({ error: 'A complete shipping address is required.' }, 400);
        }

        const langRaw = sanitize(body.lang, 8);
        const lang = SUPPORTED_LANGS.has(langRaw) ? langRaw : 'en';
        const discountCodeRaw = sanitize(body.discountCode, 64);

        // Server-side discount validation — client prices never trusted.
        const subtotalForDiscount = lines.reduce((sum, l) => sum + l.lineTotalCents, 0);
        const { discount, error: discountError } = await validateDiscount(d1, discountCodeRaw, subtotalForDiscount);
        if (discountError) return json({ error: discountError }, 400);

        // Idempotency: an Idempotency-Key replay with the same payload
        // returns the stored response instead of creating a second order.
        const fingerprint = await sha256Hex(
          JSON.stringify({
            email,
            method,
            lang,
            discountCode: discount ? discount.code : '',
            items: mergeLines(lines),
            shipping,
          })
        );
        const idemKeyRaw = sanitize(request.headers.get('idempotency-key') || body.idempotencyKey, 200);
        let idemRowId = '';
        if (idemKeyRaw) {
          const idemHash = await sha256Hex(`${idemKeyRaw}:${ip}`);
          const existing = (await d1
            .prepare(
              `SELECT id, request_fingerprint, response_json, status, created_at
               FROM checkout_requests WHERE idempotency_key_hash = ?1`
            )
            .bind(idemHash)
            .first()) as {
            id: string;
            request_fingerprint: string;
            response_json: string | null;
            status: string;
            created_at: number;
          } | null;
          if (existing) {
            if (existing.request_fingerprint !== fingerprint) {
              return json({ error: 'This checkout request was already used with a different cart.' }, 409);
            }
            if (existing.response_json) {
              return new Response(existing.response_json, {
                status: 200,
                headers: { 'Content-Type': 'application/json; charset=utf-8', ...CORS_HEADERS },
              });
            }
            // Stale in-flight claim (e.g. the worker died mid-checkout) —
            // reclaim it so the customer can retry.
            if (existing.status !== 'created' || existing.created_at < Date.now() - IDEMPOTENCY_CLAIM_STALE_MS) {
              await d1.prepare(`DELETE FROM checkout_requests WHERE id = ?1`).bind(existing.id).run();
            } else {
              return json({ error: 'A checkout with this request is already in progress.' }, 409);
            }
          }
          idemRowId = crypto.randomUUID();
          try {
            await d1
              .prepare(
                `INSERT INTO checkout_requests (id, idempotency_key_hash, request_fingerprint)
                 VALUES (?1, ?2, ?3)`
              )
              .bind(idemRowId, idemHash, fingerprint)
              .run();
          } catch {
            return json({ error: 'A checkout with this request is already in progress.' }, 409);
          }
        }
        const dropIdemClaim = async (): Promise<void> => {
          if (idemRowId) await d1.prepare(`DELETE FROM checkout_requests WHERE id = ?1`).bind(idemRowId).run();
        };

        // Lazy-release reservations of abandoned checkouts before reserving.
        await releaseExpiredReservations(d1);

        // Fold the discount into the unit prices so provider charge amounts
        // are exact (Stripe has no negative line items).
        const { lines: chargeLines, discountCents: effectiveDiscountCents } = applyDiscountToUnits(lines, discount);
        const effectiveDiscount: AppliedDiscount | null = discount
          ? { ...discount, cents: effectiveDiscountCents }
          : null;
        const persisted = await persistOrder(
          db,
          { lines: chargeLines, email, shipping },
          effectiveDiscount,
          ip,
          userAgent
        );

        // Conditionally reserve stock; fail the whole order when short.
        const shortSlug = await reserveStock(d1, persisted.orderId, lines, Date.now() + RESERVATION_TTL_MS);
        if (shortSlug !== null) {
          await failOrderAndRelease(d1, { orderId: persisted.orderId }, 'failed');
          await dropIdemClaim();
          const title = CATALOG_BY_SLUG[shortSlug]?.title || shortSlug;
          return json({ error: `Insufficient stock for "${title}". Please reduce the quantity and try again.` }, 409);
        }

        const prefix = lang === 'en' ? '' : `/${lang}`;
        const base = SITE_BASE(env);
        const successUrl = `${base}${prefix}/checkout/success`;
        const cancelUrl = `${base}${prefix}/cart`;

        if (method === 'stripe') {
          if (!env.STRIPE_SECRET_KEY) {
            await failOrderAndRelease(d1, { orderId: persisted.orderId }, 'failed');
            await dropIdemClaim();
            return json({ error: 'Card payments are not configured yet. Please try PayPal.' }, 503);
          }
          const params = new URLSearchParams();
          params.set('mode', 'payment');
          params.set('success_url', `${successUrl}?session_id={CHECKOUT_SESSION_ID}`);
          params.set('cancel_url', cancelUrl);
          params.set('customer_email', email);
          params.set('metadata[order_id]', persisted.orderId);
          params.set('payment_intent_data[metadata][order_id]', persisted.orderId);
          chargeLines.forEach((line, index) => {
            params.set(`line_items[${index}][price_data][currency]`, 'usd');
            params.set(`line_items[${index}][price_data][unit_amount]`, String(line.unitPriceCents));
            params.set(`line_items[${index}][price_data][product_data][name]`, line.title);
            params.set(`line_items[${index}][quantity]`, String(line.qty));
          });
          if (persisted.shipping > 0) {
            const i = chargeLines.length;
            params.set(`line_items[${i}][price_data][currency]`, 'usd');
            params.set(`line_items[${i}][price_data][unit_amount]`, String(persisted.shipping));
            params.set(`line_items[${i}][price_data][product_data][name]`, 'Worldwide shipping');
            params.set(`line_items[${i}][quantity]`, '1');
          }
          const session = await stripeCreateSession(env, params);
          if (!session) {
            await failOrderAndRelease(d1, { orderId: persisted.orderId }, 'failed');
            await dropIdemClaim();
            return json({ error: 'Could not start card payment. Please try again.' }, 502);
          }
          await db
            .update(order)
            .set({ provider: 'stripe', providerRef: session.id, updatedAt: new Date() })
            .where(eq(order.id, persisted.orderId));
          if (idemRowId) {
            const responseBody = JSON.stringify({ url: session.url });
            await d1
              .prepare(
                `UPDATE checkout_requests SET status = 'completed', order_id = ?2, response_json = ?3, updated_at = ?4
                 WHERE id = ?1`
              )
              .bind(idemRowId, persisted.orderId, responseBody, Date.now())
              .run();
          }
          return json({ url: session.url });
        }

        // PayPal
        if (!env.PAYPAL_CLIENT_ID || !env.PAYPAL_CLIENT_SECRET) {
          await failOrderAndRelease(d1, { orderId: persisted.orderId }, 'failed');
          await dropIdemClaim();
          return json({ error: 'PayPal payments are not configured yet. Please pay by card.' }, 503);
        }
        const ppOrder = await paypalCreateOrder(
          env,
          persisted.orderId,
          persisted.totalCents,
          `${successUrl}?order_id=${persisted.orderId}&paypal=1`,
          cancelUrl
        );
        if (!ppOrder) {
          await failOrderAndRelease(d1, { orderId: persisted.orderId }, 'failed');
          await dropIdemClaim();
          return json({ error: 'Could not start PayPal payment. Please try again.' }, 502);
        }
        await db
          .update(order)
          .set({ provider: 'paypal', providerRef: ppOrder.id, updatedAt: new Date() })
          .where(eq(order.id, persisted.orderId));
        if (idemRowId) {
          const responseBody = JSON.stringify({ url: ppOrder.approveUrl });
          await d1
            .prepare(
              `UPDATE checkout_requests SET status = 'completed', order_id = ?2, response_json = ?3, updated_at = ?4
               WHERE id = ?1`
            )
            .bind(idemRowId, persisted.orderId, responseBody, Date.now())
            .run();
        }
        return json({ url: ppOrder.approveUrl });
      }

      // --- GET /api/shop/verify?session_id=... ---------------------------
      if (path === '/api/shop/verify' && request.method === 'GET') {
        const sessionId = sanitize(url.searchParams.get('session_id'), 300);
        if (!sessionId) return json({ error: 'Missing session_id' }, 400);
        const session = await stripeGetSession(env, sessionId);
        if (!session) return json({ error: 'Session not found' }, 404);
        const rows = await db
          .select({ id: order.id, total: order.total, currency: order.currency })
          .from(order)
          .where(eq(order.providerRef, sessionId))
          .limit(1);
        const ord = rows[0];
        if (!ord) return json({ error: 'Session not found' }, 404);
        const amountOk =
          session.amountTotal === ord.total &&
          sanitize(session.currency, 10).toUpperCase() === ord.currency.toUpperCase();
        if (session.paymentStatus === 'paid' && amountOk) {
          await markOrderPaidAndFulfill(d1, sessionId);
        } else if (session.paymentStatus === 'paid') {
          console.error('verify amount mismatch', sessionId, session.amountTotal, ord.total);
        }
        return json({ status: session.paymentStatus === 'paid' && amountOk ? 'paid' : 'pending', ref: ord.id });
      }

      // --- POST /api/shop/paypal/capture { orderId } ----------------------
      if (path === '/api/shop/paypal/capture' && request.method === 'POST') {
        let body: { orderId?: string };
        try {
          body = (await request.json()) as { orderId?: string };
        } catch {
          return json({ error: 'Invalid request body' }, 400);
        }
        const orderId = sanitize(body.orderId, 100);
        if (!orderId) return json({ error: 'Missing orderId' }, 400);
        // orderId is OUR order id — resolve the PayPal order id from D1.
        const rows = await db
          .select({ providerRef: order.providerRef })
          .from(order)
          .where(eq(order.id, orderId))
          .limit(1);
        const paypalOrderId = rows[0]?.providerRef;
        if (!paypalOrderId) return json({ error: 'Order not found' }, 404);
        const existing = await paypalGetOrder(env, paypalOrderId);
        let status = existing?.status;
        if (status === 'APPROVED') {
          const captured = await paypalCaptureOrder(env, paypalOrderId);
          status = captured?.status || status;
        }
        if (status === 'COMPLETED') {
          await markOrderPaidAndFulfill(d1, paypalOrderId);
          return json({ status: 'paid', ref: orderId });
        }
        return json({ status: 'pending', ref: orderId });
      }

      // --- POST /api/shop/webhook/stripe ---------------------------------
      if (path === '/api/shop/webhook/stripe' && request.method === 'POST') {
        const payload = await request.text();
        const signature = request.headers.get('stripe-signature') || '';
        if (!env.STRIPE_WEBHOOK_SECRET) return json({ error: 'Webhook not configured' }, 503);
        if (!(await verifyStripeSignature(payload, signature, env.STRIPE_WEBHOOK_SECRET))) {
          return json({ error: 'Invalid signature' }, 400);
        }
        const event = JSON.parse(payload) as {
          id?: string;
          type?: string;
          data?: {
            object?: {
              id?: string;
              payment_status?: string;
              amount_total?: number;
              currency?: string;
            };
          };
        };
        const eventId = sanitize(event.id, 250);
        if (!eventId) return json({ error: 'Missing event id' }, 400);
        const eventType = sanitize(event.type, 120);
        const objectId = sanitize(event.data?.object?.id, 250);

        // Claim the event id (PRIMARY KEY) — duplicate deliveries return
        // immediately, guaranteeing exactly-once processing.
        try {
          await d1
            .prepare(`INSERT INTO stripe_events (event_id, event_type, object_id) VALUES (?1, ?2, ?3)`)
            .bind(eventId, eventType, objectId)
            .run();
        } catch {
          return json({ received: true });
        }

        switch (eventType) {
          case 'checkout.session.completed':
          case 'checkout.session.async_payment_succeeded': {
            if (!objectId) break;
            const ord = (await d1
              .prepare(`SELECT id, total, currency FROM "order" WHERE provider_ref = ?1`)
              .bind(objectId)
              .first()) as { id: string; total: number; currency: string } | null;
            if (!ord) {
              await d1
                .prepare(
                  `UPDATE stripe_events SET processing_status = 'error', error_code = 'order_not_found', processed_at = ?2
                   WHERE event_id = ?1`
                )
                .bind(eventId, Date.now())
                .run();
              break;
            }
            // Verify the paid amount against our own order record before
            // fulfilling — the webhook is the payment truth, but it must
            // match what we expect.
            const amountTotal = Number(event.data?.object?.amount_total);
            const currency = sanitize(event.data?.object?.currency, 10).toUpperCase();
            if (
              !Number.isFinite(amountTotal) ||
              amountTotal !== ord.total ||
              currency !== ord.currency.toUpperCase()
            ) {
              await d1
                .prepare(
                  `UPDATE stripe_events SET processing_status = 'error', error_code = 'amount_mismatch', processed_at = ?2
                   WHERE event_id = ?1`
                )
                .bind(eventId, Date.now())
                .run();
              break;
            }
            if (sanitize(event.data?.object?.payment_status, 40) === 'paid') {
              await markOrderPaidAndFulfill(d1, objectId);
            }
            break;
          }
          case 'checkout.session.expired': {
            if (objectId) await failOrderAndRelease(d1, { providerRef: objectId }, 'cancelled');
            break;
          }
          case 'checkout.session.async_payment_failed': {
            if (objectId) await failOrderAndRelease(d1, { providerRef: objectId }, 'failed');
            break;
          }
          default:
            break;
        }

        await d1
          .prepare(
            `UPDATE stripe_events SET processing_status = 'processed', processed_at = ?2
             WHERE event_id = ?1 AND processing_status = 'received'`
          )
          .bind(eventId, Date.now())
          .run();
        return json({ received: true });
      }

      // --- POST /api/shop/webhook/paypal ---------------------------------
      if (path === '/api/shop/webhook/paypal' && request.method === 'POST') {
        const payload = await request.text();
        const event = JSON.parse(payload) as {
          event_type?: string;
          resource?: { id?: string; supplementary_data?: { related_ids?: { order_id?: string } } };
        };
        // Full webhook verification requires PAYPAL_WEBHOOK_ID — verify via
        // the verify-webhook-signature API when configured; otherwise ignore.
        if (env.PAYPAL_WEBHOOK_ID && env.PAYPAL_CLIENT_ID && env.PAYPAL_CLIENT_SECRET) {
          const token = await paypalToken(env);
          if (token) {
            const verifyRes = await fetch(`${PAYPAL_API_BASE}/v1/notifications/verify-webhook-id`, {
              method: 'POST',
              headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
              body: JSON.stringify({
                auth_algo: request.headers.get('paypal-auth-algo') || '',
                cert_url: request.headers.get('paypal-cert-url') || '',
                transmission_id: request.headers.get('paypal-transmission-id') || '',
                transmission_sig: request.headers.get('paypal-transmission-sig') || '',
                transmission_time: request.headers.get('paypal-transmission-time') || '',
                webhook_id: env.PAYPAL_WEBHOOK_ID,
                webhook_event: JSON.parse(payload),
              }),
            });
            const verification = (await verifyRes.json()) as { verification_status?: string };
            if (verification.verification_status !== 'SUCCESS') {
              return json({ error: 'Invalid signature' }, 400);
            }
          }
        }
        const relatedOrderId =
          event.resource?.supplementary_data?.related_ids?.order_id || event.resource?.id || '';
        switch (event.event_type) {
          case 'PAYMENT.CAPTURE.COMPLETED':
          case 'CHECKOUT.ORDER.COMPLETED':
            if (relatedOrderId) await markOrderPaidAndFulfill(d1, relatedOrderId);
            break;
          case 'PAYMENT.CAPTURE.DENIED':
          case 'CHECKOUT.ORDER.VOIDED':
            if (relatedOrderId) await failOrderAndRelease(d1, { providerRef: relatedOrderId }, 'failed');
            break;
          default:
            break;
        }
        return json({ received: true });
      }

      return json({ error: 'Not found' }, 404);
    } catch (e) {
      console.error('shop-worker error:', e);
      return json({ error: 'Internal error' }, 500);
    }
  },
};
