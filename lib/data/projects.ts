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
    title: 'Cutting Delivery Delays Across 99K Orders',
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
    title: 'Pharma Sales Performance & Revenue Recovery',
    slug: 'pharma',
    category: 'business-analysis',
    categoryLabel: 'Business Analyst (Freelance)',
    badgeClass: 'badge-business',
    status: 'active',
    summary: 'EXCEL · OPERATIONS · RECOVERY',
    description:
      'Traced root cause of a 30% Q1 revenue drop while order volume held flat through transaction-level and client-conversation audits, restoring revenue run-rate by Q3.',
    tags: ['EXCEL', 'SALES OPS', 'REVENUE AUDIT'],
    tools: ['Excel', 'Transaction Audit', 'Sales Operations', 'Process Controls'],
    image: '/assets/pharma-preview.jpg',
    colSpan: 5,
    featured: true,
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
