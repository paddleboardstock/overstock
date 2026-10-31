GATED PORTAL ASSETS — READ BEFORE ADDING FILES
==============================================

Everything placed under /portal/assets/ is CONFIDENTIAL branded material
(packing lists, barcode ranges, original-brand photos). It is protected by
the Pages Function in functions/portal/[[path]].js — visitors without a valid
session cookie receive 401 for the whole /portal/* path tree, including
these static assets.

Rules:
1. NEVER copy files from this folder to the public side of the site.
2. De-branded detail shots for the public catalog live in /public/img/.
3. Keep filenames neutral in the public-facing UI (e.g. "Packing list — Lot SL-02").
4. Original brand names may appear inside these documents — that is the point
   of the gate — but nothing here may leak into meta tags, sitemap, or the
   manifest.csv endpoint.

Suggested structure once real material exists:
  assets/packing-lists/   (PDF/XLSX per lot)
  assets/photos/          (branded inspection photos)
  assets/barcodes/        (barcode/serial range scans)
