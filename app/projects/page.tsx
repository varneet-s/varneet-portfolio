import React from 'react';
import type { Metadata } from 'next';
import Work from '@/components/Work';

export const metadata: Metadata = {
  title: 'Projects | Varneet Singh — Business Analyst',
  description:
    'Featured projects and operational case studies in business analysis, inventory forecasting, and data modeling by Varneet Singh.',
  openGraph: {
    title: 'Projects | Varneet Singh — Business Analyst',
    description:
      'Featured case studies in business operations, requirements engineering, and analytical modeling.',
    images: ['https://varneet.in/assets/og-preview.jpg'],
  },
  twitter: {
    title: 'Projects | Varneet Singh — Business Analyst',
    description:
      'Featured case studies in business operations, requirements engineering, and analytical modeling.',
    images: ['https://varneet.in/assets/og-preview.jpg'],
  },
};

export default function ProjectsPage() {
  return (
    <main className="tim-work-page-canvas">
      {/* ── HEADER SECTION: "Projects." ── */}
      <section className="tim-work-header">
        <div className="tim-work-container">
          <h1 className="tim-work-hero-title">Projects.</h1>
          <p className="tim-work-hero-dek">
            Analytical case studies, data architecture, and operational systems built to turn messy business complexity into measurable clarity.
          </p>
        </div>
      </section>

      {/* ── WORK BODY: Blog-Style Project Cards, Watracz Experience, Metrics & Certs ── */}
      <section className="tim-work-body">
        <div className="tim-work-container">
          <Work />
        </div>
      </section>
    </main>
  );
}
