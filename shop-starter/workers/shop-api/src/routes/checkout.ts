import { z } from 'zod';
import type { Env } from '../types';
import { apiError, clientIp, json, readJson } from '../lib/http';
import { rateLimit } from '../lib/rate-limit';
import { createCheckoutSession, StripeError } from '../lib/stripe';
import { isoPlusMs, nowIso, orderNumber, sha256Hex, uuid } from '../lib/util';

const MAX_CART_LINES = 20;
const MAX_QTY_PER_LINE = 99;
const RESERVATION_TTL_MS = 24 * 60 * 60 * 1000 + 5 * 60 * 1000;

const addressSchema = z.object({
  name: z.string().min(1).max(120),
  line1: z.string().min(1).max(200),
  line2: z.string().max(200).optional(),
  city: z.string().min(1).max(120),
  region: z.string().max(120).optional(),
  postalCode: z.string().min(1).max(32),
  countryCode: z.string().length(2).transform((v) => v.toUpperCase()),
});

const checkoutSchema = z.object({
  items: z
    .array(
      z.object({
        variantId: z.string().min(1).max(64),
        quantity: z.number().int().min(1).max(MAX_QTY_PER_LINE),
      }),
    )
    .min(1)
    .max(MAX_CART_LINES),
  email: z.email().max(320),
  locale: z.string().min(2).max(10),
  currency: z.string().length(3).transform((v) => v.toLowerCase()),
  shippingAddress: addressSchema,
  shippingQuoteId: z.string().min(1).max(64).optional(),
  discountCode: z.string().min(1).max(64).optional(),
  idempotencyKey: z.string().min(8).max(200),
});

const acceptQuoteSchema = z.object({
  orderNumber: z.string().min(6).max(40),
  quoteId: z.string().min(1).max(64),
  email: z.email().max(320),
});

interface VariantDbRow {
  id: string;
  product_id: string;
  sku: string;
  variant_name: string;
  currency: string;
  price_cents: number;
  title: string;
  on_hand: number;
  reserved: number;
}

interface OrderRow {
  id: string;
  order_number: string;
  email: string;
  status: string;
  currency: string;
  subtotal_cents: number;
  shipping_cents: number;
  discount_cents: number;
  tax_cents: number;
  total_cents: number;
}

interface CheckoutRequestRow {
  id: string;
  status: string;
  request_fingerprint: string;
  response_json: string | null;
}

export async function createCheckout(
  request: Request,
  env: Env,
  requestId: string,
): Promise<Response> {
  // 1. Rate limit.
  const limited = rateLimit(`checkout:${clientIp(request)}`, 10, 60_000);
  if (!limited.ok) {
    return new Response(null, {
      status: 429,
      headers: { 'Retry-After': String(limited.retryAfterSeconds), 'X-Request-Id': requestId },
    });
  }

  // 2. Validate body (client prices are NEVER read).
  const parsed = checkoutSchema.safeParse(await readJson(request));
  if (!parsed.success) {
    return apiError(
      env,
      requestId,
      'INVALID_REQUEST',
      parsed.error.issues.map((i) => `${i.path.join('.')}: ${i.message}`).join('; '),
      400,
    );
  }
  const input = parsed.data;

  // 3. Idempotency claim (SHA-256 of the browser key, never the raw key).
  const keyHash = await sha256Hex(input.idempotencyKey);
  const fingerprint = await sha256Hex(
    JSON.stringify({
      items: [...input.items].sort((a, b) => a.variantId.localeCompare(b.variantId)),
      email: input.email,
      currency: input.currency,
      shippingAddress: input.shippingAddress,
      discountCode: input.discountCode ?? null,
      shippingQuoteId: input.shippingQuoteId ?? null,
    }),
  );
  const existing = await env.SHOP_DB.prepare(
    'SELECT id, status, request_fingerprint, response_json FROM checkout_requests WHERE idempotency_key_hash = ?1',
  )
    .bind(keyHash)
    .first<CheckoutRequestRow>();
  if (existing && (existing.status === 'order_created' || existing.status === 'session_created')) {
    if (existing.request_fingerprint !== fingerprint) {
      return apiError(env, requestId, 'IDEMPOTENCY_KEY_REUSED', 'Idempotency key already used with a different payload', 409);
    }
    if (existing.response_json) {
      return json(env, requestId, JSON.parse(existing.response_json) as object);
    }
  }
  if (existing && existing.request_fingerprint !== fingerprint) {
    return apiError(env, requestId, 'IDEMPOTENCY_KEY_REUSED', 'Idempotency key already used with a different payload', 409);
  }
  let claimId = existing?.id ?? uuid();
  if (existing) {
    await env.SHOP_DB.prepare(
      "UPDATE checkout_requests SET status = 'started', request_fingerprint = ?1, updated_at = ?2 WHERE id = ?3",
    )
      .bind(fingerprint, nowIso(), claimId)
      .run();
  } else {
    try {
      await env.SHOP_DB.prepare(
        "INSERT INTO checkout_requests (id, idempotency_key_hash, request_fingerprint, status) VALUES (?1, ?2, ?3, 'started')",
      )
      .bind(claimId, keyHash, fingerprint)
      .run();
    } catch {
      const raced = await env.SHOP_DB.prepare(
        'SELECT id, status, request_fingerprint, response_json FROM checkout_requests WHERE idempotency_key_hash = ?1',
      )
        .bind(keyHash)
        .first<CheckoutRequestRow>();
      if (raced && raced.response_json) {
        return json(env, requestId, JSON.parse(raced.response_json) as object);
      }
      return apiError(env, requestId, 'IDEMPOTENCY_IN_PROGRESS', 'Request is already in progress', 409);
    }
  }

  // 4. Deduplicate variant ids, enforce cart bounds.
  const quantities = new Map<string, number>();
  for (const item of input.items) {
    quantities.set(item.variantId, (quantities.get(item.variantId) ?? 0) + item.quantity);
  }
  if (quantities.size > MAX_CART_LINES) {
    return apiError(env, requestId, 'TOO_MANY_LINES', `At most ${MAX_CART_LINES} distinct variants per order`, 400);
  }
  for (const qty of quantities.values()) {
    if (qty > MAX_QTY_PER_LINE) {
      return apiError(env, requestId, 'QUANTITY_TOO_LARGE', `At most ${MAX_QTY_PER_LINE} units per variant`, 400);
    }
  }

  // 5. Load variants and authoritative prices from D1.
  const variantIds = [...quantities.keys()];
  const placeholders = variantIds.map((_, i) => `?${i + 1}`).join(',');
  const variantRows = await env.SHOP_DB.prepare(
    `SELECT v.id, v.product_id, v.sku, v.variant_name, v.currency, v.price_cents,
            p.title, i.on_hand, i.reserved
     FROM product_variants v
     JOIN products p ON p.id = v.product_id AND p.status = 'active'
     JOIN inventory i ON i.variant_id = v.id
     WHERE v.active = 1 AND v.id IN (${placeholders})`,
  )
    .bind(...variantIds)
    .all<VariantDbRow>();
  const variants = new Map<string, VariantDbRow>((variantRows.results ?? []).map((r) => [r.id, r]));
  for (const id of variantIds) {
    const variant = variants.get(id);
    if (!variant) {
      return apiError(env, requestId, 'VARIANT_NOT_FOUND', `Variant ${id} is not available`, 400);
    }
    if (variant.currency !== input.currency) {
      return apiError(env, requestId, 'CURRENCY_MISMATCH', `Variant ${id} is not priced in ${input.currency}`, 400);
    }
  }
  const subtotalCents = [...quantities.entries()].reduce(
    (sum, [id, qty]) => sum + variants.get(id)!.price_cents * qty,
    0,
  );

  // 6. Shipping rule (flat or manual quote).
  const country = input.shippingAddress.countryCode;
  const shippingRule = await env.SHOP_DB.prepare(
    `SELECT id, mode, amount_cents FROM shipping_rules
     WHERE country_code = ?1 AND active = 1
     ORDER BY (region_code IS NULL) ASC, (postal_prefix IS NULL) ASC, created_at ASC
     LIMIT 1`,
  )
    .bind(country)
    .first<{ id: string; mode: string; amount_cents: number | null }>();
  if (!shippingRule) {
    return apiError(env, requestId, 'SHIPPING_NOT_SUPPORTED', `We do not ship to ${country} yet`, 400);
  }
  const manualQuote = shippingRule.mode === 'manual_quote';
  const shippingCents = manualQuote ? 0 : shippingRule.amount_cents ?? 0;

  // 7. Discount (validated against the DB, never client totals).
  let discountCents = 0;
  let discountRow: { id: string; discount_type: string; value: number; currency: string | null } | null = null;
  if (input.discountCode) {
    discountRow = await env.SHOP_DB.prepare(
      'SELECT id, discount_type, value, currency FROM discounts WHERE code = ?1 AND active = 1',
    )
      .bind(input.discountCode)
      .first<{ id: string; discount_type: string; value: number; currency: string | null }>();
    if (!discountRow) {
      return apiError(env, requestId, 'INVALID_DISCOUNT', 'Discount code is not valid', 400);
    }
    if (discountRow.currency && discountRow.currency !== input.currency) {
      return apiError(env, requestId, 'INVALID_DISCOUNT', 'Discount code is not valid for this currency', 400);
    }
    discountCents =
      discountRow.discount_type === 'percent'
        ? Math.floor((subtotalCents * discountRow.value) / 100)
        : Math.min(discountRow.value, subtotalCents);
  }

  // 8. Manual tax rules.
  const taxRule = await env.SHOP_DB.prepare(
    `SELECT id, rate_basis_points, applies_to_shipping FROM tax_rules
     WHERE country_code = ?1 AND active = 1
       AND (effective_from IS NULL OR effective_from <= ?2)
       AND (effective_until IS NULL OR effective_until >= ?2)
     ORDER BY (region_code IS NULL) ASC, created_at ASC LIMIT 1`,
  )
    .bind(country, nowIso())
    .first<{ id: string; rate_basis_points: number; applies_to_shipping: number }>();
  const taxableBase = subtotalCents - discountCents + (taxRule?.applies_to_shipping ? shippingCents : 0);
  const taxCents = taxRule ? Math.floor((taxableBase * taxRule.rate_basis_points) / 10_000) : 0;

  const totalCents = subtotalCents - discountCents + shippingCents + taxCents;

  // 9. Persist the order and conditionally reserve inventory atomically.
  const orderId = uuid();
  const number = orderNumber();
  const now = nowIso();
  const reservationExpiry = isoPlusMs(RESERVATION_TTL_MS);
  const paymentId = uuid();

  const statements: D1PreparedStatement[] = [
    env.SHOP_DB.prepare(
      `INSERT INTO orders (id, order_number, email, status, currency, subtotal_cents, shipping_cents,
        discount_cents, tax_cents, total_cents, shipping_status, shipping_address_json)
       VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10, ?11, ?12)`,
    ).bind(
      orderId,
      number,
      input.email,
      manualQuote ? 'pending_shipping_quote' : 'pending_payment',
      input.currency,
      subtotalCents,
      shippingCents,
      discountCents,
      taxCents,
      totalCents,
      manualQuote ? 'quote_required' : 'not_set',
      JSON.stringify(input.shippingAddress),
    ),
  ];
  const reserveStatements: D1PreparedStatement[] = [];
  let placeholderIndex = 0;
  for (const [variantId, qty] of quantities) {
    const variant = variants.get(variantId)!;
    placeholderIndex += 1;
    statements.push(
      env.SHOP_DB.prepare(
        `INSERT INTO order_items (id, order_id, variant_id, sku_snapshot, title_snapshot, variant_snapshot,
          unit_price_cents, quantity, line_total_cents)
         VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9)`,
      ).bind(
        `${orderId}-item-${placeholderIndex}`,
        orderId,
        variantId,
        variant.sku,
        variant.title,
        variant.variant_name,
        variant.price_cents,
        qty,
        variant.price_cents * qty,
      ),
    );
    statements.push(
      env.SHOP_DB.prepare(
        `INSERT INTO inventory_reservations (id, order_id, variant_id, quantity, status, expires_at)
         VALUES (?1, ?2, ?3, ?4, 'active', ?5)`,
      ).bind(`${orderId}-res-${placeholderIndex}`, orderId, variantId, qty, reservationExpiry),
    );
    const stmt = env.SHOP_DB.prepare(
      'UPDATE inventory SET reserved = reserved + ?1, updated_at = ?2 WHERE variant_id = ?3 AND on_hand - reserved >= ?1',
    ).bind(qty, now, variantId);
    statements.push(stmt);
    reserveStatements.push(stmt);
  }
  statements.push(
    env.SHOP_DB.prepare(
      `INSERT INTO payments (id, order_id, amount_cents, currency, status)
       VALUES (?1, ?2, ?3, ?4, 'pending')`,
    ).bind(paymentId, orderId, totalCents, input.currency),
  );
  if (taxRule && taxCents > 0) {
    statements.push(
      env.SHOP_DB.prepare(
        `INSERT INTO order_tax_lines (id, order_id, jurisdiction_code, tax_name, taxable_amount_cents,
          rate_basis_points, tax_amount_cents, applies_to_shipping)
         VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8)`,
      ).bind(uuid(), orderId, country, 'Manual tax rule', taxableBase, taxRule.rate_basis_points, taxCents, taxRule.applies_to_shipping),
    );
  }
  if (discountRow && discountCents > 0) {
    statements.push(
      env.SHOP_DB.prepare(
        'INSERT INTO discount_redemptions (discount_id, order_id, customer_email) VALUES (?1, ?2, ?3)',
      ).bind(discountRow.id, orderId, input.email),
    );
    statements.push(
      env.SHOP_DB.prepare('UPDATE discounts SET usage_count = usage_count + 1 WHERE id = ?1').bind(discountRow.id),
    );
  }
  statements.push(
    env.SHOP_DB.prepare(
      "UPDATE checkout_requests SET status = 'order_created', order_id = ?1, updated_at = ?2 WHERE id = ?3",
    ).bind(orderId, now, claimId),
  );

  const batchResults = await env.SHOP_DB.batch(statements);

  // Conditional reservation guard: every reserve UPDATE must have changed exactly one row.
  const reserveOffsets: number[] = [];
  {
    let idx = 1; // order INSERT is statement 0
    for (const _ of quantities) {
      idx += 2; // item + reservation inserts
      reserveOffsets.push(idx);
      idx += 1;
    }
  }
  const failedReservations = reserveOffsets.filter(
    (offset) => (batchResults[offset].meta.changes ?? 0) !== 1,
  );
  if (failedReservations.length > 0) {
    // Compensating rollback: release whatever did reserve, cancel the order.
    const rollback: D1PreparedStatement[] = [
      env.SHOP_DB.prepare("UPDATE orders SET status = 'cancelled', updated_at = ?1 WHERE id = ?2").bind(now, orderId),
    ];
    let pos = 0;
    for (const [variantId, qty] of quantities) {
      if (!failedReservations.includes(reserveOffsets[pos])) {
        rollback.push(
          env.SHOP_DB.prepare(
            'UPDATE inventory SET reserved = reserved - ?1, updated_at = ?2 WHERE variant_id = ?3',
          ).bind(qty, now, variantId),
        );
      }
      pos += 1;
    }
    rollback.push(
      env.SHOP_DB.prepare(
        "UPDATE inventory_reservations SET status = 'released', updated_at = ?1 WHERE order_id = ?2",
      ).bind(now, orderId),
    );
    rollback.push(
      env.SHOP_DB.prepare(
        "UPDATE payments SET status = 'failed', updated_at = ?1 WHERE id = ?2",
      ).bind(now, paymentId),
    );
    rollback.push(
      env.SHOP_DB.prepare("UPDATE checkout_requests SET status = 'failed', updated_at = ?1 WHERE id = ?2").bind(now, claimId),
    );
    await env.SHOP_DB.batch(rollback);
    return apiError(env, requestId, 'OUT_OF_STOCK', 'Not enough stock for one or more items', 409);
  }

  // 10. Manual-quote countries stop here; payment waits for an accepted quote.
  if (manualQuote) {
    const payload = { orderNumber: number, checkoutUrl: null as string | null, status: 'pending_shipping_quote' };
    await env.SHOP_DB.prepare(
      "UPDATE checkout_requests SET status = 'order_created', response_json = ?1, updated_at = ?2 WHERE id = ?3",
    )
      .bind(JSON.stringify(payload), now, claimId)
      .run();
    return json(env, requestId, payload, 202);
  }

  // 11. Create the Stripe Checkout Session (idempotent on the order id).
  return finalizeStripeSession(env, requestId, {
    orderId,
    orderNumber: number,
    email: input.email,
    currency: input.currency,
    totalCents,
    paymentId,
    claimId,
  });
}

interface FinalizeParams {
  orderId: string;
  orderNumber: string;
  email: string;
  currency: string;
  totalCents: number;
  paymentId: string;
  claimId: string;
  stripeIdempotencySuffix?: string;
  failureOrderStatus?: string;
  releaseOnFailure?: boolean;
}

async function finalizeStripeSession(
  env: Env,
  requestId: string,
  params: FinalizeParams,
): Promise<Response> {
  const now = nowIso();
  const successUrl = `${env.APP_ORIGIN}/checkout/success?order=${encodeURIComponent(params.orderNumber)}`;
  const cancelUrl = `${env.APP_ORIGIN}/checkout/cancel?order=${encodeURIComponent(params.orderNumber)}`;
  let session;
  try {
    session = await createCheckoutSession(env.STRIPE_SECRET_KEY, env.STRIPE_API_BASE, {
      orderId: params.orderId,
      orderNumber: params.orderNumber,
      email: params.email,
      currency: params.currency,
      totalCents: params.totalCents,
      successUrl,
      cancelUrl,
      idempotencyKey: params.stripeIdempotencySuffix
        ? `${params.orderId}:${params.stripeIdempotencySuffix}`
        : params.orderId,
    });
  } catch (error) {
    const stripeError = error instanceof StripeError ? error : null;
    const failureStatus = params.failureOrderStatus ?? 'cancelled';
    const releaseOnFailure = params.releaseOnFailure ?? true;
    // Release reservations (unless the quote flow needs them), fail the payment
    // and the request record.
    const release: D1PreparedStatement[] = [];
    if (releaseOnFailure) {
      release.push(
        env.SHOP_DB.prepare(
          "UPDATE inventory SET reserved = reserved - (SELECT quantity FROM inventory_reservations WHERE order_id = ?1 AND variant_id = inventory.variant_id AND status = 'active'), updated_at = ?2 WHERE variant_id IN (SELECT variant_id FROM inventory_reservations WHERE order_id = ?1 AND status = 'active')",
        ).bind(params.orderId, now),
        env.SHOP_DB.prepare(
          "UPDATE inventory_reservations SET status = 'released', updated_at = ?1 WHERE order_id = ?2 AND status = 'active'",
        ).bind(now, params.orderId),
      );
    }
    release.push(
      env.SHOP_DB.prepare('UPDATE orders SET status = ?1, updated_at = ?2 WHERE id = ?3').bind(
        failureStatus,
        now,
        params.orderId,
      ),
      env.SHOP_DB.prepare('UPDATE payments SET status = ?1, updated_at = ?2 WHERE id = ?3').bind(
        failureStatus === 'cancelled' ? 'failed' : 'pending',
        now,
        params.paymentId,
      ),
      env.SHOP_DB.prepare('UPDATE checkout_requests SET status = ?1, updated_at = ?2 WHERE id = ?3').bind(
        failureStatus === 'cancelled' ? 'failed' : 'order_created',
        now,
        params.claimId,
      ),
    );
    await env.SHOP_DB.batch(release);
    void stripeError;
    return apiError(
      env,
      requestId,
      'STRIPE_SESSION_FAILED',
      stripeError ? `${stripeError.code}: ${stripeError.message}` : 'Payment provider unavailable',
      502,
    );
  }

  await env.SHOP_DB.batch([
    env.SHOP_DB.prepare('UPDATE payments SET stripe_session_id = ?1, updated_at = ?2 WHERE id = ?3').bind(
      session.id,
      now,
      params.paymentId,
    ),
  ]);
  const payload = { orderNumber: params.orderNumber, checkoutUrl: session.url, status: 'pending_payment' };
  await env.SHOP_DB.prepare(
    "UPDATE checkout_requests SET status = 'session_created', response_json = ?1, updated_at = ?2 WHERE id = ?3",
  )
    .bind(JSON.stringify(payload), now, params.claimId)
    .run();
  return json(env, requestId, payload);
}

export async function acceptShippingQuote(
  request: Request,
  env: Env,
  requestId: string,
): Promise<Response> {
  const limited = rateLimit(`quote-accept:${clientIp(request)}`, 10, 60_000);
  if (!limited.ok) {
    return new Response(null, {
      status: 429,
      headers: { 'Retry-After': String(limited.retryAfterSeconds), 'X-Request-Id': requestId },
    });
  }
  const parsed = acceptQuoteSchema.safeParse(await readJson(request));
  if (!parsed.success) {
    return apiError(env, requestId, 'INVALID_REQUEST', 'Invalid quote acceptance request', 400);
  }
  const { orderNumber: number, quoteId, email } = parsed.data;
  const now = nowIso();

  const order = await env.SHOP_DB.prepare(
    "SELECT id, order_number, email, status, currency, subtotal_cents, discount_cents, tax_cents FROM orders WHERE order_number = ?1",
  )
    .bind(number)
    .first<OrderRow>();
  if (!order || order.email !== email || order.status !== 'pending_shipping_quote') {
    return apiError(env, requestId, 'NOT_FOUND', 'No pending quote for this order', 404);
  }
  const quote = await env.SHOP_DB.prepare(
    "SELECT id, amount_cents, currency, status, expires_at FROM shipping_quotes WHERE id = ?1 AND order_id = ?2",
  )
    .bind(quoteId, order.id)
    .first<{ id: string; amount_cents: number; currency: string; status: string; expires_at: string }>();
  if (!quote || quote.status !== 'proposed' || quote.expires_at <= now) {
    return apiError(env, requestId, 'QUOTE_INVALID', 'Shipping quote is missing or expired', 409);
  }
  if (quote.currency !== order.currency) {
    return apiError(env, requestId, 'QUOTE_INVALID', 'Quote currency mismatch', 409);
  }

  const payment = await env.SHOP_DB.prepare(
    "SELECT id FROM payments WHERE order_id = ?1 AND status = 'pending'",
  )
    .bind(order.id)
    .first<{ id: string }>();
  if (!payment) {
    return apiError(env, requestId, 'PAYMENT_MISSING', 'No pending payment for this order', 409);
  }

  const totalCents = order.subtotal_cents - order.discount_cents + quote.amount_cents + order.tax_cents;
  await env.SHOP_DB.batch([
    env.SHOP_DB.prepare("UPDATE shipping_quotes SET status = 'accepted', accepted_at = ?1 WHERE id = ?2").bind(now, quote.id),
    env.SHOP_DB.prepare(
      "UPDATE shipping_quotes SET status = 'superseded' WHERE order_id = ?1 AND id <> ?2 AND status = 'proposed'",
    ).bind(order.id, quote.id),
    env.SHOP_DB.prepare(
      "UPDATE orders SET shipping_cents = ?1, total_cents = ?2, status = 'pending_payment', shipping_status = 'quoted', updated_at = ?3 WHERE id = ?4",
    ).bind(quote.amount_cents, totalCents, now, order.id),
    env.SHOP_DB.prepare('UPDATE payments SET amount_cents = ?1, updated_at = ?2 WHERE id = ?3').bind(
      totalCents,
      now,
      payment.id,
    ),
  ]);

  return finalizeStripeSession(env, requestId, {
    orderId: order.id,
    orderNumber: order.order_number,
    email: order.email,
    currency: order.currency,
    totalCents,
    paymentId: payment.id,
    claimId: `quote-${quote.id}`,
    stripeIdempotencySuffix: `quote-${quote.id}`,
    failureOrderStatus: 'pending_shipping_quote',
    releaseOnFailure: false,
  });
}
