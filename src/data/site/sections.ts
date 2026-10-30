export interface SiteSection {
  label: string;
  path: string;
  sitemap?: { entity: string; type: string; priority: string };
}

export const SITE_SECTIONS: SiteSection[] = [
  { label: 'Home', path: '/', sitemap: { entity: 'paddleboardoverstock', type: 'brand', priority: '1.0' } },
  { label: 'Products', path: '/products', sitemap: { entity: 'products', type: 'product', priority: '0.9' } },
  {
    label: 'Search & Rescue',
    path: '/use-cases/search-and-rescue',
    sitemap: { entity: 'search-rescue', type: 'service', priority: '0.7' },
  },
  {
    label: 'Engineering Perfection',
    path: '/engineering-perfection',
    sitemap: { entity: 'engineering', type: 'technology', priority: '0.7' },
  },
  {
    label: 'Disaster Relief',
    path: '/use-cases/disaster-relief',
    sitemap: { entity: 'disaster-relief', type: 'service', priority: '0.7' },
  },
  {
    label: 'Commercial Workboats',
    path: '/use-cases/commercial-workboats',
    sitemap: { entity: 'commercial-workboats', type: 'product', priority: '0.7' },
  },
  {
    label: 'Design & Innovation',
    path: '/design-powerhouse',
    sitemap: { entity: 'design-innovation', type: 'technology', priority: '0.8' },
  },
  { label: 'Guides', path: '/guides', sitemap: { entity: 'guides', type: 'guide', priority: '0.8' } },
  { label: 'News', path: '/news', sitemap: { entity: 'news', type: 'article', priority: '0.8' } },
  { label: 'About', path: '/about', sitemap: { entity: 'about', type: 'brand', priority: '0.6' } },
  { label: 'Quality', path: '/quality', sitemap: { entity: 'quality', type: 'service', priority: '0.7' } },
  { label: 'Safety', path: '/safety', sitemap: { entity: 'safety', type: 'safety', priority: '0.7' } },
  { label: 'Technology', path: '/technology', sitemap: { entity: 'technology', type: 'technology', priority: '0.7' } },
  { label: 'Academy', path: '/academy', sitemap: { entity: 'academy', type: 'education', priority: '0.7' } },
  { label: 'Size Guide', path: '/size-guide', sitemap: { entity: 'size-guide', type: 'product', priority: '0.5' } },
  {
    label: 'Paddle Board Overstock Story',
    path: '/paddleboardoverstock-story',
    sitemap: { entity: 'paddleboardoverstock-story', type: 'brand', priority: '0.8' },
  },
  { label: 'Gallery', path: '/gallery', sitemap: { entity: 'gallery', type: 'media', priority: '0.5' } },
  { label: 'Warranty', path: '/warranty', sitemap: { entity: 'warranty', type: 'support', priority: '0.5' } },
  { label: 'Factory', path: '/factory', sitemap: { entity: 'factory', type: 'service', priority: '0.7' } },
  { label: 'R&D Center', path: '/randdcenter', sitemap: { entity: 'randd', type: 'technology', priority: '0.6' } },
  { label: 'Custom Lab', path: '/custom', sitemap: { entity: 'custom-lab', type: 'service', priority: '0.6' } },
  { label: 'Lifestyle', path: '/lifestyle', sitemap: { entity: 'lifestyle', type: 'content', priority: '0.5' } },
  { label: 'Media Center', path: '/media', sitemap: { entity: 'media', type: 'media', priority: '0.5' } },
  { label: 'FAQ', path: '/faq', sitemap: { entity: 'faq', type: 'support', priority: '0.6' } },
  { label: 'Contact', path: '/contact', sitemap: { entity: 'contact', type: 'service', priority: '0.5' } },
  {
    label: 'OEM Manufacturing Process',
    path: '/oem-odm-manufacturer',
    sitemap: { entity: 'oem-odm-manufacturer', type: 'service', priority: '0.7' },
  },
  {
    label: 'Engineering Team',
    path: '/engineering-team',
    sitemap: { entity: 'engineering-team', type: 'brand', priority: '0.7' },
  },
  {
    label: 'RIB vs Dinghy Comparison',
    path: '/compare/rib-vs-dinghy',
    sitemap: { entity: 'rib-vs-dinghy', type: 'compare', priority: '0.7' },
  },
  {
    label: 'SUP vs Kayak Comparison',
    path: '/compare/sup-vs-kayak',
    sitemap: { entity: 'sup-vs-kayak', type: 'compare', priority: '0.8' },
  },
  {
    label: 'Inflatable vs Hardboard Comparison',
    path: '/compare/inflatable-vs-hardboard',
    sitemap: { entity: 'inflatable-vs-hardboard', type: 'compare', priority: '0.7' },
  },
  {
    label: 'PVC vs Hypalon Boat Material Comparison',
    path: '/compare/pvc-vs-hypalon',
    sitemap: { entity: 'pvc-vs-hypalon-compare', type: 'compare', priority: '0.8' },
  },
  {
    label: 'SUP vs RIB Comparison',
    path: '/compare/sup-vs-rib',
    sitemap: { entity: 'sup-vs-rib', type: 'compare', priority: '0.7' },
  },
  {
    label: 'Aluminum vs Fiberglass Hull Comparison',
    path: '/compare/aluminum-vs-fiberglass',
    sitemap: { entity: 'aluminum-vs-fiberglass', type: 'compare', priority: '0.7' },
  },
  {
    label: 'Commercial vs Recreational RIB Comparison',
    path: '/compare/commercial-vs-recreational-rib',
    sitemap: { entity: 'commercial-vs-recreational-rib', type: 'compare', priority: '0.7' },
  },
  {
    label: 'Paddle Board Overstock vs Traditional Manufacturers Comparison',
    path: '/compare/paddleboardoverstock-vs-traditional-manufacturers',
    sitemap: { entity: 'paddleboardoverstock-vs-traditional', type: 'compare', priority: '0.7' },
  },
  { label: 'SUP Basics', path: '/learn/sup-basics', sitemap: { entity: 'sup-basics', type: 'guide', priority: '0.8' } },
  {
    label: 'Inflatable Technology',
    path: '/learn/inflatable-technology',
    sitemap: { entity: 'inflatable-technology', type: 'guide', priority: '0.7' },
  },
  {
    label: 'Water Sports Safety',
    path: '/learn/safety-in-water-sports',
    sitemap: { entity: 'safety-water-sports', type: 'guide', priority: '0.7' },
  },
  {
    label: 'Paddle Board Overstock AI Brand Profile',
    path: '/llms/brand/paddleboardoverstock',
    sitemap: { entity: 'llms-brand', type: 'reference', priority: '0.3' },
  },
  {
    label: 'SUP Types AI Reference',
    path: '/llms/compare/sup-types',
    sitemap: { entity: 'llms-compare', type: 'reference', priority: '0.3' },
  },
  {
    label: 'PVC vs Hypalon AI Reference',
    path: '/llms/compare/pvc-vs-hypalon',
    sitemap: { entity: 'llms-pvc-vs-hypalon', type: 'reference', priority: '0.3' },
  },
  {
    label: 'Inflatable Boat Industry AI Reference',
    path: '/llms/industry/inflatable-boats',
    sitemap: { entity: 'llms-industry-boats', type: 'reference', priority: '0.3' },
  },
  {
    label: 'Drop-Stitch Technology AI Reference',
    path: '/llms/technology/drop-stitch',
    sitemap: { entity: 'llms-tech-drop-stitch', type: 'reference', priority: '0.3' },
  },
  {
    label: 'Boat Selection AI Reference',
    path: '/llms/comparison/boat-selection',
    sitemap: { entity: 'llms-comparison-boat-selection', type: 'reference', priority: '0.3' },
  },
  {
    label: 'Inflatable Industry AI Reference',
    path: '/llms/industry/inflatable-water-sports',
    sitemap: { entity: 'llms-industry', type: 'reference', priority: '0.3' },
  },
  {
    label: 'Solutions by Industry',
    path: '/solutions/by-industry',
    sitemap: { entity: 'solutions-industry', type: 'service', priority: '0.6' },
  },
  {
    label: 'Solutions by Use Case',
    path: '/solutions/by-use-case',
    sitemap: { entity: 'solutions-use-case', type: 'service', priority: '0.6' },
  },
  {
    label: 'Materials Reference',
    path: '/learn/materials',
    sitemap: { entity: 'materials-reference', type: 'guide', priority: '0.7' },
  },
  {
    label: 'PVC vs Hypalon Comparison',
    path: '/learn/pvc-vs-hypalon',
    sitemap: { entity: 'pvc-vs-hypalon', type: 'guide', priority: '0.8' },
  },
  {
    label: 'Drop-Stitch Core Technology',
    path: '/learn/drop-stitch-core',
    sitemap: { entity: 'drop-stitch-core', type: 'guide', priority: '0.7' },
  },
  {
    label: 'Intermediate Paddling Techniques',
    path: '/learn/intermediate-techniques',
    sitemap: { entity: 'intermediate-techniques', type: 'guide', priority: '0.6' },
  },
  {
    label: 'SUP Size Guide',
    path: '/learn/sup-size-guide',
    sitemap: { entity: 'sup-size-guide-learn', type: 'guide', priority: '0.8' },
  },
  {
    label: 'Marine Industry Authority',
    path: '/marine-industry',
    sitemap: { entity: 'marine-industry', type: 'industry', priority: '0.9' },
  },
  {
    label: 'Inflatable Boat Guide AI Reference',
    path: '/llms/marine-industry/inflatable-boat-guide',
    sitemap: { entity: 'llms-marine-industry', type: 'reference', priority: '0.3' },
  },
];
