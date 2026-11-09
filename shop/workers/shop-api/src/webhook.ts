// Stripe webhook: signature-verified, idempotent event processing.
// Payment state changes ONLY here (plus explicit admin refunds) — never on
// the client success page.

import type { D1Database } from '@cloudflare/workers-types';
import { verifyStripeSignature } from './stripe';
import { consumeReservationsForOrder, releaseReservationsForOrder } from './checkout';
import type { Env, PaymentRow } from './types';
import { apiError, json, nowIso } from './util';

interface StripeEvent {
  id: string;
  type: string;
  data: {
    object: {
      id: string;
      object?: string;
      payment_status?: string;
      payment_intent?: string | null;
      amount_total?: number | null;
      amount_subtotal?: number | null;
      currency?: string | null;
      amount_refunded?: number;
      metadata?: Record<string, string>;
    };
  };
}

function markEvent(db: D1Database, eventId: string, status: string, errorCode?: string): Promise<unknown> {
  return db
    .prepare(`UPDATE stripe_events SET processing_status = ?1, error_code = ?2, processed_at = ?3 WHERE event_id = ?4`)
    .bind(status, errorCode ?? null, nowIso(), eventId)
    .run();
}

async function paymentBySession(db: D1Database, sessionId: string): Promise<PaymentRow | null> {
  return (await db
    .prepare(`SELECT * FROM payments WHERE stripe_session_id = ?1`)
    .bind(sessionId)
    .first<PaymentRow>());
}

async function paymentByIntent(db: D1Database, intentId: string): Promise<PaymentRow | null> {
  return (await db
    .prepare(`SELECT * FROM payments WHERE stripe_payment_intent_id = ?1`)
    .bind(intentId)
    .first<PaymentRow>());
}

export async function handleStripeWebhook(request: Request, env: Env, requestId: string): Promise<Response> {
  if (request.method !== 'POST') return apiError(405, 'METHOD_NOT_ALLOWED', 'POST only', requestId);
  const rawBody = await request.text();
  const signature = request.headers.get('stripe-signature');
  if (!signature) return apiError(400, 'MISSING_SIGNATURE', 'Missing Stripe signature', requestId);

  let event: StripeEvent;
  try {
    if (!(await verifyStripeSignature(rawBody, signature, env.STRIPE_WEBHOOK_SECRET))) {
      return apiError(400, 'INVALID_SIGNATURE', 'Invalid signature', requestId);
    }
    event = JSON.parse(rawBody) as StripeEvent;
  } catch {
    return apiError(400, 'INVALID_SIGNATURE', 'Invalid signature', requestId);
  }
  if (!event?.id || !event?.type) {
    return apiError(400, 'BAD_EVENT', 'Malformed event', requestId);
  }

  const db = env.SHOP_DB;

  // Idempotent claim: primary key on event_id.
  try {
    await db
      .prepare(`INSERT INTO stripe_events (event_id, event_type, object_id, processing_status) VALUES (?1, ?2, ?3, 'processing')`)
      .bind(event.id, event.type, event.data.object?.id ?? null)
      .run();
  } catch {
    const row = (
      await db.prepare(`SELECT processing_status FROM stripe_events WHERE event_id = ?1`).bind(event.id).first() as {
        processing_status: string;
      } | null
    );
    if (row?.processing_status === 'processed') {
      return json({ received: true, duplicate: true });
    }
    // Still processing or previously failed: ask Stripe to retry later.
    return apiError(409, 'EVENT_IN_PROGRESS', 'Event already received; retry later', requestId);
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object;
        if (session.payment_status && session.payment_status !== 'paid') {
          // Delayed payment method: treat as processing, not paid.
          const payment = await paymentBySession(db, session.id);
          if (payment) {
            await db
              .prepare(`UPDATE payments SET status = 'processing', updated_at = ?1 WHERE id = ?2 AND status = 'pending'`)
              .bind(nowIso(), payment.id)
              .run();
          }
          break;
        }
        const payment = await paymentBySession(db, session.id);
        if (!payment) {
          await markEvent(db, event.id, 'failed', 'payment_not_found');
          break;
        }
        if (payment.status === 'succeeded' || payment.status === 'refunded') break; // idempotent replay
        // Verify amount + currency against our order before confirming.
        const order = (
          await db.prepare(`SELECT * FROM orders WHERE id = ?1`).bind(payment.order_id).first() as {
            id: string;
            total_cents: number;
            currency: string;
            status: string;
          } | null
        );
        if (!order) {
          await markEvent(db, event.id, 'failed', 'order_not_found');
          break;
        }
        if (session.amount_total !== null && session.amount_total !== order.total_cents) {
          await markEvent(db, event.id, 'failed', 'amount_mismatch');
          break;
        }
        if (session.currency && session.currency.toLowerCase() !== order.currency.toLowerCase()) {
          await markEvent(db, event.id, 'failed', 'currency_mismatch');
          break;
        }
        // Consume stock exactly once; a failed consume marks the event failed
        // for manual reconciliation (never auto-retry into double-decrement).
        const consumed = await consumeReservationsForOrder(db, order.id);
        if (!consumed) {
          await markEvent(db, event.id, 'failed', 'consume_inconsistent');
          break;
        }
        await db.batch([
          db
            .prepare(
              `UPDATE payments SET status = 'succeeded', stripe_payment_intent_id = COALESCE(?1, stripe_payment_intent_id), updated_at = ?2 WHERE id = ?3`
            )
            .bind(session.payment_intent ?? null, nowIso(), payment.id),
          db
            .prepare(`UPDATE orders SET status = 'paid', paid_at = ?1, updated_at = ?2 WHERE id = ?3 AND status = 'pending_payment'`)
            .bind(nowIso(), nowIso(), order.id),
        ]);
        break;
      }

      case 'checkout.session.expired': {
        const session = event.data.object;
        const payment = await paymentBySession(db, session.id);
        if (payment && payment.status === 'pending') {
          await db.batch([
            db
              .prepare(`UPDATE orders SET status = 'cancelled', updated_at = ?1 WHERE id = ?2 AND status = 'pending_payment'`)
              .bind(nowIso(), payment.order_id),
            db.prepare(`UPDATE payments SET status = 'failed', updated_at = ?1 WHERE id = ?2`).bind(nowIso(), payment.id),
          ]);
          await releaseReservationsForOrder(db, payment.order_id);
        }
        break;
      }

      case 'checkout.session.async_payment_succeeded': {
        const session = event.data.object;
        const payment = await paymentBySession(db, session.id);
        if (payment && payment.status === 'processing') {
          const consumed = await consumeReservationsForOrder(db, payment.order_id);
          if (!consumed) {
            await markEvent(db, event.id, 'failed', 'consume_inconsistent');
            break;
          }
          await db.batch([
            db.prepare(`UPDATE payments SET status = 'succeeded', updated_at = ?1 WHERE id = ?2`).bind(nowIso(), payment.id),
            db
              .prepare(`UPDATE orders SET status = 'paid', paid_at = ?1, updated_at = ?2 WHERE id = ?3 AND status = 'pending_payment'`)
              .bind(nowIso(), nowIso(), payment.order_id),
          ]);
        }
        break;
      }

      case 'checkout.session.async_payment_failed': {
        const session = event.data.object;
        const payment = await paymentBySession(db, session.id);
        if (payment && (payment.status === 'pending' || payment.status === 'processing')) {
          await db.batch([
            db.prepare(`UPDATE payments SET status = 'failed', updated_at = ?1 WHERE id = ?2`).bind(nowIso(), payment.id),
            db
              .prepare(`UPDATE orders SET status = 'payment_failed', updated_at = ?1 WHERE id = ?2 AND status = 'pending_payment'`)
              .bind(nowIso(), payment.order_id),
          ]);
          await releaseReservationsForOrder(db, payment.order_id);
        }
        break;
      }

      case 'payment_intent.payment_failed': {
        const intent = event.data.object;
        const payment = await paymentByIntent(db, intent.id);
        if (payment && payment.status !== 'succeeded') {
          await db
            .prepare(`UPDATE payments SET status = 'failed', updated_at = ?1 WHERE id = ?2`)
            .bind(nowIso(), payment.id)
            .run();
        }
        break;
      }

      case 'charge.refunded': {
        const charge = event.data.object;
        const payment = await paymentByIntent(db, charge.payment_intent ?? '');
        if (payment) {
          const refunded = charge.amount_refunded ?? 0;
          const status = refunded >= payment.amount_cents ? 'refunded' : 'partially_refunded';
          await db
            .prepare(`UPDATE payments SET refunded_cents = ?1, status = ?2, updated_at = ?3 WHERE id = ?4`)
            .bind(Math.min(refunded, payment.amount_cents), status, nowIso(), payment.id)
            .run();
          await db
            .prepare(
              `UPDATE orders SET status = CASE WHEN ?1 >= ?2 THEN 'refunded' ELSE 'partially_refunded' END, updated_at = ?3 WHERE id = ?4 AND status IN ('paid','partially_refunded')`
            )
            .bind(refunded, payment.amount_cents, nowIso(), payment.order_id)
            .run();
        }
        break;
      }

      default:
        // Unknown/unhandled event types are recorded as processed.
        break;
    }
    await markEvent(db, event.id, 'processed');
    return json({ received: true });
  } catch (error) {
    await markEvent(db, event.id, 'failed', error instanceof Error ? error.message.slice(0, 200) : 'unknown');
    // Non-2xx asks Stripe to retry.
    return apiError(500, 'PROCESSING_ERROR', 'Temporary processing error', requestId);
  }
}
