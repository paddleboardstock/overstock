# Paddle Board Overstock Shop — implementation starter

This is a **template**, not a production-ready store. It is designed as a separate project so the existing Astro static site remains unchanged.

## Implementation status (2026-10-31)

The `workers/shop-api` Worker is **implemented** (not pseudocode) and covered by a local smoke suite:

- `src/index.ts` — router: `/api/health`, `/api/products`, `/api/checkout`, `/api/orders/accept-shipping-quote`, `/api/stripe/webhook`, `/api/admin/*` (Bearer `SHOP_ADMIN_TOKEN`), CORS preflight, JSON 404.
- `src/routes/products.ts` — catalog list + `?slug=`; `available = on_hand - reserved`.
- `src/routes/checkout.ts` — zod-validated checkout; **prices are read from D1 only** (client-supplied price fields are stripped); idempotency via `checkout_requests` (SHA-256 key hash + request fingerprint, mismatch → 409); conditional stock reservation with compensating rollback; discount + tax + shipping rules; `manual_quote` countries park the order at `pending_shipping_quote` (no Stripe Session); `POST /api/orders/accept-shipping-quote` converts an accepted quote into a payment Session.
- `src/routes/webhook.ts` — Stripe signature verification (Web Crypto HMAC, ±300 s), `stripe_events` idempotency; handles `checkout.session.completed` / `expired` / `payment_failed` / `charge.refunded`; amount+currency validated against the order (mismatch → quarantine).
- `src/routes/admin.ts` — order list/detail, inventory adjust (audited), shipping-quote creation; constant-time token check + Origin check + rate limit.
- `src/lib/` — `stripe.ts` (REST via `fetch`, no npm SDK), `rate-limit.ts` (per-isolate token bucket), `http.ts`, `util.ts`.
- `src/*.pseudocode.ts` / `src/index.ts.example` — original starter references, kept for design intent; excluded from typecheck.

### Local verification

```bash
npm install
npm run db:migrate:local   # D1 migrations (local)
npm run db:seed:local      # seed.sql (2 boards + vest, last-unit concurrency case)
cp workers/shop-api/.dev.vars.example workers/shop-api/.dev.vars
# edit .dev.vars: uncomment STRIPE_API_BASE=http://127.0.0.1:9999
npm run dev                # worker on http://127.0.0.1:8787
npm run test:smoke         # starts mock Stripe on :9999, runs the 12 must-pass tests
```

## Architecture
- `apps/storefront/`: Astro static storefront deployed as a separate Cloudflare Pages project.
- `workers/shop-api/`: one modular Cloudflare Worker for public storefront API, admin API, checkout, and Stripe webhooks.
- `migrations/`: independent D1 schema; never apply these migrations to the existing shared `paddleboardoverstock-db`.
- Stripe Checkout hosts payment collection. Do not collect or store card data in this application.

## Important decisions / limitations
- Product content can be imported from the existing site's `src/data/products.ts`, `src/data/product-texts.ts`, and content collection. Inventory, sellable SKU, price, shipping and tax are managed in this shop database.
- Every SKU has independent inventory. `available = on_hand - reserved`.
- Shipping is manually configured or marked as quote-required. Do not create a Stripe Checkout Session until shipping is confirmed and included in the final server-calculated amount.
- Tax rates are manually configured in this starter. Confirm sales-tax and international tax obligations with a qualified tax adviser before launch. Do not assume a single tax rate is valid for all destinations.
- `better-auth` is an implementation pattern to reuse, not an assumption that the existing site's cookie/session is automatically valid on `shop.paddleboardoverstock.com`. Prefer a separate shop auth instance or explicitly designed shared auth with separate shop-admin role checks. Never trust a role sent by the browser.
- For international orders, decide supported countries, currencies, duties/import taxes, returns and export restrictions before enabling checkout.

## Setup outline
1. Create a new repository from this starter.
2. Install pinned, reviewed versions of `astro`, `wrangler`, `typescript`, `zod`, `stripe`, and your chosen `better-auth` integration. Commit the lockfile.
3. Create separate staging and production D1 databases and apply migrations to each.
4. Configure secrets independently for each environment.
5. Deploy the API Worker and the Astro Pages project to a staging hostname.
6. Complete the test checklist in `docs/DEPLOYMENT.md`.
7. Only then configure production Stripe keys/webhook and `shop.paddleboardoverstock.com`.

## D1 migrations
Run from repository root, substituting the actual database name/ID in Wrangler configuration:
```bash
npx wrangler d1 migrations apply paddleboardoverstock-shop-db --local
npx wrangler d1 migrations apply paddleboardoverstock-shop-db --remote --env staging
# after staging sign-off:
npx wrangler d1 migrations apply paddleboardoverstock-shop-db --remote --env production
```
Verify the exact Wrangler CLI syntax against the installed version and `wrangler.toml` before running.

## No production secrets in Git
Use `wrangler secret put STRIPE_SECRET_KEY --env staging`, etc. Do not put secret values in `vars`, `.env` committed to Git, logs, screenshots, or issue trackers.
