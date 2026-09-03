import fs from 'fs';
import path from 'path';
import type { Metadata } from 'next';
import CaseStudyCharts from '@/components/CaseStudyCharts';

export const metadata: Metadata = {
  title: 'I.P. Pharma Operational Tracking | Varneet Singh',
  description:
    'Automated stock management and sales representative tracking dashboard developed for a pharmaceutical distributor.',
  openGraph: {
    title: 'I.P. Pharma Operational Tracking | Varneet Singh',
    description:
      'Automated stock management and sales representative tracking dashboard developed for a pharmaceutical distributor.',
    images: ['/assets/pharma-preview.jpg'],
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
