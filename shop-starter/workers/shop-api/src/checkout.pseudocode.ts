/*
PSEUDOCODE — checkout service outline.
Validate the body with a runtime schema (e.g. Zod); TypeScript types alone do not
validate untrusted JSON.
*/

async function createCheckoutSession(request, env, principalOrGuest) {
  const input = validateCheckoutRequest(await request.json());

  // 1. Rate limit, validate country/currency/locale and idempotency key.
  // 2. Load active variants and prices from SHOP_DB; never accept client prices.
  // 3. Deduplicate variant IDs; enforce quantity bounds and a maximum cart size.
  // 4. Calculate subtotal, discount, manually configured tax, and shipping.
  // 5. If shipping mode is manual_quote and there is no approved unexpired quote,
  //    create order status pending_shipping_quote and DO NOT create Checkout Session.
  // 6. In a short D1 transaction, conditionally reserve each SKU:
  //    UPDATE inventory SET reserved = reserved + :qty
  //    WHERE variant_id = :id AND on_hand - reserved >= :qty;
  //    require exactly one changed row for each variant.
  // 7. Insert order/order_items/reservations/payment with snapshots and expiry.
  //    Enforce unique idempotency key via a dedicated checkout_requests table in a
  //    production implementation; this starter schema intentionally omits that table.
  // 8. Create Stripe Checkout Session outside the D1 transaction using a Stripe
  //    idempotency key tied to the immutable internal order ID.
  // 9. Persist Stripe Session ID. If Stripe call fails, release reservation safely.
  // 10. Return only the hosted Checkout URL and order number.
  //
  // Do not create a Checkout Session for a manual shipping quote until the customer
  // accepts the final shipping amount. For international orders, explicitly handle
  // supported countries, currency conversion (if any), duties/import tax disclosures,
  // and address validation before enabling checkout.
}
