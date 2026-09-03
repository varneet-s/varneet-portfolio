import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Labour Law Advisor Case Study | Varneet Singh — Business Analyst',
  description:
    'Growth operations, organic audience acquisition, and operational SOPs scaling Jagruk.Shop by 10x at Labour Law Advisor.',
  openGraph: {
    title: 'Labour Law Advisor Case Study | Varneet Singh — Business Analyst',
    description:
      'Growth operations, organic audience acquisition, and operational SOPs scaling Jagruk.Shop by 10x at Labour Law Advisor.',
    images: ['https://varneet.in/assets/og-preview.jpg'],
  },
  twitter: {
    title: 'Labour Law Advisor Case Study | Varneet Singh — Business Analyst',
    description:
      'Growth operations, organic audience acquisition, and operational SOPs scaling Jagruk.Shop by 10x at Labour Law Advisor.',
    images: ['https://varneet.in/assets/og-preview.jpg'],
  },
};

export default function LLACaseStudyPage() {
  return (
    <main>
      {/* Case Study Hero */}
      <section className="cs-hero" id="cs-hero-section">
        <div className="container">
          <Link href="/projects/" className="secondary-button cs-back-link" id="back-to-projects">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Projects
          </Link>
          <h1 className="hero-title cs-hero-title">
            <span className="highlight">
              Scaling E-Commerce Community &amp; Video SEO Workflows
            </span>
          </h1>

          <p className="hero-subtitle cs-hero-subtitle">
            Engineered end-to-end data pipelines and operational workflows for Labour Law Advisor&apos;s
            e-commerce brand Jagruk.Shop — driving 10x audience growth and standardizing content metadata.
          </p>

          <div className="cs-meta-wrap">
            <div className="cs-meta-item">
              <span className="cs-meta-label">Company</span>
              <span className="cs-meta-val">Labour Law Advisor</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Role</span>
              <span className="cs-meta-val">Social Media Manager / Growth Operations</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Timeline &amp; Location</span>
              <span className="cs-meta-val">Aug 2024 – Jul 2025 &middot; Jaipur, IN</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Tools &amp; Methods</span>
              <div className="cs-meta-val cs-meta-tools-list">
                <span className="cs-meta-tool-tag">Google Analytics</span>
                <span className="cs-meta-tool-tag">Excel Reporting</span>
                <span className="cs-meta-tool-tag">Video SEO</span>
                <span className="cs-meta-tool-tag">SOP Design</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TL;DR Summary */}
      <div className="cs-container cs-section-spacing-top">
        <div className="cs-tldr" id="lla-tldr">
          <div className="cs-tldr-label">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            </svg>
            TL;DR &mdash; Key Outcomes
          </div>
          <ul className="cs-tldr-list">
            <li className="cs-tldr-item">
              Scaled Jagruk.Shop from 400 to 4,000+ organic, highly targeted community followers (10x growth).
            </li>
            <li className="cs-tldr-item">
              Standardized search metadata across 50+ high-traffic business videos, boosting video CTR by 15%.
            </li>
            <li className="cs-tldr-item">
              Constructed weekly retention and click funnel sheets in Excel to optimize conversion paths.
            </li>
          </ul>
        </div>
      </div>

      {/* PAPAO Framework Body */}
      <section className="cs-body cs-section-padding">
        <div className="cs-container">
          {/* 1. Problem */}
          <div className="cs-section">
            <h2 className="cs-section-title">1. The Problem</h2>
            <p>
              Labour Law Advisor operates one of India&apos;s largest financial education channels.
              When launching and scaling their merchandise and community brand Jagruk.Shop,
              they faced unstructured organic conversion funnels for consulting packages and
              low brand community integration on new digital initiatives. Growth was erratic
              without documented operating procedures.
            </p>
          </div>

          {/* 2. Approach */}
          <div className="cs-section">
            <h2 className="cs-section-title">2. The Approach</h2>
            <p>
              Rather than relying on unmeasured posting, I designed a structured operations framework:
            </p>
            <ul className="cs-list">
              <li className="cs-list-item">
                <strong className="cs-text-bold">Demographic Mapping:</strong> Analyzed customer interaction patterns to isolate the highest converting content topics and purchase triggers.
              </li>
              <li className="cs-list-item">
                <strong className="cs-text-bold">Standardized SEO Pipeline:</strong> Built a repeatable metadata optimization protocol for YouTube video indexing and search discovery.
              </li>
            </ul>
          </div>

          {/* 3. Process */}
          <div className="cs-section">
            <h2 className="cs-section-title">3. The Process</h2>
            <div className="cs-callout-box">
              <div>
                <strong className="cs-eyebrow">Phase 1: Content Audit &amp; Metadata Restructuring</strong>
                <p className="cs-text-desc">
                  Standardized search metadata, title nomenclature, tags, and pinned link funnels across 50+ high-traffic business videos.
                </p>
              </div>
              <div className="cs-border-top">
                <strong className="cs-eyebrow">Phase 2: Community Channel Architecture</strong>
                <p className="cs-text-desc">
                  Established dedicated social touchpoints, automated brand alerts, and targeted newsletter broadcasts to re-engage past viewers.
                </p>
              </div>
            </div>
          </div>

          {/* 4. Analysis */}
          <div className="cs-section">
            <h2 className="cs-section-title">4. The Analysis</h2>
            <p>
              Monitored audience conversion velocity through weekly reporting cycles:
            </p>
            <div className="cs-analysis-grid">
              <div className="cs-analysis-card">
                <strong>CTR &amp; Search Impression Velocity</strong>
                <p>
                  Tracked impression click-through rates across video playlists, comparing legacy titles against optimized search-first schemas.
                </p>
              </div>
              <div className="cs-analysis-card">
                <strong>Conversion Drop-Off Tracking</strong>
                <p>
                  Mapped link clicks from video descriptions down to shop landing pages to identify drop-off friction points in the checkout journey.
                </p>
              </div>
            </div>
          </div>

          {/* 5. Outcome */}
          <div className="cs-section cs-border-none">
            <h2 className="cs-section-title">5. Business Outcome</h2>
            <div className="outcome-card">
              <h3 className="outcome-title">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                Delivered Results
              </h3>
              <ul className="outcome-list">
                <li className="outcome-item">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                  <strong>10x Community Follower Growth:</strong> Expanded Jagruk.Shop social following from 400 to 4,000+ organic, highly engaged followers.
                </li>
                <li className="outcome-item">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                  <strong>+15% Search CTR:</strong> Optimized video playlists demonstrated a consistent 15% uplift in click-through rate over unoptimized baselines.
                </li>
              </ul>
            </div>

            <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/projects/" className="secondary-button">
                &larr; Back to All Projects
              </Link>
              <a
                href="https://www.youtube.com/@LabourLawAdvisor"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button"
              >
                Visit LLA YouTube Channel ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
