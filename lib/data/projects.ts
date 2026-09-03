export interface Project {
  id: string;
  num: string;
  title: string;
  slug: string;
  category: 'business-analysis' | 'data-analytics';
  categoryLabel: string;
  badgeClass: string;
  status: 'completed' | 'active';
  summary: string;
  description: string;
  tags: string[];
  tools: string[];
  image: string;
  colSpan?: number;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'olist',
    num: '01',
    title: 'Olist E-Commerce Case Study',
    slug: 'olist',
    category: 'business-analysis',
    categoryLabel: 'Business Analysis',
    badgeClass: 'badge-business',
    status: 'completed',
    summary: 'SQL · EXCEL · COHORT',
    description:
      'Analysed ~99,000 orders from Brazil\'s largest marketplace aggregator across four pre-formed business hypotheses — delivery delays, geographic revenue concentration, seller GMV distribution, and freight cost burden — using Excel, Tableau, and BPMN.',
    tags: ['SQL', 'EXCEL', 'COHORT'],
    tools: ['Excel', 'Tableau', 'BPMN Workflow', 'GAP Analysis'],
    image: '/assets/olist-preview.png',
    colSpan: 7,
    featured: true,
  },
  {
    id: 'pharma',
    num: '02',
    title: 'I.P. Pharma Operational Audit',
    slug: 'pharma',
    category: 'business-analysis',
    categoryLabel: 'Operations Manager',
    badgeClass: 'badge-business',
    status: 'active',
    summary: 'POWER BI · SALES OPS',
    description:
      'Analysed ~45,000 inventory SKU movements across 120+ retail chemist accounts — addressing order fulfillment bottlenecks, rep route latency, and stockout frequency — using Excel formulas, data modeling, and inventory flow controls.',
    tags: ['POWER BI', 'SALES OPS'],
    tools: ['Excel Automation', 'Inventory Controls', 'Data Modeling', 'Field Rep Tracking'],
    image: '/assets/pharma-preview.jpg',
    colSpan: 5,
    featured: false,
  },
  {
    id: 'vrinda',
    num: '03',
    title: 'Vrinda Store Annual Audit',
    slug: 'vrinda',
    category: 'data-analytics',
    categoryLabel: 'Data Analytics',
    badgeClass: 'badge-data',
    status: 'active',
    summary: 'EXCEL · SEGMENTATION',
    description:
      'Analysed ~31,000 transaction records across 12 sales channels — isolating channel order volume drop-offs, customer gender purchase splits, and regional fulfillment states — using Excel pivot tables, charts, and customer segmentation.',
    tags: ['EXCEL', 'SEGMENTATION'],
    tools: ['Excel', 'Pivot Tables', 'Data Visualization', 'Customer Segmentation'],
    image: '/assets/vrinda-preview.jpg',
    colSpan: 12,
    featured: true,
  },
];
