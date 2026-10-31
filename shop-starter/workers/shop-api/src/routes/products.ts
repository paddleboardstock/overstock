import type { Env } from '../types';
import { apiError, json } from '../lib/http';

interface VariantRow {
  id: string;
  product_id: string;
  sku: string;
  variant_name: string;
  currency: string;
  price_cents: number;
  compare_at_cents: number | null;
  available: number;
}

interface ImageRow {
  product_id: string;
  url: string;
  alt_text: string | null;
  sort_order: number;
}

interface ProductRow {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  locale: string;
}

const PRODUCT_SELECT = `
  SELECT p.id, p.slug, p.title, p.description, 'en' AS locale
  FROM products p
  WHERE p.status = 'active'
`;

const VARIANT_SELECT = `
  SELECT v.id, v.product_id, v.sku, v.variant_name, v.currency,
         v.price_cents, v.compare_at_cents,
         (i.on_hand - i.reserved) AS available
  FROM product_variants v
  JOIN inventory i ON i.variant_id = v.id
  WHERE v.active = 1
`;

const IMAGE_SELECT = `
  SELECT pi.product_id, pi.r2_key AS url, pi.alt_text, pi.sort_order
  FROM product_images pi
`;

function assembleProducts(
  products: ProductRow[],
  variants: VariantRow[],
  images: ImageRow[],
): unknown[] {
  const variantsByProduct = new Map<string, VariantRow[]>();
  for (const v of variants) {
    const list = variantsByProduct.get(v.product_id) ?? [];
    list.push(v);
    variantsByProduct.set(v.product_id, list);
  }
  const imagesByProduct = new Map<string, ImageRow[]>();
  for (const img of images) {
    const list = imagesByProduct.get(img.product_id) ?? [];
    list.push(img);
    imagesByProduct.set(img.product_id, list);
  }
  return products.map((p) => ({
    id: p.id,
    slug: p.slug,
    title: p.title,
    description: p.description,
    locale: p.locale,
    images: (imagesByProduct.get(p.id) ?? []).map((img) => ({
      url: img.url,
      alt: img.alt_text,
      sortOrder: img.sort_order,
    })),
    variants: (variantsByProduct.get(p.id) ?? []).map((v) => ({
      id: v.id,
      sku: v.sku,
      name: v.variant_name,
      currency: v.currency,
      priceCents: v.price_cents,
      compareAtCents: v.compare_at_cents,
      availableQuantity: v.available,
    })),
  }));
}

export async function listProducts(request: Request, env: Env, requestId: string): Promise<Response> {
  const url = new URL(request.url);
  const slug = url.searchParams.get('slug');

  const products = await env.SHOP_DB.prepare(
    slug ? `${PRODUCT_SELECT} AND p.slug = ?1` : PRODUCT_SELECT,
  )
    .bind(...(slug ? [slug] : []))
    .all<ProductRow>();
  if (!products.results || products.results.length === 0) {
    return apiError(env, requestId, 'NOT_FOUND', slug ? `No product with slug ${slug}` : 'No products', 404);
  }
  const ids = products.results.map((p) => p.id);
  const placeholders = ids.map((_, i) => `?${i + 1}`).join(',');
  const variants = await env.SHOP_DB.prepare(`${VARIANT_SELECT} AND v.product_id IN (${placeholders})`)
    .bind(...ids)
    .all<VariantRow>();
  const images = await env.SHOP_DB.prepare(`${IMAGE_SELECT} WHERE pi.product_id IN (${placeholders}) ORDER BY pi.sort_order`)
    .bind(...ids)
    .all<ImageRow>();

  const items = assembleProducts(products.results, variants.results ?? [], images.results ?? []);
  return json(env, requestId, slug ? items[0] : { items });
}
