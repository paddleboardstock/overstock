import type { Env } from './types';
import { apiError, corsHeaders, json } from './lib/http';
import { sweepRateLimits } from './lib/rate-limit';
import { listProducts } from './routes/products';
import { acceptShippingQuote, createCheckout } from './routes/checkout';
import { handleStripeWebhook } from './routes/webhook';
import {
  adjustInventory,
  createShippingQuote,
  getOrder,
  listOrders,
  requireAdmin,
} from './routes/admin';

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const requestId = crypto.randomUUID();
    sweepRateLimits(Date.now());

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders(env) });
    }

    if (url.pathname === '/api/health' && request.method === 'GET') {
      return json(env, requestId, { ok: true, requestId });
    }

    if (url.pathname === '/api/products' && request.method === 'GET') {
      return listProducts(request, env, requestId);
    }

    if (url.pathname === '/api/checkout' && request.method === 'POST') {
      return createCheckout(request, env, requestId);
    }

    if (url.pathname === '/api/orders/accept-shipping-quote' && request.method === 'POST') {
      return acceptShippingQuote(request, env, requestId);
    }

    // Stripe webhook: no CORS, no session auth; signature verified inside.
    if (url.pathname === '/api/stripe/webhook') {
      return handleStripeWebhook(request, env);
    }

    if (url.pathname.startsWith('/api/admin/')) {
      const denied = await requireAdmin(request, env, requestId);
      if (denied) return denied;

      if (url.pathname === '/api/admin/orders' && request.method === 'GET') {
        return listOrders(request, env, requestId);
      }
      const orderMatch = url.pathname.match(/^\/api\/admin\/orders\/([^/]+)$/);
      if (orderMatch && request.method === 'GET') {
        return getOrder(request, env, requestId, decodeURIComponent(orderMatch[1]));
      }
      if (url.pathname === '/api/admin/inventory/adjust' && request.method === 'POST') {
        return adjustInventory(request, env, requestId);
      }
      if (url.pathname === '/api/admin/shipping-quotes' && request.method === 'POST') {
        return createShippingQuote(request, env, requestId);
      }
      return apiError(env, requestId, 'NOT_FOUND', 'Unknown admin endpoint', 404);
    }

    return apiError(env, requestId, 'NOT_FOUND', 'Not found', 404);
  },
};
