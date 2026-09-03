import React from 'react';
import type { Metadata } from 'next';
import WorkChronology from '@/components/WorkChronology';

export const metadata: Metadata = {
  title: 'Work | Varneet Singh — Business Analysis & Operations',
  description:
    'Chronological case studies in business analysis, inventory forecasting, and operational modeling by Varneet Singh.',
  openGraph: {
    title: 'Work | Varneet Singh',
    description:
      'Chronological case studies in business operations, requirements engineering, and analytical modeling.',
    images: ['/assets/projects-preview.jpg'],
  },
};

export default function ProjectsPage() {
  return (
    <main className="tim-work-page-canvas">
      {/* ── HEADER SECTION: "Work." (No tagline) ── */}
      <section className="tim-work-header">
        <div className="tim-work-container">
          <div className="tim-work-subtag">
            <span>CHRONOLOGICAL ARCHIVE &middot; 2023 &mdash; 2026</span>
          </div>
          <h1 className="tim-work-hero-title">Work.</h1>
        </div>
      </section>

      {/* ── CHRONOLOGY SCROLL & CARD STREAM (Tim Roussilhe Placement) ── */}
      <section className="tim-work-body">
        <div className="tim-work-container">
          <WorkChronology />
        </div>
      </section>

      {/* ── CERTIFICATIONS SECTION ── */}
      <section className="tim-certs-section" id="work-certs">
        <div className="tim-work-container">
          <div className="tim-certs-card">
            <div className="tim-cert-logo-box">MS</div>
            <div className="tim-cert-details">
              <span className="tim-cert-badge">VERIFIED CREDENTIAL</span>
              <h2 className="tim-cert-title">Microsoft Certified: Business Analyst</h2>
              <div className="tim-cert-meta">
                <span>Microsoft &middot; Coursera</span>
                <span>/</span>
                <span>Credential ID: N1UGS1TCSPFD</span>
              </div>
              <p className="tim-cert-desc">
                Covers data modeling, Power BI dashboard architecture, DAX expressions, operational workflow mapping, and business insights delivery.
              </p>
              <a
                href="https://www.coursera.org/account/accomplishments/professional-cert/N1UGS1TCSPFD"
                target="_blank"
                rel="noopener noreferrer"
                className="tim-cert-btn"
              >
                View Verified Certificate &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
