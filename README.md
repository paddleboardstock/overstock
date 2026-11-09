# paddleboardoverstock-shop

Independent clearance shop for Paddle Board Overstock — Astro storefront on
`shop.paddleboardoverstock.com` + a `shop-api` Cloudflare Worker with its own
D1 database, Stripe Checkout and a manual shipping-quote flow for freight.

Design docs: `E:\DevEcoCode\商城` (see `shangchengyouhua .docx` and the
`pbo-shop-starter` template the schema/API shape is based on).

## Layout

```
migrations/            D1 schema (5 migrations, independent DB)
workers/shop-api/      shop-api Worker (src/*.ts, wrangler.toml)
scripts/seed-stock.mjs Generates seed-stock.sql from the main repo's stock catalog
src/                   Astro storefront (static, client-side API calls)
public/
```

## API surface

Public:

- `GET  /api/health`
- `GET  /api/products` · `GET /api/products/:slug`
- `POST /api/checkout/session` — server-side pricing, atomic reservation;
  returns `202 {status:'pending_shipping_quote'}` for manual-quote countries
  or `200 {checkoutUrl}` when a flat shipping rule matches
- `GET  /api/orders/:orderNumber?email=` — customer lookup
- `POST /api/orders/:orderNumber/quote/accept` — accepts a proposed quote,
  recomputes tax, reserves stock, opens the Stripe session
- `POST /api/stripe/webhook` — signature-verified, idempotent
  (`checkout.session.completed/expired`, `charge.refunded`, async payment events)

Admin (`Authorization: Bearer $SHOP_ADMIN_TOKEN`, all mutations audited):

- Catalog: `GET/POST /api/admin/products`, `PATCH /api/admin/products/:id`,
  `POST /api/admin/products/:id/images|variants`, `PATCH /api/admin/variants/:id`,
  `POST /api/admin/inventory/:variantId`, `GET /api/admin/inventory/:variantId/movements`
- Orders: `GET /api/admin/orders`, `GET/PATCH /api/admin/orders/:orderNumber`,
  `POST /api/admin/orders/:n/quotes|shipments|refund`
- Rules: `GET/POST` + `PATCH/DELETE` on `/api/admin/shipping-rules|tax-rules|discounts`
- `GET /api/admin/audit`

## Local development

```bash
npm install
cp .env.example .env                       # PUBLIC_API_BASE=http://localhost:8787

# Terminal 1 — API worker
npm run worker:dev                         # wrangler dev on :8787
# (first time) apply migrations locally:
npm run db:migrate:local
node scripts/seed-stock.mjs                # regenerates seed-stock.sql from main repo
npx wrangler d1 execute paddleboardoverstock-shop-db --local --file seed-stock.sql --config workers/shop-api/wrangler.toml

# Terminal 2 — storefront
npm run dev                                # astro dev on :4321
```

> Retail prices equal the EXW wholesale prices from the source catalog
> (business decision) — the seed imports all 56 SKUs as **active**.

Worker secrets for local dev go in `workers/shop-api/.dev.vars`:

```
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...            # stripe listen --forward-to localhost:8787/api/stripe/webhook
SHOP_ADMIN_TOKEN=<random long string>
APP_ORIGIN=http://localhost:4321
API_ORIGIN=http://localhost:8787
SHOP_SESSION_SECRET=<random>
```

## Deployment (GitHub Actions → Cloudflare API)

All deployment goes through `.github/workflows/deploy.yml` — no local wrangler
deploys. It runs on every push to `main` (and manual dispatch) and is fully
idempotent: it creates the D1 database, Pages project, Pages custom domain and
DNS record when missing, applies migrations, seeds the catalog only when the
products table is empty, syncs worker secrets, then deploys the worker and the
storefront.

One domain serves everything — `shop.paddleboardoverstock.com`:
Cloudflare Pages serves the storefront, and the shop-api worker owns the
zone route `shop.paddleboardoverstock.com/api/*` (worker route takes
precedence over Pages). `wrangler.toml` keeps explicit
`REPLACE_WITH_D1_DATABASE_ID` placeholders; the workflow discovers the real
UUID via `wrangler d1 info` and injects it at deploy time.

Required repo secrets (Settings → Secrets and variables → Actions):

```
CLOUDFLARE_API_TOKEN     # token with Workers Scripts/Pages/D1/DNS edit on the account + zone
CLOUDFLARE_ACCOUNT_ID
CLOUDFLARE_ZONE_ID       # zone paddleboardoverstock.com (enables the DNS step)
STRIPE_SECRET_KEY        # until set, checkout returns 502 (products/orders still work)
STRIPE_WEBHOOK_SECRET
SHOP_ADMIN_TOKEN         # Bearer token for /api/admin/*
SHOP_SESSION_SECRET
```

First deploy: push to `main` (or Actions → Deploy → Run workflow). Then:

1. Register the Stripe webhook endpoint
   `https://shop.paddleboardoverstock.com/api/stripe/webhook` with events:
   `checkout.session.completed`, `checkout.session.expired`,
   `checkout.session.async_payment_succeeded`,
   `checkout.session.async_payment_failed`,
   `payment_intent.payment_failed`, `charge.refunded`.
   Copy the signing secret into the `STRIPE_WEBHOOK_SECRET` repo secret and
   re-run the deploy (or run `wrangler secret bulk` manually once).
2. Create at least one `manual_quote` shipping rule per target market via
   `/api/admin/shipping-rules` (default when no rule matches is manual
   quote — safe).

## Key invariants

- Client-submitted prices are never trusted; totals are recomputed in the worker.
- Reservations are conditional `UPDATE`s; exactly one changed row required.
- No Stripe session before the shipping amount is confirmed (flat rule or
  accepted quote). Manual-quote orders reserve nothing until acceptance.
- Payment state changes only via the signature-verified webhook.
- Webhook events are claimed idempotently via the `stripe_events` PK.
- Reservation TTL (default 30 min) matches the Stripe session expiry; the
  `*/15` cron releases expired reservations and cancels unpaid orders.
- Admin v0 auth is a single Bearer token (constant-time compare); upgrade
  path is reusing the main site's better-auth (documented in the design docx).
