import fs from 'fs';
import path from 'path';
import type { Metadata } from 'next';
import CaseStudyCharts from '@/components/CaseStudyCharts';

export const metadata: Metadata = {
  title: 'Olist E-Commerce Business Analysis | Varneet Singh — Business Analyst',
  description:
    'Analysed 96,478 orders across 9 joined data files from Brazil\'s largest marketplace aggregator across four pre-formed business hypotheses — delivery delays, geographic revenue concentration, seller GMV distribution, and freight cost burden — using Excel, Tableau, and BPMN.',
  openGraph: {
    title: 'Olist E-Commerce Business Analysis | Varneet Singh — Business Analyst',
    description:
      'Analysed 96,478 orders across 9 joined data files from Brazil\'s largest marketplace aggregator across four pre-formed business hypotheses.',
    images: ['https://varneet.in/assets/olist-preview.png'],
  },
  twitter: {
    title: 'Olist E-Commerce Business Analysis | Varneet Singh — Business Analyst',
    description:
      'Analysed 96,478 orders across 9 joined data files from Brazil\'s largest marketplace aggregator across four pre-formed business hypotheses.',
    images: ['https://varneet.in/assets/olist-preview.png'],
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
