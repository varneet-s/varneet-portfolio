import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work & Case Studies | Varneet Singh',
  description:
    'Real-world business operations and data analytics case studies by Varneet Singh — Olist E-Commerce, I.P. Pharma, and Vrinda Store.',
  openGraph: {
    title: 'Work & Case Studies | Varneet Singh',
    description:
      'Data-backed business analysis, inventory forecasting, and operational modeling case studies.',
    images: ['/assets/projects-preview.jpg'],
  },
};

export default function ProjectsPage() {
  return (
    <main className="dh-work-page-canvas">
      {/* 1. SEAMLESS WORK HEADLINE (No Divide Line, Exact David Hellmann Aesthetic) */}
      <section className="dh-work-header-section">
        <div className="dh-work-content-wrap">
          <h1 className="dh-work-hero-title">
            Work hard.<br />Play hard.
          </h1>
        </div>
      </section>

      {/* 2. FEATURED WORK CARDS (Directly on Continuous Sage Green Canvas) */}
      <section className="dh-work-grid-section" id="featured-work">
        <div className="dh-work-content-wrap">
          <div className="dh-work-grid">
            {/* Project 1: Olist */}
            <Link href="/projects/olist/" className="dh-work-card" id="project-card-olist">
              <div className="dh-work-header">
                <span className="dh-work-tag">Business Analysis</span>
                <h2 className="dh-work-title">Cutting Delivery Delays Across 99K Orders</h2>
                <div className="dh-work-meta-list">
                  <div>Y. 2024</div>
                  <div>C. OLIST E-COMMERCE</div>
                  <div>T. SQL &middot; EXCEL &middot; TABLEAU &middot; BPMN</div>
                </div>
                <p className="dh-work-desc-desktop dh-cv-dek">
                  Analysed ~99,000 orders across four pre-formed hypotheses: delivery delays, geographic revenue concentration, seller GMV distribution, and freight burden.
                </p>
              </div>
              <div className="dh-work-preview-wrap">
                <img
                  src="/assets/olist-preview.png"
                  alt="Olist e-commerce analysis preview"
                  width={600}
                  height={250}
                  className="dh-work-preview-img"
                  loading="lazy"
                />
              </div>
            </Link>

            {/* Project 2: I.P. Pharma */}
            <Link href="/projects/pharma/" className="dh-work-card" id="project-card-pharma">
              <div className="dh-work-header">
                <span className="dh-work-tag">Operations Management</span>
                <h2 className="dh-work-title">Real-Time Stock Reporting for 120+ Accounts</h2>
                <div className="dh-work-meta-list">
                  <div>Y. 2026</div>
                  <div>C. I.P. PHARMA</div>
                  <div>T. EXCEL AUTOMATION &middot; DATA MODELING &middot; INVENTORY</div>
                </div>
                <p className="dh-work-desc-desktop dh-cv-dek">
                  Analysed ~45,000 inventory movements across 120+ chemist accounts, addressing fulfillment bottlenecks and reducing reporting latency from 3 days to real-time.
                </p>
              </div>
              <div className="dh-work-preview-wrap">
                <img
                  src="/assets/pharma-preview.jpg"
                  alt="I.P. Pharma inventory audit preview"
                  width={600}
                  height={250}
                  className="dh-work-preview-img"
                  loading="lazy"
                />
              </div>
            </Link>

            {/* Project 3: Vrinda Store */}
            <Link href="/projects/vrinda/" className="dh-work-card dh-work-card--full" id="project-card-vrinda">
              <div className="dh-work-header">
                <span className="dh-work-tag">Data Analytics</span>
                <h2 className="dh-work-title">Multi-Channel Sales Performance &amp; Demographics</h2>
                <div className="dh-work-meta-list">
                  <div>Y. 2023</div>
                  <div>C. VRINDA STORE</div>
                  <div>T. ADVANCED EXCEL &middot; PIVOT CHARTS &middot; RFM</div>
                </div>
                <p className="dh-work-desc-desktop dh-cv-dek">
                  Synthesized 31,000+ customer records across Amazon, Flipkart, and Myntra to establish buyer demographic profiles and channel revenue share.
                </p>
              </div>
              <div className="dh-work-preview-wrap">
                <img
                  src="/assets/vrinda-preview.jpg"
                  alt="Vrinda store sales dashboard preview"
                  width={1200}
                  height={350}
                  className="dh-work-preview-img dh-work-preview-img--wide"
                  loading="lazy"
                />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. CLIENT & AGENCY HISTORY (CV Teasers on Continuous Canvas) */}
      <section className="dh-work-history-section" id="client-history">
        <div className="dh-work-content-wrap">
          <h2 className="dh-section-title-serif">Client &amp; Agency History.</h2>
          <p className="dh-section-subtitle">
            Cross-functional operations, agency growth, and campaign analytics.
          </p>

          <div className="dh-cv-list">
            {/* Labour Law Advisor */}
            <Link href="/work/lla/" className="dh-cv-card">
              <div className="dh-cv-logo-box">
                <img
                  src="/assets/logos/lla-logo.png"
                  alt="Labour Law Advisor logo"
                  width={56}
                  height={50}
                  className="dh-cv-logo-img"
                />
              </div>
              <div className="dh-cv-info">
                <h3 className="dh-cv-role">Labour Law Advisor</h3>
                <div className="dh-cv-meta">
                  <span>Social Media Manager / Growth Operations</span>
                  <span>/</span>
                  <span>08/2024 &mdash; 07/2025</span>
                  <span>/</span>
                  <span>Jaipur, IN</span>
                </div>
                <p className="dh-cv-dek">
                  Mapped operations for Jagruk.Shop, scaling social community followers 10x (400 to 4,000+) and boosting video search CTR by 15%.
                </p>
              </div>
            </Link>

            {/* Mad Influence */}
            <Link href="/work/mad-influence/" className="dh-cv-card">
              <div className="dh-cv-logo-box">
                <img
                  src="/assets/logos/mad-influence-logo.png"
                  alt="Mad Influence logo"
                  width={56}
                  height={56}
                  className="dh-cv-logo-img"
                />
              </div>
              <div className="dh-cv-info">
                <h3 className="dh-cv-role">Mad Influence</h3>
                <div className="dh-cv-meta">
                  <span>Data Research Intern</span>
                  <span>/</span>
                  <span>03/2024 &mdash; 07/2024</span>
                  <span>/</span>
                  <span>Noida, IN</span>
                </div>
                <p className="dh-cv-dek">
                  Aggregated multi-creator cross-platform telemetry into automated Excel reporting templates, reducing client report delivery turnaround by 40%.
                </p>
              </div>
            </Link>

            {/* MRM McCann */}
            <Link href="/work/mrm-mccann/" className="dh-cv-card">
              <div className="dh-cv-logo-box">
                <img
                  src="/assets/logos/mrm-logo.svg"
                  alt="MRM McCann logo"
                  width={64}
                  height={24}
                  className="dh-cv-logo-img"
                />
              </div>
              <div className="dh-cv-info">
                <h3 className="dh-cv-role">MRM / McCann</h3>
                <div className="dh-cv-meta">
                  <span>Account Management Intern</span>
                  <span>/</span>
                  <span>09/2023 &mdash; 12/2023</span>
                  <span>/</span>
                  <span>Gurgaon, IN</span>
                </div>
                <p className="dh-cv-dek">
                  Tracked ad spend pacing and managed deliverable milestones across creative and media pods, maintaining a 100% on-time asset delivery rate with zero budget overruns.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. CERTIFICATIONS & CREDENTIALS */}
      <section className="dh-work-certs-section" id="work-certs">
        <div className="dh-work-content-wrap">
          <h2 className="dh-section-title-serif">Certifications.</h2>
          <p className="dh-section-subtitle">
            Verified credentials and professional certifications.
          </p>

          <div className="dh-cv-list">
            <div className="dh-cv-card" style={{ cursor: 'default' }}>
              <div
                className="dh-cv-logo-box"
                style={{
                  background: '#FFFDF5',
                  color: '#2E7D32',
                  fontWeight: 900,
                  fontSize: '26px',
                  fontFamily: 'var(--font-mono, monospace)',
                }}
              >
                MS
              </div>
              <div className="dh-cv-info">
                <h3 className="dh-cv-role">Microsoft Certified: Business Analyst</h3>
                <div className="dh-cv-meta">
                  <span>Professional Certificate</span>
                  <span>/</span>
                  <span>Microsoft &middot; Coursera</span>
                  <span>/</span>
                  <span>Credential ID: N1UGS1TCSPFD</span>
                </div>
                <p className="dh-cv-dek" style={{ marginBottom: '1.25rem' }}>
                  Covers end-to-end data modeling, Power BI dashboard architecture, DAX expressions, operational workflow mapping, and business insights delivery.
                </p>
                <a
                  href="https://www.coursera.org/account/accomplishments/professional-cert/N1UGS1TCSPFD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-credential-btn"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '13px',
                    fontWeight: 800,
                    color: '#16241E',
                    background: '#E2F4EC',
                    border: '1.5px solid #7BE0AD',
                    padding: '8px 16px',
                    borderRadius: '9999px',
                    textDecoration: 'none',
                    width: 'fit-content',
                  }}
                >
                  View Verified Certificate &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
