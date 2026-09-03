import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mad Influence Case Study | Varneet Singh',
  description:
    'Influencer campaign operations, cross-platform telemetry aggregation, and automated Excel reporting for corporate brand partners at Mad Influence.',
};

export default function MadInfluenceCaseStudyPage() {
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
              Influencer Campaign Telemetry &amp; Reporting Pipelines
            </span>
          </h1>

          <p className="hero-subtitle cs-hero-subtitle">
            Engineered automated spreadsheet models to aggregate cross-platform campaign analytics
            across Instagram and YouTube — slashing client reporting delivery turnaround by 40%.
          </p>

          <div className="cs-meta-wrap">
            <div className="cs-meta-item">
              <span className="cs-meta-label">Company</span>
              <span className="cs-meta-val">Mad Influence</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Role</span>
              <span className="cs-meta-val">Data Research Intern</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Timeline &amp; Location</span>
              <span className="cs-meta-val">Mar 2024 – Jul 2024 &middot; Noida, IN</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Tools &amp; Methods</span>
              <div className="cs-meta-val cs-meta-tools-list">
                <span className="cs-meta-tool-tag">Advanced Excel</span>
                <span className="cs-meta-tool-tag">Lookup Modeling</span>
                <span className="cs-meta-tool-tag">Cross-Platform Telemetry</span>
                <span className="cs-meta-tool-tag">Client Dashboards</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TL;DR Summary */}
      <div className="cs-container cs-section-spacing-top">
        <div className="cs-tldr" id="mad-tldr">
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
              Managed end-to-end performance reporting pipelines across 5+ tier-1 corporate brand campaigns.
            </li>
            <li className="cs-tldr-item">
              Reduced client reporting turnaround time by 40% using automated formula-driven templates.
            </li>
            <li className="cs-tldr-item">
              Replaced disparate, manual creator logs with standardized multi-channel Excel dashboards.
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
              Mad Influence managed high-velocity influencer marketing campaigns spanning dozens of
              creators across Instagram and YouTube simultaneously. However, performance data arrived
              in disparate formats — manual screenshots, varying timestamp exports, and unverified engagement
              metrics. The lack of standardized reporting meant account teams spent excessive hours manually
              assembling decks, causing delays in executive client reporting.
            </p>
          </div>

          {/* 2. Approach */}
          <div className="cs-section">
            <h2 className="cs-section-title">2. The Approach</h2>
            <p>
              To eliminate recurring bottlenecks, I designed a repeatable analytics pipeline:
            </p>
            <ul className="cs-list">
              <li className="cs-list-item">
                <strong className="cs-text-bold">Telemetry Aggregation:</strong> Unified raw impressions, reach, views, and engagement metrics into a structured master database.
              </li>
              <li className="cs-list-item">
                <strong className="cs-text-bold">Automated Calculation Models:</strong> Leveraged nested lookup formulas and dynamic references to automate CPM, CPV, and engagement rate computations.
              </li>
            </ul>
          </div>

          {/* 3. Process */}
          <div className="cs-section">
            <h2 className="cs-section-title">3. The Process</h2>
            <div className="cs-callout-box">
              <div>
                <strong className="cs-eyebrow">Phase 1: Ingestion &amp; Sanitization</strong>
                <p className="cs-text-desc">
                  Structured an ingestion sheet with strict data validation to prevent formatting mismatches from multiple agency coordinators.
                </p>
              </div>
              <div className="cs-border-top">
                <strong className="cs-eyebrow">Phase 2: Template Standardization</strong>
                <p className="cs-text-desc">
                  Built executive summary views that auto-populated key charts, creator benchmarks, and deliverables status upon entering raw metrics.
                </p>
              </div>
            </div>
          </div>

          {/* 4. Analysis */}
          <div className="cs-section">
            <h2 className="cs-section-title">4. The Analysis</h2>
            <p>
              Audited campaign performance pacing to provide actionable insights to brand managers:
            </p>
            <div className="cs-analysis-grid">
              <div className="cs-analysis-card">
                <strong>Platform-Level Efficiency</strong>
                <p>
                  Benchmarked cost per engagement between YouTube Shorts and Instagram Reels to guide allocation of mid-campaign budget surpluses.
                </p>
              </div>
              <div className="cs-analysis-card">
                <strong>Creator Cohort Performance</strong>
                <p>
                  Segmented influencer tiers by historical conversion efficiency to optimize future brand partner casting decisions.
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
                  <strong>40% Reduction in Reporting Turnaround:</strong> Client reports that previously took 2 full working days were generated within hours of campaign close.
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
                  <strong>Zero Metric Discrepancies:</strong> Formula automation eliminated manual data calculation errors across 5+ high-visibility brand audits.
                </li>
              </ul>
            </div>

            <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/projects/" className="secondary-button">
                &larr; Back to All Projects
              </Link>
              <a
                href="https://madinfluence.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button"
              >
                Visit Mad Influence ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
