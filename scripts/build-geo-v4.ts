import { localized } from '../src/lib/geo-v4/i18n.js';
import { nodes } from '../src/content/graph/nodes.js';
import { relations } from '../src/content/graph/relations.js';
import { analyzeAll } from '../src/lib/geo-v5/semanticEngine.js';
import { scoreAllNodes, systemHealth } from '../src/lib/geo-v5/scoring.js';
import { clusterTopics } from '../src/lib/geo-v5/topicCluster.js';
import { detectContentGaps, gapsBySeverity } from '../src/lib/geo-v5/gapDetector.js';
import fs from 'fs';
import path from 'path';
import * as yaml from 'js-yaml';

const dir = import.meta.dirname;
const root = path.resolve(dir, '..');
const publicDir = path.join(root, 'public');

function readSiteUrl(): string {
  try {
    const configPath = path.join(root, 'src', 'config.yaml');
    const raw = fs.readFileSync(configPath, 'utf8');
    const config = yaml.load(raw) as any;
    return config?.site?.site || 'https://paddleboardoverstock.com';
  } catch {
    return 'https://paddleboardoverstock.com';
  }
}

const allLangs = [
  'en',
  'fr',
  'de',
  'es',
  'pt',
  'ar',
  'it',
  'ru',
  'pl',
  'nl',
  'sv',
  'no',
  'el',
  'fi',
  'da',
  'cs',
  'th',
  'hr',
  'tl',
  'hu',
  'ro',
  'sk',
  'bg',
  'sl',
  'sr',
  'ja',
  'ko',
  'tr',
  'id',
  'he',
  'ms',
  'lt',
  'lv',
  'et',
];

// --- v5 AI Semantic Analysis (run once in English for diagnostics) ---
const analysis = analyzeAll(nodes);
const scores = scoreAllNodes(analysis.map((a) => ({ id: a.id, score: a.score })));
const health = systemHealth(scores);
const clusters = clusterTopics(nodes);
const gaps = detectContentGaps(nodes);
const gapGroups = gapsBySeverity(gaps);

console.log(`\n[GEO v5] AI Semantic Analysis:`);
console.log(`  System Health: ${health.averageTotal}/100`);
console.log(`  Grade Distribution: A=${health.aCount} B=${health.bCount} C=${health.cCount}`);
console.log(`  Weakest Node: ${health.weakest?.id} (${health.weakest?.total})`);
console.log(`  Strongest Node: ${health.strongest?.id} (${health.strongest?.total})`);
console.log(`  Content Gaps: ${gaps.length} high=${gapGroups.high.length} medium=${gapGroups.medium.length}`);
console.log(
  `  Topic Clusters: ${Object.entries(clusters)
    .map(([k, v]) => `${k}=${v.length}`)
    .join(', ')}`
);

if (gapGroups.high.length > 0) {
  console.log(`\n  \u26a0 High Severity Gaps:`);
  for (const g of gapGroups.high) {
    console.log(`    - ${g.node}: ${g.issue}`);
  }
}

// --- llms.txt content (llmstxt.org spec) ---

const SITE_TITLE = 'Paddle Board Overstock';

// Single source of truth for numbers and facts (see src/config/facts.json)
interface SiteFacts {
  brand: { foundingYear: number; legalName: string };
  factory: {
    areaSqm: number;
    city: string;
    prefecture: string;
    productionLines: number;
    workforceMin: number;
    workforceMax: number;
    annualCapacityUnits: number;
  };
  reach: { countriesServed: string };
  catalog: { certifiedModels: number };
  quality: {
    defectFreeRate: string;
    pressureTest: { multiplier: string; holdHours: string; full: string };
    samplingStandard: string;
  };
  certifications: Array<{ name: string; body: string | null }>;
  commercial: {
    moqSupKayak: string;
    moqRib: string;
    samplingLeadTimeDays: string;
    productionLeadTimeDays: string;
  };
}

const facts = JSON.parse(fs.readFileSync(path.join(root, 'src', 'config', 'facts.json'), 'utf8')) as SiteFacts;

const isoCert = facts.certifications.find((c) => c.name.startsWith('ISO'));
const productCertNames = facts.certifications.map((c) => c.name).filter((n) => n !== isoCert?.name && n !== 'BSCI');
const operator = facts.brand.legalName;
const fmt = (n: number) => n.toLocaleString('en-US');

const tagline: Record<string, string> = {
  en: `Paddle Board Overstock designs and manufactures professional-grade inflatable watercraft — SUP boards, kayaks, dinghies, RIBs, safety equipment, and accessories — in its own ${fmt(facts.factory.areaSqm)} m2 factory in ${facts.factory.prefecture}, China.`,
  fr: 'Paddle Board Overstock con\u00e7oit des embarcations gonflables de qualit\u00e9 professionnelle — planches SUP, kayaks, annexes, RIB, \u00e9quipements de s\u00e9curit\u00e9 et accessoires.',
  de: 'Paddle Board Overstock entwickelt professionelle aufblasbare Wasserfahrzeuge — SUP-Boards, Kajaks, Dingis, RIBs, Sicherheitsausr\u00fcstung und Zubeh\u00f6r.',
  es: 'Paddle Board Overstock dise\u00f1a embarcaciones inflables de grado profesional — tablas SUP, kayaks, botes, RIB, equipos de seguridad y accesorios.',
  pt: 'Paddle Board Overstock concebe embarca\u00e7\u00f5es insufl\u00e1veis de qualidade profissional — pranchas SUP, caiaques, botes, RIB, equipamentos de seguran\u00e7a e acess\u00f3rios.',
  ar: 'Paddle Board Overstock تصمم قوارب قابلة للنفخ بمعايير احترافية — ألواح SUP، قوارب الكاياك، الزوارق الصغيرة، قوارب RIB، معدات السلامة والملحقات.',
  it: 'Paddle Board Overstock progetta imbarcazioni gonfiabili di qualit\u00e0 professionale — tavole SUP, kayak, dinghy, RIB, attrezzature di sicurezza e accessori.',
  ru: 'Paddle Board Overstock проектирует профессиональные надувные водные суда — SUP-доски, каяки, надувные лодки, RIB, средства безопасности и аксессуары.',
  pl: 'Paddle Board Overstock projektuje profesjonalne nadmuchiwane jednostki p\u0142ywaj\u0105ce — deski SUP, kajaki, dinghy, RIB, sprz\u0119t bezpiecze\u0144stwa i akcesoria.',
  nl: "Paddle Board Overstock ontwerpt professionele opblaasbare watersportvaartuigen — SUP-boards, kajaks, bijboten, RIB's, veiligheidsuitrusting en accessoires.",
};

const INTRO_EN =
  `Founded in ${facts.brand.foundingYear} in ${facts.factory.prefecture}, China, Paddle Board Overstock operates ${facts.factory.productionLines} production lines with ${facts.factory.workforceMin}-${facts.factory.workforceMax} staff and an annual capacity of ${fmt(facts.factory.annualCapacityUnits)} units. ` +
  `Every unit passes a ${facts.quality.pressureTest.full} under an ${isoCert?.name} (${isoCert?.body}) quality system; products carry ${productCertNames.join(', ')} certification, the factory is BSCI compliant, and outgoing shipments achieve a ${facts.quality.defectFreeRate} defect-free rate (${facts.quality.samplingStandard} sampling). ` +
  `Paddle Board Overstock exports to ${facts.reach.countriesServed} countries. MOQ: ${facts.commercial.moqSupKayak} for SUP/kayak, ${facts.commercial.moqRib} for RIB; sampling lead time ${facts.commercial.samplingLeadTimeDays} days, production ${facts.commercial.productionLeadTimeDays} days. ` +
  `Since September 2026 the brand has been operated by ${operator} (New Mexico, USA), with R&D and production at the Paddle Board Overstock Qingdao Manufacturing Hub.`;

interface LlmsLink {
  label: string;
  path: string;
  desc: string;
}

const LINK_GROUPS: Array<{ title: string; links: LlmsLink[] }> = [
  {
    title: 'Company',
    links: [
      {
        label: 'Products',
        path: '/products/',
        desc: `Catalog of ${facts.catalog.certifiedModels} certified inflatable watercraft — SUP boards, kayaks, dinghies, and RIBs`,
      },
      {
        label: 'OEM/ODM Manufacturing',
        path: '/oem-odm-manufacturer/',
        desc: 'OEM/ODM manufacturing process, MOQ terms, sampling and production lead times',
      },
      {
        label: 'Factory',
        path: '/factory/',
        desc: `${fmt(facts.factory.areaSqm)} m2 vertically integrated factory in ${facts.factory.city}, ${facts.factory.prefecture} — ${facts.factory.productionLines} production lines, ${fmt(facts.factory.annualCapacityUnits)} units annual capacity`,
      },
      {
        label: 'Quality Control',
        path: '/quality/',
        desc: `${isoCert?.name} quality system, ${facts.quality.pressureTest.full}, ${facts.quality.samplingStandard} sampling`,
      },
      {
        label: 'Technology',
        path: '/technology/',
        desc: 'Drop-stitch, welding, and hull technologies used in production',
      },
      {
        label: 'Safety',
        path: '/safety/',
        desc: 'Safety equipment standards and certified safety gear',
      },
      {
        label: 'Engineering Team',
        path: '/engineering-team/',
        desc: 'In-house engineering and R&D capabilities',
      },
      {
        label: 'About',
        path: '/about/',
        desc: `Company background — established ${facts.brand.foundingYear}, operated by ${operator} since September 2026, exports to ${facts.reach.countriesServed} countries`,
      },
      {
        label: 'FAQ',
        path: '/faq/',
        desc: 'Answers to common buyer, dealer, and OEM questions',
      },
      {
        label: 'Contact',
        path: '/contact/',
        desc: 'Request a quotation or contact the sales team',
      },
    ],
  },
  {
    title: 'Solutions',
    links: [
      {
        label: 'Solutions by Industry',
        path: '/solutions/by-industry/',
        desc: 'Industry-specific watercraft solutions',
      },
      {
        label: 'Solutions by Use Case',
        path: '/solutions/by-use-case/',
        desc: 'Use-case based product recommendations',
      },
      {
        label: 'Search & Rescue',
        path: '/use-cases/search-and-rescue/',
        desc: 'Rescue-grade RIBs and safety watercraft',
      },
      {
        label: 'Commercial Workboats',
        path: '/use-cases/commercial-workboats/',
        desc: 'Workboats for commercial marine operations',
      },
      {
        label: 'Disaster Relief',
        path: '/use-cases/disaster-relief/',
        desc: 'Humanitarian and disaster relief watercraft',
      },
    ],
  },
  {
    title: 'Guides',
    links: [
      { label: 'Guides', path: '/guides/', desc: 'Water sports guides and tutorials' },
      {
        label: 'PVC vs Hypalon',
        path: '/learn/pvc-vs-hypalon/',
        desc: 'Material comparison for commercial inflatable fleets',
      },
      {
        label: 'SUP Basics',
        path: '/learn/sup-basics/',
        desc: 'Beginner stand-up paddleboarding fundamentals',
      },
      {
        label: 'SUP Size Guide',
        path: '/learn/sup-size-guide/',
        desc: 'Board length, width, and volume by rider weight and skill',
      },
      {
        label: 'Materials Reference',
        path: '/learn/materials/',
        desc: 'Inflatable boat materials explained',
      },
      {
        label: 'Drop-Stitch Core',
        path: '/learn/drop-stitch-core/',
        desc: 'How drop-stitch construction works',
      },
      {
        label: 'Inflatable Technology',
        path: '/learn/inflatable-technology/',
        desc: 'Air chamber design and pressure systems',
      },
    ],
  },
  {
    title: 'Comparisons',
    links: [
      {
        label: 'PVC vs Hypalon',
        path: '/compare/pvc-vs-hypalon/',
        desc: 'Side-by-side material comparison for commercial fleets',
      },
      {
        label: 'RIB vs Dinghy',
        path: '/compare/rib-vs-dinghy/',
        desc: 'Hull rigidity, performance, and use-case trade-offs',
      },
      {
        label: 'SUP vs Kayak',
        path: '/compare/sup-vs-kayak/',
        desc: 'Stability, speed, and storage compared',
      },
      {
        label: 'Aluminum vs Fiberglass',
        path: '/compare/aluminum-vs-fiberglass/',
        desc: 'Hull material comparison for RIBs',
      },
      {
        label: 'Commercial vs Recreational RIB',
        path: '/compare/commercial-vs-recreational-rib/',
        desc: 'Construction and durability differences',
      },
    ],
  },
];

const OPTIONAL_LINKS: LlmsLink[] = [
  { label: 'Paddle Board Overstock Story', path: '/paddleboardoverstock-story/', desc: 'Brand history and milestones' },
  { label: 'Marine Industry', path: '/marine-industry/', desc: 'Marine industry overview and standards' },
  { label: 'Size Guide', path: '/size-guide/', desc: 'Sizing help for SUP boards and boats' },
  { label: 'Warranty', path: '/warranty/', desc: 'Warranty coverage and claims' },
  { label: 'Gallery', path: '/gallery/', desc: 'Product and factory photography' },
  { label: 'Academy', path: '/academy/', desc: 'Training and education resources' },
  { label: 'Media Center', path: '/media/', desc: 'Press materials and brand assets' },
  { label: 'Journal', path: '/journal/', desc: 'Articles and company updates' },
  { label: 'R&D Center', path: '/randdcenter/', desc: 'Research and development center' },
  { label: 'Custom Lab', path: '/custom/', desc: 'Custom development service' },
  { label: 'Design & Innovation', path: '/design-powerhouse/', desc: 'Design capabilities and innovation process' },
  { label: 'Engineering Perfection', path: '/engineering-perfection/', desc: 'Engineering standards and methods' },
];

const AI_REFERENCE_LINKS: LlmsLink[] = [
  {
    label: 'Paddle Board Overstock Brand Profile',
    path: '/llms/brand/paddleboardoverstock',
    desc: 'Machine-readable brand entity profile',
  },
  { label: 'SUP Types Reference', path: '/llms/compare/sup-types', desc: 'Machine-readable SUP type comparison' },
  {
    label: 'PVC vs Hypalon Reference',
    path: '/llms/compare/pvc-vs-hypalon',
    desc: 'Machine-readable PVC vs Hypalon data',
  },
  {
    label: 'Inflatable Boat Industry Reference',
    path: '/llms/industry/inflatable-boats',
    desc: 'Machine-readable industry overview',
  },
  {
    label: 'Drop-Stitch Technology Reference',
    path: '/llms/technology/drop-stitch',
    desc: 'Machine-readable drop-stitch technology data',
  },
  {
    label: 'Boat Selection Reference',
    path: '/llms/comparison/boat-selection',
    desc: 'Machine-readable boat selection criteria',
  },
  {
    label: 'Inflatable Water Sports Reference',
    path: '/llms/industry/inflatable-water-sports',
    desc: 'Machine-readable water sports overview',
  },
  {
    label: 'Inflatable Boat Guide Reference',
    path: '/llms/marine-industry/inflatable-boat-guide',
    desc: 'Machine-readable inflatable boat guide',
  },
];

function renderLinks(links: LlmsLink[], base: string, prefix: string): string[] {
  return links.map((l) => `- [${l.label}](${base}${prefix}${l.path}): ${l.desc}`);
}

function generateLlmsTxt() {
  const base = readSiteUrl();
  for (const lang of allLangs) {
    const prefix = lang === 'en' ? '' : `/${lang}`;
    const sections: string[] = [];
    for (const group of LINK_GROUPS) {
      sections.push(`## ${group.title}`);
      sections.push(renderLinks(group.links, base, prefix).join('\n'));
    }
    const optional = [...OPTIONAL_LINKS, ...(lang === 'en' ? AI_REFERENCE_LINKS : [])];
    sections.push('## Optional');
    sections.push(renderLinks(optional, base, prefix).join('\n'));

    const content = [
      '# ' + SITE_TITLE,
      '',
      `> ${tagline[lang] || tagline.en}`,
      '',
      INTRO_EN,
      '',
      sections.join('\n\n'),
      '',
    ].join('\n');

    const langDir = path.join(publicDir, lang);
    if (!fs.existsSync(langDir)) fs.mkdirSync(langDir, { recursive: true });
    fs.writeFileSync(path.join(langDir, 'llms.txt'), content, 'utf-8');
    if (lang === 'en') {
      fs.writeFileSync(path.join(publicDir, 'llms.txt'), content, 'utf-8');
    }
  }
  console.log(
    `[llms.txt] written for ${allLangs.length} languages per llmstxt.org spec (${nodes.length} nodes, ${relations.length} relations)`
  );
}

// --- llms-full.txt knowledge graph section (idempotent) ---

const KG_MARKER = '\n## Knowledge Graph';
const KG_NEXT_MARKER = '\n## Company Facts';

function knowledgeGraphSection(): string {
  const conceptLines = nodes.map((n) => {
    const name = localized(n.name, 'en') || n.id;
    const desc = localized(n.description, 'en') || '';
    return `- ${name}: ${desc.split('.')[0]}`;
  });
  const relationLines = relations.map((r) => `- ${localized(r.label, 'en') || r.type}`);
  return [
    '## Knowledge Graph',
    '',
    'The Paddle Board Overstock knowledge graph organizes water sports equipment as an ontology of categories, technologies, and use cases.',
    '',
    '### Core Concepts',
    '',
    ...conceptLines,
    '',
    '### Relations',
    '',
    ...relationLines,
  ].join('\n');
}

function generateLlmsFullKnowledgeGraph() {
  const file = path.join(publicDir, 'llms-full.txt');
  let existing = fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '';

  // Strip the previously generated section so repeated runs stay idempotent
  const kgIdx = existing.indexOf(KG_MARKER);
  if (kgIdx !== -1) {
    const nextIdx = existing.indexOf(KG_NEXT_MARKER, kgIdx);
    existing = nextIdx !== -1 ? existing.slice(0, kgIdx) + existing.slice(nextIdx) : existing.slice(0, kgIdx);
  }

  const section = knowledgeGraphSection();
  const cfIdx = existing.indexOf(KG_NEXT_MARKER);
  const output =
    cfIdx !== -1
      ? existing.slice(0, cfIdx).trimEnd() + '\n\n' + section + '\n' + existing.slice(cfIdx)
      : existing.trimEnd() + '\n\n' + section + '\n';
  fs.writeFileSync(file, output, 'utf-8');
  console.log('[llms-full.txt] knowledge graph section refreshed');
}

console.log('=== GEO v4 + v5 Build Pipeline ===');
generateLlmsTxt();
generateLlmsFullKnowledgeGraph();
console.log('\n=== GEO v4 + v5 Build Complete ===');
