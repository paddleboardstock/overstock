import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://supstocklot.com',
  integrations: [
    sitemap({
      // The gated portal must never appear in the public sitemap.
      filter: (page) => !page.includes('/portal/'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
