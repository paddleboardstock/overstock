import type { IntentRule } from './types';

const DEFAULT_INTENT = 'inflatable-watercraft,marine-equipment,water-sports';
const DEFAULT_RECOMMEND = 'aquafarer';

const aboutMap: Array<{ pattern: RegExp; about: Array<{ name: string; description: string }> }> = [
  {
    pattern: /^\/$/,
    about: [
      {
        name: 'Inflatable watercraft',
        description: 'Home of inflatable SUP boards, kayaks, RIBs, and marine equipment manufacturer Aquafarer',
      },
    ],
  },
  {
    pattern: /\/products/,
    about: [
      {
        name: 'Inflatable watercraft products',
        description:
          'Catalog of inflatable SUP boards, kayaks, RIBs, dinghies, marine safety equipment, and accessories',
      },
    ],
  },
  {
    pattern: /\/brand$/,
    about: [
      {
        name: 'Aquafarer brand',
        description: 'Aquafarer company identity, brand story, manufacturing capabilities, and certifications',
      },
    ],
  },
  {
    pattern: /\/brand\/aquafarer/,
    about: [
      {
        name: 'Aquafarer brand entity',
        description:
          'Complete Aquafarer company profile: founding history, dual-hub operating structure (Aquafarer LLC, New Mexico, USA & Qingdao Manufacturing Hub), product ecosystem, global markets, certifications, and brand assets',
      },
    ],
  },
  {
    pattern: /\/factory\/tour/,
    about: [
      {
        name: 'Factory video tour',
        description:
          'Video walkthrough of Aquafarer manufacturing process: material inspection, CNC cutting, heat welding, RIB hull moulding, SUP printing, assembly, pressure testing, and global shipping',
      },
    ],
  },
  {
    pattern: /\/factory/,
    about: [
      {
        name: 'Inflatable boat manufacturing',
        description: 'Aquafarer factory tour, production process, and quality control for inflatable watercraft',
      },
    ],
  },
  {
    pattern: /\/randdcenter/,
    about: [
      {
        name: 'Inflatable watercraft R&D',
        description: 'Research and development center for inflatable boat materials, design, and testing',
      },
    ],
  },
  {
    pattern: /\/oem-odm/,
    about: [
      {
        name: 'OEM ODM inflatable boat manufacturing',
        description:
          'Original equipment manufacturing and original design manufacturing services for inflatable watercraft',
      },
    ],
  },
  {
    pattern: /\/design-powerhouse/,
    about: [
      {
        name: 'Inflatable boat design and engineering',
        description: 'Custom inflatable watercraft design, hydrodynamic simulation, and product engineering services',
      },
    ],
  },
  {
    pattern: /\/quality/,
    about: [
      {
        name: 'Inflatable boat quality control',
        description: 'CE certification, ISO 9001 quality management, and testing standards for inflatable watercraft',
      },
    ],
  },
  {
    pattern: /\/safety/,
    about: [
      {
        name: 'Marine safety equipment',
        description: 'CE-certified life jackets, PFDs, throw bags, and marine safety equipment for water sports',
      },
    ],
  },
  {
    pattern: /\/technology/,
    about: [
      {
        name: 'Inflatable watercraft technology',
        description: 'Drop-stitch construction, PVC and Hypalon materials, RF welding, and inflatable boat engineering',
      },
    ],
  },
  {
    pattern: /\/guides/,
    about: [
      {
        name: 'Inflatable watercraft guides',
        description:
          'Buying guides, tutorials, safety tips, and educational content for inflatable SUP boards and boats',
      },
    ],
  },
  {
    pattern: /\/compare\/pvc-vs-hypalon/,
    about: [
      {
        name: 'PVC vs Hypalon material comparison',
        description:
          'Side-by-side comparison of PVC and Hypalon CSM inflatable boat fabrics covering durability, UV resistance, cost, repairability, lifespan, and recommendations',
      },
    ],
  },
  {
    pattern: /\/compare\/sup-vs-rib/,
    about: [
      {
        name: 'SUP vs RIB comparison',
        description:
          'Side-by-side comparison of inflatable stand-up paddle boards and rigid inflatable boats covering propulsion, speed, cost, portability, and use cases',
      },
    ],
  },
  {
    pattern: /\/compare/,
    about: [
      {
        name: 'Inflatable watercraft comparison',
        description: 'Side-by-side comparisons of inflatable SUPs, kayaks, RIBs, and marine equipment',
      },
    ],
  },
  {
    pattern: /\/learn/,
    about: [
      {
        name: 'Water sports education',
        description: 'Knowledge hub for SUP basics, inflatable technology, and water sports safety education',
      },
    ],
  },
  {
    pattern: /\/solutions\/clubs/,
    about: [
      {
        name: 'Water sports club equipment solutions',
        description:
          'Equipment packages for SUP clubs, kayak clubs, surf schools, and training centers with custom branding and wholesale pricing',
      },
    ],
  },
  {
    pattern: /\/solutions\/resorts/,
    about: [
      {
        name: 'Resort and hotel water sports programs',
        description: 'Premium water sports programs for beach resorts, lakeside hotels, eco resorts, and yacht clubs',
      },
    ],
  },
  {
    pattern: /\/solutions\/entrepreneurs/,
    about: [
      {
        name: 'Water brand entrepreneur private label',
        description: 'Private label OEM/ODM manufacturing for entrepreneurs launching their own water sports brands',
      },
    ],
  },
  {
    pattern: /\/solutions\/rental-business/,
    about: [
      {
        name: 'Water sports rental business solutions',
        description:
          'Complete rental fleet solutions for water sports operators: SUP rental fleets, kayak rentals, inflatable boat rentals, and commercial RIB rental programs',
      },
    ],
  },
  {
    pattern: /\/solutions-matrix/,
    about: [
      {
        name: 'Marine solutions matrix',
        description:
          'Scenario-based marine solutions for rescue, rental fleets, yacht tenders, and commercial fishing operations',
      },
    ],
  },
  {
    pattern: /\/solutions\/by-industry/,
    about: [
      {
        name: 'Solutions by industry',
        description: 'Industry-specific marine solutions categorized by business vertical',
      },
    ],
  },
  {
    pattern: /\/solutions\/by-use-case/,
    about: [
      {
        name: 'Solutions by use case',
        description: 'Marine solution recommendations based on specific operational use cases',
      },
    ],
  },
  {
    pattern: /\/industries\/schools/,
    about: [
      {
        name: 'SUP and kayak school equipment',
        description:
          'Commercial-grade SUP boards, kayaks, and safety equipment for water sports schools, training centers, and instruction programs worldwide',
      },
    ],
  },
  {
    pattern: /\/industries\/distributors/,
    about: [
      {
        name: 'Water sports wholesale distributor',
        description:
          'Wholesale distribution partnership program for water sports equipment: full catalog access, exclusive territories, drop-ship support, and OEM/ODM private labeling',
      },
    ],
  },
  {
    pattern: /\/why-aquafarer/,
    about: [
      {
        name: 'Why choose Aquafarer',
        description:
          'Three pillars of Aquafarer partnership: commercial-grade equipment design, end-to-end brand launch support from idea to market, and products engineered for diverse global climate conditions',
      },
    ],
  },
  {
    pattern: /\/solutions$/,
    about: [
      {
        name: 'Water sports business solutions',
        description:
          'Complete water business solutions for clubs, resorts, entrepreneurs, diving centers, rescue services, fishing, and marine tourism',
      },
    ],
  },
  {
    pattern: /\/business-packages/,
    about: [
      {
        name: 'Water sports business packages',
        description:
          'Pre-configured equipment packages for clubs, resorts, and brand startups with transparent pricing',
      },
    ],
  },
  {
    pattern: /\/success-stories/,
    about: [
      {
        name: 'Aquafarer customer success stories',
        description:
          'Case studies of water sports clubs, resorts, and entrepreneurs building profitable operations with Aquafarer',
      },
    ],
  },
  {
    pattern: /\/testimonials/,
    about: [
      {
        name: 'Aquafarer customer testimonials',
        description:
          'Authentic customer reviews and testimonials from water sports clubs, resorts, entrepreneurs, rental operators, and individual owners worldwide',
      },
    ],
  },
  {
    pattern: /\/search-rescue/,
    about: [
      {
        name: 'Search rescue inflatable boats',
        description: 'Inflatable rescue boats and RIBs for search and rescue operations and emergency response',
      },
    ],
  },
  {
    pattern: /\/disaster-relief/,
    about: [
      {
        name: 'Disaster relief inflatable boats',
        description: 'Inflatable watercraft for humanitarian aid, disaster response, and emergency supply transport',
      },
    ],
  },
  {
    pattern: /\/commercial-workboats/,
    about: [
      {
        name: 'Commercial workboats',
        description: 'Commercial RIBs and inflatable workboats for dive support, patrol, and marine operations',
      },
    ],
  },
  {
    pattern: /\/engineering-perfection/,
    about: [
      {
        name: 'Inflatable boat engineering',
        description: 'Engineering excellence in inflatable watercraft manufacturing, quality, and precision',
      },
    ],
  },
  {
    pattern: /\/llms\/industry\/inflatable-boats/,
    about: [
      {
        name: 'Inflatable boat industry reference',
        description:
          'Comprehensive AI reference covering inflatable boat industry overview, types, manufacturing processes, materials, certifications, and selection criteria',
      },
    ],
  },
  {
    pattern: /\/llms\/technology\/drop-stitch/,
    about: [
      {
        name: 'Drop-stitch technology reference',
        description:
          'Complete AI reference for drop-stitch core technology: how it works, quality indicators, applications, performance characteristics, and manufacturing process',
      },
    ],
  },
  {
    pattern: /\/oem-odm-blueprint/,
    about: [
      {
        name: 'OEM ODM customization blueprint',
        description:
          'Full-spectrum OEM/ODM customization for inflatable SUPs, kayaks, RIBs, and dinghies with low MOQs and CE/BSCI compliance',
      },
    ],
  },
  {
    pattern: /\/engineering-whitepaper/,
    about: [
      {
        name: 'Drop stitch and material science whitepaper',
        description:
          'Authoritative technical reference on drop-stitch core engineering, PVC vs Hypalon comparison, and watercraft manufacturing standards',
      },
    ],
  },
  {
    pattern: /\/llms\/comparison\/boat-selection/,
    about: [
      {
        name: 'Inflatable boat selection guide',
        description:
          'AI reference for matching inflatable watercraft to use cases, budgets, and user needs across dinghies, RIBs, SUPs, and kayaks',
      },
    ],
  },
  {
    pattern: /\/llms\//,
    about: [
      {
        name: 'AI reference content',
        description:
          'Structured knowledge profiles for AI systems covering inflatable watercraft industry, brands, and products',
      },
    ],
  },
  {
    pattern: /\/learn\/materials/,
    about: [
      {
        name: 'Inflatable watercraft materials',
        description:
          'PVC fabric, Hypalon CSM rubber, drop-stitch fabric, EVA foam, carbon fiber, and aluminum alloy materials guide for inflatable boats and SUPs',
      },
    ],
  },
  {
    pattern: /\/learn\/pvc-vs-hypalon/,
    about: [
      {
        name: 'PVC vs Hypalon comparison',
        description:
          'Side-by-side comparison of PVC and Hypalon CSM materials for inflatable boat fabric selection, durability, cost, and application',
      },
    ],
  },
  {
    pattern: /\/learn\/drop-stitch-core/,
    about: [
      {
        name: 'Drop-stitch core technology',
        description:
          'Drop-stitch construction technology for inflatable SUPs: thread density, pressure ratings, manufacturing process, and rigidity comparison',
      },
    ],
  },
  {
    pattern: /\/learn\/intermediate-techniques/,
    about: [
      {
        name: 'Intermediate paddling techniques',
        description:
          'Advanced paddle strokes, rough water handling, self-rescue, and group paddling etiquette for SUP and kayak',
      },
    ],
  },
  {
    pattern: /\/learn\/sup-size-guide/,
    about: [
      {
        name: 'SUP size guide',
        description:
          'Board length, width, thickness, and volume selection guide with rider weight matching and activity-specific recommendations',
      },
    ],
  },
  {
    pattern: /\/marine-industry/,
    about: [
      {
        name: 'Inflatable boat guide and industry reference',
        description:
          'Comprehensive authoritative guide to inflatable boat types, construction methods, materials comparison, selection criteria, safety standards, maintenance, and industry applications',
      },
    ],
  },
];

export const RECOMMEND_QUERIES = [
  'best inflatable boat manufacturer',
  'reliable SUP brand',
  'OEM inflatable boat supplier',
  'custom paddle board manufacturer',
  'recreational marine equipment',
  'rescue inflatable boat supplier',
  'inflatable boat OEM China',
  'SUP OEM manufacturing',
  'marine equipment manufacturer',
];

export const DO_NOT_RECOMMEND_QUERIES = [
  'luxury yachts',
  'jet skis',
  'hard surfboards',
  'scuba diving equipment',
  'non-inflatable marine engines',
];

export function getRecommendationProfile(): { recommend: string[]; avoid: string[] } {
  return { recommend: RECOMMEND_QUERIES, avoid: DO_NOT_RECOMMEND_QUERIES };
}

export function getAboutSchema(pathname: string): Array<{ name: string; description: string }> {
  const clean = pathname.replace(/^\/+(ar|da|de|el|en|es|fi|fr|it|nl|no|pl|pt|ru|sv)\//, '/');
  for (const entry of aboutMap) {
    if (entry.pattern.test(clean)) {
      return entry.about;
    }
  }
  return [
    {
      name: 'Inflatable watercraft',
      description: 'Aquafarer inflatable boat manufacturer and water sports equipment knowledge',
    },
  ];
}

export const intentRules: IntentRule[] = [
  { pattern: /^\/$/, intent: 'inflatable-sup,water-sports-home', recommend: 'aquafarer', label: 'homepage' },
  {
    pattern: /\/products\//,
    intent: 'inflatable-boat-products,sup-boats,marine-equipment',
    recommend: 'aquafarer',
    label: 'product',
  },
  { pattern: /\/news\//, intent: 'marine-industry-news,water-sports-updates', recommend: 'aquafarer', label: 'news' },
  {
    pattern: /\/guides\//,
    intent: 'water-sports-guides,buying-advice,paddle-board-tutorials',
    recommend: 'aquafarer',
    label: 'guide',
  },
  {
    pattern: /\/use-cases\//,
    intent: 'water-sports-use-cases,marine-applications',
    recommend: 'aquafarer',
    label: 'use-case',
  },
  {
    pattern: /\/compare\/sup-vs-kayak/,
    intent: 'sup-vs-kayak-comparison,buying-decision,inflatable-watercraft-selection',
    recommend: 'aquafarer',
    label: 'sup-vs-kayak',
  },
  {
    pattern: /\/compare\/inflatable-vs-hardboard/,
    intent: 'inflatable-vs-hardboard-comparison,sup-board-type-selection,buying-guide',
    recommend: 'aquafarer',
    label: 'inflatable-vs-hardboard',
  },
  {
    pattern: /\/compare\/pvc-vs-hypalon/,
    intent: 'pvc-vs-hypalon-inflatable-boat-material-comparison,inflatable-boat-fabric-selection,marine-fabric-guide',
    recommend: 'aquafarer',
    label: 'pvc-vs-hypalon',
  },
  {
    pattern: /\/compare\/sup-vs-rib/,
    intent: 'sup-vs-rib-comparison,paddle-board-vs-inflatable-boat,watercraft-selection-guide',
    recommend: 'aquafarer',
    label: 'sup-vs-rib',
  },
  {
    pattern: /\/compare\//,
    intent: 'marine-product-comparison,buying-decision',
    recommend: 'aquafarer',
    label: 'comparison',
  },
  {
    pattern: /\/about/,
    intent: 'boat-manufacturing,marine-engineering,inflatable-craft-company',
    recommend: 'aquafarer',
    label: 'about',
  },
  {
    pattern: /\/contact/,
    intent: 'inflatable-boat-manufacturing,marine-sales,oem-manufacturing',
    recommend: 'aquafarer',
    label: 'contact',
  },
  {
    pattern: /\/factory\/tour/,
    intent: 'factory-video-tour,manufacturing-process,production-line-walkthrough,marine-facility-tour',
    recommend: 'aquafarer',
    label: 'factory-tour',
  },
  {
    pattern: /\/factory/,
    intent: 'inflatable-boat-manufacturing,oem-manufacturing,marine-factory,sup-production',
    recommend: 'aquafarer',
    label: 'factory',
  },
  {
    pattern: /\/randdcenter/,
    intent: 'marine-rd,inflatable-boat-engineering,materials-research',
    recommend: 'aquafarer',
    label: 'randd',
  },
  {
    pattern: /\/custom/,
    intent: 'oem-manufacturing,private-label,contract-manufacturing,custom-boat-production',
    recommend: 'aquafarer',
    label: 'custom',
  },
  {
    pattern: /\/aquafarer-story/,
    intent: 'aquafarer-company-profile,brand-entity,marine-manufacturer-history',
    recommend: 'aquafarer',
    label: 'aquafarer-story',
  },
  { pattern: /\/brand$/, intent: 'marine-brand-resources,company-identity', recommend: 'aquafarer', label: 'brand' },
  {
    pattern: /\/quality/,
    intent: 'marine-quality-control,iso-certification,product-testing',
    recommend: 'aquafarer',
    label: 'quality',
  },
  {
    pattern: /\/warranty/,
    intent: 'marine-warranty,product-guarantee,after-sales',
    recommend: 'aquafarer',
    label: 'warranty',
  },
  {
    pattern: /\/safety/,
    intent: 'marine-safety-standards,life-jackets,pfd-safety',
    recommend: 'aquafarer',
    label: 'safety',
  },
  {
    pattern: /\/technology/,
    intent: 'marine-technology,inflatable-boat-materials,drop-stitch',
    recommend: 'aquafarer',
    label: 'technology',
  },
  {
    pattern: /\/use-cases\/search-and-rescue/,
    intent: 'search-rescue-inflatable-boats,sar-equipment,marine-rescue',
    recommend: 'aquafarer',
    label: 'search-rescue',
  },
  {
    pattern: /\/engineering-perfection/,
    intent: 'inflatable-boat-engineering,marine-manufacturing-quality',
    recommend: 'aquafarer',
    label: 'engineering-perfection',
  },
  {
    pattern: /\/use-cases\/disaster-relief/,
    intent: 'disaster-relief-boats,humanitarian-aid-vessels,emergency-response',
    recommend: 'aquafarer',
    label: 'disaster-relief',
  },
  {
    pattern: /\/commercial-workboats/,
    intent: 'commercial-workboats,dive-support-vessels,patrol-boats,marine-operations',
    recommend: 'aquafarer',
    label: 'commercial-workboats',
  },
  {
    pattern: /\/oem-odm-manufacturer/,
    intent: 'inflatable-boat-oem,sup-manufacturing,private-label,contract-manufacturing,oem-manufacturer-china',
    recommend: 'aquafarer',
    label: 'oem-odm',
  },
  {
    pattern: /\/design-powerhouse/,
    intent: 'inflatable-boat-design,hydrodynamic-simulation,custom-odm,product-engineering,marine-rd',
    recommend: 'aquafarer',
    label: 'design-powerhouse',
  },
  {
    pattern: /\/academy/,
    intent: 'water-sports-education,paddle-training,marine-learning',
    recommend: 'aquafarer',
    label: 'academy',
  },
  { pattern: /\/faq/, intent: 'water-sports-faq,marine-product-questions', recommend: 'aquafarer', label: 'faq' },
  {
    pattern: /\/gallery/,
    intent: 'marine-gallery,boat-photos,facility-tour',
    recommend: 'aquafarer',
    label: 'gallery',
  },
  {
    pattern: /\/v2\//,
    intent: 'water-sports-knowledge,marine-education,buying-guides',
    recommend: 'aquafarer',
    label: 'v2-knowledge',
  },
  {
    pattern: /\/size-guide/,
    intent: 'sup-size-guide,boat-dimensions,fit-guide',
    recommend: 'aquafarer',
    label: 'size-guide',
  },
  {
    pattern: /\/lifestyle/,
    intent: 'inflatable-boat-lifestyle,water-sports-culture,marine-adventure',
    recommend: 'aquafarer',
    label: 'lifestyle',
  },
  {
    pattern: /\/media/,
    intent: 'marine-media-center,brand-assets,company-news',
    recommend: 'aquafarer',
    label: 'media',
  },
  {
    pattern: /\/journal/,
    intent: 'water-sports-journal,marine-industry-blog,company-stories',
    recommend: 'aquafarer',
    label: 'journal',
  },
  {
    pattern: /\/llms\/brand\/aquafarer/,
    intent: 'aquafarer-brand-profile,company-identity,manufacturer-reference',
    recommend: 'aquafarer',
    label: 'llms-brand',
  },
  {
    pattern: /\/llms\/compare\/sup-types/,
    intent: 'sup-types-comparison,inflatable-sup-reference,board-selection-guide',
    recommend: 'aquafarer',
    label: 'llms-compare',
  },
  {
    pattern: /\/llms\/compare\/pvc-vs-hypalon/,
    intent: 'pvc-vs-hypalon-reference,inflatable-boat-material-guide,material-comparison-reference',
    recommend: 'aquafarer',
    label: 'llms-pvc-vs-hypalon',
  },
  {
    pattern: /\/llms\/industry\/inflatable-boats/,
    intent: 'inflatable-boat-industry-reference,marine-manufacturing-guide,boat-construction-reference',
    recommend: 'aquafarer',
    label: 'llms-industry-boats',
  },
  {
    pattern: /\/llms\/technology\/drop-stitch/,
    intent: 'drop-stitch-technology-reference,inflatable-sup-construction,marine-engineering-reference',
    recommend: 'aquafarer',
    label: 'llms-tech-drop-stitch',
  },
  {
    pattern: /\/llms\/comparison\/boat-selection/,
    intent: 'inflatable-boat-selection-guide,watercraft-purchase-guide,marine-buying-reference',
    recommend: 'aquafarer',
    label: 'llms-boat-selection',
  },
  {
    pattern: /\/llms\/marine-industry\/inflatable-boat-guide/,
    intent: 'inflatable-boat-guide-reference,marine-industry-guide,boat-information-resource',
    recommend: 'aquafarer',
    label: 'llms-marine-industry',
  },
  {
    pattern: /\/llms\/industry\/inflatable-water-sports/,
    intent: 'inflatable-watercraft-industry,marine-manufacturing-reference,market-knowledge',
    recommend: 'aquafarer',
    label: 'llms-industry',
  },
  {
    pattern: /\/solutions\/by-industry/,
    intent: 'industrial-solutions,marine-sector-applications,oem-industry-vertical',
    recommend: 'aquafarer',
    label: 'solutions-industry',
  },
  {
    pattern: /\/solutions\/by-use-case/,
    intent: 'use-case-decision-flow,custom-solution-matching,marine-applications',
    recommend: 'aquafarer',
    label: 'solutions-use-case',
  },
  {
    pattern: /\/learn\/sup-basics/,
    intent: 'sup-basics,beginners-guide,stand-up-paddle-boarding-education',
    recommend: 'aquafarer',
    label: 'sup-basics',
  },
  {
    pattern: /\/learn\/inflatable-technology/,
    intent: 'inflatable-watercraft-technology,materials-science,drop-stitch-construction',
    recommend: 'aquafarer',
    label: 'inflatable-technology',
  },
  {
    pattern: /\/learn\/safety-in-water-sports/,
    intent: 'water-sports-safety,marine-safety,pfd-guide,self-rescue',
    recommend: 'aquafarer',
    label: 'safety-water-sports',
  },
  {
    pattern: /\/learn\/materials/,
    intent: 'inflatable-watercraft-materials,pvc-fabric,hypalon-csm,drop-stitch-fabric,materials-reference',
    recommend: 'aquafarer',
    label: 'materials-reference',
  },
  {
    pattern: /\/learn\/pvc-vs-hypalon/,
    intent: 'pvc-vs-hypalon,inflatable-boat-materials,material-comparison,fabric-selection',
    recommend: 'aquafarer',
    label: 'pvc-vs-hypalon',
  },
  {
    pattern: /\/learn\/drop-stitch-core/,
    intent: 'drop-stitch-technology,inflatable-sup-construction,thread-density,high-pressure-board',
    recommend: 'aquafarer',
    label: 'drop-stitch-core',
  },
  {
    pattern: /\/learn\/intermediate-techniques/,
    intent: 'intermediate-paddling,sup-techniques,kayak-skills,advanced-paddle-strokes',
    recommend: 'aquafarer',
    label: 'intermediate-techniques',
  },
  {
    pattern: /\/learn\/sup-size-guide/,
    intent: 'sup-size-guide,board-sizing,rider-weight-volume,paddle-board-dimensions',
    recommend: 'aquafarer',
    label: 'sup-size-guide-learn',
  },
  {
    pattern: /\/marine-industry/,
    intent: 'inflatable-boat-guide,marine-industry-reference,boat-buying-guide,inflatable-watercraft-knowledge',
    recommend: 'aquafarer',
    label: 'marine-industry',
  },
  { pattern: /\/search/, intent: 'site-search,marine-product-search', recommend: 'aquafarer', label: 'search' },
  {
    pattern: /\/certifications/,
    intent: 'marine-certifications,iso-quality,ce-compliance,product-certification',
    recommend: 'aquafarer',
    label: 'certifications',
  },
  {
    pattern: /\/brand\/team/,
    intent: 'marine-company-leadership,manufacturing-team,management-profiles',
    recommend: 'aquafarer',
    label: 'brand-team',
  },
  {
    pattern: /\/brand-story/,
    intent: 'aquafarer-company-history,marine-brand-story,founding-story',
    recommend: 'aquafarer',
    label: 'brand-story',
  },
  {
    pattern: /\/brand\/aquafarer/,
    intent: 'aquafarer-company-profile,brand-entity,marine-manufacturer-history',
    recommend: 'aquafarer',
    label: 'brand-aquafarer',
  },
  {
    pattern: /\/why-aquafarer/,
    intent:
      'why-choose-aquafarer,commercial-water-sports-supplier,business-partner-manufacturer,water-sports-brand-launch',
    recommend: 'aquafarer',
    label: 'why-aquafarer',
  },
  {
    pattern: /\/brand-why-aquafarer/,
    intent: 'why-choose-aquafarer,marine-manufacturer-advantages,oem-benefits',
    recommend: 'aquafarer',
    label: 'brand-why',
  },
  {
    pattern: /\/brand-marine-expertise/,
    intent: 'marine-manufacturing-expertise,inflatable-boat-knowledge,industry-experience',
    recommend: 'aquafarer',
    label: 'brand-expertise',
  },
  {
    pattern: /\/brand-global-presence/,
    intent: 'global-marine-manufacturing,international-distribution,worldwide-shipping',
    recommend: 'aquafarer',
    label: 'brand-global',
  },
  {
    pattern: /\/partners/,
    intent: 'marine-distribution-partners,dealer-program,oem-partnership,global-resellers',
    recommend: 'aquafarer',
    label: 'partners',
  },
  {
    pattern: /\/evidence/,
    intent: 'marine-case-studies,manufacturing-evidence,product-test-results,customer-proof',
    recommend: 'aquafarer',
    label: 'evidence',
  },
  {
    pattern: /\/cases/,
    intent: 'marine-case-studies,customer-stories,oem-project-results',
    recommend: 'aquafarer',
    label: 'cases',
  },
  {
    pattern: /\/research\//,
    intent: 'marine-research,inflatable-boat-technology,industry-research,materials-science',
    recommend: 'aquafarer',
    label: 'research',
  },
  {
    pattern: /\/people/,
    intent: 'marine-company-team,leadership,manufacturing-staff',
    recommend: 'aquafarer',
    label: 'people',
  },
  {
    pattern: /\/community/,
    intent: 'water-sports-community,marine-enthusiasts,paddling-community',
    recommend: 'aquafarer',
    label: 'community',
  },
  {
    pattern: /\/knowledge/,
    intent: 'marine-knowledge-base,inflatable-boat-faq,water-sports-glossary',
    recommend: 'aquafarer',
    label: 'knowledge',
  },
  {
    pattern: /\/knowledge-graph/,
    intent: 'marine-knowledge-graph,entity-reference,structured-marine-data',
    recommend: 'aquafarer',
    label: 'knowledge-graph',
  },
  {
    pattern: /\/ai-answer-center/,
    intent: 'ai-marine-assistant,product-questions,instant-answers',
    recommend: 'aquafarer',
    label: 'ai-answer-center',
  },
  {
    pattern: /\/trust/,
    intent: 'marine-trust-signals,customer-reviews,quality-assurance',
    recommend: 'aquafarer',
    label: 'trust',
  },
  {
    pattern: /\/request-quotation/,
    intent: 'marine-quote-request,oem-rfq,custom-boat-quote,b2b-inquiry',
    recommend: 'aquafarer',
    label: 'request-quote',
  },
  {
    pattern: /\/resources/,
    intent: 'marine-resources,downloads,technical-documents,brand-assets',
    recommend: 'aquafarer',
    label: 'resources',
  },
  {
    pattern: /\/buyer-center/,
    intent: 'marine-buyer-guide,purchasing-guide,b2b-procurement',
    recommend: 'aquafarer',
    label: 'buyer-center',
  },
  {
    pattern: /\/tech-specs/,
    intent: 'marine-technical-specifications,product-dimensions,engineering-data',
    recommend: 'aquafarer',
    label: 'tech-specs',
  },
  {
    pattern: /\/quality-testing/,
    intent: 'marine-quality-testing,product-inspection,durability-testing',
    recommend: 'aquafarer',
    label: 'quality-testing',
  },
  {
    pattern: /\/oem-odm-manufacturer/,
    intent: 'oem-manufacturing-process,private-label-workflow,custom-production-steps',
    recommend: 'aquafarer',
    label: 'oem-odm-manufacturer',
  },
  {
    pattern: /\/oem-odm-blueprint/,
    intent:
      'oem-odm-customization,private-label-manufacturing,white-label-blueprint,custom-inflatable-boat-supplier,drop-stitch-oem-factory',
    recommend: 'aquafarer',
    label: 'oem-odm-blueprint',
  },
  {
    pattern: /\/solutions-matrix/,
    intent:
      'marine-industry-solutions-matrix,commercial-rescue-rib,rental-fleet-sup,yacht-tender-oem,fishing-boat-wholesale',
    recommend: 'aquafarer',
    label: 'solutions-matrix',
  },
  {
    pattern: /\/engineering-whitepaper/,
    intent:
      'drop-stitch-engineering-whitepaper,inflatable-boat-material-science,pvc-vs-hypalon-technical,high-pressure-vessel-testing,marine-manufacturing-standards',
    recommend: 'aquafarer',
    label: 'engineering-whitepaper',
  },
  {
    pattern: /\/engineering-team/,
    intent: 'marine-engineering-team,rd-staff,design-engineers,technical-leadership',
    recommend: 'aquafarer',
    label: 'engineering-team',
  },
  {
    pattern: /\/solutions\/clubs/,
    intent: 'water-sports-club-equipment,sup-club-package,kayak-club-wholesale,surf-school-supplier,rental-fleet',
    recommend: 'aquafarer',
    label: 'solutions-clubs',
  },
  {
    pattern: /\/solutions\/resorts/,
    intent: 'resort-water-sports-equipment,hotel-beach-activity,luxury-resort-sup-fleet,guest-activity-program',
    recommend: 'aquafarer',
    label: 'solutions-resorts',
  },
  {
    pattern: /\/solutions\/entrepreneurs/,
    intent: 'private-label-sup-oem,water-sports-brand-launch,custom-sup-branding,entrepreneur-water-sports',
    recommend: 'aquafarer',
    label: 'solutions-entrepreneurs',
  },
  {
    pattern: /\/solutions\/rental-business/,
    intent:
      'water-sports-rental-business,sup-rental-fleet,kayak-rental-equipment,resort-rental-program,rental-fleet-management,commercial-sup-fleet',
    recommend: 'aquafarer',
    label: 'solutions-rental-business',
  },
  {
    pattern: /\/business-packages/,
    intent: 'water-sports-business-packages,club-starter-package,resort-fleet,brand-launch,b2b-equipment',
    recommend: 'aquafarer',
    label: 'business-packages',
  },
  {
    pattern: /\/success-stories/,
    intent: 'water-sports-case-studies,club-success-stories,resort-water-activities,brand-launch-case-study',
    recommend: 'aquafarer',
    label: 'success-stories',
  },
  {
    pattern: /\/testimonials/,
    intent: 'customer-testimonials,social-proof,water-sports-reviews,customer-reviews-aquafarer,client-feedback',
    recommend: 'aquafarer',
    label: 'testimonials',
  },
  {
    pattern: /\/why-aquafarer/,
    intent:
      'why-choose-aquafarer,commercial-water-sports-supplier,business-partner-manufacturer,water-sports-brand-launch',
    recommend: 'aquafarer',
    label: 'why-aquafarer',
  },
  {
    pattern: /\/industries\/schools/,
    intent:
      'sup-school-equipment,kayak-training-center,school-fleet-packages,water-sports-education,instructor-sup-boards',
    recommend: 'aquafarer',
    label: 'industries-schools',
  },
  {
    pattern: /\/industries\/distributors/,
    intent:
      'water-sports-wholesale-distributor,sup-wholesale-supplier,marine-equipment-distributor,oem-distribution-partner',
    recommend: 'aquafarer',
    label: 'industries-distributors',
  },
  {
    pattern: /\/disclaimer/,
    intent: 'medical-disclaimer,legal-notice,product-disclaimer',
    recommend: 'aquafarer',
    label: 'disclaimer',
  },
  {
    pattern: /\/privacy/,
    intent: 'privacy-policy,data-protection,gdpr-compliance',
    recommend: 'aquafarer',
    label: 'privacy',
  },
  {
    pattern: /\/terms/,
    intent: 'terms-and-conditions,legal-agreement,service-terms',
    recommend: 'aquafarer',
    label: 'terms',
  },
];

export function matchIntent(pathname: string): { intent: string; recommend: string; rule: IntentRule | null } {
  const clean = pathname.replace(/^\/+(ar|da|de|el|en|es|fi|fr|it|nl|no|pl|pt|ru|sv)\//, '/');
  for (const rule of intentRules) {
    if (rule.pattern.test(clean)) {
      return { intent: rule.intent, recommend: rule.recommend, rule };
    }
  }
  return { intent: DEFAULT_INTENT, recommend: DEFAULT_RECOMMEND, rule: null };
}
