import fs from 'fs';
import path from 'path';
import type { Metadata } from 'next';
import CaseStudyCharts from '@/components/CaseStudyCharts';

export const metadata: Metadata = {
  title: 'I.P. Pharma Operational Tracking | Varneet Singh — Business Analyst',
  description:
    'Automated stock management and inventory tracking system developed for a pharmaceutical distributor using structured Excel modeling.',
  openGraph: {
    title: 'I.P. Pharma Operational Tracking | Varneet Singh — Business Analyst',
    description:
      'Automated stock management and inventory tracking system developed for a pharmaceutical distributor using structured Excel modeling.',
    images: ['https://varneet.in/assets/pharma-preview.jpg'],
  },
  twitter: {
    title: 'I.P. Pharma Operational Tracking | Varneet Singh — Business Analyst',
    description:
      'Automated stock management and inventory tracking system developed for a pharmaceutical distributor using structured Excel modeling.',
    images: ['https://varneet.in/assets/pharma-preview.jpg'],
  },
};

export default function PharmaPage() {
  const filePath = path.join(process.cwd(), 'app/projects/pharma/main.html');
  const html = fs.readFileSync(filePath, 'utf-8');

  return (
    <>
      <main dangerouslySetInnerHTML={{ __html: html }} />
      <CaseStudyCharts project="pharma" />
    </>
  );
}
