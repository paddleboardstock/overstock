# Deployment, auth and security checklist

## Cloudflare resources
- [ ] Separate staging and production D1 databases; never reuse the existing shared site DB for shop transactions.
- [ ] Confirm each environment's D1 database ID and R2 bucket name in Cloudflare.
- [ ] Confirm Worker bundle size; keep existing Astro/i18n generated datasets out of the API Worker.
- [ ] Add staging and production custom domains/routes deliberately; avoid conflicting with existing Pages/Worker routes.
- [ ] Set `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, and `SHOP_SESSION_SECRET` as secrets per environment.
- [ ] Configure Stripe webhook endpoint for each environment separately.
- [ ] Configure Pages environment variables for API origin; no secret keys in client-side variables.

## Better Auth isolation
- Reuse patterns/configuration only after reviewing the existing implementation. Do not assume cookies are shared across subdomains.
- Define a shop-admin role/permission that is checked server-side for every `/api/admin/*` endpoint.
- Prefer a distinct auth client/cookie scope or an explicit verified session bridge. Never accept a client-supplied `role`.
- Add MFA for administrators where feasible; rotate/revoke sessions after role changes.
- Use CSRF protections for cookie-authenticated state-changing endpoints, validate Origin, and set secure cookie attributes.

## Stripe
- Verify webhook signatures against raw body before parsing.
- Persist event ID with a unique key and process events idempotently.
- Verify session/order identity, amount and currency before marking paid.
- Treat `checkout.session.completed` with payment status other than `paid` as processing, not paid.
- Reconcile expired sessions and reservations. Run a scheduled cleanup/reconciliation job.
- Keep refunds separate from physical inventory restocking.
- Test duplicate, delayed, out-of-order and failed webhook deliveries.

## International commerce / manual tax
- Decide supported countries and currencies; validate country codes against an allowlist.
- Do not infer tax liability or shipping eligibility from a country dropdown alone.
- Document whether duties/import taxes are collected at checkout or payable on delivery.
- Manual tax rules must be versioned/effective-dated and approved by a tax professional. Store the applied rate and calculated amount as order snapshots (add fields or a dedicated order_tax_lines table before production).
- Manual freight quotes require explicit customer acceptance and an immutable quote snapshot before checkout.

## Must-pass tests

All items below except the last two are exercised by `test/smoke.mjs` (local: `npm run test:smoke` against `npm run dev`; the script runs its own mock Stripe server on `127.0.0.1:9999`):

- [x] Client-supplied prices/totals are ignored. (smoke: junk `priceCents` in payload; server total asserted)
- [x] Invalid webhook signature is rejected. (smoke: `t=123,v1=deadbeef` → 400)
- [x] Duplicate event does not double-charge or double-decrement inventory. (smoke: replayed `evt_*` → "Duplicate", stock unchanged)
- [x] Concurrent checkout for last unit permits at most one reservation. (smoke: 2 parallel checkouts for the 1-unit vest → 200 + 409)
- [x] Failed Stripe Session creation safely releases stock reservation. (smoke: mock Stripe stopped → 502, available restored)
- [x] Shipping quote missing/expired prevents payment session creation. (smoke: AU `manual_quote` → 202, no `checkoutUrl` until quote accepted)
- [x] Orders cannot be read by guessing order number. (order lookup requires email + quoteId match; admin detail requires Bearer token)
- [x] Non-admin cannot access or mutate admin API. (smoke: missing/bad token → 401)
- [x] SQL injection payloads are treated as data. (smoke: `'; DROP TABLE discounts;--` discount code → 400 `INVALID_DISCOUNT`, table intact)
- [x] Rate limits cover checkout and order lookup. (isolate token bucket: checkout 10/min, order lookup 20/min, admin 60/min; persisted D1 rate limiting pending for production)
- [ ] Backup/restore and rollback are rehearsed on staging.
- [ ] Existing main site checks/build continue to pass unchanged.

## Suggested commands (review against installed CLI versions)
```bash
# Apply local migrations
npx wrangler d1 migrations apply paddleboardoverstock-shop-db --local

# Apply staging migrations only after reviewing SQL and binding IDs
npx wrangler d1 migrations apply REPLACE_WITH_STAGING_D1_DATABASE_NAME --remote --env staging

# Deploy staging Worker
npx wrangler deploy --env staging

# Deploy production only after sign-off
npx wrangler deploy --env production
```
