import fs from 'fs';
import path from 'path';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Olist E-Commerce Analytics | Varneet Singh — Business Analyst',
  description:
    'Analysed 96,478 orders across 9 joined datasets to isolate late delivery impact on review scores and uncover an 82.54% GMV seller concentration risk.',
  openGraph: {
    title: 'Olist E-Commerce Analytics | Varneet Singh — Business Analyst',
    description:
      'Late deliveries cut review scores from 4.03 to 2.27, and the top 20% of sellers generated 82.54% of GMV.',
    images: ['https://varneet.in/assets/olist-preview.png'],
  },
  twitter: {
    title: 'Olist E-Commerce Analytics | Varneet Singh — Business Analyst',
    description:
      'Late deliveries cut review scores from 4.03 to 2.27, and the top 20% of sellers generated 82.54% of GMV.',
    images: ['https://varneet.in/assets/olist-preview.png'],
  },
};

export default function OlistPage() {
  const filePath = path.join(process.cwd(), 'app/projects/olist/main.html');
  const html = fs.readFileSync(filePath, 'utf-8');

  return (
    <main dangerouslySetInnerHTML={{ __html: html }} />
  );
}
