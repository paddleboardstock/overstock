// Worker entrypoint: request routing, CORS and scheduled maintenance.

import { handleAdminRoute, authAdmin } from './admin';
import { handleCheckoutSession, handleOrderLookup, handleQuoteAccept } from './checkout';
import { handleGetProduct, handleListProducts } from './products';
import { handleStripeWebhook } from './webhook';
import type { Env } from './types';
import { apiError, corsHeaders, isNonEmptyString, json, nowIso } from './util';

function withCors(response: Response, request: Request, env: Env): Response {
  const headers = new Headers(response.headers);
  for (const [k, v] of Object.entries(corsHeaders(request, env))) headers.set(k, v);
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
}

async function route(request: Request, env: Env, requestId: string): Promise<Response> {
  const url = new URL(request.url);
  const path = url.pathname;
  const method = request.method;
  const db = env.SHOP_DB;

  if (path === '/api/health') {
    return json({ ok: true, time: nowIso() });
  }

  if (path === '/api/products' && method === 'GET') {
    return handleListProducts(db, request);
  }

  const productMatch = path.match(/^\/api\/products\/([a-z0-9-]+)$/);
  if (productMatch && method === 'GET') {
    return handleGetProduct(db, productMatch[1]);
  }

  if (path === '/api/checkout/session' && method === 'POST') {
    return handleCheckoutSession(request, env, requestId);
  }

  const orderMatch = path.match(/^\/api\/orders\/([A-Za-z0-9-]+)$/);
  if (orderMatch && method === 'GET') {
    return handleOrderLookup(request, env, orderMatch[1], requestId);
  }

  const quoteAcceptMatch = path.match(/^\/api\/orders\/([A-Za-z0-9-]+)\/quote\/accept$/);
  if (quoteAcceptMatch && method === 'POST') {
    return handleQuoteAccept(request, env, quoteAcceptMatch[1], requestId);
  }

  if (path === '/api/stripe/webhook' && method === 'POST') {
    return handleStripeWebhook(request, env, requestId);
  }

  if (path === '/api/admin' || path.startsWith('/api/admin/')) {
    if (!authAdmin(request, env)) {
      return apiError(401, 'UNAUTHORIZED', 'Missing or invalid admin token', requestId);
    }
    return handleAdminRoute(request, env, requestId);
  }

  return apiError(404, 'NOT_FOUND', 'Unknown endpoint', requestId);
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const requestId = crypto.randomUUID().slice(0, 8);
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders(request, env) });
    }
    try {
      const response = await route(request, env, requestId);
      // Webhook responses must be returned verbatim (no CORS leakage).
      if (new URL(request.url).pathname === '/api/stripe/webhook') return response;
      return withCors(response, request, env);
    } catch (error) {
      console.error(`[${requestId}]`, error);
      return apiError(500, 'INTERNAL_ERROR', 'Unexpected server error', requestId);
    }
  },

  async scheduled(controller: ScheduledController, env: Env, ctx: ExecutionContext): Promise<void> {
    const db = env.SHOP_DB;
    const now = nowIso();

    // 1. Expire stale active reservations and cancel their unpaid orders.
    const expired = (
      await db
        .prepare(
          `SELECT DISTINCT order_id FROM inventory_reservations WHERE status = 'active' AND expires_at <= ?1`
        )
        .bind(now)
        .all<{ order_id: string }>()
    ).results;
    for (const row of expired) {
      await db
        .prepare(
          `UPDATE inventory SET reserved = reserved - (
             SELECT COALESCE(SUM(quantity), 0) FROM inventory_reservations
             WHERE order_id = ?1 AND status = 'active' AND expires_at <= ?2
           ), updated_at = ?2 WHERE variant_id IN (
             SELECT variant_id FROM inventory_reservations
             WHERE order_id = ?1 AND status = 'active' AND expires_at <= ?2
           ) AND reserved >= (
             SELECT COALESCE(SUM(quantity), 0) FROM inventory_reservations
             WHERE order_id = ?1 AND status = 'active' AND expires_at <= ?2
             AND inventory_reservations.variant_id = inventory.variant_id
           )`
        )
        .bind(row.order_id, now)
        .run();
      await db
        .prepare(
          `UPDATE inventory_reservations SET status = 'expired', updated_at = ?1
           WHERE order_id = ?2 AND status = 'active' AND expires_at <= ?1`
        )
        .bind(now, row.order_id)
        .run();
      await db
        .prepare(
          `UPDATE orders SET status = 'cancelled', updated_at = ?1
           WHERE id = ?2 AND status = 'pending_payment'`
        )
        .bind(now, row.order_id)
        .run();
    }

    // 2. Expire proposed shipping quotes whose window has passed.
    await db
      .prepare(`UPDATE shipping_quotes SET status = 'expired' WHERE status = 'proposed' AND expires_at <= ?1`)
      .bind(now)
      .run();

    // 3. Garbage-collect rate-limit rows and stale carts.
    await db.prepare(`DELETE FROM rate_limit WHERE updated_at < unixepoch() - 86400`).run();
    await db.prepare(`DELETE FROM carts WHERE expires_at <= ?1`).bind(now).run();
  },
};
