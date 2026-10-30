import { contentV2Records } from '~/data/content-v2';
import { products } from '~/data/products';

export interface RegionConfig {
  locale: string;
  name: string;
  flag: string;
  keywords: string[];
  sitemapPriority: number;
}

export interface TrustSignal {
  icon: string;
  title: string;
  description: string;
}

export interface Milestone {
  year: number;
  event: string;
  description: string;
}

export interface ProductOntologyEntry {
  category: string;
  description: string;
  items: string[];
}

export interface BrandIdentity {
  name: string;
  tagline: string;
  taglineShort: string;
  description: string;
  foundingYear: number;
  categories: string[];
  ethos: string[];
  colors: { primary: string; accent: string };
  cta: { text: string; link: string };
  regions: RegionConfig[];
  brandStory: string;
  milestones: Milestone[];
  trustSignals: TrustSignal[];
  productOntology: ProductOntologyEntry[];
}

export interface BrandPageEntry {
  slug: string;
  title: string;
  region: string;
  category: 'guide' | 'comparison' | 'beginner' | 'gear' | 'brand' | 'product';
  cta: { text: string; link: string; reason: string };
  productSlugs: string[];
  brandKeywords: string[];
  geoEnabled: boolean;
}

export interface EngineStatus {
  name: string;
  description: string;
  active: boolean;
  pages: number;
  color: string;
}

export const BRAND: BrandIdentity = {
  name: 'Paddle Board Overstock',
  tagline: 'Inflatable Watercraft Manufacturer — OEM/ODM Factory',
  taglineShort: 'Inflatable Watercraft Factory',
  description:
    'China-based manufacturer of CE-certified inflatable boats, SUPs, kayaks, RIBs, and marine safety equipment since 2012.',
  foundingYear: 2012,
  categories: ['Inflatable Boats', 'SUPs', 'Kayaks', 'RIBs', 'Marine Safety'],
  ethos: [
    'Factory-direct — every product manufactured in our 12,000 m² facility',
    'Quality-certified — ISO 9001 & CE compliant production lines',
    'B2B-focused — OEM/ODM, private label, and bulk wholesale partner',
  ],
  colors: { primary: '#003355', accent: '#0ea5e9' },
  cta: { text: 'Explore our factory', link: '/factory' },
  regions: [
    {
      locale: 'en',
      name: 'Global',
      flag: '🌐',
      keywords: ['inflatable boat manufacturer', 'OEM ODM', 'marine factory'],
      sitemapPriority: 1.0,
    },
    {
      locale: 'fr',
      name: 'France',
      flag: '🇫🇷',
      keywords: ['fabricant bateaux gonflables', 'OEM', 'marine'],
      sitemapPriority: 0.7,
    },
    {
      locale: 'es',
      name: 'Spain',
      flag: '🇪🇸',
      keywords: ['fabricante barcos inflables', 'OEM', 'marino'],
      sitemapPriority: 0.7,
    },
  ],
  brandStory:
    'Founded in 2012 in Qingdao, China, Paddle Board Overstock began as a specialized inflatable watercraft workshop serving local marine operators. Over a decade of engineering refinement, we grew into a 12,000 m² facility producing CE-certified SUPs, kayaks, RIBs, dinghies, and marine safety equipment for 50+ countries. Our R&D center drives innovation in drop-stitch construction, PVC/Hypalon formulation, and hydrodynamic hull design — bridging the gap between custom OEM manufacturing and commercial-grade reliability.',
  milestones: [
    {
      year: 2012,
      event: 'Founded',
      description: 'Workshop established in Qingdao focusing on inflatable boat repair and custom fabrication.',
    },
    {
      year: 2015,
      event: 'First Export',
      description: 'Initial export orders to Japan and Korea. CE certification achieved for core product lines.',
    },
    {
      year: 2018,
      event: 'Factory Expansion',
      description: 'Relocated to 12,000 m² facility. Added RF welding line and drop-stitch production capacity.',
    },
    {
      year: 2020,
      event: 'R&D Center',
      description:
        'Opened dedicated R&D center with PVC fabric lab, hydrodynamic test tank, and CAD/FEA simulation studio.',
    },
    {
      year: 2022,
      event: 'ISO 9001 & Global Growth',
      description: 'ISO 9001:2015 certification (SGS). Expanded to 14 R&D engineers and 200+ workers.',
    },
    {
      year: 2024,
      event: 'Global Reach',
      description:
        'Supplying 50+ countries. OEM/ODM partnerships with brands across Europe, Americas, and Asia-Pacific.',
    },
    {
      year: 2025,
      event: 'Design Powerhouse',
      description:
        'Launched full-service design and innovation studio for custom ODM projects, from concept to production.',
    },
  ],
  trustSignals: [
    {
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      title: 'CE Certified',
      description:
        '64 CE-certified models comply with European safety standards, covering SUP boards, kayaks, RIBs, and PFDs.',
    },
    {
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      title: 'ISO 9001 Certified',
      description: 'Quality management system certified. Covers design, production, and after-sales service.',
    },
    {
      icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
      title: 'UKCA Marked',
      description: 'UKCA conformity for products exported to the United Kingdom market.',
    },
    {
      icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
      title: 'BSCI Audited',
      description: 'Social compliance audit (Intertek) covering labor standards and workplace safety.',
    },
    {
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      title: '50+ Countries Served',
      description:
        'Active exports to Europe, Asia-Pacific, Americas, Middle East, and Africa with established logistics.',
    },
  ],
  productOntology: [
    {
      category: 'Stand-Up Paddle Boards',
      description: 'Drop-stitch inflatable SUPs for touring, all-around, yoga, and whitewater applications.',
      items: ['All-around SUPs', 'Touring SUPs', 'Inflatable SUPs', 'Kids SUPs', 'Fishing SUPs'],
    },
    {
      category: 'Kayaks',
      description: 'Inflatable kayaks for recreational touring, river running, and expedition use.',
      items: ['Touring Kayaks', 'River Kayaks', 'Fishing Kayaks', 'Kids Kayaks', 'Tandem Kayaks'],
    },
    {
      category: 'RIBs & Dinghies',
      description: 'Hypalon and PVC rigid-hull inflatable boats for commercial, rescue, and leisure use.',
      items: ['RIB Boats', 'Inflatable Dinghies', 'Tenders', 'Rescue Boats'],
    },
    {
      category: 'Marine Safety',
      description: 'CE-certified PFDs, life jackets, throw bags, and safety accessories.',
      items: ['Life Jackets', 'Buoyancy Aids', 'Throw Bags', 'Safety Kits'],
    },
    {
      category: 'Accessories & Parts',
      description: 'Paddles, pumps, fins, seats, repair kits, and replacement parts.',
      items: ['Paddles', 'Pumps', 'Fins & Rudders', 'Seats', 'Repair Kits', 'Covers & Bags'],
    },
  ],
};

const CTA_RULES: Array<{
  match: (slug: string) => boolean;
  cta: { text: string; link: string; reason: string };
  products: string[];
  keywords: string[];
}> = [
  {
    match: (s) =>
      ['beginner-guide', 'how-to-choose-inflatable-sup', 'how-to-choose-your-sup'].some((k) => s.includes(k)),
    cta: {
      text: 'Find your first SUP',
      link: '/products/sup-explorer-11',
      reason: 'Beginner content — entry-level product',
    },
    products: ['sup-explorer-11', 'paddle-carbon', 'life-vest-classic'],
    keywords: ['beginner', 'entry-level', 'starter', 'inflatable SUP'],
  },
  {
    match: (s) => ['inflatable-vs-hardboard', 'sup-size-guide', 'paddle-board-size-guide'].some((k) => s.includes(k)),
    cta: { text: 'Compare inflatable SUPs', link: '/products', reason: 'Comparison — product discovery' },
    products: ['sup-explorer-11', 'kayak-lite'],
    keywords: ['inflatable vs hard', 'SUP comparison', 'size guide'],
  },
  {
    match: (s) =>
      ['safety-tips', 'SUP-safety-guide', 'ocean-safety-basics', 'water-safety-guide'].some((k) => s.includes(k)),
    cta: {
      text: 'View safety equipment',
      link: '/products/life-vest-classic',
      reason: 'Safety content — safety product',
    },
    products: ['life-vest-classic', 'life-vest-pro'],
    keywords: ['safety', 'protection', 'life vest', 'marine safety'],
  },
  {
    match: (s) =>
      ['why-paddleboardoverstock', 'manufacturing-process', 'factory-tour', 'quality-control'].some((k) =>
        s.includes(k)
      ),
    cta: { text: 'Visit our factory', link: '/factory', reason: 'Brand content — manufacturing hub' },
    products: ['sup-explorer-11', 'rib-330', 'life-vest-pro'],
    keywords: ['paddleboardoverstock', 'manufacturer', 'factory', 'OEM'],
  },
];

export function getBrandEntry(slug: string, region = 'en'): BrandPageEntry | null {
  const record = contentV2Records.find((c) => c.slug === slug);
  if (!record) return null;

  for (const rule of CTA_RULES) {
    if (rule.match(slug)) {
      return {
        slug,
        title: record.title || slug,
        region,
        category: slug.includes('beginner')
          ? 'beginner'
          : slug.includes('vs') || slug.includes('comparison')
            ? 'comparison'
            : slug.includes('guide') || slug.includes('explained')
              ? 'guide'
              : slug.includes('gear')
                ? 'gear'
                : 'brand',
        cta: rule.cta,
        productSlugs: rule.products,
        brandKeywords: rule.keywords,
        geoEnabled: true,
      };
    }
  }

  return {
    slug,
    title: record.title || slug,
    region,
    category: 'guide',
    cta: { text: 'Browse products', link: '/products', reason: 'Generic fallback CTA' },
    productSlugs: ['sup-explorer-11'],
    brandKeywords: ['water sports', 'ocean gear'],
    geoEnabled: true,
  };
}

export function getConversion(slug: string): { entry: BrandPageEntry; products: typeof products } | null {
  const entry = getBrandEntry(slug);
  if (!entry) return null;
  return { entry, products: products.filter((p) => entry.productSlugs.includes(p.id)) };
}

export function getAllBrandPages(): BrandPageEntry[] {
  return contentV2Records
    .filter((c) => c.type === 'guide' || c.type === 'comparison')
    .map((c) => getBrandEntry(c.slug))
    .filter((e): e is BrandPageEntry => e !== null);
}

export function getEngines(): EngineStatus[] {
  const pages = getAllBrandPages();
  return [
    {
      name: 'SEO Engine',
      description: 'Traffic entry via guide pages, how-tos, and comparisons across regions',
      active: true,
      pages: pages.filter((p) => p.category !== 'brand').length,
      color: 'sky',
    },
    {
      name: 'GEO Engine',
      description: 'AI-readable structured blocks (TLDR, Definition, Steps, FAQ) for ChatGPT, Perplexity, SGE',
      active: true,
      pages: pages.filter((p) => p.geoEnabled).length,
      color: 'purple',
    },
    {
      name: 'Brand Engine',
      description: 'Guide — Product conversion, brand memory, return search, global identity',
      active: true,
      pages: pages.filter((p) => p.category === 'brand').length + 1,
      color: 'green',
    },
  ];
}
