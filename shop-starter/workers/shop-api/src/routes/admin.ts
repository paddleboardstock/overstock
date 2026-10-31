import { z } from 'zod';
import type { Env } from '../types';
import { apiError, clientIp, corsHeaders, json, readJson } from '../lib/http';
import { rateLimit } from '../lib/rate-limit';
import { isoPlusMs, nowIso, timingSafeEqual, uuid } from '../lib/util';

const adjustSchema = z.object({
  variantId: z.string().min(1).max(64),
  deltaQty: z.number().int().refine((v) => v !== 0, 'Must be non-zero'),
  reason: z.enum(['opening_stock', 'restock', 'manual_adjustment', 'return_restock', 'damage']),
  note: z.string().max(500).optional(),
});

const quoteSchema = z.object({
  orderNumber: z.string().min(6).max(40),
  amountCents: z.number().int().min(0),
  carrierName: z.string().max(120).optional(),
  serviceName: z.string().max(120).optional(),
  notes: z.string().max(500).optional(),
  expiresInHours: z.number().int().min(1).max(336).default(72),
});

export async function requireAdmin(
  request: Request,
  env: Env,
  requestId: string,
): Promise<Response | null> {
  const limited = rateLimit(`admin:${clientIp(request)}`, 60, 60_000);
  if (!limited.ok) {
    return new Response(null, {
      status: 429,
      headers: { 'Retry-After': String(limited.retryAfterSeconds), 'X-Request-Id': requestId },
    });
  }
  const origin = request.headers.get('Origin');
  if (origin && origin !== env.APP_ORIGIN && origin !== env.API_ORIGIN) {
    return apiError(env, requestId, 'BAD_ORIGIN', 'Cross-origin admin requests are not allowed', 403);
  }
  const auth = request.headers.get('Authorization') ?? '';
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : '';
  if (!token || !(await timingSafeEqual(token, env.SHOP_ADMIN_TOKEN))) {
    return apiError(env, requestId, 'UNAUTHORIZED', 'Admin authentication required', 401);
  }
  return null;
}

export async function listOrders(
  request: Request,
  env: Env,
  requestId: string,
): Promise<Response> {
  const url = new URL(request.url);
  const status = url.searchParams.get('status');
  const limit = Math.min(Math.max(Number(url.searchParams.get('limit') ?? 50), 1), 200);
  const rows = await env.SHOP_DB.prepare(
    status
      ? 'SELECT id, order_number, email, status, currency, subtotal_cents, shipping_cents, discount_cents, tax_cents, total_cents, created_at FROM orders WHERE status = ?1 ORDER BY created_at DESC LIMIT ?2'
      : 'SELECT id, order_number, email, status, currency, subtotal_cents, shipping_cents, discount_cents, tax_cents, total_cents, created_at FROM orders ORDER BY created_at DESC LIMIT ?1',
  )
    .bind(...(status ? [status, limit] : [limit]))
    .all();
  return json(env, requestId, { items: rows.results ?? [] });
}

export async function getOrder(
  request: Request,
  env: Env,
  requestId: string,
  orderNumberParam: string,
): Promise<Response> {
  const order = await env.SHOP_DB.prepare(
    'SELECT id, order_number, email, status, currency, subtotal_cents, shipping_cents, discount_cents, tax_cents, total_cents, shipping_status, shipping_address_json, paid_at, created_at FROM orders WHERE order_number = ?1',
  )
    .bind(orderNumberParam)
    .first();
  if (!order) {
    return apiError(env, requestId, 'NOT_FOUND', `No order ${orderNumberParam}`, 404);
  }
  const items = await env.SHOP_DB.prepare(
    'SELECT id, variant_id, sku_snapshot, title_snapshot, variant_snapshot, unit_price_cents, quantity, line_total_cents FROM order_items WHERE order_id = ?1',
  )
    .bind((order as { id: string }).id)
    .all();
  const payments = await env.SHOP_DB.prepare(
    'SELECT id, provider, amount_cents, currency, status, refunded_cents, stripe_session_id, created_at FROM payments WHERE order_id = ?1',
  )
    .bind((order as { id: string }).id)
    .all();
  const reservations = await env.SHOP_DB.prepare(
    'SELECT id, variant_id, quantity, status, expires_at FROM inventory_reservations WHERE order_id = ?1',
  )
    .bind((order as { id: string }).id)
    .all();
  return json(env, requestId, { order, items: items.results ?? [], payments: payments.results ?? [], reservations: reservations.results ?? [] });
}

export async function adjustInventory(
  request: Request,
  env: Env,
  requestId: string,
): Promise<Response> {
  const parsed = adjustSchema.safeParse(await readJson(request));
  if (!parsed.success) {
    return apiError(env, requestId, 'INVALID_REQUEST', 'Invalid inventory adjustment', 400);
  }
  const { variantId, deltaQty, reason, note } = parsed.data;
  const now = nowIso();
  const adminId = 'token-admin';
  let updated: D1Result;
  try {
    updated = await env.SHOP_DB.prepare(
      'UPDATE inventory SET on_hand = on_hand + ?1, updated_at = ?2 WHERE variant_id = ?3',
    )
      .bind(deltaQty, now, variantId)
      .run();
  } catch {
    return apiError(env, requestId, 'INVENTORY_CONSTRAINT', 'Adjustment would take on_hand below zero', 400);
  }
  if ((updated.meta.changes ?? 0) === 0) {
    return apiError(env, requestId, 'NOT_FOUND', `No inventory row for variant ${variantId}`, 404);
  }
  await env.SHOP_DB.batch([
    env.SHOP_DB.prepare(
      'INSERT INTO inventory_movements (id, variant_id, change_qty, reason, admin_id, note) VALUES (?1, ?2, ?3, ?4, ?5, ?6)',
    ).bind(uuid(), variantId, deltaQty, reason, adminId, note ?? null),
    env.SHOP_DB.prepare(
      'INSERT INTO admin_audit_logs (id, admin_id, action, target_type, target_id, metadata_json, request_id) VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7)',
    ).bind(uuid(), adminId, 'inventory.adjust', 'variant', variantId, JSON.stringify({ deltaQty, reason }), requestId),
  ]);
  return json(env, requestId, { ok: true, variantId, deltaQty });
}

export async function createShippingQuote(
  request: Request,
  env: Env,
  requestId: string,
): Promise<Response> {
  const parsed = quoteSchema.safeParse(await readJson(request));
  if (!parsed.success) {
    return apiError(env, requestId, 'INVALID_REQUEST', 'Invalid shipping quote', 400);
  }
  const { orderNumber, amountCents, carrierName, serviceName, notes, expiresInHours } = parsed.data;
  const order = await env.SHOP_DB.prepare(
    "SELECT id, currency FROM orders WHERE order_number = ?1 AND status = 'pending_shipping_quote'",
  )
    .bind(orderNumber)
    .first<{ id: string; currency: string }>();
  if (!order) {
    return apiError(env, requestId, 'NOT_FOUND', `No order ${orderNumber} awaiting a quote`, 404);
  }
  const quoteId = uuid();
  const now = nowIso();
  const adminId = 'token-admin';
  await env.SHOP_DB.batch([
    env.SHOP_DB.prepare(
      "INSERT INTO shipping_quotes (id, order_id, currency, amount_cents, carrier_name, service_name, notes, status, expires_at, created_by_admin_id) VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, 'proposed', ?8, ?9)",
    ).bind(quoteId, order.id, order.currency, amountCents, carrierName ?? null, serviceName ?? null, notes ?? null, isoPlusMs(expiresInHours * 3600 * 1000), adminId),
    env.SHOP_DB.prepare(
      'INSERT INTO admin_audit_logs (id, admin_id, action, target_type, target_id, metadata_json, request_id) VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7)',
    ).bind(uuid(), adminId, 'shipping_quote.create', 'order', order.id, JSON.stringify({ amountCents }), requestId),
  ]);
  return json(env, requestId, { quoteId, orderNumber, amountCents, expiresAt: isoPlusMs(expiresInHours * 3600 * 1000) }, 201, { ...corsHeaders(env) });
}
