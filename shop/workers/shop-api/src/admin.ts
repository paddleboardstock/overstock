// Admin API: Bearer-token guarded operations for catalog, orders, quotes,
// shipments, refunds and commerce rules. Every mutation is audited.
//
// v0 auth: a single shared SHOP_ADMIN_TOKEN (constant-time compared).
// Upgrade path: reuse the main site's better-auth sessions — see
// docs/DEPLOYMENT.md.

import type { D1Database } from '@cloudflare/workers-types';
import { stripeRequest } from './stripe';
import { releaseReservationsForOrder } from './checkout';
import {
  adminAddImage,
  adminCreateProduct,
  adminCreateVariant,
  adminDeleteImage,
  adminListInventoryMovements,
  adminListProductsAll,
  adminSetInventory,
  adminUpdateProduct,
  adminUpdateVariant,
} from './products';
import type {
  DiscountRow,
  Env,
  OrderRow,
  PaymentRow,
  ShipmentRow,
  ShippingQuoteRow,
} from './types';
import {
  apiError,
  genId,
  isCountryCode,
  isCurrency,
  isEmail,
  isNonEmptyString,
  isNonNegativeInt,
  isPositiveInt,
  isUuid,
  json,
  nowIso,
  timingSafeEqual,
} from './util';

const ADMIN_ID = 'shop-admin-v0';

// ---------------------------------------------------------------------------
// Auth + audit
// ---------------------------------------------------------------------------

export function authAdmin(request: Request, env: Env): boolean {
  if (!env.SHOP_ADMIN_TOKEN) return false;
  const header = request.headers.get('Authorization') ?? '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : '';
  if (!token) return false;
  return timingSafeEqual(token, env.SHOP_ADMIN_TOKEN);
}

async function audit(
  db: D1Database,
  requestId: string,
  action: string,
  targetType: string,
  targetId: string | null,
  metadata: Record<string, unknown>
): Promise<void> {
  await db
    .prepare(
      `INSERT INTO admin_audit_logs (id, admin_id, action, target_type, target_id, metadata_json, request_id)
       VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7)`
    )
    .bind(genId(), ADMIN_ID, action, targetType, targetId, JSON.stringify(metadata), requestId)
    .run();
}

async function readJsonBody(request: Request): Promise<Record<string, unknown>> {
  const raw = await request.json().catch(() => null);
  return typeof raw === 'object' && raw !== null ? (raw as Record<string, unknown>) : {};
}

async function loadOrderByNumber(db: D1Database, orderNumber: string): Promise<OrderRow | null> {
  return (await db
    .prepare('SELECT * FROM orders WHERE order_number = ?1')
    .bind(orderNumber.trim().toUpperCase())
    .first<OrderRow>());
}

// ---------------------------------------------------------------------------
// Orders
// ---------------------------------------------------------------------------

const ORDER_STATUS_VALUES = new Set([
  'pending_shipping_quote',
  'pending_payment',
  'paid',
  'processing',
  'shipped',
  'completed',
  'cancelled',
  'payment_failed',
  'partially_refunded',
  'refunded',
]);

async function adminListOrders(db: D1Database, request: Request): Promise<Response> {
  const url = new URL(request.url);
  const status = url.searchParams.get('status');
  const limit = Math.min(200, Math.max(1, Number.parseInt(url.searchParams.get('limit') ?? '50', 10) || 50));
  const offset = Math.max(0, Number.parseInt(url.searchParams.get('offset') ?? '0', 10) || 0);
  const where = status && ORDER_STATUS_VALUES.has(status) ? 'WHERE status = ?1' : '';
  const bind = status && ORDER_STATUS_VALUES.has(status) ? [status, limit, offset] : [limit, offset];
  const rows = (
    await db
      .prepare(
        `SELECT id, order_number, email, status, currency, total_cents, shipping_status, created_at, updated_at
         FROM orders ${where} ORDER BY created_at DESC LIMIT ?${where ? '2' : '1'} OFFSET ?${where ? '3' : '2'}`
      )
      .bind(...bind)
      .all()
  ).results;
  const total = (
    (await db.prepare(`SELECT COUNT(*) AS n FROM orders ${where}`).bind(...(bind.length === 3 ? [status] : [])).first()) as {
      n: number;
    }
  )?.n ?? 0;
  return json({ orders: rows, total, limit, offset });
}

async function adminGetOrder(db: D1Database, orderNumber: string): Promise<Response> {
  const order = await loadOrderByNumber(db, orderNumber);
  if (!order) return apiError(404, 'NOT_FOUND', 'Order not found', '-');
  const items = (await db.prepare('SELECT * FROM order_items WHERE order_id = ?1').bind(order.id).all()).results;
  const payments = (await db.prepare('SELECT * FROM payments WHERE order_id = ?1').bind(order.id).all()).results;
  const quotes = (await db.prepare('SELECT * FROM shipping_quotes WHERE order_id = ?1 ORDER BY created_at DESC').bind(order.id).all()).results;
  const shipments = (await db.prepare('SELECT * FROM shipments WHERE order_id = ?1 ORDER BY created_at DESC').bind(order.id).all()).results;
  const refunds = (await db.prepare('SELECT * FROM refunds WHERE order_id = ?1 ORDER BY created_at DESC').bind(order.id).all()).results;
  const taxLines = (await db.prepare('SELECT * FROM order_tax_lines WHERE order_id = ?1').bind(order.id).all()).results;
  return json({ order, items, payments, quotes, shipments, refunds, taxLines });
}

/** Allowed manual status transitions. Refund-driven statuses are excluded. */
const MANUAL_TRANSITIONS: Record<string, Set<string>> = {
  paid: new Set(['processing', 'shipped', 'completed', 'cancelled']),
  processing: new Set(['shipped', 'completed', 'cancelled']),
  shipped: new Set(['completed', 'processing']),
  pending_payment: new Set(['cancelled', 'payment_failed']),
  payment_failed: new Set(['cancelled', 'pending_payment']),
  pending_shipping_quote: new Set(['cancelled']),
  completed: new Set([]),
  cancelled: new Set([]),
};

async function adminUpdateOrderStatus(
  db: D1Database,
  request: Request,
  env: Env,
  requestId: string,
  orderNumber: string
): Promise<Response> {
  const body = await readJsonBody(request);
  const status = body.status;
  if (typeof status !== 'string' || !ORDER_STATUS_VALUES.has(status)) {
    return apiError(400, 'BAD_STATUS', 'Unknown order status', requestId);
  }
  const order = await loadOrderByNumber(db, orderNumber);
  if (!order) return apiError(404, 'NOT_FOUND', 'Order not found', requestId);
  const allowed = MANUAL_TRANSITIONS[order.status] ?? new Set();
  if (!allowed.has(status)) {
    return apiError(409, 'INVALID_TRANSITION', `Cannot move order from ${order.status} to ${status}`, requestId);
  }
  // Cancelling an unpaid order releases any active stock reservations.
  if (status === 'cancelled') {
    await releaseReservationsForOrder(db, order.id);
  }
  await db
    .prepare(`UPDATE orders SET status = ?1, updated_at = ?2 WHERE id = ?3`)
    .bind(status, nowIso(), order.id)
    .run();
  await audit(db, requestId, 'order.status_update', 'order', order.order_number, { from: order.status, to: status });
  return json({ ok: true, orderNumber: order.order_number, status });
}

// ---------------------------------------------------------------------------
// Shipping quotes (manual quote flow)
// ---------------------------------------------------------------------------

async function adminCreateQuote(
  db: D1Database,
  request: Request,
  requestId: string,
  orderNumber: string
): Promise<Response> {
  const body = await readJsonBody(request);
  const order = await loadOrderByNumber(db, orderNumber);
  if (!order) return apiError(404, 'NOT_FOUND', 'Order not found', requestId);
  if (order.status !== 'pending_shipping_quote') {
    return apiError(409, 'WRONG_STATE', `Order is ${order.status}; quotes can only be added while awaiting one`, requestId);
  }
  const amountCents = body.amountCents;
  if (!isNonNegativeInt(amountCents, 10_000_000)) {
    return apiError(400, 'BAD_AMOUNT', 'amountCents must be a non-negative integer', requestId);
  }
  const currency = isCurrency(body.currency) ? body.currency : order.currency;
  if (currency !== order.currency) {
    return apiError(400, 'CURRENCY_MISMATCH', `Quote currency must match order currency (${order.currency})`, requestId);
  }
  const expiresHours = isPositiveInt(body.expiresInHours, 24 * 30) ? body.expiresInHours : 72;
  const quoteId = genId();
  const expiresAt = new Date(Date.now() + expiresHours * 3_600_000).toISOString();
  await db.batch([
    // Supersede previous open proposals so the customer sees exactly one.
    db
      .prepare(`UPDATE shipping_quotes SET status = 'superseded' WHERE order_id = ?1 AND status = 'proposed'`)
      .bind(order.id),
    db
      .prepare(
        `INSERT INTO shipping_quotes (id, order_id, currency, amount_cents, carrier_name, service_name, notes, expires_at, created_by_admin_id)
         VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9)`
      )
      .bind(
        quoteId,
        order.id,
        currency,
        amountCents,
        isNonEmptyString(body.carrierName, 120) ? body.carrierName : null,
        isNonEmptyString(body.serviceName, 120) ? body.serviceName : null,
        isNonEmptyString(body.notes, 1000) ? body.notes : null,
        expiresAt,
        ADMIN_ID
      ),
    db
      .prepare(`UPDATE orders SET shipping_status = 'quoted', updated_at = ?1 WHERE id = ?2`)
      .bind(nowIso(), order.id),
  ]);
  await audit(db, requestId, 'quote.create', 'shipping_quote', quoteId, {
    orderNumber: order.order_number,
    amountCents,
    expiresAt,
  });
  return json({ quote: { id: quoteId, amountCents, currency, expiresAt } }, 201);
}

// ---------------------------------------------------------------------------
// Shipments
// ---------------------------------------------------------------------------

const SHIPMENT_STATUSES = new Set([
  'pending',
  'label_created',
  'shipped',
  'in_transit',
  'delivered',
  'exception',
  'returned',
]);

async function adminCreateShipment(
  db: D1Database,
  request: Request,
  requestId: string,
  orderNumber: string
): Promise<Response> {
  const body = await readJsonBody(request);
  const order = await loadOrderByNumber(db, orderNumber);
  if (!order) return apiError(404, 'NOT_FOUND', 'Order not found', requestId);
  if (order.status !== 'paid' && order.status !== 'processing' && order.status !== 'shipped') {
    return apiError(409, 'WRONG_STATE', `Order is ${order.status}; shipments require a paid order`, requestId);
  }
  const status = typeof body.status === 'string' && SHIPMENT_STATUSES.has(body.status) ? body.status : 'pending';
  const id = genId();
  const shippedAt = status === 'shipped' || status === 'in_transit' || status === 'delivered' ? nowIso() : null;
  await db.batch([
    db
      .prepare(
        `INSERT INTO shipments (id, order_id, carrier, tracking_number, tracking_url, status, shipped_at)
         VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7)`
      )
      .bind(
        id,
        order.id,
        isNonEmptyString(body.carrier, 120) ? body.carrier : null,
        isNonEmptyString(body.trackingNumber, 200) ? body.trackingNumber : null,
        isNonEmptyString(body.trackingUrl, 2000) ? body.trackingUrl : null,
        status,
        shippedAt
      ),
    db
      .prepare(
        `UPDATE orders SET shipping_status = 'shipped',
           status = CASE WHEN ?1 IN ('shipped','in_transit','delivered') AND status IN ('paid','processing') THEN 'shipped' ELSE status END,
           updated_at = ?2 WHERE id = ?3`
      )
      .bind(status, nowIso(), order.id),
  ]);
  await audit(db, requestId, 'shipment.create', 'shipment', id, { orderNumber: order.order_number, status });
  return json({ shipment: { id, status } }, 201);
}

async function adminUpdateShipment(db: D1Database, request: Request, requestId: string, id: string): Promise<Response> {
  if (!isUuid(id)) return apiError(400, 'BAD_ID', 'Invalid shipment id', requestId);
  const shipment = (await db.prepare('SELECT * FROM shipments WHERE id = ?1').bind(id).first<ShipmentRow>());
  if (!shipment) return apiError(404, 'NOT_FOUND', 'Shipment not found', requestId);
  const body = await readJsonBody(request);
  const sets: string[] = [];
  const bind: unknown[] = [];
  if (isNonEmptyString(body.carrier, 120) || body.carrier === null) {
    sets.push('carrier = ?');
    bind.push(body.carrier ?? null);
  }
  if (isNonEmptyString(body.trackingNumber, 200) || body.trackingNumber === null) {
    sets.push('tracking_number = ?');
    bind.push(body.trackingNumber ?? null);
  }
  if (isNonEmptyString(body.trackingUrl, 2000) || body.trackingUrl === null) {
    sets.push('tracking_url = ?');
    bind.push(body.trackingUrl ?? null);
  }
  if (typeof body.status === 'string' && SHIPMENT_STATUSES.has(body.status)) {
    sets.push('status = ?');
    bind.push(body.status);
    if ((body.status === 'shipped' || body.status === 'in_transit' || body.status === 'delivered') && !shipment.shipped_at) {
      sets.push('shipped_at = ?');
      bind.push(nowIso());
    }
    if (body.status === 'delivered' && !shipment.delivered_at) {
      sets.push('delivered_at = ?');
      bind.push(nowIso());
    }
  }
  if (sets.length === 0) return apiError(400, 'NO_FIELDS', 'Nothing to update', requestId);
  sets.push('updated_at = ?');
  bind.push(nowIso(), id);
  await db.prepare(`UPDATE shipments SET ${sets.join(', ')} WHERE id = ?`).bind(...bind).run();
  await audit(db, requestId, 'shipment.update', 'shipment', id, body);
  return json({ ok: true });
}

// ---------------------------------------------------------------------------
// Refunds (Stripe REST)
// ---------------------------------------------------------------------------

async function adminRefundOrder(
  db: D1Database,
  request: Request,
  env: Env,
  requestId: string,
  orderNumber: string
): Promise<Response> {
  const body = await readJsonBody(request);
  const order = await loadOrderByNumber(db, orderNumber);
  if (!order) return apiError(404, 'NOT_FOUND', 'Order not found', requestId);
  if (order.status !== 'paid' && order.status !== 'partially_refunded' && order.status !== 'processing') {
    return apiError(409, 'WRONG_STATE', `Order is ${order.status}; only paid orders can be refunded`, requestId);
  }
  const payment = (
    (await db
      .prepare(
        `SELECT * FROM payments WHERE order_id = ?1 AND status IN ('succeeded','partially_refunded') ORDER BY created_at DESC LIMIT 1`
      )
      .bind(order.id)
      .first<PaymentRow>()) ?? null
  );
  if (!payment || !payment.stripe_payment_intent_id) {
    return apiError(409, 'NO_PAYMENT', 'No succeeded Stripe payment found for this order', requestId);
  }
  const refundable = payment.amount_cents - payment.refunded_cents;
  if (refundable <= 0) return apiError(409, 'ALREADY_REFUNDED', 'Payment is fully refunded', requestId);
  const amountCents = isPositiveInt(body.amountCents, refundable) ? body.amountCents : refundable;
  if (amountCents > refundable) {
    return apiError(400, 'BAD_AMOUNT', `amountCents exceeds refundable amount (${refundable})`, requestId);
  }
  const refundId = genId();
  const reason = isNonEmptyString(body.reason, 500) ? body.reason : null;

  const res = await stripeRequest<{ id: string; status: string }>(
    env,
    'POST',
    '/refunds',
    {
      payment_intent: payment.stripe_payment_intent_id,
      amount: String(amountCents),
    },
    refundId
  );
  if (!res.ok || !(res.body as { id?: string }).id) {
    return apiError(502, 'STRIPE_REFUND_FAILED', 'Stripe rejected the refund request', requestId);
  }
  const stripeRefund = res.body as { id: string; status: string };
  const newRefunded = payment.refunded_cents + amountCents;
  const paymentStatus = newRefunded >= payment.amount_cents ? 'refunded' : 'partially_refunded';
  const orderStatus = newRefunded >= payment.amount_cents ? 'refunded' : 'partially_refunded';
  await db.batch([
    db
      .prepare(
        `INSERT INTO refunds (id, order_id, payment_id, stripe_refund_id, amount_cents, currency, status, reason, created_by_admin_id)
         VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9)`
      )
      .bind(refundId, order.id, payment.id, stripeRefund.id, amountCents, order.currency, 'succeeded', reason, ADMIN_ID),
    db
      .prepare(`UPDATE payments SET refunded_cents = ?1, status = ?2, updated_at = ?3 WHERE id = ?4`)
      .bind(newRefunded, paymentStatus, nowIso(), payment.id),
    db.prepare(`UPDATE orders SET status = ?1, updated_at = ?2 WHERE id = ?3`).bind(orderStatus, nowIso(), order.id),
  ]);
  await audit(db, requestId, 'refund.create', 'refund', refundId, {
    orderNumber: order.order_number,
    amountCents,
    stripeRefundId: stripeRefund.id,
  });
  return json({ refund: { id: refundId, amountCents, status: 'succeeded' }, orderStatus }, 201);
}

// ---------------------------------------------------------------------------
// Shipping rules / tax rules / discounts CRUD
// ---------------------------------------------------------------------------

async function adminListRules(db: D1Database, table: 'shipping_rules' | 'tax_rules' | 'discounts'): Promise<Response> {
  const rows = (await db.prepare(`SELECT * FROM ${table} ORDER BY created_at DESC`).all()).results;
  return json({ [table]: rows });
}

async function adminCreateShippingRule(db: D1Database, request: Request, requestId: string): Promise<Response> {
  const body = await readJsonBody(request);
  if (!isNonEmptyString(body.name, 200)) return apiError(400, 'BAD_NAME', 'Rule name is required', requestId);
  if (!isCountryCode(body.countryCode)) return apiError(400, 'BAD_COUNTRY', 'countryCode must be 2 letters', requestId);
  const mode = body.mode === 'flat' || body.mode === 'manual_quote' ? body.mode : null;
  if (!mode) return apiError(400, 'BAD_MODE', "mode must be 'flat' or 'manual_quote'", requestId);
  if (mode === 'flat' && !isNonNegativeInt(body.amountCents, 1_000_000)) {
    return apiError(400, 'BAD_AMOUNT', 'flat rules require amountCents', requestId);
  }
  const id = genId();
  await db
    .prepare(
      `INSERT INTO shipping_rules (id, name, country_code, region_code, postal_prefix, currency, amount_cents, mode, active)
       VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9)`
    )
    .bind(
      id,
      body.name.trim(),
      String(body.countryCode).toUpperCase(),
      isNonEmptyString(body.regionCode, 20) ? String(body.regionCode).toUpperCase() : null,
      isNonEmptyString(body.postalPrefix, 12) ? String(body.postalPrefix).toUpperCase() : null,
      isCurrency(body.currency) ? body.currency : 'usd',
      mode === 'flat' ? body.amountCents : null,
      mode,
      body.active === 0 ? 0 : 1
    )
    .run();
  await audit(db, requestId, 'shipping_rule.create', 'shipping_rule', id, body);
  return json({ rule: { id } }, 201);
}

async function adminToggleRule(
  db: D1Database,
  request: Request,
  requestId: string,
  table: 'shipping_rules' | 'tax_rules' | 'discounts',
  id: string
): Promise<Response> {
  if (!isUuid(id)) return apiError(400, 'BAD_ID', 'Invalid id', requestId);
  const body = await readJsonBody(request);
  if (body.active !== 0 && body.active !== 1) {
    return apiError(400, 'BAD_ACTIVE', 'active must be 0 or 1', requestId);
  }
  const res = await db.prepare(`UPDATE ${table} SET active = ?1 WHERE id = ?2`).bind(body.active, id).run();
  if (res.meta.changes === 0) return apiError(404, 'NOT_FOUND', 'Rule not found', requestId);
  await audit(db, requestId, `${table}.toggle`, table, id, body);
  return json({ ok: true });
}

async function adminDeleteRule(
  db: D1Database,
  requestId: string,
  table: 'shipping_rules' | 'tax_rules' | 'discounts',
  id: string
): Promise<Response> {
  if (!isUuid(id)) return apiError(400, 'BAD_ID', 'Invalid id', requestId);
  const res = await db.prepare(`DELETE FROM ${table} WHERE id = ?1`).bind(id).run();
  if (res.meta.changes === 0) return apiError(404, 'NOT_FOUND', 'Rule not found', requestId);
  await audit(db, requestId, `${table}.delete`, table, id, {});
  return json({ ok: true });
}

async function adminCreateTaxRule(db: D1Database, request: Request, requestId: string): Promise<Response> {
  const body = await readJsonBody(request);
  if (!isCountryCode(body.countryCode)) return apiError(400, 'BAD_COUNTRY', 'countryCode must be 2 letters', requestId);
  if (!isNonNegativeInt(body.rateBasisPoints, 10_000)) {
    return apiError(400, 'BAD_RATE', 'rateBasisPoints must be 0-10000', requestId);
  }
  const id = genId();
  await db
    .prepare(
      `INSERT INTO tax_rules (id, country_code, region_code, postal_prefix, rate_basis_points, applies_to_shipping, active, effective_from, effective_until)
       VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9)`
    )
    .bind(
      id,
      String(body.countryCode).toUpperCase(),
      isNonEmptyString(body.regionCode, 20) ? String(body.regionCode).toUpperCase() : null,
      isNonEmptyString(body.postalPrefix, 12) ? String(body.postalPrefix).toUpperCase() : null,
      body.rateBasisPoints,
      body.appliesToShipping === 1 ? 1 : 0,
      body.active === 0 ? 0 : 1,
      isNonEmptyString(body.effectiveFrom, 10) ? body.effectiveFrom : null,
      isNonEmptyString(body.effectiveUntil, 10) ? body.effectiveUntil : null
    )
    .run();
  await audit(db, requestId, 'tax_rule.create', 'tax_rule', id, body);
  return json({ rule: { id } }, 201);
}

async function adminCreateDiscount(db: D1Database, request: Request, requestId: string): Promise<Response> {
  const body = await readJsonBody(request);
  if (!isNonEmptyString(body.code, 64)) return apiError(400, 'BAD_CODE', 'Discount code is required', requestId);
  const discountType = body.discountType === 'percent' || body.discountType === 'fixed' ? body.discountType : null;
  if (!discountType) return apiError(400, 'BAD_TYPE', "discountType must be 'percent' or 'fixed'", requestId);
  if (!isPositiveInt(body.value, discountType === 'percent' ? 100 : 100_000_000)) {
    return apiError(400, 'BAD_VALUE', 'value must be a positive integer', requestId);
  }
  if (discountType === 'percent' && body.value > 100) {
    return apiError(400, 'BAD_VALUE', 'percent value cannot exceed 100', requestId);
  }
  const currency = isCurrency(body.currency) ? body.currency : null;
  if (discountType === 'fixed' && !currency) {
    return apiError(400, 'BAD_CURRENCY', 'fixed discounts require a currency', requestId);
  }
  const id = genId();
  try {
    await db
      .prepare(
        `INSERT INTO discounts (id, code, discount_type, value, currency, starts_at, expires_at, usage_limit, active)
         VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9)`
      )
      .bind(
        id,
        body.code.trim().toUpperCase(),
        discountType,
        body.value,
        currency,
        isNonEmptyString(body.startsAt, 40) ? body.startsAt : null,
        isNonEmptyString(body.expiresAt, 40) ? body.expiresAt : null,
        isPositiveInt(body.usageLimit, 1_000_000) ? body.usageLimit : null,
        body.active === 0 ? 0 : 1
      )
      .run();
  } catch (error) {
    const msg = error instanceof Error ? error.message : '';
    if (msg.includes('UNIQUE')) {
      return apiError(409, 'CODE_TAKEN', 'Discount code already exists', requestId);
    }
    throw error;
  }
  await audit(db, requestId, 'discount.create', 'discount', id, body);
  return json({ discount: { id } }, 201);
}

async function adminGetAudit(db: D1Database, request: Request): Promise<Response> {
  const url = new URL(request.url);
  const limit = Math.min(200, Math.max(1, Number.parseInt(url.searchParams.get('limit') ?? '100', 10) || 100));
  const rows = (
    await db.prepare('SELECT * FROM admin_audit_logs ORDER BY created_at DESC LIMIT ?1').bind(limit).all()
  ).results;
  return json({ auditLogs: rows });
}

// ---------------------------------------------------------------------------
// Router for /api/admin/*
// ---------------------------------------------------------------------------

export async function handleAdminRoute(
  request: Request,
  env: Env,
  requestId: string
): Promise<Response> {
  const db = env.SHOP_DB;
  const url = new URL(request.url);
  const segments = url.pathname.replace(/^\/api\/admin\/?/, '').split('/').filter(Boolean);
  const method = request.method;

  if (segments.length === 0) {
    return apiError(404, 'NOT_FOUND', 'Unknown admin endpoint', requestId);
  }

  const [root, second, third] = segments;

  // Catalog ---------------------------------------------------------------
  if (root === 'products' && segments.length === 1) {
    if (method === 'GET') return adminListProductsAll(db);
    if (method === 'POST') {
      const res = await adminCreateProduct(db, await readJsonBody(request));
      if (res.status === 201) await audit(db, requestId, 'product.create', 'product', null, {});
      return res;
    }
  }
  if (root === 'products' && isUuid(second) && segments.length === 2 && method === 'PATCH') {
    const res = await adminUpdateProduct(db, second, await readJsonBody(request));
    if (res.status === 200) await audit(db, requestId, 'product.update', 'product', second, {});
    return res;
  }
  if (root === 'products' && isUuid(second) && third === 'images' && segments.length === 3 && method === 'POST') {
    const res = await adminAddImage(db, second, await readJsonBody(request));
    if (res.status === 201) await audit(db, requestId, 'image.add', 'product', second, {});
    return res;
  }
  if (root === 'products' && isUuid(second) && third === 'variants' && segments.length === 3 && method === 'POST') {
    const res = await adminCreateVariant(db, second, await readJsonBody(request));
    if (res.status === 201) await audit(db, requestId, 'variant.create', 'product', second, {});
    return res;
  }
  if (root === 'images' && isUuid(second) && segments.length === 2 && method === 'DELETE') {
    const res = await adminDeleteImage(db, second);
    if (res.status === 200) await audit(db, requestId, 'image.delete', 'image', second, {});
    return res;
  }
  if (root === 'variants' && isUuid(second) && segments.length === 2 && method === 'PATCH') {
    const res = await adminUpdateVariant(db, second, await readJsonBody(request));
    if (res.status === 200) await audit(db, requestId, 'variant.update', 'variant', second, {});
    return res;
  }
  if (root === 'inventory' && isUuid(second) && segments.length === 2 && method === 'POST') {
    const res = await adminSetInventory(db, second, await readJsonBody(request), ADMIN_ID);
    if (res.status === 200) await audit(db, requestId, 'inventory.set', 'variant', second, {});
    return res;
  }
  if (root === 'inventory' && isUuid(second) && third === 'movements' && segments.length === 3 && method === 'GET') {
    return adminListInventoryMovements(db, second);
  }

  // Orders ------------------------------------------------------------------
  if (root === 'orders' && segments.length === 1 && method === 'GET') {
    return adminListOrders(db, request);
  }
  if (root === 'orders' && isNonEmptyString(second, 40) && segments.length === 2) {
    if (method === 'GET') return adminGetOrder(db, second);
    if (method === 'PATCH') return adminUpdateOrderStatus(db, request, env, requestId, second);
  }
  if (root === 'orders' && isNonEmptyString(second, 40) && third === 'quotes' && segments.length === 3 && method === 'POST') {
    return adminCreateQuote(db, request, requestId, second);
  }
  if (root === 'orders' && isNonEmptyString(second, 40) && third === 'shipments' && segments.length === 3 && method === 'POST') {
    return adminCreateShipment(db, request, requestId, second);
  }
  if (root === 'orders' && isNonEmptyString(second, 40) && third === 'refund' && segments.length === 3 && method === 'POST') {
    return adminRefundOrder(db, request, env, requestId, second);
  }
  if (root === 'shipments' && isUuid(second) && segments.length === 2 && method === 'PATCH') {
    return adminUpdateShipment(db, request, requestId, second);
  }

  // Commerce rules ------------------------------------------------------------
  if (root === 'shipping-rules' && segments.length === 1) {
    if (method === 'GET') return adminListRules(db, 'shipping_rules');
    if (method === 'POST') return adminCreateShippingRule(db, request, requestId);
  }
  if (root === 'shipping-rules' && isUuid(second) && segments.length === 2) {
    if (method === 'PATCH') return adminToggleRule(db, request, requestId, 'shipping_rules', second);
    if (method === 'DELETE') return adminDeleteRule(db, requestId, 'shipping_rules', second);
  }
  if (root === 'tax-rules' && segments.length === 1) {
    if (method === 'GET') return adminListRules(db, 'tax_rules');
    if (method === 'POST') return adminCreateTaxRule(db, request, requestId);
  }
  if (root === 'tax-rules' && isUuid(second) && segments.length === 2) {
    if (method === 'PATCH') return adminToggleRule(db, request, requestId, 'tax_rules', second);
    if (method === 'DELETE') return adminDeleteRule(db, requestId, 'tax_rules', second);
  }
  if (root === 'discounts' && segments.length === 1) {
    if (method === 'GET') return adminListRules(db, 'discounts');
    if (method === 'POST') return adminCreateDiscount(db, request, requestId);
  }
  if (root === 'discounts' && isUuid(second) && segments.length === 2) {
    if (method === 'PATCH') return adminToggleRule(db, request, requestId, 'discounts', second);
    if (method === 'DELETE') return adminDeleteRule(db, requestId, 'discounts', second);
  }

  // Audit ---------------------------------------------------------------------
  if (root === 'audit' && segments.length === 1 && method === 'GET') {
    return adminGetAudit(db, request);
  }

  return apiError(404, 'NOT_FOUND', 'Unknown admin endpoint', requestId);
}
