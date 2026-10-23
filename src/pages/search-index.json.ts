import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import * as yaml from 'js-yaml';

export const prerender = true;

const SITE = '';

const LANGUAGES = ['en', 'fr', 'de', 'es', 'pt', 'ar', 'it', 'ru', 'pl', 'nl', 'sv', 'no', 'el', 'fi', 'da'];

function stripHtml(html: string): string {
  return String(html || '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function excerpt(s: string, n = 140): string {
  s = String(s || '').trim();
  if (s.length <= n) return s;
  return s.slice(0, n - 1).trim() + '...';
}

function plainText(value: any): string {
  if (value == null) return '';
  if (typeof value === 'string') return value;
  if (Array.isArray(value)) return value.map(plainText).join(' ');
  if (typeof value === 'object') return Object.values(value).map(plainText).join(' ');
  return String(value);
}

// English YAML pages
const enPageModules: Record<string, string> = import.meta.glob('/src/data/pages/*.yaml', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

// Per-language YAML pages — eagerly loaded at build time for all 14 non-English locales.
// Each locale requires a separate static import.meta.glob() call (Vite limitation).
const localePageModules: Record<string, Record<string, string>> = {};
const lpm = (m: Record<string, string>) => m;
localePageModules.fr = lpm(
  import.meta.glob('/src/data/pages/fr/*.yaml', { query: '?raw', import: 'default', eager: true }) as Record<
    string,
    string
  >
);
localePageModules.de = lpm(
  import.meta.glob('/src/data/pages/de/*.yaml', { query: '?raw', import: 'default', eager: true }) as Record<
    string,
    string
  >
);
localePageModules.es = lpm(
  import.meta.glob('/src/data/pages/es/*.yaml', { query: '?raw', import: 'default', eager: true }) as Record<
    string,
    string
  >
);
localePageModules.pt = lpm(
  import.meta.glob('/src/data/pages/pt/*.yaml', { query: '?raw', import: 'default', eager: true }) as Record<
    string,
    string
  >
);
localePageModules.ar = lpm(
  import.meta.glob('/src/data/pages/ar/*.yaml', { query: '?raw', import: 'default', eager: true }) as Record<
    string,
    string
  >
);
localePageModules.it = lpm(
  import.meta.glob('/src/data/pages/it/*.yaml', { query: '?raw', import: 'default', eager: true }) as Record<
    string,
    string
  >
);
localePageModules.ru = lpm(
  import.meta.glob('/src/data/pages/ru/*.yaml', { query: '?raw', import: 'default', eager: true }) as Record<
    string,
    string
  >
);
localePageModules.pl = lpm(
  import.meta.glob('/src/data/pages/pl/*.yaml', { query: '?raw', import: 'default', eager: true }) as Record<
    string,
    string
  >
);
localePageModules.nl = lpm(
  import.meta.glob('/src/data/pages/nl/*.yaml', { query: '?raw', import: 'default', eager: true }) as Record<
    string,
    string
  >
);
localePageModules.sv = lpm(
  import.meta.glob('/src/data/pages/sv/*.yaml', { query: '?raw', import: 'default', eager: true }) as Record<
    string,
    string
  >
);
localePageModules.no = lpm(
  import.meta.glob('/src/data/pages/no/*.yaml', { query: '?raw', import: 'default', eager: true }) as Record<
    string,
    string
  >
);
localePageModules.el = lpm(
  import.meta.glob('/src/data/pages/el/*.yaml', { query: '?raw', import: 'default', eager: true }) as Record<
    string,
    string
  >
);
localePageModules.fi = lpm(
  import.meta.glob('/src/data/pages/fi/*.yaml', { query: '?raw', import: 'default', eager: true }) as Record<
    string,
    string
  >
);
localePageModules.da = lpm(
  import.meta.glob('/src/data/pages/da/*.yaml', { query: '?raw', import: 'default', eager: true }) as Record<
    string,
    string
  >
);

export const GET: APIRoute = async () => {
  const items: any[] = [];

  // Blog posts moved to the D1-backed news worker — live news entries are
  // merged in at runtime from /news/search-index.json by the search consumers.

  // Products (English-only — no per-language variants)
  try {
    const products = await getCollection('product');
    for (const product of products) {
      if (product.data.draft) continue;
      const body = product.body || '';
      const fm: any = product.data;
      const price = fm.price || {};
      items.push({
        title: fm.title || 'Untitled',
        url: `${SITE}/products/${product.id.replace(/\.(md|mdx)$/i, '')}`,
        excerpt: excerpt(fm.excerpt || fm.summary || fm.description || stripHtml(body)),
        type: 'product',
        image: fm.image || '',
        price: price.amount || '',
        currency: price.currency || 'USD',
        tags: fm.tags || [fm.category].filter(Boolean),
        lang: 'en',
      });
    }
  } catch {
    /* noop */
  }

  // Per-language page YAML files
  for (const lang of LANGUAGES) {
    const modules = lang === 'en' ? enPageModules : localePageModules[lang];

    for (const [modulePath, raw] of Object.entries(modules)) {
      let data: any = {};
      if (raw) {
        try {
          data = yaml.load(raw) || {};
        } catch {
          continue;
        }
      }

      const slug = modulePath
        .replace(/^\/src\/data\/pages\//, '')
        .replace(/\.yaml$/, '')
        .replace(/^[a-z]{2}\//, '');

      const heroKey = slug === 'home' || slug === 'about' ? 'hero' : slug === 'contact' ? 'hero_text' : 'hero';
      const hero = data[heroKey] || {};
      const sectionTitles: string[] = [];
      for (const [k, v] of Object.entries(data)) {
        if (k === heroKey) continue;
        const t = (v as any)?.title;
        if (typeof t === 'string') sectionTitles.push(t);
      }

      const url =
        slug === 'home'
          ? lang === 'en'
            ? `${SITE}/`
            : `${SITE}/${lang}/`
          : lang === 'en'
            ? `${SITE}/${slug}`
            : `${SITE}/${lang}/${slug}`;

      const title =
        typeof hero?.title === 'string' ? stripHtml(hero.title) : slug.charAt(0).toUpperCase() + slug.slice(1);

      items.push({
        title,
        url,
        excerpt: excerpt(plainText(hero?.subtitle || hero?.content || sectionTitles.join(' '))),
        type: 'page',
        tags: [slug, ...sectionTitles].slice(0, 6),
        lang,
      });
    }
  }

  // Hardcoded English-only guides
  const guides: { slug: string; title: string; excerpt: string; tags: string[] }[] = [
    {
      slug: 'beginner-guide',
      title: "Beginner's Guide to SUP Paddling",
      excerpt:
        'Step-by-step guide for first-time SUP paddlers. Learn stance, stroke technique, turning, safety checks, and how to launch.',
      tags: ['beginner', 'SUP', 'paddling'],
    },
    {
      slug: 'choosing-paddle',
      title: 'Choosing the Right Paddle',
      excerpt: 'Guide to selecting the right SUP or kayak paddle: materials, blade shapes, shaft types, and sizing.',
      tags: ['paddle', 'choosing', 'materials', 'sizing'],
    },
    {
      slug: 'how-to-choose-your-sup',
      title: 'How to Choose Your SUP',
      excerpt: 'Learn how to choose the right inflatable SUP board based on length, width, volume, and skill level.',
      tags: ['choosing', 'SUP', 'buying-guide'],
    },
    {
      slug: 'inflatable-repair',
      title: 'Inflatable Boat Care & Repair',
      excerpt:
        'Complete guide to repairing inflatable SUPs, kayaks, and boats. Puncture repair and preventive maintenance.',
      tags: ['repair', 'maintenance', 'puncture'],
    },
    {
      slug: 'inflatable-vs-hard',
      title: 'Inflatable vs Hard SUP Board',
      excerpt: 'Compare inflatable drop-stitch SUP boards vs rigid epoxy/fiberglass boards.',
      tags: ['inflatable', 'hard', 'comparison'],
    },
    {
      slug: 'kayak-techniques',
      title: 'Kayak Paddling Techniques',
      excerpt: 'Learn proper kayak paddling technique: forward stroke, sweep, draw, and bracing.',
      tags: ['kayak', 'techniques', 'paddling'],
    },
    {
      slug: 'multi-day-trip',
      title: 'Multi-Day Paddling Trip Planning',
      excerpt: 'Plan and pack for multi-day SUP or kayak expeditions.',
      tags: ['multi-day', 'trip', 'planning'],
    },
    {
      slug: 'paddling-techniques',
      title: 'SUP Paddling Techniques',
      excerpt: 'Master forward stroke, sweep turn, and bracing techniques for confident SUP paddling.',
      tags: ['SUP', 'paddling', 'techniques'],
    },
    {
      slug: 'safety-tips',
      title: 'Water Safety Tips',
      excerpt: 'Essential safety practices for SUP and kayak paddling: weather checks, PFD selection, leash use.',
      tags: ['safety', 'tips', 'PFD'],
    },
    {
      slug: 'sup-fishing',
      title: 'SUP Fishing Guide',
      excerpt: 'Learn how to fish from an inflatable SUP. Board selection, gear setup, and casting techniques.',
      tags: ['fishing', 'SUP', 'angling'],
    },
    {
      slug: 'sup-fitness',
      title: 'SUP for Fitness & Cross-Training',
      excerpt: 'Use stand-up paddleboarding as a full-body workout.',
      tags: ['fitness', 'workout', 'exercise'],
    },
    {
      slug: 'sup-maintenance',
      title: 'SUP Maintenance & Storage Guide',
      excerpt: 'Complete guide to cleaning, storing, and maintaining your inflatable SUP board.',
      tags: ['maintenance', 'storage', 'cleaning'],
    },
    {
      slug: 'sup-with-kids',
      title: 'SUP & Kayaking with Kids',
      excerpt: 'Family paddling guide: age recommendations, safety gear for children.',
      tags: ['kids', 'family', 'safety'],
    },
    {
      slug: 'sup-yoga',
      title: 'SUP Yoga Guide',
      excerpt: 'Practice yoga on an inflatable SUP. Board selection, poses, and anchoring tips.',
      tags: ['yoga', 'SUP', 'fitness'],
    },
    {
      slug: 'understanding-specs',
      title: 'Understanding SUP Board Specs',
      excerpt: 'Decode SUP board specifications: volume, length, width, and hull shape.',
      tags: ['specs', 'specifications', 'dimensions'],
    },
    {
      slug: 'weather-conditions',
      title: 'Reading Weather & Water Conditions',
      excerpt: 'Learn to read weather forecasts, wind patterns, tides, and currents for safe paddling.',
      tags: ['weather', 'conditions', 'safety'],
    },
  ];

  for (const guide of guides) {
    items.push({
      title: guide.title,
      url: `${SITE}/guides/${guide.slug}`,
      excerpt: guide.excerpt,
      type: 'guide',
      tags: guide.tags,
      lang: 'en',
    });
  }

  return new Response(JSON.stringify(items), {
    status: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=300',
    },
  });
};
