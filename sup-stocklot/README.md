# SUP Stocklot Direct

Standalone B2B liquidation site for cancelled-order and surplus inflatable SUP
stocklots. Originally fully isolated (see `DEPLOY.md`); **as of 2026-10-31 it lives in
the public `paddleboardoverstock` monorepo under `sup-stocklot/`** and the identity
isolation red lines have been retired by owner decision — see the ISOLATION STATUS
note at the top of `DEPLOY.md`.

Stack: Astro (static output) + Tailwind CSS v4 + Cloudflare Pages, with a Pages
Function gate protecting the branded inventory portal.

## Structure

```
src/
  config.ts                # trading identity, WhatsApp, incoterms, QC/payment terms
  data/stocklots.ts        # SAMPLE DATA — lot types, 6 sample lots, container
                           # specs (palletized + loose), CBM/loading/pricing helpers
  layouts/Layout.astro     # shared head/layout (robots override, head slot, noindex)
  components/              # SiteHeader / SiteFooter / WhatsAppFloat / PageHero /
                           # LotCard / GradeBadge / StatusChip
  pages/
    index.astro            # home: featured lots, buyer solutions, tiered manifest
                           # unlock form (Tier 1/2/3), Org+WebSite JSON-LD
    available-sup-stock.astro  # catalog with client-side type/grade/status filters
    stock/[slug].astro     # lot detail: calculator (palletized/loose), tier pricing,
                           # WhatsApp CTAs, Product+Breadcrumb JSON-LD
    wholesale-inflatable-sup.astro   # solution pages (SEO one keyword-cluster each)
    sup-overstock.astro
    sup-boards-for-rental.astro
    sup-boards-for-schools.astro
    small-batch-sup-orders.astro
    shipping.astro         # express/LCL/FCL + per-market compliance notes
    how-to-buy.astro       # 5-step RFQ-to-container process
    about.astro            # honest sourcing positioning
    contact.astro          # full RFQ form -> WhatsApp prefill
    terms.astro            # public de-branded terms (AS-IS, deposit, territory)
    manifest.csv.ts        # PUBLIC de-branded CSV manifest endpoint
    portal/
      index.astro          # gated dashboard: dynamic watermark, session header +
                           # countdown, manifest table (filters), QC vault (tabs +
                           # lightbox), stowage simulator (multi-lot, palletized/
                           # loose, utilization bars), RFQ panel (FOB/EXW, Take-All,
                           # AS-IS ack) -> WhatsApp
      manifest.csv.ts      # GATED full manifest (HS code, net weights, statuses)
      legal/terms-of-sale.astro  # GATED bilingual binding Terms of Sale (legal
                           # entity + brand contact live ONLY here)
functions/portal/[[path]].js  # Cloudflare Pages Function: HMAC-cookie gate for
                              # /portal/* — email+password login (email embedded in
                              # token), session.json, logout, 401 + rate limit
scripts/smoke-portal.mjs   # portal gate smoke test v2 (email login, session.json,
                           # gated manifest/legal, sitemap exclusion, 30 checks)
public/
  img/                     # de-branded detail-shot placeholders (replace)
  llms.txt                 # LLM-crawler site guide (de-branded, no portal links)
  portal/assets/           # confidential branded material (gated)
```

## Commands

```bash
npm run dev        # local dev (portal function NOT active in astro dev)
npm run check      # astro check (type check)
npm run check:links  # link integrity + orphan-page check over dist/ (after build)
npm run check:seo    # SEO + isolation audit: unique titles/descriptions, JSON-LD
                    # validity, gated noindex, zero legal-entity strings in public
                    # files (after build)
npm run build      # static build -> dist/
npm run preview    # wrangler pages dev dist (portal gate active; needs .dev.vars)
npm run deploy     # build + deploy to Cloudflare Pages
```

`.dev.vars` (git-ignored) for local function testing:

```
PORTAL_PASSWORD=test123
PORTAL_SESSION_SECRET=dev-secret-not-for-production
```

## Editing inventory

All lots live in `src/data/stocklots.ts`. Titles must stay **de-branded**
(engineering descriptions only). Branded material goes to `public/portal/assets/`
and is referenced only from the gated portal. The seller legal entity and brand
contact appear **only** in `src/pages/portal/legal/terms-of-sale.astro` (gated).

## Lead capture model

Static site, no backend: the home tier form tiers leads client-side (corporate
email + volume ≥ 1 pallet → Tier 1 instant; otherwise assisted/filtered), and the
contact/portal RFQ forms submit via WhatsApp deep links. Portal password delivery
and revocation are manual (sales desk) — see `DEPLOY.md` for the future webhook
soft-lock enhancement. Read `DEPLOY.md` before changing identity, contact
channels, or deploying.
