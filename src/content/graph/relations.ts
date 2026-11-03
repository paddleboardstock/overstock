export interface GraphRelation {
  id: string;
  source: string;
  target: string;
  type: 'is-used-for' | 'is-compatible-with' | 'compares-to' | 'improves-on' | 'requires' | 'enhances';
  label: Record<string, string>;
}

export const relations: GraphRelation[] = [
  {
    id: 'sup-is-used-for-touring',
    source: 'inflatable-sup',
    target: 'touring',
    type: 'is-used-for',
    label: { en: 'SUP boards are used for touring and distance paddling', zh: '' },
  },
  {
    id: 'sup-is-used-for-beginner',
    source: 'inflatable-sup',
    target: 'beginner',
    type: 'is-used-for',
    label: { en: 'Inflatable SUPs are ideal for beginners due to stability', zh: '' },
  },
  {
    id: 'sup-is-used-for-river',
    source: 'inflatable-sup',
    target: 'river-touring',
    type: 'is-used-for',
    label: { en: 'Inflatable SUPs are used for river touring', zh: '' },
  },
  {
    id: 'sup-is-used-for-fishing',
    source: 'inflatable-sup',
    target: 'fishing',
    type: 'is-used-for',
    label: { en: 'Stable inflatable SUPs are a popular platform for fishing', zh: '' },
  },
  {
    id: 'sup-is-used-for-family',
    source: 'inflatable-sup',
    target: 'family-recreation',
    type: 'is-used-for',
    label: { en: 'Wide, stable SUP boards suit family recreation', zh: '' },
  },
  {
    id: 'safety-used-for-all',
    source: 'safety-equipment',
    target: 'beginner',
    type: 'is-used-for',
    label: { en: 'Safety equipment is essential for all water activities', zh: '' },
  },
  {
    id: 'drop-stitch-compatible-sup',
    source: 'drop-stitch-core',
    target: 'inflatable-sup',
    type: 'is-compatible-with',
    label: { en: 'Drop-stitch core is the primary construction method for rigid SUPs', zh: '' },
  },
  {
    id: 'eva-compatible-sup',
    source: 'eva-deck',
    target: 'inflatable-sup',
    type: 'is-compatible-with',
    label: { en: 'EVA foam deck pads provide traction on SUP boards', zh: '' },
  },
  {
    id: 'pump-compatible-sup',
    source: 'dual-action-pump',
    target: 'inflatable-sup',
    type: 'is-compatible-with',
    label: { en: 'Dual-action pumps are the standard inflation tool for SUPs', zh: '' },
  },
  {
    id: 'carbon-paddle-compatible-touring',
    source: 'carbon-paddle',
    target: 'touring',
    type: 'is-compatible-with',
    label: { en: 'Carbon fiber paddles reduce fatigue on long touring sessions', zh: '' },
  },
  {
    id: 'carbon-paddle-improves-aluminum',
    source: 'carbon-paddle',
    target: 'paddle',
    type: 'improves-on',
    label: {
      en: 'Carbon fiber paddles are lighter and stiffer than standard aluminum paddles',
      zh: '',
    },
  },
];
