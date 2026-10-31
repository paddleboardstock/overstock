import type { Env } from '../types';
import { verifyWebhookSignature } from '../lib/stripe';
import { nowIso, uuid } from '../lib/util';

interface StripeEvent {
  id: string;
  type: string;
  data: {
    object: {
      id: string;
      amount_total?: number;
      amount_refunded?: number;
      currency?: string;
      payment_intent?: string | null;
      payment_status?: string;
    };
  };
}

interface PaymentRow {
  id: string;
  order_id: string;
  amount_cents: number;
  currency: string;
  status: string;
}

interface OrderRow {
  id: string;
  status: string;
  total_cents: number;
  currency: string;
}

interface ReservationRow {
  variant_id: string;
  quantity: number;
}

function textResponse(status: number, body: string): Response {
  return new Response(body, {
    status,
    headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' },
  });
}

export async function handleStripeWebhook(request: Request, env: Env): Promise<Response> {
  if (request.method !== 'POST') return textResponse(405, 'Method Not Allowed');

  // Verify the signature against the RAW body before any JSON parsing.
  const rawBody = await request.text();
  const signature = request.headers.get('stripe-signature');
  if (!signature) return textResponse(400, 'Missing Stripe signature');
  const valid = await verifyWebhookSignature(rawBody, signature, env.STRIPE_WEBHOOK_SECRET);
  if (!valid) return textResponse(400, 'Invalid signature');

  let event: StripeEvent;
  try {
    event = JSON.parse(rawBody) as StripeEvent;
  } catch {
    return textResponse(400, 'Invalid JSON payload');
  }
  if (!event?.id || !event?.type) return textResponse(400, 'Invalid event payload');

  const db = env.SHOP_DB;
  const now = nowIso();

  // Claim event idempotently via the stripe_events primary key.
  const claim = await db
    .prepare(
      "INSERT INTO stripe_events (event_id, event_type, object_id, processing_status) VALUES (?1, ?2, ?3, 'processing') ON CONFLICT(event_id) DO NOTHING",
    )
    .bind(event.id, event.type, event.data.object?.id ?? null)
    .run();
  if ((claim.meta.changes ?? 0) === 0) {
    const row = await db
      .prepare('SELECT processing_status FROM stripe_events WHERE event_id = ?1')
      .bind(event.id)
      .first<{ processing_status: string }>();
    if (!row) return textResponse(500, 'Event claim lost');
    if (row.processing_status === 'processed') return textResponse(200, 'Duplicate ignored');
    if (row.processing_status === 'processing') return textResponse(500, 'Event is being processed');
    // failed -> allow one reprocess attempt.
    const retryClaim = await db
      .prepare("UPDATE stripe_events SET processing_status = 'processing', error_code = NULL, received_at = ?1 WHERE event_id = ?2 AND processing_status = 'failed'")
      .bind(now, event.id)
      .run();
    if ((retryClaim.meta.changes ?? 0) === 0) return textResponse(500, 'Event is being processed');
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object;
        // Delayed payment methods: completed does NOT mean paid.
        if (session.payment_status && session.payment_status !== 'paid') {
          await db
            .prepare("UPDATE payments SET status = 'processing', updated_at = ?1 WHERE stripe_session_id = ?2")
            .bind(now, session.id)
            .run();
          break;
        }
        const payment = await db
          .prepare('SELECT id, order_id, amount_cents, currency, status FROM payments WHERE stripe_session_id = ?1')
          .bind(session.id)
          .first<PaymentRow>();
        if (!payment) {
          await markFailed(db, event.id, 'session_not_found');
          return textResponse(500, 'Unknown checkout session');
        }
        const order = await db
          .prepare('SELECT id, status, total_cents, currency FROM orders WHERE id = ?1')
          .bind(payment.order_id)
          .first<OrderRow>();
        if (!order) {
          await markFailed(db, event.id, 'order_not_found');
          return textResponse(500, 'Unknown order');
        }
        // Quarantine amount/currency mismatches for manual review; never guess.
        if (
          session.amount_total !== payment.amount_cents ||
          (session.currency ?? '') !== payment.currency ||
          payment.amount_cents !== order.total_cents
        ) {
          await markFailed(db, event.id, 'amount_mismatch');
          return textResponse(500, 'Payment mismatch quarantined');
        }
        if (payment.status === 'succeeded') break; // already confirmed (duplicate safety)

        const reservations = await db
          .prepare("SELECT variant_id, quantity FROM inventory_reservations WHERE order_id = ?1 AND status = 'active'")
          .bind(order.id)
          .all<ReservationRow>();

        const statements: D1PreparedStatement[] = [
          db.prepare(
            "UPDATE payments SET status = 'succeeded', stripe_payment_intent_id = ?1, updated_at = ?2 WHERE id = ?3 AND status IN ('pending','processing')",
          ).bind(session.payment_intent ?? null, now, payment.id),
          db.prepare(
            "UPDATE orders SET status = 'paid', paid_at = ?1, updated_at = ?2 WHERE id = ?3 AND status IN ('pending_payment','processing')",
          ).bind(now, now, order.id),
        ];
        for (const reservation of reservations.results ?? []) {
          statements.push(
            db.prepare(
              'UPDATE inventory SET on_hand = on_hand - ?1, reserved = reserved - ?1, updated_at = ?2 WHERE variant_id = ?3',
            ).bind(reservation.quantity, now, reservation.variant_id),
            db.prepare(
              "INSERT INTO inventory_movements (id, variant_id, change_qty, reason, order_id) VALUES (?1, ?2, ?3, 'sale', ?4)",
            ).bind(uuid(), reservation.variant_id, -reservation.quantity, order.id),
          );
        }
        statements.push(
          db.prepare("UPDATE inventory_reservations SET status = 'consumed', updated_at = ?1 WHERE order_id = ?2 AND status = 'active'").bind(now, order.id),
        );
        await db.batch(statements);
        break;
      }

      case 'checkout.session.expired': {
        const session = event.data.object;
        // Release only ACTIVE reservations for this unpaid order, exactly once.
        const released = await db
          .prepare("UPDATE inventory_reservations SET status = 'released', updated_at = ?1 WHERE order_id = (SELECT order_id FROM payments WHERE stripe_session_id = ?2) AND status = 'active'")
          .bind(now, session.id)
          .run();
        if ((released.meta.changes ?? 0) > 0) {
          const reservations = await db
            .prepare(
              "SELECT r.variant_id, r.quantity FROM inventory_reservations r JOIN payments p ON p.order_id = r.order_id WHERE p.stripe_session_id = ?1 AND r.status = 'released'",
            )
            .bind(session.id)
            .all<ReservationRow>();
          const statements: D1PreparedStatement[] = [];
          for (const reservation of reservations.results ?? []) {
            statements.push(
              db.prepare('UPDATE inventory SET reserved = reserved - ?1, updated_at = ?2 WHERE variant_id = ?3').bind(
                reservation.quantity,
                now,
                reservation.variant_id,
              ),
            );
          }
          if (statements.length > 0) await db.batch(statements);
        }
        await db
          .prepare("UPDATE orders SET status = 'cancelled', updated_at = ?1 WHERE id = (SELECT order_id FROM payments WHERE stripe_session_id = ?2) AND status = 'pending_payment'")
          .bind(now, session.id)
          .run();
        break;
      }

      case 'payment_intent.payment_failed': {
        const intent = event.data.object;
        // Record failure only; do not release inventory while another session may exist.
        await db
          .prepare(
            "UPDATE payments SET status = 'failed', updated_at = ?1 WHERE stripe_payment_intent_id = ?2 AND status IN ('pending','processing')",
          )
          .bind(now, intent.id)
          .run();
        await db
          .prepare(
            "UPDATE orders SET status = 'payment_failed', updated_at = ?1 WHERE id = (SELECT order_id FROM payments WHERE stripe_payment_intent_id = ?2) AND status = 'pending_payment'",
          )
          .bind(now, intent.id)
          .run();
        break;
      }

      case 'charge.refunded': {
        const charge = event.data.object;
        const payment = await db
          .prepare('SELECT id, order_id, amount_cents, status FROM payments WHERE stripe_payment_intent_id = ?1')
          .bind(charge.payment_intent ?? charge.id)
          .first<PaymentRow>();
        if (!payment) {
          await markFailed(db, event.id, 'payment_not_found');
          return textResponse(500, 'Unknown payment intent');
        }
        const refunded = Math.min(charge.amount_refunded ?? 0, payment.amount_cents);
        const paymentStatus = refunded >= payment.amount_cents ? 'refunded' : 'partially_refunded';
        const orderStatus = refunded >= payment.amount_cents ? 'refunded' : 'partially_refunded';
        // Refunds do NOT restock physical inventory (documented policy).
        await db.batch([
          db.prepare('UPDATE payments SET refunded_cents = ?1, status = ?2, updated_at = ?3 WHERE id = ?4').bind(
            refunded,
            paymentStatus,
            now,
            payment.id,
          ),
          db.prepare(
            "UPDATE orders SET status = ?1, updated_at = ?2 WHERE id = ?3 AND status IN ('paid','processing','partially_refunded')",
          ).bind(orderStatus, now, payment.order_id),
        ]);
        break;
      }

      default:
        // Unhandled event types are still marked processed so Stripe stops retrying.
        break;
    }

    await db
      .prepare("UPDATE stripe_events SET processing_status = 'processed', processed_at = ?1 WHERE event_id = ?2")
      .bind(now, event.id)
      .run();
    return textResponse(200, 'Processed');
  } catch (error) {
    const code = error instanceof Error ? error.name : 'unknown';
    await markFailed(db, event.id, code);
    return textResponse(500, 'Temporary processing error');
  }
}

function markFailed(db: D1Database, eventId: string, code: string): Promise<D1Result> {
  return db
    .prepare("UPDATE stripe_events SET processing_status = 'failed', error_code = ?1 WHERE event_id = ?2")
    .bind(code.slice(0, 120), eventId)
    .run();
}
