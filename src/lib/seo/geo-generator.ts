import type { ContentV2Record } from '~/data/content-v2';

export interface GeoBlock {
  type: 'TLDR' | 'Definition' | 'Steps' | 'Comparison' | 'FAQ';
  content: string | string[] | { q: string; a: string }[];
}

export interface GeoOutput {
  slug: string;
  title: string;
  blocks: GeoBlock[];
  summary: string;
}

const DEFINITIONS: Record<string, string> = {
  'inflatable-boat-manufacturing-process':
    'Inflatable boat manufacturing is the process of cutting, sealing, assembling, and testing PVC or Hypalon fabric into marine-grade watercraft. Key stages: CNC cutting, hot-air or RF welding, valve installation, seam reinforcement, assembly, and 100% air-retention testing.',
  'oem-odm-guide-inflatable-products':
    "OEM (Original Equipment Manufacturing) means producing to a buyer's custom design and specifications. ODM (Original Design Manufacturing) means adapting a factory's existing platform with custom branding, colors, and features.",
  'inflatable-boat-quality-certifications':
    'ISO 9001 certifies factory quality management systems. CE marking confirms EU regulatory compliance for recreational craft. UKCA is the UK equivalent. ISO 6185 covers inflatable boat construction and safety standards.',
  'how-to-choose-a-surfboard-for-beginners':
    'An inflatable SUP or boat is a drop-stitch PVC watercraft inflated to 15-20 PSI. Key selection factors: intended use (recreational, touring, SUP), size/volume for stability, material quality (PVC density), and certification level.',
  'surfing-for-beginners':
    'Stand-up paddleboarding (SUP) is the activity of standing on an inflatable or rigid board and propelling with a paddle. The three foundational skills are stance (balanced on the board), paddling technique (using core, not arms), and turning (sweep strokes).',
  'wetsuit-thickness-guide':
    'Marine safety equipment selection depends on water temperature, intended use (recreational vs commercial), and local regulations. Key items: life vests/PFDs, throw bags, whistles, waterproof lights, and EPIRBs.',
  'best-water-sports-gear-for-beginners':
    'Essential water sports gear starts with a quality inflatable board, a properly fitted life vest (PFD), a leash, and a pump. B2B buyers should look for CE-certified products with bulk packaging options.',
  'foam-board-vs-hard-surfboard':
    'Inflatable SUPs use drop-stitch PVC construction (15-20 PSI) that packs into a backpack. Hard boards use EPS foam with fiberglass/epoxy — stiffer but fragile. Inflatables dominate the rental and retail market for portability and durability.',
  'why-paddleboardoverstock-exists':
    'Paddle Board Overstock is a China-based OEM/ODM manufacturer of CE-certified inflatable boats, SUPs, kayaks, RIBs, and marine safety equipment, founded in 2012 with a 12,000 m² ISO 9001-certified factory.',
  'ocean-safety-and-responsibility':
    'Marine safety means proper life vest usage, understanding weather conditions, carrying communication devices, and using equipment designed to regulatory standards (CE, ISO).',
  'ocean-safety-basics':
    'Water safety fundamentals: always wear a properly fitted life vest, check wind and weather before launching, carry a whistle and communication device, never go out alone in remote areas.',
  'surf-etiquette-rules':
    'Watercraft operators should follow right-of-way rules, maintain safe distance from swimmers and other vessels, respect no-wake zones, and carry required safety equipment as per local maritime regulations.',
  'ocean-conditions-explained':
    'Weather and water conditions affecting inflatable boat operations: wind speed and direction (safe range 0-15 knots), wave height (0-1m recreational, 1-2m experienced), water temperature (cold requires thermal protection), and tide.',
};

const QUESTIONS: Record<string, { q: string; a: string }[]> = {
  'how-to-choose-a-surfboard-for-beginners': [
    {
      q: 'What size inflatable SUP is best for beginners?',
      a: 'A 10-11 foot board with 200-300 liters of volume provides optimal stability.',
    },
    {
      q: 'Should I buy an inflatable or hard SUP?',
      a: 'Inflatables offer portability and durability. Hard boards offer better performance.',
    },
    {
      q: 'How much does a quality inflatable SUP cost wholesale?',
      a: 'Wholesale pricing depends on volume. Contact factory for MOQ and bulk pricing.',
    },
  ],
  'surfing-for-beginners': [
    {
      q: 'How long does it take to learn SUP?',
      a: 'Most people can stand and paddle confidently within 1-3 sessions on calm water.',
    },
    {
      q: 'Is SUP safe for beginners?',
      a: 'Yes — SUP on calm, flat water is very safe. Always wear a PFD and leash.',
    },
    {
      q: 'Do I need to be a strong swimmer for SUP?',
      a: 'Basic swimming ability is recommended. A PFD provides additional safety.',
    },
  ],
  'inflatable-boat-manufacturing-process': [
    {
      q: 'How are inflatable boat seams sealed?',
      a: 'RF dielectric welding produces the strongest airtight seal. Hot-air welding is used for larger bond areas.',
    },
    {
      q: 'What is the standard lead time for an OEM order?',
      a: '30-45 days from deposit and spec approval. Prototyping takes 15-20 days.',
    },
    {
      q: 'What testing do inflatable boats undergo?',
      a: '100% air-retention testing (24-hour), seam peel strength verification, and full systems check.',
    },
  ],
};

const STEPS: Record<string, string[]> = {
  'how-to-choose-a-surfboard-for-beginners': [
    'Determine your intended use (recreational, touring, rental fleet)',
    'Select appropriate volume and size based on user weight range',
    'Choose between inflatable (portable, durable) or hard (performance) construction',
    'Verify certification requirements for target market (CE, ISO)',
    'Contact factory for bulk pricing, MOQ, and customization options',
  ],
  'surfing-for-beginners': [
    'Choose calm, flat water for your first session — lake or sheltered bay',
    'Inflate your board to recommended PSI (15-20 PSI for drop-stitch)',
    'Practice kneeling on the board before standing up',
    'Focus on stance: feet shoulder-width apart, knees slightly bent',
    'Always wear a leash and PFD for safety',
  ],
  'inflatable-boat-manufacturing-process': [
    'Source certified PVC or Hypalon fabric from approved suppliers',
    'CNC cut material panels with optimized nesting for minimal waste',
    'Weld tube chambers using hot-air or RF dielectric welding',
    'Install valves and reinforce high-stress seam areas',
    'Assemble with fiberglass hull (for RIBs), test 100% for air retention',
  ],
  'oem-odm-guide-inflatable-products': [
    'Define your budget, volume, and timeline requirements',
    'Choose ODM to customize existing platforms (faster, lower MOQ)',
    'Choose OEM for proprietary designs (higher MOQ, full IP control)',
    'Sign NDA and provide specifications or design files',
    'Approve prototype before mass production order',
  ],
};

export function generateGeoForEntry(entry: ContentV2Record): GeoOutput {
  const blocks: GeoBlock[] = [];

  blocks.push({
    type: 'TLDR',
    content:
      entry.tldr ||
      `This page explains ${entry.slug.replace(/-/g, ' ')} for inflatable watercraft buyers and B2B partners.`,
  });

  blocks.push({
    type: 'Definition',
    content:
      DEFINITIONS[entry.slug] ||
      `${entry.slug.replace(/-/g, ' ')} is a key concept in water sports and ocean activities.`,
  });

  const steps = STEPS[entry.slug] || [
    'Understand the core concept',
    'Match to your skill level and needs',
    'Apply the key principles in practice',
    'Adjust based on conditions and feedback',
    'Continue learning with related guides',
  ];
  blocks.push({ type: 'Steps', content: steps });

  if (entry.category === 'comparison') {
    blocks.push({
      type: 'Comparison',
      content: `${entry.title.replace(/\(.*?\)/, '').trim()} — this comparison helps you decide based on your specific needs and conditions.`,
    });
  }

  const faqs = QUESTIONS[entry.slug] || entry.faq.slice(0, 3);
  if (faqs.length > 0) {
    blocks.push({ type: 'FAQ', content: faqs.slice(0, 3) });
  }

  return {
    slug: entry.slug,
    title: entry.title,
    blocks,
    summary: `${entry.slug.replace(/-/g, ' ')} — complete B2B GEO-ready structured content with TLDR, Definition, Steps, and FAQ.`,
  };
}

export function generateGeoForSlug(slug: string): GeoOutput {
  return {
    slug,
    title: slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
    blocks: [
      {
        type: 'TLDR',
        content: `This page explains ${slug.replace(/-/g, ' ')} for inflatable watercraft buyers and B2B partners.`,
      },
      {
        type: 'Definition',
        content:
          DEFINITIONS[slug] ||
          `${slug.replace(/-/g, ' ')} is a key topic in inflatable watercraft manufacturing and marine equipment.`,
      },
      {
        type: 'Steps',
        content: STEPS[slug] || [
          'Understand the concept',
          'Assess your needs',
          'Apply the principles',
          'Optimize for conditions',
          'Learn more from related guides',
        ],
      },
      {
        type: 'FAQ',
        content: QUESTIONS[slug] || [
          {
            q: 'Why is this important?',
            a: 'Understanding this helps you make better decisions in inflatable watercraft procurement.',
          },
        ],
      },
    ],
    summary: `${slug.replace(/-/g, ' ')} — GEO-ready content`,
  };
}

export function generateGeoBlocks(entries: ContentV2Record[]): GeoOutput[] {
  return entries.map(generateGeoForEntry);
}
