// Checkout: server-side pricing, atomic inventory reservation, Stripe
// Checkout Session creation and the manual shipping-quote flow.
//
// Invariants (see docs/DEPLOYMENT.md):
//  - Client-submitted prices are never trusted; totals are recomputed from D1.
//  - Reservation is a conditional UPDATE; exactly one changed row is required.
//  - No Stripe session before shipping amount is confirmed (flat rule or
//    accepted quote).
//  - checkout_requests gives end-to-end idempotency for browser retries.

import type { D1Database } from '@cloudflare/workers-types';
import { stripeRequest } from './stripe';
import { loadSellableVariants } from './products';
import type {
  CheckoutRequestBody,
  Env,
  OrderRow,
  ReservationRow,
  ShippingAddress,
  ShippingRuleRow,
  TaxRuleRow,
  DiscountRow,
} from './types';
import {
  apiError,
  clientKey,
  genId,
  isCountryCode,
  isCurrency,
  isEmail,
  isNonEmptyString,
  isUuid,
  json,
  nowIso,
  orderNumber,
  rateLimit,
  reservationTtlMinutes,
  sha256Hex,
} from './util';

interface ReserveItem {
  variantId: string;
  quantity: number;
}

// ---------------------------------------------------------------------------
// Inventory reservation primitives (shared with webhook.ts / index.ts cron)
// ---------------------------------------------------------------------------

/**
 * Atomically reserve stock for each item. Returns null on success or the
 * variantId that could not be fully reserved (this helper already rolled
 * back everything it reserved before the failure).
 *
 * Retry-safe: a reservation row for (order, variant) is reused via UPDATE so
 * re-running checkout for the same order never trips UNIQUE(order_id,
 * variant_id). Each item's inventory increment and reservation-row write are
 * one atomic batch — the `CHECK (reserved <= on_hand)` constraint makes an
 * oversell abort the whole batch.
 */
export async function reserveForOrder(
  db: D1Database,
  orderId: string,
  items: ReserveItem[],
  expiresAtIso: string
): Promise<string | null> {
  // Snapshot existing reservation rows so retries reuse instead of duplicate.
  const existingRows = (
    await db
      .prepare(`SELECT variant_id, quantity, status FROM inventory_reservations WHERE order_id = ?1`)
      .bind(orderId)
      .all<{ variant_id: string; quantity: number; status: string }>()
  ).results;
  const existing = new Map(existingRows.map((r) => [r.variant_id, r]));

  const done: ReserveItem[] = [];
  for (const item of items) {
    const ex = existing.get(item.variantId);
    if (ex && ex.status === 'active' && ex.quantity === item.quantity) {
      // Idempotent retry: stock already reserved — just extend the window.
      await db
        .prepare(
          `UPDATE inventory_reservations SET expires_at = ?1, updated_at = ?2
           WHERE order_id = ?3 AND variant_id = ?4 AND status = 'active'`
        )
        .bind(expiresAtIso, nowIso(), orderId, item.variantId)
        .run();
      continue;
    }
    const activeQty = ex && ex.status === 'active' ? ex.quantity : 0;
    const need = item.quantity - activeQty;
    const inv = (
      await db.prepare(`SELECT variant_id FROM inventory WHERE variant_id = ?1`).bind(item.variantId).first()
    );
    if (!inv) {
      await releaseReservationsForOrder(db, orderId, done, 'released', 'reservation_rollback');
      return item.variantId;
    }
    if (need > 0) {
      try {
        // Atomic: CHECK(reserved <= on_hand) aborts the batch on oversell.
        await db.batch([
          db
            .prepare(`UPDATE inventory SET reserved = reserved + ?1, updated_at = ?2 WHERE variant_id = ?3`)
            .bind(need, nowIso(), item.variantId),
          ex
            ? db
                .prepare(
                  `UPDATE inventory_reservations SET quantity = ?1, status = 'active', expires_at = ?2, updated_at = ?3
                   WHERE order_id = ?4 AND variant_id = ?5`
                )
                .bind(item.quantity, expiresAtIso, nowIso(), orderId, item.variantId)
            : db
                .prepare(
                  `INSERT INTO inventory_reservations (id, order_id, variant_id, quantity, status, expires_at)
                   VALUES (?1, ?2, ?3, ?4, 'active', ?5)`
                )
                .bind(genId(), orderId, item.variantId, item.quantity, expiresAtIso),
        ]);
      } catch {
        await releaseReservationsForOrder(db, orderId, done, 'released', 'reservation_rollback');
        return item.variantId;
      }
      done.push({ variantId: item.variantId, quantity: need });
    } else if (ex) {
      // need <= 0 with an existing row: refresh quantity/window without
      // touching the reserved counter (quantity never grows here because
      // order items are immutable).
      await db
        .prepare(
          `UPDATE inventory_reservations SET quantity = ?1, status = 'active', expires_at = ?2, updated_at = ?3
           WHERE order_id = ?4 AND variant_id = ?5`
        )
        .bind(item.quantity, expiresAtIso, nowIso(), orderId, item.variantId)
        .run();
    }
  }
  return null;
}

/** Release the given (or all active) reservations of an order. */
export async function releaseReservationsForOrder(
  db: D1Database,
  orderId: string,
  items?: ReserveItem[],
  status: 'released' | 'expired' = 'released',
  reason = 'reservation_release'
): Promise<void> {
  let toRelease: ReserveItem[];
  if (items) {
    toRelease = items;
  } else {
    const rows = (
      await db
        .prepare(`SELECT variant_id, quantity FROM inventory_reservations WHERE order_id = ?1 AND status = 'active'`)
        .bind(orderId)
        .all<ReservationRow>()
    ).results;
    toRelease = rows.map((r) => ({ variantId: r.variant_id, quantity: r.quantity }));
  }
  if (toRelease.length === 0) return;
  const stmts: D1PreparedStatement[] = [];
  for (const item of toRelease) {
    stmts.push(
      db
        .prepare(
          `UPDATE inventory SET reserved = reserved - ?1, updated_at = ?2
           WHERE variant_id = ?3 AND reserved >= ?1`
        )
        .bind(item.quantity, nowIso(), item.variantId)
    );
  }
  stmts.push(
    db
      .prepare(
        `UPDATE inventory_reservations SET status = ?1, updated_at = ?2
         WHERE order_id = ?3 AND status = 'active'`
      )
      .bind(status, nowIso(), orderId)
  );
  await db.batch(stmts);
}

/**
 * Consume reservations after payment is confirmed: on_hand and reserved both
 * go down by the reserved quantity, exactly once (guarded by status='active').
 */
export async function consumeReservationsForOrder(db: D1Database, orderId: string): Promise<boolean> {
  const rows = (
    await db
      .prepare(`SELECT variant_id, quantity FROM inventory_reservations WHERE order_id = ?1 AND status = 'active'`)
      .bind(orderId)
      .all<ReservationRow>()
  ).results;
  if (rows.length === 0) return true; // already consumed (idempotent)
  // Every reserved variant must have an inventory row; a missing row means
  // the reservation cannot be honoured (never auto-skip: that would leak the
  // reserved counter).
  for (const r of rows) {
    const inv = (await db.prepare(`SELECT variant_id FROM inventory WHERE variant_id = ?1`).bind(r.variant_id).first());
    if (!inv) return false;
  }
  // Single atomic batch: CHECK(on_hand >= 0) / CHECK(reserved >= 0) abort the
  // whole batch if any decrement would go negative, so no partial consume.
  const stmts: D1PreparedStatement[] = [];
  for (const r of rows) {
    stmts.push(
      db
        .prepare(
          `UPDATE inventory SET on_hand = on_hand - ?1, reserved = reserved - ?1, updated_at = ?2
           WHERE variant_id = ?3`
        )
        .bind(r.quantity, nowIso(), r.variant_id)
    );
  }
  for (const r of rows) {
    stmts.push(
      db
        .prepare(
          `UPDATE inventory_reservations SET status = 'consumed', updated_at = ?1
           WHERE order_id = ?2 AND variant_id = ?3 AND status = 'active'`
        )
        .bind(nowIso(), orderId, r.variant_id)
    );
  }
  for (const r of rows) {
    stmts.push(
      db
        .prepare(
          `INSERT INTO inventory_movements (id, variant_id, change_qty, reason, order_id)
           VALUES (?1, ?2, ?3, 'sale', ?4)`
        )
        .bind(genId(), r.variant_id, -r.quantity, orderId)
    );
  }
  try {
    await db.batch(stmts);
  } catch {
    return false; // inconsistent — caller marks failure, nothing committed
  }
  return true;
}

// ---------------------------------------------------------------------------
// Shipping / tax / discount lookups
// ---------------------------------------------------------------------------

export async function matchShippingRule(
  db: D1Database,
  address: ShippingAddress
): Promise<ShippingRuleRow | null> {
  const rows = (
    await db
      .prepare(`SELECT * FROM shipping_rules WHERE country_code = ?1 AND active = 1`)
      .bind(address.countryCode)
      .all<ShippingRuleRow>()
  ).results;
  const region = (address.region ?? '').trim().toUpperCase();
  const postal = (address.postalCode ?? '').trim().toUpperCase();
  let best: { rule: ShippingRuleRow; score: number } | null = null;
  for (const rule of rows) {
    let score = 0;
    if (rule.region_code) {
      if (rule.region_code.toUpperCase() === region) score += 4;
      else continue; // rule targets a different region
    }
    if (rule.postal_prefix) {
      if (postal.startsWith(rule.postal_prefix.toUpperCase())) score += rule.postal_prefix.length;
      else continue;
    }
    if (!best || score > best.score) best = { rule, score };
  }
  return best?.rule ?? null;
}

export interface TaxLineDraft {
  rule: TaxRuleRow;
  taxAmountCents: number;
}

export async function matchTaxRules(
  db: D1Database,
  address: ShippingAddress,
  baseCents: number,
  shippingCents: number
): Promise<TaxLineDraft[]> {
  const rows = (
    await db
      .prepare(
        `SELECT * FROM tax_rules WHERE country_code = ?1 AND active = 1
         AND (effective_from IS NULL OR effective_from <= ?2)
         AND (effective_until IS NULL OR effective_until >= ?2)`
      )
      .bind(address.countryCode, nowIso().slice(0, 10))
      .all<TaxRuleRow>()
  ).results;
  const region = (address.region ?? '').trim().toUpperCase();
  const postal = (address.postalCode ?? '').trim().toUpperCase();
  const lines: TaxLineDraft[] = [];
  for (const rule of rows) {
    if (rule.region_code && rule.region_code.toUpperCase() !== region) continue;
    if (rule.postal_prefix && !postal.startsWith(rule.postal_prefix.toUpperCase())) continue;
    const taxable = baseCents + (rule.applies_to_shipping === 1 ? shippingCents : 0);
    const tax = Math.floor((taxable * rule.rate_basis_points) / 10000);
    if (tax > 0) lines.push({ rule, taxAmountCents: tax });
  }
  return lines;
}

export interface DiscountResult {
  discountCents: number;
  row: DiscountRow;
}

export async function validateDiscount(
  db: D1Database,
  code: string,
  subtotalCents: number,
  currency: string
): Promise<DiscountResult | 'INVALID'> {
  const row = (
    await db
      .prepare(
        `SELECT * FROM discounts WHERE code = ?1 AND active = 1
         AND (starts_at IS NULL OR starts_at <= ?2)
         AND (expires_at IS NULL OR expires_at >= ?2)`
      )
      .bind(code.trim(), nowIso())
      .first<DiscountRow>()
  );
  if (!row) return 'INVALID';
  if (row.usage_limit !== null && row.usage_count >= row.usage_limit) return 'INVALID';
  if (row.discount_type === 'percent') {
    const cents = Math.min(subtotalCents, Math.floor((subtotalCents * row.value) / 100));
    return { discountCents: cents, row };
  }
  if (row.currency && row.currency !== currency) return 'INVALID';
  return { discountCents: Math.min(subtotalCents, row.value), row };
}

// ---------------------------------------------------------------------------
// Stripe session bootstrap (shared by flat checkout and accepted quotes)
// ---------------------------------------------------------------------------

interface SessionStartResult {
  ok: true;
  checkoutUrl: string;
  paymentId: string;
} 

export async function startStripeSession(
  db: D1Database,
  env: Env,
  order: OrderRow,
  items: ReserveItem[]
): Promise<SessionStartResult | { ok: false; status: number; code: string; message: string }> {
  const expiresAtIso = new Date(Date.now() + reservationTtlMinutes(env) * 60_000).toISOString();
  const failedVariant = await reserveForOrder(db, order.id, items, expiresAtIso);
  if (failedVariant) {
    return { ok: false, status: 409, code: 'OUT_OF_STOCK', message: 'Insufficient stock, try a smaller quantity' };
  }
  const paymentId = genId();
  await db
    .prepare(
      `INSERT INTO payments (id, order_id, provider, amount_cents, currency, status)
       VALUES (?1, ?2, 'stripe', ?3, ?4, 'pending')`
    )
    .bind(paymentId, order.id, order.total_cents, order.currency)
    .run();
  const res = await stripeRequest<{ id: string; url: string }>(
    env,
    'POST',
    '/checkout/sessions',
    {
      mode: 'payment',
      customer_email: order.email,
      success_url: `${env.APP_ORIGIN}/checkout/success/?order=${encodeURIComponent(order.order_number)}`,
      cancel_url: `${env.APP_ORIGIN}/checkout/cancel/?order=${encodeURIComponent(order.order_number)}`,
      'line_items[0][quantity]': '1',
      'line_items[0][price_data][currency]': order.currency,
      'line_items[0][price_data][unit_amount]': String(order.total_cents),
      'line_items[0][price_data][product_data][name]': `Order ${order.order_number}`,
      'metadata[order_id]': order.id,
      'metadata[order_number]': order.order_number,
      payment_intent_data_description: `Order ${order.order_number}`,
      expires_at: String(Math.floor(Date.now() / 1000) + reservationTtlMinutes(env) * 60),
    },
    order.id
  );
  if (!res.ok || !res.body.id || !res.body.url) {
    await releaseReservationsForOrder(db, order.id);
    await db
      .prepare(`UPDATE orders SET status = 'cancelled', updated_at = ?1 WHERE id = ?2 AND status = 'pending_payment'`)
      .bind(nowIso(), order.id)
      .run();
    await db.prepare(`DELETE FROM payments WHERE id = ?1`).bind(paymentId).run();
    return {
      ok: false,
      status: 502,
      code: 'STRIPE_ERROR',
      message: 'Payment provider rejected the session; reservation released',
    };
  }
  await db.batch([
    db
      .prepare(`UPDATE payments SET stripe_session_id = ?1, updated_at = ?2 WHERE id = ?3`)
      .bind(res.body.id, nowIso(), paymentId),
    db
      .prepare(
        `UPDATE orders SET status = 'pending_payment', updated_at = ?1,
         shipping_quote_expires_at = ?2 WHERE id = ?3 AND status IN ('pending_shipping_quote','pending_payment')`
      )
      .bind(nowIso(), expiresAtIso, order.id),
  ]);
  return { ok: true, checkoutUrl: res.body.url, paymentId };
}

// ---------------------------------------------------------------------------
// POST /api/checkout/session
// ---------------------------------------------------------------------------

interface ParsedCheckoutBody {
  body: CheckoutRequestBody;
  fingerprint: string;
}

function parseCheckoutBody(raw: unknown): ParsedCheckoutBody | { error: string } {
  if (typeof raw !== 'object' || raw === null) return { error: 'Invalid body' };
  const b = raw as Record<string, unknown>;
  const items = b.items;
  if (!Array.isArray(items) || items.length === 0 || items.length > 20) return { error: '1-20 items required' };
  const parsedItems: CheckoutRequestBody['items'] = [];
  for (const item of items) {
    if (typeof item !== 'object' || item === null) return { error: 'Invalid item' };
    const it = item as Record<string, unknown>;
    if (!isUuid(it.variantId)) return { error: 'Invalid variantId' };
    const quantity = it.quantity;
    if (typeof quantity !== 'number' || !Number.isInteger(quantity) || quantity < 1 || quantity > 99) {
      return { error: 'Quantity must be 1-99' };
    }
    parsedItems.push({ variantId: it.variantId, quantity });
  }
  if (!isEmail(b.email)) return { error: 'Invalid email' };
  if (!isCurrency(b.currency)) return { error: 'Invalid currency' };
  if (!isNonEmptyString(b.idempotencyKey, 200)) return { error: 'Missing idempotencyKey' };
  const addr = b.shippingAddress;
  if (typeof addr !== 'object' || addr === null) return { error: 'Missing shipping address' };
  const a = addr as Record<string, unknown>;
  if (!isNonEmptyString(a.name, 200)) return { error: 'Invalid address name' };
  if (!isNonEmptyString(a.line1, 300)) return { error: 'Invalid address line1' };
  if (!isNonEmptyString(a.city, 120)) return { error: 'Invalid address city' };
  if (!isNonEmptyString(a.postalCode, 32)) return { error: 'Invalid postal code' };
  if (!isCountryCode(a.countryCode)) return { error: 'Invalid country code' };
  const address: ShippingAddress = {
    name: String(a.name).trim(),
    line1: String(a.line1).trim(),
    line2: isNonEmptyString(a.line2, 300) ? String(a.line2).trim() : undefined,
    city: String(a.city).trim(),
    region: isNonEmptyString(a.region, 120) ? String(a.region).trim() : undefined,
    postalCode: String(a.postalCode).trim(),
    countryCode: String(a.countryCode).toUpperCase(),
  };
  const body: CheckoutRequestBody = {
    items: parsedItems,
    email: String(b.email).trim().toLowerCase(),
    shippingAddress: address,
    currency: b.currency,
    discountCode: typeof b.discountCode === 'string' && b.discountCode.trim() ? b.discountCode.trim() : undefined,
    idempotencyKey: b.idempotencyKey,
    note: typeof b.note === 'string' && b.note.trim() ? b.note.slice(0, 1000) : undefined,
  };
  const fingerprintSource = JSON.stringify({
    i: body.items.map((i) => [i.variantId, i.quantity]).sort(),
    e: body.email,
    a: body.shippingAddress,
    c: body.currency,
    d: body.discountCode ?? null,
  });
  return { body, fingerprint: `${body.email}|${fingerprintSource}` };
}

export async function handleCheckoutSession(request: Request, env: Env, requestId: string): Promise<Response> {
  const db = env.SHOP_DB;
  if (!(await rateLimit(db, clientKey(request, 'checkout'), 10, 3600))) {
    return apiError(429, 'RATE_LIMITED', 'Too many checkout attempts, try again later', requestId);
  }
  const raw = await request.json().catch(() => null);
  const parsed = parseCheckoutBody(raw);
  if ('error' in parsed) return apiError(400, 'BAD_REQUEST', parsed.error, requestId);
  const { body, fingerprint } = parsed;

  // --- Idempotency claim -------------------------------------------------
  const keyHash = await sha256Hex(`${body.email}|${body.idempotencyKey}`);
  const existing = (
    await db.prepare('SELECT * FROM checkout_requests WHERE idempotency_key_hash = ?1').bind(keyHash).first() as {
      id: string;
      request_fingerprint: string;
      status: string;
      response_json: string | null;
    } | null
  );
  if (existing) {
    if (existing.response_json) {
      return json(JSON.parse(existing.response_json) as Record<string, unknown>);
    }
    if (existing.request_fingerprint !== fingerprint) {
      return apiError(409, 'IDEMPOTENCY_KEY_REUSE', 'Key already used with a different payload', requestId);
    }
    return apiError(409, 'IN_FLIGHT', 'A request with this key is already being processed', requestId);
  }
  const requestRowId = genId();
  await db
    .prepare(
      `INSERT INTO checkout_requests (id, idempotency_key_hash, request_fingerprint) VALUES (?1, ?2, ?3)`
    )
    .bind(requestRowId, keyHash, fingerprint)
    .run();

  const finish = async (status: number, payload: Record<string, unknown>, rowStatus: string): Promise<Response> => {
    await db
      .prepare(`UPDATE checkout_requests SET status = ?1, response_json = ?2, updated_at = ?3 WHERE id = ?4`)
      .bind(rowStatus, JSON.stringify(payload), nowIso(), requestRowId)
      .run();
    return json(payload, status);
  };

  // --- Server-side pricing ----------------------------------------------
  const variantIds = [...new Set(body.items.map((i) => i.variantId))];
  const sellable = await loadSellableVariants(db, variantIds);
  const pricedItems: Array<{
    variantId: string;
    quantity: number;
    unitPriceCents: number;
    lineTotalCents: number;
    sku: string;
    title: string;
    variantName: string;
  }> = [];
  for (const item of body.items) {
    const entry = sellable.get(item.variantId);
    if (!entry) {
      return finish(404, { error: { code: 'VARIANT_UNAVAILABLE', message: 'Item is not available', requestId } }, 'failed');
    }
    if (entry.variant.currency !== body.currency) {
      return finish(409, { error: { code: 'CURRENCY_MISMATCH', message: 'Item currency mismatch', requestId } }, 'failed');
    }
    const available = entry.onHand - entry.reserved;
    if (available < item.quantity) {
      return finish(409, { error: { code: 'OUT_OF_STOCK', message: 'Insufficient stock', requestId } }, 'failed');
    }
    pricedItems.push({
      variantId: entry.variant.id,
      quantity: item.quantity,
      unitPriceCents: entry.variant.price_cents,
      lineTotalCents: entry.variant.price_cents * item.quantity,
      sku: entry.variant.sku,
      title: entry.product.title,
      variantName: entry.variant.variant_name,
    });
  }
  const subtotalCents = pricedItems.reduce((n, i) => n + i.lineTotalCents, 0);

  let discountCents = 0;
  let discountRow: DiscountRow | null = null;
  if (body.discountCode) {
    const result = await validateDiscount(db, body.discountCode, subtotalCents, body.currency);
    if (result === 'INVALID') {
      return finish(404, { error: { code: 'DISCOUNT_INVALID', message: 'Discount code is not valid', requestId } }, 'failed');
    }
    discountCents = result.discountCents;
    discountRow = result.row;
  }

  // --- Shipping ----------------------------------------------------------
  const shippingRule = await matchShippingRule(db, body.shippingAddress);
  const manualQuote = !shippingRule || shippingRule.mode === 'manual_quote';
  const shippingCents = shippingRule && shippingRule.mode === 'flat' ? (shippingRule.amount_cents ?? 0) : 0;

  // --- Tax (snapshot lines) ---------------------------------------------
  const baseCents = subtotalCents - discountCents;
  const taxLines = await matchTaxRules(db, body.shippingAddress, baseCents, shippingCents);
  const taxCents = taxLines.reduce((n, l) => n + l.taxAmountCents, 0);
  const totalCents = baseCents + shippingCents + taxCents;

  // --- Order + items -----------------------------------------------------
  const orderId = genId();
  const orderNum = orderNumber();
  const orderStatus = manualQuote ? 'pending_shipping_quote' : 'pending_payment';
  const shippingStatus = manualQuote ? 'quote_required' : 'ready';
  const orderStmts: D1PreparedStatement[] = [
    db
      .prepare(
        `INSERT INTO orders (id, order_number, email, status, currency, subtotal_cents, shipping_cents,
           discount_cents, tax_cents, total_cents, shipping_status, shipping_address_json, customer_note)
         VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10, ?11, ?12, ?13)`
      )
      .bind(
        orderId,
        orderNum,
        body.email,
        orderStatus,
        body.currency,
        subtotalCents,
        shippingCents,
        discountCents,
        taxCents,
        totalCents,
        shippingStatus,
        JSON.stringify(body.shippingAddress),
        body.note ?? null
      ),
    ...pricedItems.map((item) =>
      db
        .prepare(
          `INSERT INTO order_items (id, order_id, variant_id, sku_snapshot, title_snapshot, variant_snapshot,
             unit_price_cents, quantity, line_total_cents)
           VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9)`
        )
        .bind(
          genId(),
          orderId,
          item.variantId,
          item.sku,
          item.title,
          item.variantName,
          item.unitPriceCents,
          item.quantity,
          item.lineTotalCents
        )
    ),
    ...taxLines.map((line) =>
      db
        .prepare(
          `INSERT INTO order_tax_lines (id, order_id, jurisdiction_code, tax_name, taxable_amount_cents,
             rate_basis_points, tax_amount_cents, applies_to_shipping)
           VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8)`
        )
        .bind(
          genId(),
          orderId,
          line.rule.region_code ?? line.rule.country_code,
          line.rule.region_code ? `${line.rule.country_code}-${line.rule.region_code} tax` : `${line.rule.country_code} tax`,
          baseCents + (line.rule.applies_to_shipping === 1 ? shippingCents : 0),
          line.rule.rate_basis_points,
          line.taxAmountCents,
          line.rule.applies_to_shipping
        )
    ),
  ];
  if (discountRow) {
    orderStmts.push(
      db
        .prepare(
          `INSERT INTO discount_redemptions (discount_id, order_id, customer_email) VALUES (?1, ?2, ?3)`
        )
        .bind(discountRow.id, orderId, body.email)
    );
    orderStmts.push(
      db.prepare(`UPDATE discounts SET usage_count = usage_count + 1 WHERE id = ?1`).bind(discountRow.id)
    );
  }
  await db.batch(orderStmts);
  await db
    .prepare(`UPDATE checkout_requests SET status = 'order_created', order_id = ?1, updated_at = ?2 WHERE id = ?3`)
    .bind(orderId, nowIso(), requestRowId)
    .run();

  const order: OrderRow = {
    id: orderId,
    order_number: orderNum,
    email: body.email,
    status: orderStatus,
    currency: body.currency,
    subtotal_cents: subtotalCents,
    shipping_cents: shippingCents,
    discount_cents: discountCents,
    tax_cents: taxCents,
    total_cents: totalCents,
    shipping_status: shippingStatus,
    shipping_address_json: JSON.stringify(body.shippingAddress),
    billing_address_json: null,
    customer_note: body.note ?? null,
    shipping_quote_expires_at: null,
    paid_at: null,
    created_at: nowIso(),
    updated_at: nowIso(),
  };

  // --- Manual quote path: stop before payment ---------------------------
  if (manualQuote) {
    return finish(
      202,
      {
        orderNumber: orderNum,
        status: 'pending_shipping_quote',
        message: 'We will email you a shipping quote; no payment is taken yet.',
        requestId,
      },
      'order_created'
    );
  }

  // --- Flat shipping: reserve + Stripe session --------------------------
  let started: Awaited<ReturnType<typeof startStripeSession>>;
  try {
    started = await startStripeSession(db, env, order, pricedItems.map((i) => ({ variantId: i.variantId, quantity: i.quantity })));
  } catch {
    // Network-level failure reaching Stripe (fetch threw): clean up so the
    // customer can retry cleanly with the same idempotency key flow.
    await releaseReservationsForOrder(db, orderId);
    await db
      .prepare(`UPDATE orders SET status = 'cancelled', updated_at = ?1 WHERE id = ?2 AND status = 'pending_payment'`)
      .bind(nowIso(), orderId)
      .run();
    return finish(
      502,
      { error: { code: 'STRIPE_UNREACHABLE', message: 'Payment provider could not be reached, please try again', requestId } },
      'failed'
    );
  }
  if (!started.ok) {
    // OUT_OF_STOCK leaves a zombie pending_payment order — cancel it.
    await db
      .prepare(`UPDATE orders SET status = 'cancelled', updated_at = ?1 WHERE id = ?2 AND status = 'pending_payment'`)
      .bind(nowIso(), orderId)
      .run();
    return finish(
      started.status,
      { error: { code: started.code, message: started.message, requestId } },
      'failed'
    );
  }
  return finish(
    200,
    { orderNumber: orderNum, checkoutUrl: started.checkoutUrl, requestId },
    'session_created'
  );
}

// ---------------------------------------------------------------------------
// GET /api/orders/:orderNumber?email=...  (customer lookup)
// ---------------------------------------------------------------------------

export async function handleOrderLookup(
  request: Request,
  env: Env,
  orderNum: string,
  requestId: string
): Promise<Response> {
  const db = env.SHOP_DB;
  if (!(await rateLimit(db, clientKey(request, 'order-lookup'), 30, 3600))) {
    return apiError(429, 'RATE_LIMITED', 'Too many lookups', requestId);
  }
  const url = new URL(request.url);
  const email = (url.searchParams.get('email') ?? '').trim().toLowerCase();
  if (!isEmail(email) || !isNonEmptyString(orderNum, 40)) {
    return apiError(400, 'BAD_REQUEST', 'Order number and email are required', requestId);
  }
  const order = (
    await db.prepare('SELECT * FROM orders WHERE order_number = ?1').bind(orderNum.trim().toUpperCase()).first<OrderRow>()
  );
  if (!order || order.email.toLowerCase() !== email) {
    return apiError(404, 'NOT_FOUND', 'Order not found', requestId);
  }
  const items = (
    await db
      .prepare('SELECT * FROM order_items WHERE order_id = ?1')
      .bind(order.id)
      .all()
  ).results;
  const payments = (
    await db
      .prepare(
        `SELECT id, provider, amount_cents, currency, status, refunded_cents, stripe_session_id, updated_at
         FROM payments WHERE order_id = ?1`
      )
      .bind(order.id)
      .all()
  ).results;
  const quotes = (
    await db
      .prepare(
        `SELECT id, currency, amount_cents, carrier_name, service_name, notes, status, expires_at
         FROM shipping_quotes WHERE order_id = ?1 ORDER BY created_at DESC`
      )
      .bind(order.id)
      .all()
  ).results;
  const shipments = (
    await db
      .prepare(
        `SELECT id, carrier, tracking_number, tracking_url, status, shipped_at, delivered_at
         FROM shipments WHERE order_id = ?1 ORDER BY created_at DESC`
      )
      .bind(order.id)
      .all()
  ).results;
  return json({
    order: {
      orderNumber: order.order_number,
      status: order.status,
      email: order.email,
      currency: order.currency,
      subtotalCents: order.subtotal_cents,
      shippingCents: order.shipping_cents,
      discountCents: order.discount_cents,
      taxCents: order.tax_cents,
      totalCents: order.total_cents,
      shippingStatus: order.shipping_status,
      shippingAddress: JSON.parse(order.shipping_address_json),
      customerNote: order.customer_note,
      createdAt: order.created_at,
      paidAt: order.paid_at,
      items: items.map((i) => ({
        sku: (i as { sku_snapshot: string }).sku_snapshot,
        title: (i as { title_snapshot: string }).title_snapshot,
        variant: (i as { variant_snapshot: string }).variant_snapshot,
        unitPriceCents: (i as { unit_price_cents: number }).unit_price_cents,
        quantity: (i as { quantity: number }).quantity,
        lineTotalCents: (i as { line_total_cents: number }).line_total_cents,
      })),
      payments,
      quotes,
      shipments,
    },
  });
}

// ---------------------------------------------------------------------------
// POST /api/orders/:orderNumber/quote/accept  { email, quoteId }
// ---------------------------------------------------------------------------

export async function handleQuoteAccept(
  request: Request,
  env: Env,
  orderNum: string,
  requestId: string
): Promise<Response> {
  const db = env.SHOP_DB;
  if (!(await rateLimit(db, clientKey(request, 'quote-accept'), 20, 3600))) {
    return apiError(429, 'RATE_LIMITED', 'Too many attempts', requestId);
  }
  const raw = (await request.json().catch(() => null)) as Record<string, unknown> | null;
  const email = typeof raw?.email === 'string' ? raw.email.trim().toLowerCase() : '';
  const quoteId = raw?.quoteId;
  if (!isEmail(email) || !isUuid(quoteId) || !isNonEmptyString(orderNum, 40)) {
    return apiError(400, 'BAD_REQUEST', 'Order number, email and quoteId are required', requestId);
  }
  const order = (
    await db.prepare('SELECT * FROM orders WHERE order_number = ?1').bind(orderNum.trim().toUpperCase()).first<OrderRow>()
  );
  if (!order || order.email.toLowerCase() !== email) {
    return apiError(404, 'NOT_FOUND', 'Order not found', requestId);
  }
  if (order.status !== 'pending_shipping_quote') {
    return apiError(409, 'WRONG_STATE', `Order is ${order.status}, not awaiting quote acceptance`, requestId);
  }
  const quote = (
    await db
      .prepare(`SELECT * FROM shipping_quotes WHERE id = ?1 AND order_id = ?2`)
      .bind(quoteId, order.id)
      .first<ShippingQuoteRowLocal>()
  );
  if (!quote || quote.status !== 'proposed') {
    return apiError(404, 'QUOTE_NOT_FOUND', 'Quote not found or no longer proposed', requestId);
  }
  if (quote.expires_at <= nowIso()) {
    await db.prepare(`UPDATE shipping_quotes SET status = 'expired' WHERE id = ?1`).bind(quoteId).run();
    return apiError(410, 'QUOTE_EXPIRED', 'This shipping quote has expired', requestId);
  }

  // Accept quote, supersede other proposals, recompute tax on new shipping.
  const baseCents = order.subtotal_cents - order.discount_cents;
  const address = JSON.parse(order.shipping_address_json) as ShippingAddress;
  const taxLines = await matchTaxRules(db, address, baseCents, quote.amount_cents);
  const taxCents = taxLines.reduce((n, l) => n + l.taxAmountCents, 0);
  const totalCents = baseCents + quote.amount_cents + taxCents;
  const items = (
    await db
      .prepare(`SELECT variant_id, quantity FROM order_items WHERE order_id = ?1`)
      .bind(order.id)
      .all<{ variant_id: string; quantity: number }>()
  ).results;

  const stmts: D1PreparedStatement[] = [
    db
      .prepare(`UPDATE shipping_quotes SET status = 'accepted', accepted_at = ?1 WHERE id = ?2`)
      .bind(nowIso(), quoteId),
    db
      .prepare(
        `UPDATE shipping_quotes SET status = 'superseded' WHERE order_id = ?1 AND status = 'proposed' AND id != ?2`
      )
      .bind(order.id, quoteId),
    db
      .prepare(
        `UPDATE orders SET shipping_cents = ?1, tax_cents = ?2, total_cents = ?3,
           shipping_status = 'ready', updated_at = ?4 WHERE id = ?5`
      )
      .bind(quote.amount_cents, taxCents, totalCents, nowIso(), order.id),
    db.prepare(`DELETE FROM order_tax_lines WHERE order_id = ?1`).bind(order.id),
    ...taxLines.map((line) =>
      db
        .prepare(
          `INSERT INTO order_tax_lines (id, order_id, jurisdiction_code, tax_name, taxable_amount_cents,
             rate_basis_points, tax_amount_cents, applies_to_shipping)
           VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8)`
        )
        .bind(
          genId(),
          order.id,
          line.rule.region_code ?? line.rule.country_code,
          line.rule.region_code ? `${line.rule.country_code}-${line.rule.region_code} tax` : `${line.rule.country_code} tax`,
          baseCents + (line.rule.applies_to_shipping === 1 ? quote.amount_cents : 0),
          line.rule.rate_basis_points,
          line.taxAmountCents,
          line.rule.applies_to_shipping
        )
    ),
  ];
  await db.batch(stmts);

  const updatedOrder: OrderRow = {
    ...order,
    shipping_cents: quote.amount_cents,
    tax_cents: taxCents,
    total_cents: totalCents,
    shipping_status: 'ready',
  };
  let started: Awaited<ReturnType<typeof startStripeSession>>;
  try {
    started = await startStripeSession(
      db,
      env,
      updatedOrder,
      items.map((i) => ({ variantId: i.variant_id, quantity: i.quantity }))
    );
  } catch {
    // Network-level failure reaching Stripe: revert the quote so the customer
    // can retry, and release anything startStripeSession reserved.
    await releaseReservationsForOrder(db, order.id);
    await db
      .prepare(`UPDATE shipping_quotes SET status = 'proposed', accepted_at = NULL WHERE id = ?1`)
      .bind(quoteId)
      .run();
    await db
      .prepare(`UPDATE orders SET shipping_status = 'quoted', updated_at = ?1 WHERE id = ?2 AND status = 'pending_shipping_quote'`)
      .bind(nowIso(), order.id)
      .run();
    return apiError(502, 'STRIPE_UNREACHABLE', 'Payment provider could not be reached — the quote is still open, please try again', requestId);
  }
  if (!started.ok) {
    // Revert the quote so the customer can retry after a transient failure
    // (e.g. Stripe unreachable). startStripeSession already released any
    // reservations it had made.
    await db
      .prepare(`UPDATE shipping_quotes SET status = 'proposed', accepted_at = NULL WHERE id = ?1`)
      .bind(quoteId)
      .run();
    await db
      .prepare(`UPDATE orders SET shipping_status = 'quoted', updated_at = ?1 WHERE id = ?2 AND status = 'pending_shipping_quote'`)
      .bind(nowIso(), order.id)
      .run();
    return apiError(started.status, started.code, started.message, requestId);
  }
  return json({ orderNumber: order.order_number, checkoutUrl: started.checkoutUrl, requestId });
}

interface ShippingQuoteRowLocal {
  id: string;
  order_id: string;
  amount_cents: number;
  status: 'proposed' | 'accepted' | 'rejected' | 'expired' | 'superseded';
  expires_at: string;
}
