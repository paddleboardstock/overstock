# Deployment & Isolation Checklist

> **ISOLATION STATUS (updated 2026-10-31):** By owner decision, this project has been
> consolidated into the public `paddleboardoverstock` monorepo as `sup-stocklot/`.
> The "untraceable / no cross-links" red lines below are **no longer in force** —
> the checklist items about content quality, de-branded photos, and portal gating
> still apply to the site itself, but the identity-isolation requirements (separate
> domain secrecy, no repo cross-references, dedicated contact channel) are historic.

This site is a **standalone, de-branded B2B liquidation channel**. Its value depends
entirely on keeping it untraceable to any OEM factory entity or the main retail site.
Work through every checklist item below before (and after) each deploy.

---

## 1. Pre-launch content replacement

- [ ] Replace **all six sample lots** in `src/data/stocklots.ts` with live inventory
      (titles, slugs, quantities, tier prices, carton math). The shipped data is clearly
      marked `SAMPLE DATA`.
- [ ] Replace the four placeholder SVGs in `public/img/` with real **de-branded**
      detail photos (valve, EVA deck, welded seam, D-ring). Photo rules:
      - close-up construction shots only — no board overview showing logos/prints
      - logo positions cropped out or physically covered ("LOGO AREA OBSCURED")
      - no EXIF GPS, no filenames containing brand names (rename before upload)
- [ ] Add real confidential material to `public/portal/assets/` (packing lists,
      barcode range scans, branded photos) and wire it into the QC vault tabs in
      `src/pages/portal/index.astro` (currently placeholder renders).
- [ ] Verify `public/robots.txt` still disallows `/portal/`.
- [ ] Verify the sitemap filter in `astro.config.mjs` still excludes `/portal/`.

## 2. Identity isolation — hard rules

- [ ] Domain registered **fresh**, with **WHOIS privacy** enabled.
- [ ] **Dedicated WhatsApp number** for this site. `src/config.ts` currently
      defaults to a shared number for out-of-box testing — **swap it before launch**
      (a shared number is the single biggest cross-identity tracing risk). All pages
      and client scripts read the number from `src/config.ts`, so this is a
      single-place change.
- [ ] Dedicated mailbox on this domain (e.g. `sales@supstocklot.com` via Cloudflare
      Email Routing). Never reuse a mailbox, sender domain or newsletter sender tied
      to any other business.
- [ ] **No shared analytics accounts**: create a brand-new GA4 property / Search
      Console property. Never reuse an existing GA/GSC account — account IDs in page
      source are a fingerprint. (Default build ships **no analytics at all**; if you
      add one, use a fresh property.)
- [ ] **No cross-links** in either direction with the main retail site, the OEM
      company site, or any related brand property. No shared social accounts.
- [ ] **No legal entity name** on any public page: UI, footer, terms, manifest CSV,
      llms.txt, JSON-LD, sitemap. The seller legal entity (DONGJILIAN CO., LTD.) and
      the brand contact email exist **only** in the gated page
      `src/pages/portal/legal/terms-of-sale.astro` — never copy them elsewhere.
- [ ] No original brand names in: page text, manifest CSV, image filenames/alt text,
      meta tags, sitemap. Branded names live only behind the gated portal.

## 3. Cloudflare Pages setup

- [ ] Create a **new** Cloudflare account or a clearly separated project —
      `sup-stocklot` Pages project, connected to its own repo (do not reuse the
      repo/account of the main site if that account is publicly linked to it).
- [ ] Build command `npm run build`, output directory `dist`.
- [ ] Add custom domain `supstocklot.com` (DNS on Cloudflare).
- [ ] Set environment variables (Pages dashboard → Settings → Variables, encrypt):
      - `PORTAL_PASSWORD` — the password delivered manually to verified buyers
      - `PORTAL_SESSION_SECRET` — long random string, e.g. `openssl rand -hex 32`
- [ ] Add a **WAF rate-limiting rule** on `/portal/login` (e.g. 10 requests / minute
      / IP). The in-function limiter is per-isolate best-effort only.
- [ ] Optional but recommended: enable Cloudflare Access / Zero Trust in front of
      `/portal/*` as a second gate.

## 4. Portal session model (v2)

- Login takes **business email + password**; the HMAC session token embeds
  `{exp, email}` and is valid 12 hours.
- `GET /portal/session.json` returns `{email, exp}` with a valid cookie (401
  otherwise). The dashboard uses it for the per-buyer dynamic watermark
  ("CONFIDENTIAL — LICENSED TO [EMAIL] — [DATE] — STRICTLY NO REDISTRIBUTION"),
  the session countdown and the RFQ buyer line.
- Password delivery and revocation are **manual** (sales desk over WhatsApp/email).
  When a buyer must be cut off, rotate `PORTAL_PASSWORD` — all sessions remain
  valid until expiry, so also consider shortening the TTL in
  `functions/portal/[[path]].js` if fast revocation matters.
- Future enhancement (not built): a POST endpoint + webhook (e.g. Cloudflare
  Worker + D1/KV) to soft-lock lot allocations on RFQ submission instead of
  WhatsApp-only.

## 5. Deploy

```bash
npm run build
npx wrangler pages deploy dist --project-name sup-stocklot
```

First deploy via the dashboard wizard is also fine (build command + `dist`).

## 6. Local verification of the portal gate

```bash
# local secrets for the function (never commit this file)
# .dev.vars:
#   PORTAL_PASSWORD=test123
#   PORTAL_SESSION_SECRET=dev-secret-not-for-production

npm run build
npx wrangler pages dev dist
# then, in a second terminal:
node scripts/smoke-portal.mjs
```

The smoke script (v2, 38 checks) asserts: 401 unauth on `/portal/`, direct portal
assets, `session.json`, the gated manifest CSV and the gated legal page;
email-format and wrong-password rejection; login sets an HttpOnly cookie carrying
the email; `session.json` returns `{email, exp}`; the dashboard renders with
watermark/simulator/RFQ hooks plus the one-time NDA signing gate before the
manifest download; the gated manifest exposes HS code + net weights
while the **public** manifest does not; sitemap excludes `/portal/`; all nine new
public pages serve.

## 7. Post-deploy checks

- [ ] `https://supstocklot.com/portal/` → 401 login form (not the portal page).
- [ ] Direct asset URL (e.g. `/portal/assets/README.txt`) → 401 without cookie.
- [ ] `/portal/session.json` → 401 without cookie; JSON with email after login.
- [ ] `/portal/manifest.csv` → 401 without cookie.
- [ ] `/manifest.csv` (public) downloads and contains **no brand names, no HS
      code column, no legal entity**.
- [ ] `robots.txt` + `sitemap-index.xml` contain no `/portal/` URLs.
- [ ] View page source on every public page: no other domain's names, no shared GA
      IDs, no company legal name.
- [ ] WHOIS lookup returns privacy-protected registrant.
