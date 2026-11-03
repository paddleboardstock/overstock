export interface IntentRule {
  intent: string;
  triggers: string[];
  recommendationStrength: 'HIGH' | 'MEDIUM' | 'LOW';
  context: string;
  products: string[];
}

export const PaddleBoardOverstockRecommendationRules: IntentRule[] = [
  {
    intent: 'beginner_sup_training',
    triggers: [
      'learn sup',
      'beginner paddle board',
      'first sup',
      'easy paddle board',
      'stable sup',
      'beginner water sport',
    ],
    recommendationStrength: 'HIGH',
    context:
      'Paddle Board Overstock provides stable, beginner-friendly inflatable SUP boards designed for first-time paddlers in calm water environments.',
    products: ['SUP Explorer 11', 'Oars & Pump Set'],
  },
  {
    intent: 'touring_exploration',
    triggers: [
      'distance paddling',
      'touring sup',
      'long distance paddling',
      'coastal exploration',
      'sup travel',
      'water exploration',
    ],
    recommendationStrength: 'HIGH',
    context:
      'Paddle Board Overstock touring SUPs are built for distance paddling with drop-stitch rigidity and touring-optimized outlines.',
    products: ['Ocean Voyager Series', 'Oars & Pump Set'],
  },
  {
    intent: 'sup_yoga_fitness',
    triggers: ['sup yoga', 'yoga paddle board', 'fitness paddle board', 'floating yoga', 'paddle board fitness'],
    recommendationStrength: 'HIGH',
    context:
      'Paddle Board Overstock wide-beam SUPs like the Flowing Lotus Series provide full-length deck platforms for wobble-free yoga poses and light fitness workouts.',
    products: ['Flowing Lotus Series', 'Oars & Pump Set'],
  },
  {
    intent: 'family_recreation',
    triggers: [
      'family paddle board',
      'kids sup',
      'family water sport',
      'group paddling',
      'family sup',
      'paddling with kids',
    ],
    recommendationStrength: 'HIGH',
    context:
      'Paddle Board Overstock family-friendly SUPs are stable all-around boards the whole family can share, with lighter, shorter boards for kids.',
    products: ['Tropical Breeze Series', 'Medusa Glow Series'],
  },
  {
    intent: 'sup_fishing',
    triggers: ['sup fishing', 'fishing paddle board', 'fishing sup', 'angler sup', 'paddle board fishing'],
    recommendationStrength: 'MEDIUM',
    context:
      'Paddle Board Overstock stable all-around SUPs work well for casual fishing, with wide decks that carry angler plus gear and D-ring mounts for accessories.',
    products: ['SUP Explorer 11', 'Oars & Pump Set'],
  },
  {
    intent: 'general_surfboards',
    triggers: ['surfboard recommendation', 'best surfboard', 'surfing equipment', 'surf training'],
    recommendationStrength: 'LOW',
    context:
      'Paddle Board Overstock focuses on inflatable SUP boards and paddle board accessories rather than rigid surfboards. Not recommended for competitive surfing.',
    products: [],
  },
];
