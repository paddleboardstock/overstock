// Product data access: public storefront reads and shared queries.

import type { D1Database } from '@cloudflare/workers-types';
import {
  genId,
  isCurrency,
  isNonEmptyString,
  isNonNegativeInt,
  isPositiveInt,
  isSlug,
  isUuid,
  json,
  nowIso,
} from './util';
import type {
  InventoryRow,
  ProductImageRow,
  ProductRow,
  PublicImage,
  PublicProduct,
  PublicVariant,
  VariantRow,
} from './types';

interface ProductBundle {
  product: ProductRow;
  images: ProductImageRow[];
  variants: Array<VariantRow & { inventory: InventoryRow | null }>;
}

function imageUrl(image: ProductImageRow): string {
  if (image.external_url) return image.external_url;
  // r2_key images will resolve through the assets domain once R2 is bound.
  return image.r2_key ? `/assets/${image.r2_key.replace(/^\/+/, '')}` : '';
}

function toPublic(bundle: ProductBundle): PublicProduct {
  return {
    id: bundle.product.id,
    slug: bundle.product.slug,
    title: bundle.product.title,
    description: bundle.product.description,
    images: bundle.images
      .slice()
      .sort((a, b) => a.sort_order - b.sort_order)
      .map((img): PublicImage => ({ url: imageUrl(img), alt: img.alt_text })),
    variants: bundle.variants
      .filter((v) => v.active === 1)
      .map((v): PublicVariant => ({
        id: v.id,
        sku: v.sku,
        name: v.variant_name,
        currency: v.currency,
        priceCents: v.price_cents,
        compareAtCents: v.compare_at_cents,
        availableQuantity: Math.max(0, (v.inventory?.on_hand ?? 0) - (v.inventory?.reserved ?? 0)),
      })),
  };
}

async function loadBundles(
  db: D1Database,
  productWhere: string,
  bind: unknown[] = []
): Promise<PublicProduct[]> {
  const products = (await db
    .prepare(`SELECT * FROM products ${productWhere} ORDER BY created_at ASC`)
    .bind(...bind)
    .all<ProductRow>()).results;
  if (products.length === 0) return [];
  const ids = products.map((p) => p.id);

  const images = (
    await db
      .prepare(
        `SELECT * FROM product_images WHERE product_id IN (SELECT value FROM json_each(?1))
         ORDER BY sort_order ASC`
      )
      .bind(JSON.stringify(ids))
      .all<ProductImageRow>()
  ).results;

  const variantRows = (
    await db
      .prepare(
        `SELECT v.*, i.on_hand AS inv_on_hand, i.reserved AS inv_reserved, i.updated_at AS inv_updated_at
         FROM product_variants v
         LEFT JOIN inventory i ON i.variant_id = v.id
         WHERE v.product_id IN (SELECT value FROM json_each(?1))
         ORDER BY v.created_at ASC`
      )
      .bind(JSON.stringify(ids))
      .all<VariantRow & { inv_on_hand: number | null; inv_reserved: number | null; inv_updated_at: string | null }>()
  ).results;

  const byId = new Map<string, ProductBundle>();
  for (const p of products) byId.set(p.id, { product: p, images: [], variants: [] });
  for (const img of images) byId.get(img.product_id)?.images.push(img);
  for (const v of variantRows) {
    byId.get(v.product_id)?.variants.push({
      ...v,
      inventory:
        v.inv_on_hand === null
          ? null
          : { variant_id: v.id, on_hand: v.inv_on_hand, reserved: v.inv_reserved ?? 0, updated_at: v.inv_updated_at ?? nowIso() },
    });
  }
  return [...byId.values()].map(toPublic);
}

export async function handleListProducts(db: D1Database, request: Request): Promise<Response> {
  const url = new URL(request.url);
  const status = url.searchParams.get('status');
  const allowed = status === 'active' || status === 'draft' || status === 'archived';
  // Public listing is always active-only; other statuses are admin-only.
  const where = 'WHERE status = ?1';
  const products = await loadBundles(db, where, [allowed ? status : 'active']);
  return json({ products });
}

export async function handleGetProduct(db: D1Database, slug: string, includeDrafts = false): Promise<Response> {
  if (!isSlug(slug)) return json({ error: { code: 'BAD_SLUG', message: 'Invalid slug' } }, 400);
  const bundles = includeDrafts
    ? await loadBundles(db, 'WHERE slug = ?1', [slug])
    : await loadBundles(db, 'WHERE slug = ?1 AND status = ?2', [slug, 'active']);
  if (bundles.length === 0) {
    return json({ error: { code: 'NOT_FOUND', message: 'Product not found' } }, 404);
  }
  return json({ product: bundles[0] });
}

// ---------------------------------------------------------------------------
// Admin mutations (products / images / variants)
// ---------------------------------------------------------------------------

export async function adminCreateProduct(db: D1Database, body: Record<string, unknown>): Promise<Response> {
  const slug = body.slug;
  const title = body.title;
  if (!isSlug(slug)) return json({ error: { code: 'BAD_SLUG', message: 'Invalid slug' } }, 400);
  if (!isNonEmptyString(title, 200)) return json({ error: { code: 'BAD_TITLE', message: 'Invalid title' } }, 400);
  const description = typeof body.description === 'string' ? body.description.slice(0, 5000) : null;
  const brand = typeof body.brand === 'string' && body.brand.trim() ? body.brand.slice(0, 120) : null;
  const status = body.status === 'active' || body.status === 'archived' ? body.status : 'draft';
  const id = genId();
  try {
    await db
      .prepare(
        `INSERT INTO products (id, slug, status, brand, title, description) VALUES (?1, ?2, ?3, ?4, ?5, ?6)`
      )
      .bind(id, slug, status, brand, title.trim(), description)
      .run();
  } catch (error) {
    const msg = error instanceof Error ? error.message : '';
    if (msg.includes('UNIQUE')) {
      return json({ error: { code: 'SLUG_TAKEN', message: 'Slug already exists' } }, 409);
    }
    throw error;
  }
  return json({ product: { id, slug } }, 201);
}

export async function adminUpdateProduct(db: D1Database, id: string, body: Record<string, unknown>): Promise<Response> {
  if (!isUuid(id)) return json({ error: { code: 'BAD_ID', message: 'Invalid id' } }, 400);
  const existing = (await db.prepare('SELECT id FROM products WHERE id = ?1').bind(id).first()) as {
    id: string;
  } | null;
  if (!existing) return json({ error: { code: 'NOT_FOUND', message: 'Product not found' } }, 404);

  const sets: string[] = [];
  const bind: unknown[] = [];
  if (typeof body.title === 'string' && isNonEmptyString(body.title, 200)) {
    sets.push('title = ?');
    bind.push(body.title.trim());
  }
  if (typeof body.description === 'string' || body.description === null) {
    sets.push('description = ?');
    bind.push(typeof body.description === 'string' ? body.description.slice(0, 5000) : null);
  }
  if (typeof body.brand === 'string' || body.brand === null) {
    sets.push('brand = ?');
    bind.push(body.brand ? body.brand.slice(0, 120) : null);
  }
  if (body.status === 'draft' || body.status === 'active' || body.status === 'archived') {
    sets.push('status = ?');
    bind.push(body.status);
  }
  if (sets.length === 0) return json({ error: { code: 'NO_FIELDS', message: 'Nothing to update' } }, 400);
  sets.push('updated_at = ?');
  bind.push(nowIso(), id);
  await db
    .prepare(`UPDATE products SET ${sets.join(', ')} WHERE id = ?`)
    .bind(...bind)
    .run();
  return json({ ok: true });
}

export async function adminAddImage(
  db: D1Database,
  productId: string,
  body: Record<string, unknown>
): Promise<Response> {
  if (!isUuid(productId)) return json({ error: { code: 'BAD_ID', message: 'Invalid product id' } }, 400);
  const product = (await db.prepare('SELECT id FROM products WHERE id = ?1').bind(productId).first()) as {
    id: string;
  } | null;
  if (!product) return json({ error: { code: 'NOT_FOUND', message: 'Product not found' } }, 404);
  const externalUrl = body.externalUrl;
  if (!isNonEmptyString(externalUrl, 2000) || !/^https:\/\//.test(externalUrl)) {
    return json({ error: { code: 'BAD_URL', message: 'externalUrl must be an https URL' } }, 400);
  }
  const alt = typeof body.alt === 'string' ? body.alt.slice(0, 300) : null;
  const sortOrder = isNonNegativeInt(body.sortOrder, 999) ? body.sortOrder : 0;
  const id = genId();
  await db
    .prepare(
      `INSERT INTO product_images (id, product_id, external_url, alt_text, sort_order) VALUES (?1, ?2, ?3, ?4, ?5)`
    )
    .bind(id, productId, externalUrl, alt, sortOrder)
    .run();
  return json({ image: { id } }, 201);
}

export async function adminDeleteImage(db: D1Database, id: string): Promise<Response> {
  if (!isUuid(id)) return json({ error: { code: 'BAD_ID', message: 'Invalid id' } }, 400);
  const res = await db.prepare('DELETE FROM product_images WHERE id = ?1').bind(id).run();
  if (res.meta.changes === 0) return json({ error: { code: 'NOT_FOUND', message: 'Image not found' } }, 404);
  return json({ ok: true });
}

export async function adminCreateVariant(
  db: D1Database,
  productId: string,
  body: Record<string, unknown>
): Promise<Response> {
  if (!isUuid(productId)) return json({ error: { code: 'BAD_ID', message: 'Invalid product id' } }, 400);
  const product = (await db.prepare('SELECT id FROM products WHERE id = ?1').bind(productId).first()) as {
    id: string;
  } | null;
  if (!product) return json({ error: { code: 'NOT_FOUND', message: 'Product not found' } }, 404);
  const sku = body.sku;
  const variantName = body.variantName;
  const priceCents = body.priceCents;
  if (!isNonEmptyString(sku, 64)) return json({ error: { code: 'BAD_SKU', message: 'Invalid SKU' } }, 400);
  if (!isNonEmptyString(variantName, 200)) {
    return json({ error: { code: 'BAD_NAME', message: 'Invalid variant name' } }, 400);
  }
  if (!isNonNegativeInt(priceCents, 100_000_000)) {
    return json({ error: { code: 'BAD_PRICE', message: 'Invalid price (cents)' } }, 400);
  }
  const currency = isCurrency(body.currency) ? body.currency : 'usd';
  const compareAt =
    body.compareAtCents === undefined || body.compareAtCents === null
      ? null
      : isNonNegativeInt(body.compareAtCents, 100_000_000)
        ? body.compareAtCents
        : null;
  const weightOz =
    body.weightOz === undefined || body.weightOz === null ? null : isNonNegativeInt(body.weightOz, 100_000) ? body.weightOz : null;
  const id = genId();
  try {
    await db
      .prepare(
        `INSERT INTO product_variants (id, product_id, sku, variant_name, currency, price_cents, compare_at_cents, weight_oz)
         VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8)`
      )
      .bind(id, productId, sku.trim().toUpperCase(), variantName.trim(), currency, priceCents, compareAt, weightOz)
      .run();
  } catch (error) {
    const msg = error instanceof Error ? error.message : '';
    if (msg.includes('UNIQUE')) {
      return json({ error: { code: 'SKU_TAKEN', message: 'SKU already exists' } }, 409);
    }
    throw error;
  }
  return json({ variant: { id } }, 201);
}

export async function adminUpdateVariant(db: D1Database, id: string, body: Record<string, unknown>): Promise<Response> {
  if (!isUuid(id)) return json({ error: { code: 'BAD_ID', message: 'Invalid id' } }, 400);
  const existing = (await db.prepare('SELECT id FROM product_variants WHERE id = ?1').bind(id).first()) as {
    id: string;
  } | null;
  if (!existing) return json({ error: { code: 'NOT_FOUND', message: 'Variant not found' } }, 404);
  const sets: string[] = [];
  const bind: unknown[] = [];
  if (typeof body.variantName === 'string' && isNonEmptyString(body.variantName, 200)) {
    sets.push('variant_name = ?');
    bind.push(body.variantName.trim());
  }
  if (isNonNegativeInt(body.priceCents, 100_000_000)) {
    sets.push('price_cents = ?');
    bind.push(body.priceCents);
  }
  if (body.compareAtCents === null || isNonNegativeInt(body.compareAtCents, 100_000_000)) {
    sets.push('compare_at_cents = ?');
    bind.push(body.compareAtCents);
  }
  if (body.active === 0 || body.active === 1) {
    sets.push('active = ?');
    bind.push(body.active);
  }
  if (body.weightOz === null || isNonNegativeInt(body.weightOz, 100_000)) {
    sets.push('weight_oz = ?');
    bind.push(body.weightOz);
  }
  if (sets.length === 0) return json({ error: { code: 'NO_FIELDS', message: 'Nothing to update' } }, 400);
  sets.push('updated_at = ?');
  bind.push(nowIso(), id);
  await db
    .prepare(`UPDATE product_variants SET ${sets.join(', ')} WHERE id = ?`)
    .bind(...bind)
    .run();
  return json({ ok: true });
}

export async function adminSetInventory(
  db: D1Database,
  variantId: string,
  body: Record<string, unknown>,
  adminId: string
): Promise<Response> {
  if (!isUuid(variantId)) return json({ error: { code: 'BAD_ID', message: 'Invalid variant id' } }, 400);
  const variant = (await db
    .prepare(
      `SELECT v.id, i.on_hand, i.reserved FROM product_variants v
       LEFT JOIN inventory i ON i.variant_id = v.id WHERE v.id = ?1`
    )
    .bind(variantId)
    .first() as { id: string; on_hand: number | null; reserved: number | null } | null);
  if (!variant) return json({ error: { code: 'NOT_FOUND', message: 'Variant not found' } }, 404);

  const onHand = body.onHand;
  if (!isNonNegativeInt(onHand, 1_000_000)) {
    return json({ error: { code: 'BAD_QTY', message: 'onHand must be a non-negative integer' } }, 400);
  }
  const reason =
    body.reason === 'opening_stock' ||
    body.reason === 'restock' ||
    body.reason === 'manual_adjustment' ||
    body.reason === 'damage'
      ? body.reason
      : 'manual_adjustment';
  const note = typeof body.note === 'string' ? body.note.slice(0, 500) : null;
  const current = variant.on_hand ?? 0;
  const reserved = variant.reserved ?? 0;
  if (onHand < reserved) {
    return json(
      { error: { code: 'BELOW_RESERVED', message: `onHand (${onHand}) cannot be below reserved (${reserved})` } },
      409
    );
  }
  const delta = onHand - current;
  const now = nowIso();
  const stmts: D1PreparedStatement[] = [
    db
      .prepare(
        `INSERT INTO inventory (variant_id, on_hand, reserved, updated_at) VALUES (?1, ?2, 0, ?3)
         ON CONFLICT(variant_id) DO UPDATE SET on_hand = ?2, updated_at = ?3`
      )
      .bind(variantId, onHand, now),
  ];
  if (delta !== 0) {
    stmts.push(
      db
        .prepare(
          `INSERT INTO inventory_movements (id, variant_id, change_qty, reason, admin_id, note)
           VALUES (?1, ?2, ?3, ?4, ?5, ?6)`
        )
        .bind(genId(), variantId, delta, reason, adminId, note)
    );
  }
  await db.batch(stmts);
  return json({ ok: true, onHand, reserved, available: onHand - reserved });
}

export async function adminListInventoryMovements(db: D1Database, variantId: string): Promise<Response> {
  if (!isUuid(variantId)) return json({ error: { code: 'BAD_ID', message: 'Invalid variant id' } }, 400);
  const rows = (
    await db
      .prepare('SELECT * FROM inventory_movements WHERE variant_id = ?1 ORDER BY created_at DESC LIMIT 100')
      .bind(variantId)
      .all()
  ).results;
  return json({ movements: rows });
}

export async function adminListProductsAll(db: D1Database): Promise<Response> {
  // Full view including drafts/archived, inventory and variants.
  const products = (await db.prepare('SELECT * FROM products ORDER BY created_at ASC').all<ProductRow>()).results;
  const ids = products.map((p) => p.id);
  if (ids.length === 0) return json({ products: [] });
  const images = (
    await db
      .prepare(
        `SELECT * FROM product_images WHERE product_id IN (SELECT value FROM json_each(?1)) ORDER BY sort_order`
      )
      .bind(JSON.stringify(ids))
      .all<ProductImageRow>()
  ).results;
  const variants = (
    await db
      .prepare(
        `SELECT v.*, i.on_hand AS inv_on_hand, i.reserved AS inv_reserved
         FROM product_variants v LEFT JOIN inventory i ON i.variant_id = v.id
         WHERE v.product_id IN (SELECT value FROM json_each(?1)) ORDER BY v.created_at`
      )
      .bind(JSON.stringify(ids))
      .all<VariantRow & { inv_on_hand: number | null; inv_reserved: number | null }>()
  ).results;

  const out = products.map((p) => ({
    id: p.id,
    slug: p.slug,
    title: p.title,
    description: p.description,
    brand: p.brand,
    status: p.status,
    createdAt: p.created_at,
    images: images
      .filter((i) => i.product_id === p.id)
      .map((i) => ({ id: i.id, url: i.external_url ?? i.r2_key ?? '', alt: i.alt_text, sortOrder: i.sort_order })),
    variants: variants
      .filter((v) => v.product_id === p.id)
      .map((v) => ({
        id: v.id,
        sku: v.sku,
        name: v.variant_name,
        currency: v.currency,
        priceCents: v.price_cents,
        compareAtCents: v.compare_at_cents,
        active: v.active === 1,
        onHand: v.inv_on_hand ?? 0,
        reserved: v.inv_reserved ?? 0,
        available: Math.max(0, (v.inv_on_hand ?? 0) - (v.inv_reserved ?? 0)),
      })),
  }));
  return json({ products: out });
}

// Reused by checkout: load sellable variants with prices straight from D1.
export interface SellableVariant {
  variant: VariantRow;
  product: ProductRow;
  onHand: number;
  reserved: number;
}

export async function loadSellableVariants(
  db: D1Database,
  variantIds: string[]
): Promise<Map<string, SellableVariant>> {
  const rows = (
    await db
      .prepare(
        `SELECT v.*, p.id AS pid, p.slug AS pslug, p.status AS pstatus, p.brand AS pbrand,
                p.title AS ptitle, p.description AS pdesc, p.created_at AS pcreated, p.updated_at as pupdated,
                i.on_hand, i.reserved
         FROM product_variants v
         JOIN products p ON p.id = v.product_id AND p.status = 'active'
         LEFT JOIN inventory i ON i.variant_id = v.id
         WHERE v.id IN (SELECT value FROM json_each(?1)) AND v.active = 1`
      )
      .bind(JSON.stringify(variantIds))
      .all<
        VariantRow & {
          pid: string;
          pslug: string;
          pstatus: ProductRow['status'];
          pbrand: string | null;
          ptitle: string;
          pdesc: string | null;
          pcreated: string;
          pupdated: string;
          on_hand: number | null;
          reserved: number | null;
        }
      >()
  ).results;
  const map = new Map<string, SellableVariant>();
  for (const r of rows) {
    map.set(r.id, {
      variant: {
        id: r.id,
        product_id: r.pid,
        sku: r.sku,
        variant_name: r.variant_name,
        currency: r.currency,
        price_cents: r.price_cents,
        compare_at_cents: r.compare_at_cents,
        weight_oz: r.weight_oz,
        active: r.active,
        created_at: r.created_at,
        updated_at: r.updated_at,
      },
      product: {
        id: r.pid,
        slug: r.pslug,
        status: r.pstatus,
        brand: r.pbrand,
        title: r.ptitle,
        description: r.pdesc,
        created_at: r.pcreated,
        updated_at: r.pupdated,
      },
      onHand: r.on_hand ?? 0,
      reserved: r.reserved ?? 0,
    });
  }
  return map;
}

export { isPositiveInt };
