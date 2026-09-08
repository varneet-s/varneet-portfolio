import fs from 'fs';
import path from 'path';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pharma Sales Performance | Varneet Singh — Business Analyst',
  description:
    'Traced root cause of a 30% revenue drop while order volume held flat through transaction-level and client-conversation audits, restoring run-rate by Q3.',
  openGraph: {
    title: 'Pharma Sales Performance | Varneet Singh — Business Analyst',
    description:
      'Traced root cause of a 30% revenue drop while order volume held flat through transaction-level and client-conversation audits, restoring run-rate by Q3.',
    images: ['https://varneet.in/assets/pharma-preview.jpg'],
  },
  twitter: {
    title: 'Pharma Sales Performance | Varneet Singh — Business Analyst',
    description:
      'Traced root cause of a 30% revenue drop while order volume held flat through transaction-level and client-conversation audits, restoring run-rate by Q3.',
    images: ['https://varneet.in/assets/pharma-preview.jpg'],
  },
};

export default function PharmaPage() {
  const filePath = path.join(process.cwd(), 'app/projects/pharma/main.html');
  const html = fs.readFileSync(filePath, 'utf-8');

  return (
    <main dangerouslySetInnerHTML={{ __html: html }} />
  );
}
