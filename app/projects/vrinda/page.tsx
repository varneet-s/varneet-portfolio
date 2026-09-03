import fs from 'fs';
import path from 'path';
import type { Metadata } from 'next';
import CaseStudyCharts from '@/components/CaseStudyCharts';

export const metadata: Metadata = {
  title: 'Vrinda Store Retail Sales Analysis | Varneet Singh',
  description:
    'Retail sales auditing and customer demographic profiling for Vrinda Store, conducted in Microsoft Excel.',
  openGraph: {
    title: 'Vrinda Store Retail Sales Analysis | Varneet Singh',
    description:
      'Retail sales auditing and customer demographic profiling for Vrinda Store, conducted in Microsoft Excel.',
    images: ['/assets/vrinda-preview.jpg'],
  },
};

export default function VrindaPage() {
  const filePath = path.join(process.cwd(), 'app/projects/vrinda/main.html');
  const html = fs.readFileSync(filePath, 'utf-8');

  return (
    <>
      <main dangerouslySetInnerHTML={{ __html: html }} />
      <CaseStudyCharts project="vrinda" />
    </>
  );
}
