import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import CalendlyButton from '@/components/CalendlyButton';

export const metadata: Metadata = {
  title: 'Varneet Singh — Business Analyst',
  description:
    'Varneet Singh turns messy operational data into clear business decisions. Specialized in SQL, Excel, Tableau, and BPMN process optimization.',
  openGraph: {
    title: 'Varneet Singh — Business Analyst',
    description:
      'Varneet Singh turns messy operational data into clear business decisions. Specialized in SQL, Excel, Tableau, and BPMN process optimization.',
  },
  twitter: {
    title: 'Varneet Singh — Business Analyst',
    description:
      'Varneet Singh turns messy operational data into clear business decisions. Specialized in SQL, Excel, Tableau, and BPMN process optimization.',
  },
};

export default function HomePage() {
  return (
    <main>
      {/* Eyebrow Tag Strip */}
      <div className="tag-strip">
        <span>Ludhiana, IN</span>
        <span>Business Operations Manager &middot; Targeting BA</span>
        <span>Open to Work</span>
      </div>

      {/* HERO SECTION */}
      <section className="hero" id="hero-section">
        <div className="hero-inner">
          <h1 className="hero-headline" id="hero-heading">
            <span className="line">DATA DOESN&apos;T</span>
            <span className="line">DECIDE.</span>
            <span className="line highlight">PEOPLE WHO READ IT DO.</span>
          </h1>

          <p className="sub">
            I turn messy spreadsheets, scattered orders, and broken workflows into
            decisions people can act on fast.
          </p>

          <div className="hero-cta">
            <Link className="btn btn-primary" href="/projects/">
              View Work
            </Link>
            <CalendlyButton className="btn btn-outline">
              Book a Call
            </CalendlyButton>
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="projects-section selected-work-section" id="projects-section">
        <div className="container">
          <div className="selected-work-header-row">
            <h2 className="selected-work-display-title">SELECTED WORK</h2>
            <span className="selected-work-badge">03 studies</span>
          </div>

          <div className="selected-work-list">
            {/* Project 01 */}
            <Link href="/projects/olist/" className="work-list-row">
              <div className="work-list-num">01</div>
              <div className="work-list-content">
                <h3 className="work-list-title">Olist E-Commerce Analytics</h3>
                <div className="work-list-tags">SQL &middot; EXCEL &middot; COHORT</div>
              </div>
            </Link>

            {/* Project 02 */}
            <Link href="/projects/pharma/" className="work-list-row">
              <div className="work-list-num">02</div>
              <div className="work-list-content">
                <h3 className="work-list-title">Pharma Sales Performance</h3>
                <div className="work-list-tags">EXCEL &middot; OPERATIONS</div>
              </div>
            </Link>

            {/* Project 03 */}
            <Link href="/projects/vrinda/" className="work-list-row">
              <div className="work-list-num">03</div>
              <div className="work-list-content">
                <h3 className="work-list-title">Vrinda Retail Channels</h3>
                <div className="work-list-tags">EXCEL &middot; SEGMENTATION</div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES I PROVIDE SECTION */}
      <section className="what-i-do what-i-do-section services-section" id="services-section">
        <div className="container">
          <div className="section-header-left">
            <h2 className="section-title section-title--large">Services I provide</h2>
            <p className="section-intro-bold">
              I help e-commerce &amp; consumer teams turn messy operational
              data into structured, repeatable business decisions.
            </p>
          </div>

          <div className="what-i-do-grid">
            {/* Service 1 */}
            <div className="feature-item">
              <div className="service-card-icon" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7" rx="1.5"></rect>
                  <rect x="14" y="3" width="7" height="7" rx="1.5"></rect>
                  <rect x="14" y="14" width="7" height="7" rx="1.5"></rect>
                  <rect x="3" y="14" width="7" height="7" rx="1.5"></rect>
                  <path d="M10 6.5h4M17.5 10v4M14 17.5H10M6.5 14v-4"></path>
                </svg>
              </div>
              <div className="feature-title">1. Process Mapping &amp; BPMN</div>
              <p className="feature-desc">
                Document end-to-end operational workflows, eliminate bottleneck drop-offs, and map optimized AS-IS vs TO-BE SOPs — delivering clear multi-channel visibility.
              </p>
              <Link href="/projects/vrinda/" className="service-case-link">
                View Vrinda Retail Case Study &rarr;
              </Link>
            </div>

            {/* Service 2 */}
            <div className="feature-item">
              <div className="service-card-icon" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3v18h18"></path>
                  <path d="M7 16l4-6 4 3 6-8"></path>
                  <circle cx="7" cy="16" r="1.5"></circle>
                  <circle cx="11" cy="10" r="1.5"></circle>
                  <circle cx="15" cy="13" r="1.5"></circle>
                  <circle cx="21" cy="5" r="1.5"></circle>
                </svg>
              </div>
              <div className="feature-title">2. Automated Dashboards</div>
              <p className="feature-desc">
                Build zero-upkeep Excel reporting models tracking SKU inventory health, order turnover, and sales velocity without manual errors.
              </p>
              <Link href="/projects/pharma/" className="service-case-link">
                View Pharma Sales Case Study &rarr;
              </Link>
            </div>

            {/* Service 3 */}
            <div className="feature-item">
              <div className="service-card-icon" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                </svg>
              </div>
              <div className="feature-title">3. E-Commerce Data Audits</div>
              <p className="feature-desc">
                Analyze 96,478 orders across 9 joined data files — isolating freight burdens, seller concentration risks, and customer cohorts.
              </p>
              <Link href="/projects/olist/" className="service-case-link">
                View Olist E-Commerce Case Study &rarr;
              </Link>
            </div>
          </div>

          <div className="services-cta-wrap">
            <CalendlyButton className="btn btn-primary services-hover-btn" id="services-cta-btn">
              <span className="btn-text-default">Let&apos;s talk about your data &rarr;</span>
              <span className="btn-text-hover">2 Weeks Free Services</span>
            </CalendlyButton>
          </div>
        </div>
      </section>

      {/* BLOG / LATEST ARTICLES SECTION */}
      <section className="writing-section" id="writing-preview-section">
        <div className="container">
          <div className="section-header-left">
            <h2 className="section-title section-title--large">Blog &amp; Articles</h2>
            <p className="section-intro-bold">
              Thoughts on business analysis, requirements gathering, and operational frameworks.
            </p>
          </div>

          <div className="pudding-grid">
            {/* Article Card 1 */}
            <Link
              href="/writing/requirements-gathering-in-ba/"
              className="pudding-card pudding-card-link"
            >
              <div className="pudding-meta">
                <span className="pudding-pill">#04</span>
                <span className="pudding-date">MAR 2026</span>
              </div>
              <div className="pudding-frame pudding-frame--cyan">
                <div className="pudding-inner-graphic">
                  <div className="pudding-card-type">ARTICLE</div>
                  <div className="pudding-card-source">Microsoft BA Cert</div>
                </div>
              </div>
              <h3 className="pudding-title">Requirements Gathering in BA</h3>
              <p className="pudding-desc">
                Writing down a requirement is only the starting point — the real work is managing, refining, and prioritizing as things change.
              </p>
              <span className="read-post-tag">Read Full Post &rarr;</span>
            </Link>

            {/* Article Card 2 */}
            <Link
              href="/writing/what-progress-actually-looks-like/"
              className="pudding-card pudding-card-link"
            >
              <div className="pudding-meta">
                <span className="pudding-pill">#03</span>
                <span className="pudding-date">MAR 2026</span>
              </div>
              <div className="pudding-frame pudding-frame--pink">
                <div className="pudding-inner-graphic">
                  <div className="pudding-card-type">ARTICLE</div>
                  <div className="pudding-card-source">Reflection</div>
                </div>
              </div>
              <h3 className="pudding-title">What Progress Actually Looks Like</h3>
              <p className="pudding-desc">
                How understanding business analysis shifted my daily thinking — from mapping coffee ideas to building consistent habits.
              </p>
              <span className="read-post-tag">Read Full Post &rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
