import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import CalendlyButton from '@/components/CalendlyButton';

export const metadata: Metadata = {
  title: 'Varneet Singh — E-Commerce Data Analyst & Operations Specialist',
  description:
    'Varneet Singh turns messy operational data into clear e-commerce decisions. Specialized in SQL, Excel, Tableau, and BPMN process optimization.',
};

export default function HomePage() {
  return (
    <main>
      {/* Eyebrow Tag Strip */}
      <div className="tag-strip">
        <span>Ludhiana, IN</span>
        <span>Business Analyst</span>
        <span>Open to Work</span>
      </div>

      {/* HERO SECTION */}
      <section className="hero" id="hero-section">
        <div className="hero-inner">
          <h1 className="hero-headline">
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
                <div className="work-list-tags">POWER BI &middot; SALES OPS</div>
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
              I help e-commerce &amp; consumer tech teams turn messy operational
              data into structured, repeatable business decisions.
            </p>
          </div>

          <div className="what-i-do-grid">
            <div className="feature-item">
              <div className="feature-title">1. Process Mapping &amp; BPMN</div>
              <p className="feature-desc">
                Document end-to-end operational workflows, identify bottleneck drop-offs, and map optimized AS-IS vs TO-BE SOPs.
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-title">2. Automated Dashboards</div>
              <p className="feature-desc">
                Build zero-upkeep Excel &amp; Tableau models tracking daily GMV, SKU inventory health, and rep fulfillment velocity.
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-title">3. E-Commerce Data Audits</div>
              <p className="feature-desc">
                Analyze 99,000+ transaction records — isolating freight burdens, seller concentration risks, and customer cohorts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WRITING / LATEST ARTICLES SECTION */}
      <section className="writing-section" id="writing-preview-section">
        <div className="container">
          <div className="section-header-left">
            <h2 className="section-title section-title--large">Writing &amp; Reflections</h2>
            <p className="section-intro-bold">
              Thoughts on business analysis, requirements gathering, and career pivots.
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
