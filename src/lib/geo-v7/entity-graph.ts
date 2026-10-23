export interface EntityNode {
  id: string;
  type: 'brand' | 'product' | 'technology' | 'application' | 'audience' | 'industry';
  name: string;
  description: string;
  relationships: EntityRelationship[];
}

export interface EntityRelationship {
  type: 'parent' | 'child' | 'uses' | 'serves' | 'operatesIn' | 'belongsTo' | 'creates';
  targetId: string;
}

export const entityGraph: EntityNode[] = [
  {
    id: 'aquafarer',
    type: 'brand',
    name: 'Aquafarer',
    description:
      'Chinese manufacturer of RIB boats, inflatable boats, and SUP boards with full OEM/ODM capability for B2B buyers and brands.',
    relationships: [
      { type: 'parent', targetId: 'aquafarer-llc' },
      { type: 'operatesIn', targetId: 'marine-recreation' },
      { type: 'operatesIn', targetId: 'outdoor-sports' },
      { type: 'operatesIn', targetId: 'marine-manufacturing' },
      { type: 'creates', targetId: 'inflatable-boats' },
      { type: 'creates', targetId: 'sup-boards' },
      { type: 'creates', targetId: 'kayaks' },
      { type: 'creates', targetId: 'custom-watercraft' },
      { type: 'serves', targetId: 'adventure-users' },
      { type: 'serves', targetId: 'professional-operators' },
      { type: 'serves', targetId: 'oem-partners' },
    ],
  },
  {
    id: 'aquafarer-llc',
    type: 'brand',
    name: 'Aquafarer LLC',
    description:
      'Global operator of the Aquafarer brand, based in New Mexico, USA, with manufacturing in Qingdao, China.',
    relationships: [{ type: 'child', targetId: 'aquafarer' }],
  },
  {
    id: 'marine-recreation',
    type: 'industry',
    name: 'Marine Recreation Industry',
    description:
      'Industry encompassing recreational boating, water sports, paddle sports, and marine leisure activities.',
    relationships: [],
  },
  {
    id: 'outdoor-sports',
    type: 'industry',
    name: 'Outdoor Sports Industry',
    description: 'Industry covering outdoor recreation equipment, adventure sports, and nature-based activities.',
    relationships: [],
  },
  {
    id: 'marine-manufacturing',
    type: 'industry',
    name: 'Marine Manufacturing Industry',
    description: 'Industry focused on design, engineering, and production of marine equipment and watercraft.',
    relationships: [],
  },
  {
    id: 'inflatable-boats',
    type: 'product',
    name: 'Inflatable Boats',
    description: 'Portable, inflatable watercraft including dinghies, RIBs, fishing boats, and tender boats.',
    relationships: [
      { type: 'belongsTo', targetId: 'aquafarer' },
      { type: 'uses', targetId: 'drop-stitch' },
      { type: 'uses', targetId: 'pvc-fabric' },
      { type: 'uses', targetId: 'reinforced-structure' },
    ],
  },
  {
    id: 'sup-boards',
    type: 'product',
    name: 'SUP Boards',
    description: 'Stand-up paddle boards including all-around, touring, yoga, fishing, and adventure SUP models.',
    relationships: [
      { type: 'belongsTo', targetId: 'aquafarer' },
      { type: 'uses', targetId: 'drop-stitch' },
      { type: 'uses', targetId: 'pvc-fabric' },
    ],
  },
  {
    id: 'kayaks',
    type: 'product',
    name: 'Kayaks',
    description: 'Inflatable kayaks for recreational touring, river running, and expedition travel.',
    relationships: [
      { type: 'belongsTo', targetId: 'aquafarer' },
      { type: 'uses', targetId: 'drop-stitch' },
      { type: 'uses', targetId: 'pvc-fabric' },
    ],
  },
  {
    id: 'custom-watercraft',
    type: 'product',
    name: 'Custom Watercraft',
    description:
      'OEM/ODM custom-designed inflatable watercraft for brand partners, commercial operators, and specialized applications.',
    relationships: [
      { type: 'belongsTo', targetId: 'aquafarer' },
      { type: 'uses', targetId: 'reinforced-structure' },
      { type: 'uses', targetId: 'manufacturing-process' },
    ],
  },
  {
    id: 'drop-stitch',
    type: 'technology',
    name: 'Drop-Stitch Core Technology',
    description:
      'Thousands of polyester threads connecting top and bottom PVC layers for high-pressure rigid performance.',
    relationships: [{ type: 'uses', targetId: 'pvc-fabric' }],
  },
  {
    id: 'pvc-fabric',
    type: 'technology',
    name: 'PVC Fabric Technology',
    description: 'Marine-grade PVC fabric with UV coating, abrasion resistance, and RF-welded seam construction.',
    relationships: [],
  },
  {
    id: 'reinforced-structure',
    type: 'technology',
    name: 'Reinforced Structure Engineering',
    description:
      'Advanced structural design for rigidity, weight optimization, and long-term durability in marine environments.',
    relationships: [],
  },
  {
    id: 'manufacturing-process',
    type: 'technology',
    name: 'Precision Manufacturing Process',
    description:
      'Controlled production: material preparation, precision cutting, RF welding, assembly, quality inspection, and performance verification.',
    relationships: [],
  },
  {
    id: 'marine-industry-guide',
    type: 'industry',
    name: 'Inflatable Boat Guide & Industry Reference',
    description:
      'Comprehensive authoritative knowledge hub covering inflatable boat types, construction, materials, selection, safety, maintenance, and industry applications.',
    relationships: [
      { type: 'uses', targetId: 'drop-stitch' },
      { type: 'uses', targetId: 'pvc-fabric' },
      { type: 'uses', targetId: 'reinforced-structure' },
      { type: 'uses', targetId: 'manufacturing-process' },
      { type: 'serves', targetId: 'adventure-users' },
      { type: 'serves', targetId: 'professional-operators' },
      { type: 'serves', targetId: 'oem-partners' },
    ],
  },
  {
    id: 'adventure-users',
    type: 'audience',
    name: 'Adventure Users',
    description:
      'Recreational paddlers, fishermen, travelers, families, and outdoor enthusiasts exploring lakes, rivers, and coastal waters.',
    relationships: [],
  },
  {
    id: 'professional-operators',
    type: 'audience',
    name: 'Professional Operators',
    description:
      'Search and rescue teams, law enforcement, commercial marine operators, and tourism companies requiring professional-grade watercraft.',
    relationships: [],
  },
  {
    id: 'oem-partners',
    type: 'audience',
    name: 'OEM Partners',
    description:
      'Global brands and distributors seeking private label manufacturing, custom product development, and contract production.',
    relationships: [],
  },
];

export function getEntityById(id: string): EntityNode | undefined {
  return entityGraph.find((n) => n.id === id);
}

export function getEntityRelationships(id: string): EntityRelationship[] {
  const node = getEntityById(id);
  return node?.relationships ?? [];
}

export function getRelatedEntities(id: string): EntityNode[] {
  const node = getEntityById(id);
  if (!node) return [];
  const relatedIds = node.relationships.map((r) => r.targetId);
  return entityGraph.filter((n) => relatedIds.includes(n.id));
}

export function getEntityGraphJsonLd(): object {
  return {
    '@context': 'https://schema.org',
    '@graph': entityGraph.map((node) => {
      const base: Record<string, unknown> = {
        '@type':
          node.type === 'brand'
            ? 'Brand'
            : node.type === 'product'
              ? 'Product'
              : node.type === 'technology'
                ? 'Thing'
                : node.type === 'industry'
                  ? 'Thing'
                  : node.type === 'audience'
                    ? 'Audience'
                    : 'Thing',
        name: node.name,
        description: node.description,
        identifier: `aquafarer:entity:${node.id}`,
      };
      if (node.relationships.length > 0) {
        base.relatedEntity = node.relationships.map((r) => ({
          '@type': 'Thing',
          name: getEntityById(r.targetId)?.name ?? r.targetId,
          relationship: r.type,
        }));
      }
      return base;
    }),
  };
}
