import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://shop.paddleboardoverstock.com',
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
    // Pin vite's tsconfig to this subproject — without it, vite 8's implicit
    // tsconfig discovery can pick up the monorepo root tsconfig (whose
    // `extends "astro/tsconfigs/base"` is unresolvable when only shop deps
    // are installed, e.g. in CI).
    tsconfig: 'tsconfig.json',
  },
});
