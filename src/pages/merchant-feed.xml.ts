import type { APIRoute } from 'astro';
import { getProducts } from '~/utils/products';
import { SITE } from 'astrowind:config';

export const prerender = true;

const escapeXml = (value: string): string =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

export const GET: APIRoute = async () => {
  const siteBase = String(SITE.site).replace(/\/+$/, '');
  const products = (await getProducts()).filter((p) => !p.draft);

  const items = products
    .map((p) => {
      const priceAmount = p.price?.amount ? Number(String(p.price.amount).replace(/[^0-9.]/g, '')) : NaN;
      if (!Number.isFinite(priceAmount) || priceAmount <= 0) return '';
      const currency = p.price?.currency || 'USD';
      const price = `${priceAmount.toFixed(2)} ${currency}`;
      const title = p.title || p.slug;
      const description = (p.summary || p.description || title).replace(/\s+/g, ' ').trim();
      const link = `${siteBase}${p.permalink}`;
      const image = p.image || '';
      const availability = p.inStock ? 'in_stock' : 'out_of_stock';
      const gradeNote =
        p.grade === 'B'
          ? ' Factory seconds: minor cosmetic marks, 100% airtight, pressure-tested.'
          : ' Brand-new overstock from completed manufacturing orders.';
      const fullDescription = `${description}${gradeNote}`;

      return `    <item>
      <g:id>${escapeXml(p.slug)}</g:id>
      <g:title>${escapeXml(title)}</g:title>
      <g:description>${escapeXml(fullDescription.slice(0, 5000))}</g:description>
      <g:link>${escapeXml(link)}</g:link>
      ${image ? `<g:image_link>${escapeXml(image)}</g:image_link>\n      ` : ''}<g:availability>${availability}</g:availability>
      <g:price>${price}</g:price>
      <g:condition>new</g:condition>
      <g:brand>Paddle Board Overstock</g:brand>
      <g:google_product_category>Sporting Goods &gt; Water Sports</g:google_product_category>
      <g:identifier_exists>no</g:identifier_exists>
      <g:adult>no</g:adult>
    </item>`;
    })
    .filter(Boolean)
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>Paddle Board Overstock — Merchant Product Feed</title>
    <link>${siteBase}</link>
    <description>Brand-new inflatable paddle boards at factory overstock prices from Paddle Board Overstock.</description>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
