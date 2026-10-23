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
      "Aquafarer's engineering philosophy: precision manufacturing, premium material selection, rigorous quality control, and segment-specific design for whitewater, fishing, dinghies, and recreational inflatable boats.",
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
        body: 'Aquafarer employs highly skilled technicians. Our production facility is equipped with state-of-the-art CNC cutting machines and thermo-welding equipment.',
      },
      {
        heading: 'Rigorous Quality Control & Testing',
        body: 'Multi-layered QC system with stringent checks at each critical step, culminating in comprehensive final testing including 24-48 hour pressure holding tests, leak detection, dimensional verification, and functional tests.',
      },
    ],
    features: [
      {
        label: 'Whitewater Inflatables',
        desc: 'High-denier PVC or Hypalon with heavy reinforcements, self-bailing floors',
      },
      { label: 'Fishing Inflatables', desc: 'Exceptional stability, rod holders, gear mounts, elevated seating' },
      { label: 'Dinghies & Tenders', desc: 'Lightweight, compact, efficient rowing and motoring performance' },
      { label: 'Recreational Craft', desc: 'Versatile design for family boating with stability and safety priority' },
    ],
  },
  {
    slug: 'oem-odm-manufacturer',
    title: 'Inflatable SUP & Kayak OEM/ODM Manufacturer',
    description:
      'Aquafarer is a premier OEM/ODM manufacturer of inflatable SUP boards, kayaks, RIBs, and dinghies. CE-certified factory. Drop-stitch core lamination, custom mold design, private label. 12,000 m² facility in Qingdao, China.',
    pageType: 'capability',
    sections: [
      {
        heading: 'Specification & Design Brief',
        body: 'Share your target specs, CAD drawings, or reference product. Our engineering team reviews materials, dimensions, and compliance requirements (CE and BSCI) before quoting.',
      },
      {
        heading: '3D Mold Prototyping',
        body: 'We design and CNC-machine custom molds for SUP boards, kayak hulls, and RIB components. Prototype samples produced within 15–20 working days.',
      },
      {
        heading: 'Material Selection & Sample Production',
        body: 'Choose from military-grade PVC (0.9mm–1.2mm), Hypalon CSM, or drop-stitch core fabrics. Pre-production samples with your brand colours, logo, and packaging.',
      },
      {
        heading: 'CE Compliance',
        body: 'Every OEM order includes CE declaration of conformity, product traceability records, BSCI social compliance report, and REACH material declarations.',
      },
      {
        heading: 'Bulk Production & Inline QC',
        body: '100-point quality checklist. Each unit undergoes a 24-48h pressure hold test at 1.25x rated pressure, seam peel testing, and visual inspection before packing.',
      },
      {
        heading: 'FOB Qingdao Logistics',
        body: 'Finished goods palletized, shrink-wrapped, and container-loaded at Qingdao port. Export documentation, customs clearance, and real-time shipment tracking.',
      },
    ],
    features: [
      { label: '12,000 m² Facility', desc: 'ISO 9001 certified workshop in Qingdao' },
      { label: '200-300 Skilled Workers', desc: 'Experienced manufacturing workforce' },
      { label: '15,000 Units/Year', desc: 'Annual production capacity' },
      { label: '50+ Countries', desc: 'Global export reach' },
      { label: 'Custom Mold Design', desc: 'CNC-machined molds for any shape' },
      { label: 'Private Label', desc: 'Full branding and packaging service' },
    ],
  },
  {
    slug: 'design-powerhouse',
    title: 'Design & Innovation',
    description:
      'Aquafarer is more than a factory — we are a design-driven manufacturer. In-house R&D, hydrodynamic simulation, custom ODM solutions, and advanced material engineering for global B2B partners.',
    pageType: 'capability',
    sections: [
      {
        heading: 'Proprietary R&D & Engineering',
        body: 'Our in-house R&D team consists of veteran marine engineers, industrial designers, and water sports enthusiasts. We leverage advanced hydrodynamic simulation and CAD v4.2 to optimize hull panel curvature, ensuring every kayak and SUP delivers trackability, speed, and stability matching rigid crafts.',
      },
      {
        heading: 'Ergonomics & Advanced Material Integration',
        body: 'Our design philosophy centers around rider ergonomics — from precise ergonomic seat placement to engineered drop-stitch internal chamber architecture. We continuously innovate with military-grade PVC, reinforced drop-stitch hull panels, and UV-resistant coatings.',
      },
      {
        heading: 'Turnkey ODM & White-Label Solutions',
        body: 'We offer comprehensive ODM services including customized hull geometry, localized trend-driven graphic designs, branding placement, and bespoke accessory ecosystems. From sketch to shelf, we bring your brand vision to life.',
      },
    ],
    features: [
      { label: 'Hydrodynamic Simulation', desc: 'CFD and CAD-optimized hull curvature' },
      { label: 'Ergonomic Engineering', desc: 'Precision rider-centric design' },
      { label: 'Custom Mold & Tooling', desc: 'CNC-machined molds, 15-20 day prototypes' },
      { label: 'Bespoke Accessory Ecosystems', desc: 'Complete OEM accessory packages' },
      { label: '14+ In-House Engineers', desc: 'Marine, industrial, and materials expertise' },
      { label: '8+ Registered Patents', desc: 'Proprietary design and manufacturing IP' },
    ],
  },
];
