import fs from 'fs';
import path from 'path';
import type { Metadata } from 'next';
import CaseStudyCharts from '@/components/CaseStudyCharts';

export const metadata: Metadata = {
  title: 'Olist E-Commerce Business Analysis — Varneet Singh',
  description:
    'Analysed ~99,000 orders from Brazil\'s largest marketplace aggregator across four pre-formed business hypotheses — delivery delays, geographic revenue concentration, seller GMV distribution, and freight cost burden — using Excel, Tableau, and BPMN.',
  openGraph: {
    title: 'Olist E-Commerce Business Analysis — Varneet Singh',
    description:
      'Analysed ~99,000 orders from Brazil\'s largest marketplace aggregator across four pre-formed business hypotheses.',
    images: ['/assets/olist-preview.png'],
  },
};

export default function OlistPage() {
  const filePath = path.join(process.cwd(), 'app/projects/olist/main.html');
  const html = fs.readFileSync(filePath, 'utf-8');

  return (
    <>
      <main dangerouslySetInnerHTML={{ __html: html }} />
      <CaseStudyCharts project="olist" />
    </>
  );
}
