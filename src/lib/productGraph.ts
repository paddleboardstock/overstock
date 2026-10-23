export interface ProductGraphNode {
  type: string;
  bestFor: string[];
  avoid: string[];
  userLevel: string;
  intent: string;
  description: string;
}

export const productGraph: Record<string, ProductGraphNode> = {
  RIB: {
    intent: 'performance + commercial',
    bestFor: ['coastal', 'sea', 'rescue', 'patrol', 'open water'],
    avoid: ['shallow reef', 'extreme weather warning conditions'],
    userLevel: 'advanced-professional',
    type: 'performance + commercial',
    description:
      'Rigid-hull inflatable boats for high-performance transport, commercial operations, and emergency response.',
  },
  INFLATABLE: {
    intent: 'utility + recreation',
    bestFor: ['lake', 'river', 'harbor', 'sheltered bay', 'coastal'],
    avoid: ['open rough sea', 'extreme wind', 'heavy surf'],
    userLevel: 'beginner-intermediate',
    type: 'mobility + exploration',
    description:
      'Inflatable boats and kayaks for touring, fishing, and family recreation. Portable and easy to launch.',
  },
  SUP: {
    intent: 'balance + stability',
    bestFor: ['lake', 'calm sea', 'sheltered coastal'],
    avoid: ['strong river current', 'open rough sea', 'heavy wind'],
    userLevel: 'beginner-intermediate',
    type: 'stability + balance',
    description:
      'Stand-up paddle boards designed for stability on flat water. Ideal for recreation, fitness, and exploration.',
  },
  ACCESSORY: {
    intent: 'equipment support',
    bestFor: ['all environments'],
    avoid: [],
    userLevel: 'all',
    type: 'equipment',
    description: 'Paddles, pumps, life vests, bags, and essential gear for maintenance and customization.',
  },
};
