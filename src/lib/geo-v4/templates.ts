import type { GraphNode } from '../../content/graph/nodes';
import { USE_CASE_HEADINGS_MT, USE_CASE_L10N_MT } from '../use-cases-l10n-mt';
import { localized } from './i18n';

export interface GuideSection {
  h2: string;
  content: string[] | string;
}

export interface GeneratedGuide {
  slug: string;
  title: string;
  description: string;
  sections: GuideSection[];
  faq: Array<{ q: string; a: string }>;
}

export interface GeneratedPage {
  slug: string;
  title: string;
  description: string;
  sections: GuideSection[];
  faq: Array<{ q: string; a: string }>;
}

export function guideFromNode(node: GraphNode, lang: string = 'en'): GeneratedGuide | null {
  if (
    node.type !== 'product-category' &&
    node.type !== 'technology' &&
    node.type !== 'material' &&
    node.type !== 'component'
  )
    return null;

  const name = localized(node.name, lang) || localized(node.name, 'en') || '';
  const desc = localized(node.description, lang) || localized(node.description, 'en') || '';
  const features = localized(node.features, lang) || localized(node.features, 'en') || [];
  const useCases = localized(node.useCases, lang) || localized(node.useCases, 'en') || [];
  const faq = localized(node.faq, lang) || localized(node.faq, 'en') || [];

  const sections: GuideSection[] = [{ h2: 'Definition', content: desc }];

  if (features.length) {
    sections.push({ h2: 'Key Features', content: features.map((f) => `- ${f}`) });
  }

  if (useCases.length) {
    sections.push({ h2: 'Use Cases', content: useCases.map((u) => `- ${u}`) });
  }

  const related = (node.related || []).map((id) => `- ${id}`);
  if (related.length) {
    sections.push({ h2: 'Related Components', content: related });
  }

  return {
    slug: (node.slug && node.slug[lang]) || node.id,
    title: `What is ${name}?`,
    description: desc,
    sections,
    faq,
  };
}

export function useCaseFromNode(node: GraphNode, lang: string = 'en'): GeneratedPage | null {
  if (node.type !== 'use-case') return null;

  const name = localized(node.name, lang) || localized(node.name, 'en') || '';
  // Curated node fields win; the machine-translated map only fills locales the graph
  // does not cover yet (the nodes ship description/features/faq for en/de/es/fr/it).
  const mt = lang === 'en' ? undefined : USE_CASE_L10N_MT[lang]?.[node.id];
  const desc = localized(node.description, lang) || mt?.description || localized(node.description, 'en') || '';
  const features = localized(node.features, lang) || mt?.features || localized(node.features, 'en') || [];
  const useCases = localized(node.useCases, lang) || mt?.useCases || localized(node.useCases, 'en') || [];
  const faq = localized(node.faq, lang) || mt?.faq || localized(node.faq, 'en') || [];
  const headings = USE_CASE_HEADINGS_MT[lang];

  const sections: GuideSection[] = [{ h2: headings?.whatIs || 'What is this use case?', content: desc }];

  if (features.length) {
    sections.push({ h2: headings?.keyFeatures || 'Key Features', content: features.map((f) => `- ${f}`) });
  }

  if (useCases.length) {
    sections.push({ h2: headings?.scenarios || 'Scenarios', content: useCases.map((u) => `- ${u}`) });
  }

  const related = (node.related || []).map((id) => `- ${id}`);
  if (related.length) {
    sections.push({ h2: headings?.recommended || 'Recommended Equipment', content: related });
  }

  return {
    slug: (node.slug && node.slug[lang]) || node.id,
    title: name,
    description: desc,
    sections,
    faq,
  };
}

export function compareTemplate(a: GraphNode, b: GraphNode, lang: string = 'en'): GeneratedPage {
  const aName = localized(a.name, lang) || localized(a.name, 'en') || a.id;
  const bName = localized(b.name, lang) || localized(b.name, 'en') || b.id;
  const aDesc = localized(a.description, lang) || localized(a.description, 'en') || '';
  const bDesc = localized(b.description, lang) || localized(b.description, 'en') || '';
  const aFeatures = localized(a.features, lang) || localized(a.features, 'en') || [];
  const bFeatures = localized(b.features, lang) || localized(b.features, 'en') || [];
  const aUseCases = localized(a.useCases, lang) || localized(a.useCases, 'en') || [];
  const bUseCases = localized(b.useCases, lang) || localized(b.useCases, 'en') || [];

  const S: Record<string, Record<string, string>> = {
    en: {
      overviewH2: 'Comparison Overview',
      overview: 'Comparing **{a}** vs **{b}** across key factors.',
      tableH2: 'Quick Comparison Table',
      factor: 'Factor',
      type: 'Type',
      portability: 'Portability',
      inflatable: 'Inflatable',
      varies: 'Varies',
      bestFor: 'Best For',
      aboutA: 'About {a}',
      aboutB: 'About {b}',
      featuresH2: 'Feature Comparison',
      chooseH2: 'Which Should You Choose?',
      chooseA: 'Choose **{a}** if you prioritize {f}.',
      chooseB: 'Choose **{b}** if you need {f}.',
      titleTpl: '{a} vs {b}: Comparison Guide',
      descTpl: 'Compare {a} and {b} across portability, performance, features, and use cases.',
    },
    de: {
      overviewH2: 'Vergleichsübersicht',
      overview: 'Vergleich von **{a}** und **{b}** anhand der wichtigsten Faktoren.',
      tableH2: 'Schnellvergleichstabelle',
      factor: 'Faktor',
      type: 'Typ',
      portability: 'Transportabilität',
      inflatable: 'Aufblasbar',
      varies: 'Variiert',
      bestFor: 'Am besten geeignet für',
      aboutA: 'Über {a}',
      aboutB: 'Über {b}',
      featuresH2: 'Eigenschaften im Vergleich',
      chooseH2: 'Welches sollten Sie wählen?',
      chooseA: 'Wählen Sie **{a}**, wenn Ihnen {f} wichtig sind.',
      chooseB: 'Wählen Sie **{b}**, wenn Sie {f} benötigen.',
      titleTpl: '{a} vs {b}: Vergleichsleitfaden',
      descTpl:
        'Vergleichen Sie {a} und {b} in Bezug auf Transportabilität, Leistung, Eigenschaften und Einsatzmöglichkeiten.',
    },
    es: {
      overviewH2: 'Resumen de la comparación',
      overview: 'Comparación de **{a}** y **{b}** según los factores clave.',
      tableH2: 'Tabla comparativa rápida',
      factor: 'Factor',
      type: 'Tipo',
      portability: 'Portabilidad',
      inflatable: 'Hinchable',
      varies: 'Varía',
      bestFor: 'Ideal para',
      aboutA: 'Acerca de {a}',
      aboutB: 'Acerca de {b}',
      featuresH2: 'Comparación de características',
      chooseH2: '¿Cuál debería elegir?',
      chooseA: 'Elija **{a}** si prioriza {f}.',
      chooseB: 'Elija **{b}** si necesita {f}.',
      titleTpl: '{a} vs {b}: guía de comparación',
      descTpl: 'Compare {a} y {b} en cuanto a portabilidad, rendimiento, características y casos de uso.',
    },
    fr: {
      overviewH2: "Vue d'ensemble de la comparaison",
      overview: 'Comparaison de **{a}** et **{b}** selon les facteurs clés.',
      tableH2: 'Tableau comparatif rapide',
      factor: 'Facteur',
      type: 'Type',
      portability: 'Portabilité',
      inflatable: 'Gonflable',
      varies: 'Variable',
      bestFor: 'Idéal pour',
      aboutA: 'À propos de {a}',
      aboutB: 'À propos de {b}',
      featuresH2: 'Comparaison des caractéristiques',
      chooseH2: 'Lequel choisir ?',
      chooseA: 'Choisissez **{a}** si vous privilégiez {f}.',
      chooseB: 'Choisissez **{b}** si vous avez besoin de {f}.',
      titleTpl: '{a} vs {b} : guide de comparaison',
      descTpl:
        "Comparez {a} et {b} sur la portabilité, les performances, les caractéristiques et les cas d'utilisation.",
    },
    it: {
      overviewH2: 'Panoramica del confronto',
      overview: 'Confronto tra **{a}** e **{b}** in base ai fattori chiave.',
      tableH2: 'Tabella comparativa rapida',
      factor: 'Fattore',
      type: 'Tipo',
      portability: 'Trasportabilità',
      inflatable: 'Gonfiabile',
      varies: 'Variabile',
      bestFor: 'Ideale per',
      aboutA: 'Informazioni su {a}',
      aboutB: 'Informazioni su {b}',
      featuresH2: 'Confronto delle caratteristiche',
      chooseH2: 'Quale scegliere?',
      chooseA: 'Scegli **{a}** se dai priorità a {f}.',
      chooseB: 'Scegli **{b}** se hai bisogno di {f}.',
      titleTpl: '{a} vs {b}: guida al confronto',
      descTpl: "Confronta {a} e {b} per trasportabilità, prestazioni, caratteristiche e casi d'uso.",
    },
  };
  const s = S[lang] || S.en;

  const sections: GuideSection[] = [
    {
      h2: s.overviewH2,
      content: [s.overview.replace('{a}', aName).replace('{b}', bName)],
    },
    {
      h2: s.tableH2,
      content: [
        `| ${s.factor} | ${aName} | ${bName} |`,
        `|---|---|---|`,
        `| ${s.type} | ${a.type} | ${b.type} |`,
        `| ${s.portability} | ${s.inflatable} | ${s.varies} |`,
        `| ${s.bestFor} | ${(aUseCases || []).slice(0, 3).join(', ')} | ${(bUseCases || []).slice(0, 3).join(', ')} |`,
      ],
    },
    {
      h2: s.aboutA.replace('{a}', aName),
      content: [aDesc],
    },
    {
      h2: s.aboutB.replace('{b}', bName),
      content: [bDesc],
    },
  ];

  if (aFeatures.length && bFeatures.length) {
    sections.push({
      h2: s.featuresH2,
      content: [
        `**${aName}:** ${aFeatures.slice(0, 4).join(', ')}`,
        '',
        `**${bName}:** ${bFeatures.slice(0, 4).join(', ')}`,
      ],
    });
  }

  sections.push({
    h2: s.chooseH2,
    content: [
      s.chooseA.replace('{a}', aName).replace('{f}', (aFeatures || ['versatility']).slice(0, 2).join(' and ')),
      '',
      s.chooseB.replace('{b}', bName).replace('{f}', (bFeatures || ['performance']).slice(0, 2).join(' and ')),
    ],
  });

  return {
    slug: `${a.id}-vs-${b.id}`,
    title: s.titleTpl.replace('{a}', aName).replace('{b}', bName),
    description: s.descTpl.replace('{a}', aName).replace('{b}', bName),
    sections,
    faq: [],
  };
}
