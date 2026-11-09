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

Worker secrets for local dev go in `workers/shop-api/.dev.vars`:

```
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...            # stripe listen --forward-to localhost:8787/api/stripe/webhook
SHOP_ADMIN_TOKEN=<random long string>
APP_ORIGIN=http://localhost:4321
API_ORIGIN=http://localhost:8787
SHOP_SESSION_SECRET=<random>
```

## Deployment checklist (Cloudflare)

1. `wrangler d1 create paddleboardoverstock-shop-db` — put the returned
   `database_id` into `workers/shop-api/wrangler.toml` (all three environments).
2. `npm run db:migrate:remote` — apply the 5 migrations.
3. Seed catalog: `node scripts/seed-stock.mjs` then execute `seed-stock.sql`
   against remote D1. All 56 SKUs import as **draft** — an admin must set
   retail prices (xlsx prices are EXW wholesale) and activate them.
4. Worker secrets (production): `wrangler secret put STRIPE_SECRET_KEY`,
   `STRIPE_WEBHOOK_SECRET`, `SHOP_ADMIN_TOKEN`, `APP_ORIGIN`,
   `API_ORIGIN`, `SHOP_SESSION_SECRET` (`--config workers/shop-api/wrangler.toml`).
5. `npm run deploy:worker` — routes `shop-api.paddleboardoverstock.com/api/*`.
6. Register the Stripe webhook endpoint
   `https://shop-api.paddleboardoverstock.com/api/stripe/webhook` with events:
   `checkout.session.completed`, `checkout.session.expired`,
   `checkout.session.async_payment_succeeded`,
   `checkout.session.async_payment_failed`,
   `payment_intent.payment_failed`, `charge.refunded`.
   Copy the signing secret into `STRIPE_WEBHOOK_SECRET`.
7. Storefront: build (`npm run build`) and deploy `dist/` to Cloudflare Pages
   (project `paddleboardoverstock-shop`), set `PUBLIC_API_BASE=https://shop-api.paddleboardoverstock.com`.
8. DNS: `shop.paddleboardoverstock.com` → Pages, `shop-api.paddleboardoverstock.com` → Worker.
9. Create at least one `manual_quote` shipping rule per target market
   (default when no rule matches is manual quote — safe).

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
