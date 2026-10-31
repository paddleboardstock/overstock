/*
PSEUDOCODE — deliberately not a drop-in implementation.
Use a Stripe SDK version supported by your Cloudflare Worker runtime and verify
its webhook signature against the exact raw request body before parsing JSON.
Do not call request.json() before signature verification.
*/

async function handleStripeWebhook(request, env) {
  if (request.method !== "POST") return response(405);

  const rawBody = await request.text();
  const signature = request.headers.get("stripe-signature");
  if (!signature) return response(400, "Missing Stripe signature");

  let event;
  try {
    // Stripe SDK: constructEventAsync(rawBody, signature, env.STRIPE_WEBHOOK_SECRET, ...)
    // Use the SDK's documented Cloudflare-compatible crypto/subtle provider.
    event = await verifyStripeEvent(rawBody, signature, env.STRIPE_WEBHOOK_SECRET);
  } catch {
    return response(400, "Invalid signature");
  }

  // Claim event idempotently. If already processed, return 200.
  // Use a transaction / unique primary key on stripe_events.event_id.
  const claimed = await claimStripeEvent(env.SHOP_DB, event.id, event.type, event.data.object.id);
  if (claimed === "already_processed") return response(200, "Duplicate ignored");
  if (claimed === "already_processing") {
    // Return a retryable status or rely on a lease/timeout strategy; don't silently drop.
    return response(500, "Event is being processed");
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object;

        // For delayed payment methods, completed does NOT necessarily mean paid.
        if (session.payment_status !== "paid") {
          await markPaymentProcessing(env.SHOP_DB, session.id);
          break;
        }

        // Load order/payment by the stored Stripe Session ID (and/or validated metadata).
        // Verify amount_total, currency, order ID and payment intent match the order.
        // Reject/quarantine mismatches for manual review; never guess.
        await confirmPaymentIdempotently(env.SHOP_DB, {
          stripeSessionId: session.id,
          stripePaymentIntentId: session.payment_intent,
          amountCents: session.amount_total,
          currency: session.currency
        });

        /*
        confirmPaymentIdempotently must use a D1 transaction/batch with conditional
        state transitions:
          1. Verify order is still payable and amount/currency match.
          2. Mark payment succeeded and order paid only once.
          3. For each active inventory reservation, reduce inventory.reserved and
             inventory.on_hand by quantity, mark reservation consumed, and insert
             inventory_movements reason='sale'.
          4. Mark stripe_events processed.
        Ensure all DB writes are atomic where supported. D1 batch is transactional
        for a batch of statements, but conditional predicates and checking results
        are still required. Do not make email/API calls inside the transaction.
        */
        break;
      }

      case "checkout.session.expired": {
        const session = event.data.object;
        // Release only active reservations for this unpaid order, exactly once.
        await releaseReservationIdempotently(env.SHOP_DB, session.id, "expired");
        break;
      }

      case "payment_intent.payment_failed": {
        const intent = event.data.object;
        // Record failure. Do not release inventory if another valid payment attempt
        // or session is still active; reconcile against the order/payment state.
        await recordPaymentFailure(env.SHOP_DB, intent.id);
        break;
      }

      case "charge.refunded": {
        const charge = event.data.object;
        // Update refunded amount from Stripe's authoritative amount_refunded.
        // Partial refunds are not equivalent to restocking physical inventory.
        await reconcileRefundIdempotently(env.SHOP_DB, charge.payment_intent, charge.amount_refunded);
        break;
      }

      default:
        // Store/mark irrelevant events as processed to avoid repeated delivery.
        break;
    }

    await markStripeEventProcessed(env.SHOP_DB, event.id);
    // Queue email after DB commit; email failure must not reverse paid order.
    return response(200, "Processed");
  } catch (error) {
    await markStripeEventFailed(env.SHOP_DB, event.id, safeErrorCode(error));
    // Non-2xx asks Stripe to retry. Alert/log a request/event ID, not secrets/PII.
    return response(500, "Temporary processing error");
  }
}
