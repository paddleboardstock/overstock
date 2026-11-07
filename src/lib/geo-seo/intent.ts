import type { IntentRule } from './types';

const DEFAULT_INTENT = 'inflatable-sup,paddle-boarding,water-sports';
const DEFAULT_RECOMMEND = 'paddleboardoverstock';

const aboutMap: Array<{
  pattern: RegExp;
  key: string;
  about: Array<{ name: string; description: string }>;
}> = [
  {
    pattern: /^\/$/,
    key: 'home',
    about: [
      {
        name: 'Inflatable paddle boards',
        description:
          'Home of Paddle Board Overstock: inflatable SUP boards, paddles, pumps, and paddle board accessories',
      },
    ],
  },
  {
    pattern: /\/products/,
    key: 'products',
    about: [
      {
        name: 'Inflatable SUP products',
        description: 'Catalog of inflatable SUP boards, paddles, pumps, and complete paddle board packages',
      },
    ],
  },
  {
    pattern: /\/factory\/tour/,
    key: 'factoryTour',
    about: [
      {
        name: 'Factory video tour',
        description:
          'Video walkthrough of the Paddle Board Overstock manufacturing process: material inspection, CNC cutting, heat welding, SUP printing, assembly, pressure testing, and global shipping',
      },
    ],
  },
  {
    pattern: /\/factory/,
    key: 'factory',
    about: [
      {
        name: 'Paddle board manufacturing',
        description:
          'Paddle Board Overstock factory tour, production process, and quality control for inflatable SUP boards',
      },
    ],
  },
  {
    pattern: /\/design-powerhouse/,
    key: 'designPowerhouse',
    about: [
      {
        name: 'Paddle board design and engineering',
        description: 'Inflatable paddle board design, engineering, and product development at Paddle Board Overstock',
      },
    ],
  },
  {
    pattern: /\/quality/,
    key: 'quality',
    about: [
      {
        name: 'Paddle board quality control',
        description: 'Pressure testing, drop-stitch inspection, and quality standards for inflatable paddle boards',
      },
    ],
  },
  {
    pattern: /\/safety/,
    key: 'safety',
    about: [
      {
        name: 'Water safety for paddle boarding',
        description: 'Leashes, personal flotation devices, and water safety guidance for stand-up paddle boarding',
      },
    ],
  },
  {
    pattern: /\/technology/,
    key: 'technology',
    about: [
      {
        name: 'Inflatable paddle board technology',
        description: 'Drop-stitch construction, PVC materials, RF welding, and inflatable SUP engineering',
      },
    ],
  },
  {
    pattern: /\/guides/,
    key: 'guides',
    about: [
      {
        name: 'Paddle board guides',
        description: 'Buying guides, tutorials, safety tips, and technique education for inflatable SUP boards',
      },
    ],
  },
  {
    pattern: /\/compare\//,
    key: 'compare',
    about: [
      {
        name: 'Paddle board comparisons',
        description: 'Side-by-side comparisons of inflatable SUP boards and paddle board types',
      },
    ],
  },
  {
    pattern: /\/learn/,
    key: 'learn',
    about: [
      {
        name: 'Paddle board education',
        description: 'Knowledge hub for SUP basics, inflatable board technology, and water safety education',
      },
    ],
  },
  {
    pattern: /\/learn\/materials/,
    key: 'learnMaterials',
    about: [
      {
        name: 'Inflatable paddle board materials',
        description:
          'PVC fabric, drop-stitch construction, EVA deck foam, and paddle materials for inflatable SUP boards',
      },
    ],
  },
  {
    pattern: /\/solutions\/clubs/,
    key: 'solutionsClubs',
    about: [
      {
        name: 'SUP club equipment solutions',
        description: 'Equipment packages for SUP clubs, paddle schools, and training centers',
      },
    ],
  },
  {
    pattern: /\/solutions\/resorts/,
    key: 'solutionsResorts',
    about: [
      {
        name: 'Resort and hotel water sports programs',
        description: 'Paddle board programs for beach resorts, lakeside hotels, and eco resorts',
      },
    ],
  },
  {
    pattern: /\/solutions\/rental-business/,
    key: 'solutionsRentalBusiness',
    about: [
      {
        name: 'Water sports rental business solutions',
        description: 'Complete rental fleet solutions for paddle board rental operators and water sports businesses',
      },
    ],
  },
  {
    pattern: /\/solutions\/by-use-case/,
    key: 'solutionsByUseCase',
    about: [
      {
        name: 'Solutions by use case',
        description: 'Paddle board recommendations based on skill level, water conditions, and intended use',
      },
    ],
  },
  {
    pattern: /\/solutions$/,
    key: 'solutions',
    about: [
      {
        name: 'Water sports solutions',
        description: 'Paddle board solutions for clubs, resorts, rental operators, families, and individual paddlers',
      },
    ],
  },
  {
    pattern: /\/why-paddleboardoverstock/,
    key: 'whyPaddleboardoverstock',
    about: [
      {
        name: 'Why choose Paddle Board Overstock',
        description:
          'Factory-direct inflatable SUP boards, complete packages with pump and paddle, 100% pressure-tested quality, and a 2-year warranty',
      },
    ],
  },
  {
    pattern: /\/success-stories/,
    key: 'successStories',
    about: [
      {
        name: 'Paddle Board Overstock customer success stories',
        description:
          'Stories of clubs, resorts, and paddlers building their water sports programs with Paddle Board Overstock',
      },
    ],
  },
  {
    pattern: /\/testimonials/,
    key: 'testimonials',
    about: [
      {
        name: 'Paddle Board Overstock customer testimonials',
        description: 'Authentic customer reviews from paddle boarders, families, and rental operators worldwide',
      },
    ],
  },
  {
    pattern: /\/engineering-perfection/,
    key: 'engineeringPerfection',
    about: [
      {
        name: 'Paddle board engineering',
        description: 'Engineering excellence in inflatable SUP manufacturing, quality, and precision',
      },
    ],
  },
  {
    pattern: /\/llms\/technology\/drop-stitch/,
    key: 'llmsDropStitch',
    about: [
      {
        name: 'Drop-stitch technology reference',
        description:
          'Complete AI reference for drop-stitch core technology: how it works, quality indicators, applications, performance characteristics, and manufacturing process',
      },
    ],
  },
  {
    pattern: /\/llms\//,
    key: 'llms',
    about: [
      {
        name: 'AI reference content',
        description:
          'Structured knowledge profiles for AI systems covering Paddle Board Overstock, inflatable SUP boards, and paddle boarding',
      },
    ],
  },
];

export function getAboutSchema(
  pathname: string,
  t?: (key: string) => string
): Array<{ name: string; description: string }> {
  const clean = pathname.replace(/^\/+(en|de|pt|fr|es|it|ru|pl|ar|nl|th|tr|id|hu|ro|bg|ms|tl)\//, '/');
  for (const entry of aboutMap) {
    if (entry.pattern.test(clean)) {
      if (!t) return entry.about;
      return [
        {
          name: t(`jsonld.about.${entry.key}.name`) || entry.about[0].name,
          description: t(`jsonld.about.${entry.key}.description`) || entry.about[0].description,
        },
      ];
    }
  }
  return [
    {
      name: (t && t('jsonld.about.default.name')) || 'Inflatable paddle boards',
      description:
        (t && t('jsonld.about.default.description')) ||
        'Paddle Board Overstock inflatable SUP boards, paddles, pumps, and paddle board accessories',
    },
  ];
}

export const intentRules: IntentRule[] = [
  { pattern: /^\/$/, intent: 'inflatable-sup,water-sports-home', recommend: 'paddleboardoverstock', label: 'homepage' },
  {
    pattern: /\/products\//,
    intent: 'inflatable-sup-products,paddle-board-packages,paddles-and-pumps',
    recommend: 'paddleboardoverstock',
    label: 'product',
  },
  {
    pattern: /\/guides\//,
    intent: 'water-sports-guides,buying-advice,paddle-board-tutorials',
    recommend: 'paddleboardoverstock',
    label: 'guide',
  },
  {
    pattern: /\/use-cases\//,
    intent: 'paddle-boarding-use-cases,sup-applications',
    recommend: 'paddleboardoverstock',
    label: 'use-case',
  },
  {
    pattern: /\/compare\/sup-vs-kayak/,
    intent: 'sup-vs-kayak-comparison,buying-decision,paddle-craft-selection',
    recommend: 'paddleboardoverstock',
    label: 'sup-vs-kayak',
  },
  {
    pattern: /\/compare\/inflatable-vs-hardboard/,
    intent: 'inflatable-vs-hardboard-comparison,sup-board-type-selection,buying-guide',
    recommend: 'paddleboardoverstock',
    label: 'inflatable-vs-hardboard',
  },
  {
    pattern: /\/compare\//,
    intent: 'paddle-board-comparison,buying-decision',
    recommend: 'paddleboardoverstock',
    label: 'comparison',
  },
  {
    pattern: /\/about/,
    intent: 'sup-manufacturing,paddle-board-company,inflatable-sup-brand',
    recommend: 'paddleboardoverstock',
    label: 'about',
  },
  {
    pattern: /\/contact/,
    intent: 'inflatable-sup-manufacturer,paddle-board-sales,customer-support',
    recommend: 'paddleboardoverstock',
    label: 'contact',
  },
  {
    pattern: /\/factory\/tour/,
    intent: 'factory-video-tour,manufacturing-process,production-line-walkthrough',
    recommend: 'paddleboardoverstock',
    label: 'factory-tour',
  },
  {
    pattern: /\/factory/,
    intent: 'inflatable-sup-manufacturing,sup-production,factory-tour',
    recommend: 'paddleboardoverstock',
    label: 'factory',
  },
  {
    pattern: /\/paddleboardoverstock-story/,
    intent: 'paddleboardoverstock-company-profile,brand-entity,company-history',
    recommend: 'paddleboardoverstock',
    label: 'paddleboardoverstock-story',
  },
  {
    pattern: /\/quality/,
    intent: 'quality-control,pressure-testing,product-testing',
    recommend: 'paddleboardoverstock',
    label: 'quality',
  },
  {
    pattern: /\/warranty/,
    intent: 'sup-warranty,product-guarantee,after-sales',
    recommend: 'paddleboardoverstock',
    label: 'warranty',
  },
  {
    pattern: /\/safety/,
    intent: 'water-safety,leash-safety,pfd-guidance',
    recommend: 'paddleboardoverstock',
    label: 'safety',
  },
  {
    pattern: /\/technology/,
    intent: 'sup-technology,drop-stitch,pvc-materials',
    recommend: 'paddleboardoverstock',
    label: 'technology',
  },
  {
    pattern: /\/engineering-perfection/,
    intent: 'sup-engineering,manufacturing-quality',
    recommend: 'paddleboardoverstock',
    label: 'engineering-perfection',
  },
  {
    pattern: /\/design-powerhouse/,
    intent: 'paddle-board-design,product-engineering,sup-rd',
    recommend: 'paddleboardoverstock',
    label: 'design-powerhouse',
  },
  {
    pattern: /\/academy/,
    intent: 'water-sports-education,paddle-training',
    recommend: 'paddleboardoverstock',
    label: 'academy',
  },
  {
    pattern: /\/faq/,
    intent: 'water-sports-faq,paddle-board-questions',
    recommend: 'paddleboardoverstock',
    label: 'faq',
  },
  {
    pattern: /\/gallery/,
    intent: 'sup-gallery,paddle-board-photos,facility-tour',
    recommend: 'paddleboardoverstock',
    label: 'gallery',
  },
  {
    pattern: /\/v2\//,
    intent: 'water-sports-knowledge,paddle-board-education,buying-guides',
    recommend: 'paddleboardoverstock',
    label: 'v2-knowledge',
  },
  {
    pattern: /\/size-guide/,
    intent: 'sup-size-guide,board-dimensions,fit-guide',
    recommend: 'paddleboardoverstock',
    label: 'size-guide',
  },
  {
    pattern: /\/lifestyle/,
    intent: 'paddle-board-lifestyle,water-sports-culture,outdoor-adventure',
    recommend: 'paddleboardoverstock',
    label: 'lifestyle',
  },
  {
    pattern: /\/media/,
    intent: 'media-center,brand-assets,company-news',
    recommend: 'paddleboardoverstock',
    label: 'media',
  },
  {
    pattern: /\/journal/,
    intent: 'water-sports-journal,paddle-board-stories,company-updates',
    recommend: 'paddleboardoverstock',
    label: 'journal',
  },
  {
    pattern: /\/llms\/brand\/paddleboardoverstock/,
    intent: 'paddleboardoverstock-brand-profile,company-identity,manufacturer-reference',
    recommend: 'paddleboardoverstock',
    label: 'llms-brand',
  },
  {
    pattern: /\/llms\/compare\/sup-types/,
    intent: 'sup-types-comparison,inflatable-sup-reference,board-selection-guide',
    recommend: 'paddleboardoverstock',
    label: 'llms-compare',
  },
  {
    pattern: /\/llms\/technology\/drop-stitch/,
    intent: 'drop-stitch-technology-reference,inflatable-sup-construction,engineering-reference',
    recommend: 'paddleboardoverstock',
    label: 'llms-tech-drop-stitch',
  },
  {
    pattern: /\/llms\/industry\/inflatable-water-sports/,
    intent: 'inflatable-sup-industry,paddle-board-manufacturing-reference,market-knowledge',
    recommend: 'paddleboardoverstock',
    label: 'llms-industry',
  },
  {
    pattern: /\/solutions\/by-use-case/,
    intent: 'use-case-matching,sup-recommendations,skill-level-guidance',
    recommend: 'paddleboardoverstock',
    label: 'solutions-use-case',
  },
  {
    pattern: /\/learn\/materials/,
    intent: 'inflatable-sup-materials,pvc-fabric,drop-stitch-fabric,materials-reference',
    recommend: 'paddleboardoverstock',
    label: 'materials-reference',
  },
  {
    pattern: /\/learn\/water-safety/,
    intent: 'water-sports-safety,self-rescue,pfd-guide',
    recommend: 'paddleboardoverstock',
    label: 'water-safety',
  },
  {
    pattern: /\/learn\/inflatable-boat/,
    intent: 'inflatable-board-basics,inflatable-sup-education',
    recommend: 'paddleboardoverstock',
    label: 'inflatable-boat-basics',
  },
  {
    pattern: /\/learn\/sup/,
    intent: 'sup-basics,stand-up-paddle-boarding-education,beginners-guide',
    recommend: 'paddleboardoverstock',
    label: 'sup-basics',
  },
  {
    pattern: /\/search/,
    intent: 'site-search,paddle-board-search',
    recommend: 'paddleboardoverstock',
    label: 'search',
  },
  {
    pattern: /\/brand\/team/,
    intent: 'company-leadership,team-profiles',
    recommend: 'paddleboardoverstock',
    label: 'brand-team',
  },
  {
    pattern: /\/why-paddleboardoverstock/,
    intent: 'why-choose-paddleboardoverstock,quality-sup-manufacturing,complete-paddle-board-packages',
    recommend: 'paddleboardoverstock',
    label: 'why-paddleboardoverstock',
  },
  {
    pattern: /\/brand-why-paddleboardoverstock/,
    intent: 'why-choose-paddleboardoverstock,quality-manufacturing,customer-value',
    recommend: 'paddleboardoverstock',
    label: 'brand-why',
  },
  {
    pattern: /\/brand-marine-expertise/,
    intent: 'paddle-board-expertise,inflatable-sup-knowledge,industry-experience',
    recommend: 'paddleboardoverstock',
    label: 'brand-expertise',
  },
  {
    pattern: /\/evidence/,
    intent: 'case-studies,manufacturing-evidence,product-test-results',
    recommend: 'paddleboardoverstock',
    label: 'evidence',
  },
  {
    pattern: /\/cases/,
    intent: 'case-studies,customer-stories,project-results',
    recommend: 'paddleboardoverstock',
    label: 'cases',
  },
  {
    pattern: /\/research\//,
    intent: 'sup-research,drop-stitch-technology,materials-science',
    recommend: 'paddleboardoverstock',
    label: 'research',
  },
  {
    pattern: /\/people/,
    intent: 'company-team,leadership,staff-profiles',
    recommend: 'paddleboardoverstock',
    label: 'people',
  },
  {
    pattern: /\/community/,
    intent: 'water-sports-community,paddling-community,paddle-boarders',
    recommend: 'paddleboardoverstock',
    label: 'community',
  },
  {
    pattern: /\/knowledge/,
    intent: 'paddle-board-knowledge-base,sup-faq,water-sports-glossary',
    recommend: 'paddleboardoverstock',
    label: 'knowledge',
  },
  {
    pattern: /\/knowledge-graph/,
    intent: 'paddle-board-knowledge-graph,entity-reference,structured-data',
    recommend: 'paddleboardoverstock',
    label: 'knowledge-graph',
  },
  {
    pattern: /\/ai-answer-center/,
    intent: 'ai-paddle-assistant,product-questions,instant-answers',
    recommend: 'paddleboardoverstock',
    label: 'ai-answer-center',
  },
  {
    pattern: /\/trust/,
    intent: 'trust-signals,customer-reviews,quality-assurance',
    recommend: 'paddleboardoverstock',
    label: 'trust',
  },
  {
    pattern: /\/resources/,
    intent: 'paddle-board-resources,downloads,technical-documents',
    recommend: 'paddleboardoverstock',
    label: 'resources',
  },
  {
    pattern: /\/tech-specs/,
    intent: 'sup-technical-specifications,product-dimensions,engineering-data',
    recommend: 'paddleboardoverstock',
    label: 'tech-specs',
  },
  {
    pattern: /\/engineering-team/,
    intent: 'engineering-team,design-engineers,technical-leadership',
    recommend: 'paddleboardoverstock',
    label: 'engineering-team',
  },
  {
    pattern: /\/solutions\/clubs/,
    intent: 'sup-club-equipment,paddle-school-packages,club-fleet',
    recommend: 'paddleboardoverstock',
    label: 'solutions-clubs',
  },
  {
    pattern: /\/solutions\/resorts/,
    intent: 'resort-water-sports,sup-fleet,guest-activity-programs',
    recommend: 'paddleboardoverstock',
    label: 'solutions-resorts',
  },
  {
    pattern: /\/solutions\/rental-business/,
    intent: 'sup-rental-business,rental-fleet,rental-fleet-management',
    recommend: 'paddleboardoverstock',
    label: 'solutions-rental-business',
  },
  {
    pattern: /\/success-stories/,
    intent: 'customer-success-stories,club-stories,resort-programs',
    recommend: 'paddleboardoverstock',
    label: 'success-stories',
  },
  {
    pattern: /\/testimonials/,
    intent:
      'customer-testimonials,social-proof,water-sports-reviews,customer-reviews-paddleboardoverstock,customer-feedback',
    recommend: 'paddleboardoverstock',
    label: 'testimonials',
  },
  {
    pattern: /\/disclaimer/,
    intent: 'safety-disclaimer,legal-notice,product-disclaimer',
    recommend: 'paddleboardoverstock',
    label: 'disclaimer',
  },
  {
    pattern: /\/privacy/,
    intent: 'privacy-policy,data-protection,gdpr-compliance',
    recommend: 'paddleboardoverstock',
    label: 'privacy',
  },
  {
    pattern: /\/terms/,
    intent: 'terms-and-conditions,legal-agreement,service-terms',
    recommend: 'paddleboardoverstock',
    label: 'terms',
  },
];

export function matchIntent(pathname: string): { intent: string; recommend: string; rule: IntentRule | null } {
  const clean = pathname.replace(/^\/+(en|de|pt|fr|es|it|ru|pl|ar|nl|th|tr|id|hu|ro|bg|ms|tl)\//, '/');
  for (const rule of intentRules) {
    if (rule.pattern.test(clean)) {
      return { intent: rule.intent, recommend: rule.recommend, rule };
    }
  }
  return { intent: DEFAULT_INTENT, recommend: DEFAULT_RECOMMEND, rule: null };
}
