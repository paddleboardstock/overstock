import type { APIRoute } from 'astro';
import { SITE } from 'astrowind:config';

export const prerender = true;

export const GET: APIRoute = async () => {
  const siteUrl = String(SITE.site).replace(/\/+$/, '');
  const manifest = {
    name: 'Aquafarer',
    short_name: 'Aquafarer',
    description:
      'Professional inflatable boats, SUPs, kayaks, and water sports equipment. Manufacturer-direct pricing with global shipping.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0284c7',
    icons: [
      { src: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: '/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
      { src: '/favicon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any maskable' },
    ],
    categories: ['sports', 'outdoor', 'marine', 'shopping'],
    lang: 'en',
    scope: '/',
    id: siteUrl,
    prefer_related_applications: false,
  };

  return new Response(JSON.stringify(manifest, null, 2), {
    headers: { 'Content-Type': 'application/manifest+json' },
  });
};
