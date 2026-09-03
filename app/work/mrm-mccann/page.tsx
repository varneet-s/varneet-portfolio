import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MRM / McCann Case Study | Varneet Singh — Business Analyst',
  description:
    'Ad spend auditing, cross-functional campaign coordination, and milestone delivery tracking at MRM / McCann.',
  openGraph: {
    title: 'MRM / McCann Case Study | Varneet Singh — Business Analyst',
    description:
      'Ad spend auditing, cross-functional campaign coordination, and milestone delivery tracking at MRM / McCann.',
    images: ['https://varneet.in/assets/og-preview.jpg'],
  },
  twitter: {
    title: 'MRM / McCann Case Study | Varneet Singh — Business Analyst',
    description:
      'Ad spend auditing, cross-functional campaign coordination, and milestone delivery tracking at MRM / McCann.',
    images: ['https://varneet.in/assets/og-preview.jpg'],
  },
};

export default function MRMMcCannCaseStudyPage() {
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
              Multi-Channel Media Spend &amp; Campaign Operations
            </span>
          </h1>

          <p className="hero-subtitle cs-hero-subtitle">
            Supported senior account planners in tracking media spend velocity, coordinating
            deliverable timelines between creative and media teams, and safeguarding campaign budgets.
          </p>

          <div className="cs-meta-wrap">
            <div className="cs-meta-item">
              <span className="cs-meta-label">Company</span>
              <span className="cs-meta-val">MRM / McCann</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Role</span>
              <span className="cs-meta-val">Account Management Intern</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Timeline &amp; Location</span>
              <span className="cs-meta-val">Sep 2023 – Dec 2023 &middot; Gurgaon, IN</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Tools &amp; Methods</span>
              <div className="cs-meta-val cs-meta-tools-list">
                <span className="cs-meta-tool-tag">Media Spend Auditing</span>
                <span className="cs-meta-tool-tag">Cross-Functional Coordination</span>
                <span className="cs-meta-tool-tag">Milestone Tracking</span>
                <span className="cs-meta-tool-tag">Budget Governance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TL;DR Summary */}
      <div className="cs-container cs-section-spacing-top">
        <div className="cs-tldr" id="mccann-tldr">
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
              Maintained a 100% on-time asset delivery record across active Q4 brand campaigns.
            </li>
            <li className="cs-tldr-item">
              Zero budget overruns across multi-channel client accounts through active spend tracking.
            </li>
            <li className="cs-tldr-item">
              Constructed centralized operational sheets connecting creative designers and media buyers.
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
              MRM / McCann managed high-volume, multi-channel enterprise advertising accounts with
              tight media flight dates. With cross-functional teams split across creative development,
              copywriting, media buying, and account supervision, real-time tracking of asset delivery
              milestones and media spend velocity lacked unified operational status sheets, risking
              costly delivery delays and inadvertent budget over-pacing.
            </p>
          </div>

          {/* 2. Approach */}
          <div className="cs-section">
            <h2 className="cs-section-title">2. The Approach</h2>
            <p>
              To establish operational predictability across fast-moving accounts:
            </p>
            <ul className="cs-list">
              <li className="cs-list-item">
                <strong className="cs-text-bold">Centralized Milestone Tracking:</strong> Built operational matrix sheets to monitor daily asset statuses from initial briefing to final media delivery.
              </li>
              <li className="cs-list-item">
                <strong className="cs-text-bold">Spend Pacing Audits:</strong> Established daily media spend monitoring protocols to verify budget allocations against channel performance.
              </li>
            </ul>
          </div>

          {/* 3. Process */}
          <div className="cs-section">
            <h2 className="cs-section-title">3. The Process</h2>
            <div className="cs-callout-box">
              <div>
                <strong className="cs-eyebrow">Phase 1: Cross-Functional Alignment</strong>
                <p className="cs-text-desc">
                  Facilitated daily standup workflows between internal creative pods, external media buyers, and senior planners to resolve delivery blockers early.
                </p>
              </div>
              <div className="cs-border-top">
                <strong className="cs-eyebrow">Phase 2: Status Sheet Governance</strong>
                <p className="cs-text-desc">
                  Maintained living documentation reflecting client feedback revisions, approval timestamps, and upcoming broadcast deadlines.
                </p>
              </div>
            </div>
          </div>

          {/* 4. Analysis */}
          <div className="cs-section">
            <h2 className="cs-section-title">4. The Analysis</h2>
            <p>
              Continuously audited campaign delivery rates and media burn:
            </p>
            <div className="cs-analysis-grid">
              <div className="cs-analysis-card">
                <strong>Burn Rate Variance Checks</strong>
                <p>
                  Calculated planned vs. actual media spend on weekly intervals to flag under-delivery or unexpected channel cost spikes.
                </p>
              </div>
              <div className="cs-analysis-card">
                <strong>Revision Cycle Bottleneck Audits</strong>
                <p>
                  Isolated stages in the approval workflow where asset revisions created latency, providing feedback to streamline account briefings.
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
                  <strong>100% On-Time Asset Delivery:</strong> Zero campaign launch delays across all Q4 deliverables under management.
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
                  <strong>Zero Budget Overruns:</strong> Strict pacing tracking prevented spend leakage and ensured exact alignment with client authorizations.
                </li>
              </ul>
            </div>

            <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/projects/" className="secondary-button">
                &larr; Back to All Projects
              </Link>
              <a
                href="https://www.mrm.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button"
              >
                Visit MRM / McCann ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
