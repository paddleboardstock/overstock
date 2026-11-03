export interface StandalonePage {
  slug: string;
  title: string;
  description: string;
  sections: { heading: string; body: string }[];
  features: { label: string; desc: string }[];
  pageType: 'service' | 'capability' | 'about';
}

export const standalonePages: StandalonePage[] = [
  {
    slug: 'engineering-perfection',
    title: 'Engineering Perfection',
    description:
      "Paddle Board Overstock's engineering philosophy: precision manufacturing, premium material selection, rigorous quality control, and segment-specific design for touring, yoga, fishing, and recreational paddle boarding.",
    pageType: 'about',
    sections: [
      {
        heading: 'Superior Material Sourcing',
        body: 'We invest considerable resources in identifying, testing, and procuring the finest fabrics, adhesives, and components available globally. Sourcing protocol includes batch testing for tensile strength, tear resistance, coating adhesion, and UV stability.',
      },
      {
        heading: 'Precision Engineering & Design',
        body: 'Our design team comprises experienced naval architects who leverage advanced CAD software and real-world testing to create hulls that are hydrodynamically efficient, exceptionally stable, and robust.',
      },
      {
        heading: 'Craftsmanship & Manufacturing Excellence',
        body: 'Paddle Board Overstock employs highly skilled technicians. Our production facility is equipped with state-of-the-art CNC cutting machines and thermo-welding equipment.',
      },
      {
        heading: 'Rigorous Quality Control & Testing',
        body: 'Multi-layered QC system with stringent checks at each critical step, culminating in comprehensive final testing including 24-48 hour pressure holding tests, leak detection, dimensional verification, and functional tests.',
      },
    ],
    features: [
      {
        label: 'Touring Boards',
        desc: 'High-denier PVC with reinforced rails and tapered displacement hulls',
      },
      { label: 'Fishing Boards', desc: 'Exceptional stability, gear mounts, elevated casting platform' },
      { label: 'All-Around Boards', desc: 'Lightweight, compact, stable platforms for all skill levels' },
      { label: 'Family Fun Boards', desc: 'Versatile design for family paddling with stability and safety priority' },
    ],
  },
  {
    slug: 'design-powerhouse',
    title: 'Design & Innovation',
    description:
      'Paddle Board Overstock is more than a factory — we are a design-driven brand. In-house R&D, hydrodynamic simulation, and advanced material engineering for paddlers worldwide.',
    pageType: 'capability',
    sections: [
      {
        heading: 'Proprietary R&D & Engineering',
        body: 'Our in-house R&D team consists of veteran marine engineers, industrial designers, and water sports enthusiasts. We leverage advanced hydrodynamic simulation and CAD v4.2 to optimize hull panel curvature, ensuring every SUP delivers trackability, speed, and stability matching rigid boards.',
      },
      {
        heading: 'Ergonomics & Advanced Material Integration',
        body: 'Our design philosophy centers around rider ergonomics — from precise ergonomic seat placement to engineered drop-stitch internal chamber architecture. We continuously innovate with military-grade PVC, reinforced drop-stitch hull panels, and UV-resistant coatings.',
      },
      {
        heading: 'Graphic Design & Deck Art',
        body: 'We offer trend-driven graphic designs, curated deck art collections, and coordinated accessory packages. From concept to finished board, we bring every design vision to life.',
      },
    ],
    features: [
      { label: 'Hydrodynamic Simulation', desc: 'CFD and CAD-optimized hull curvature' },
      { label: 'Ergonomic Engineering', desc: 'Precision rider-centric design' },
      { label: 'Custom Mold & Tooling', desc: 'CNC-machined molds, 15-20 day prototypes' },
      { label: 'Complete Accessory Kits', desc: 'Pump, paddle, leash, and backpack included' },
      { label: '14+ In-House Engineers', desc: 'Marine, industrial, and materials expertise' },
      { label: '8+ Registered Patents', desc: 'Proprietary design and manufacturing IP' },
    ],
  },
];
