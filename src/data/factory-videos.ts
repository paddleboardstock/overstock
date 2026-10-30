export interface FactoryVideo {
  id: string;
  title: string;
  description: string;
  duration: string;
  stage: string;
  youtubeId: string;
  thumbnail: string;
}

export const factoryVideos: FactoryVideo[] = [
  {
    id: 'material-inspection',
    title: 'Raw Material Inspection',
    description:
      'Every batch of PVC, Hypalon, and drop-stitch fabric undergoes visual inspection, thickness measurement, and tensile strength testing before entering production.',
    duration: '2:30',
    stage: '1',
    youtubeId: 'placeholder-material-inspection',
    thumbnail: 'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/factory/paddleboardoverstock-pvc-material-testing.webp',
  },
  {
    id: 'cnc-cutting',
    title: 'CNC Precision Cutting',
    description:
      'Computer-controlled cutting machines process fabric with ±1mm precision. Automated nesting software minimizes waste and ensures consistent panel geometry across all production runs.',
    duration: '3:15',
    stage: '2',
    youtubeId: 'placeholder-cnc-cutting',
    thumbnail: 'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/factory/paddleboardoverstock-production-department.webp',
  },
  {
    id: 'welding-bonding',
    title: 'Heat Welding & Seam Bonding',
    description:
      'High-frequency welding machines fuse PVC panels at controlled temperatures. Each seam is visually inspected and peel-tested to verify bond strength meets specifications.',
    duration: '4:00',
    stage: '3',
    youtubeId: 'placeholder-welding',
    thumbnail: 'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/factory/paddleboardoverstock-factory-building.webp',
  },
  {
    id: 'rib-hull',
    title: 'RIB Hull Moulding & Assembly',
    description:
      'Fiberglass deep-V hulls are laid up in precision moulds. Hypalon tubes are bonded to the hull using marine-grade adhesives, then reinforced with stainless steel fasteners.',
    duration: '3:45',
    stage: '4',
    youtubeId: 'placeholder-rib-hull',
    thumbnail: 'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/products/rib/paddleboardoverstock-rib-600.webp',
  },
  {
    id: 'sup-printing',
    title: 'SUP Printing & Deck Pad Assembly',
    description:
      'UV digital printing applies custom artwork to SUP decks. Multi-color EVA block piecing is precision-die-cut and hand-assembled for zero-fade traction pads.',
    duration: '3:30',
    stage: '5',
    youtubeId: 'placeholder-sup-printing',
    thumbnail: 'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/factory/paddleboardoverstock-sup-manufacturing.webp',
  },
  {
    id: 'final-assembly',
    title: 'Final Assembly & Rigging',
    description:
      'Valves, fins, handles, and D-rings are installed. Every component is torque-checked and visually inspected. Boards and boats are fully assembled and tested before packing.',
    duration: '2:45',
    stage: '6',
    youtubeId: 'placeholder-assembly',
    thumbnail: 'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/factory/paddleboardoverstock-production-department-2.webp',
  },
  {
    id: 'pressure-testing',
    title: 'Pressure Testing & Air Retention',
    description:
      'Every inflatable product is pressurized to 1.25x rated PSI and held for 24-48 hours. Pressure drop must not exceed 5% to pass. Automated data logging for batch traceability.',
    duration: '2:15',
    stage: '7',
    youtubeId: 'placeholder-pressure-test',
    thumbnail: 'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/factory/paddleboardoverstock-pressure-testing.webp',
  },
  {
    id: 'packing-shipping',
    title: 'Packing & Global Shipping',
    description:
      'Finished products are folded, rolled, and packed with accessories into branded boxes. Pallets are stretch-wrapped and loaded into containers for FOB Qingdao shipment worldwide.',
    duration: '2:00',
    stage: '8',
    youtubeId: 'placeholder-packing',
    thumbnail: 'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/factory/paddleboardoverstock-warehouse-storage.webp',
  },
];
