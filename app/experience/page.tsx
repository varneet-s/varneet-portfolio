import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work Experience — Varneet Singh',
  description:
    'Career timeline, PAPAO frameworks, and business analyst work experience of Varneet Singh.',
};

export default function ExperiencePage() {
  return (
    <main>
      <div className="exp-main-container">
        {/* Page Headline Header */}
        <section className="simple-page-header simple-page-header--tight">
          <h1 className="page-title">
            <span className="underline-green">Work Experience</span>
          </h1>
          <p className="hero-subtitle hero-subtitle--no-margin">
            Applying business analyst methodologies to real-world corporate, digital,
            and operational challenges. Click any card below to view full details.
          </p>
        </section>

        {/* Experience Cards Section */}
        <section className="career-timeline-section">
          <div className="experience-timeline">
            {/* Card 1: I.P. Pharma */}
            <div className="exp-card-item" id="card-pharma">
              <div className="exp-summary-header">
                <div className="exp-summary-left">
                  <div className="exp-logo-box exp-logo-box--pharma">
                    <img
                      src="/assets/logos/I_P_Pharma_Logo.jpg"
                      alt="I.P. Pharma logo"
                      width={44}
                      height={44}
                      className="exp-logo-img-cover"
                    />
                  </div>
                  <div>
                    <h3 className="exp-summary-title">I.P. Pharma</h3>
                    <div className="exp-summary-role">Freelance Consultant</div>
                  </div>
                </div>
              </div>

              <div className="exp-summary-meta-badges">
                <span className="exp-badge exp-badge--date">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="19" y2="10"></line>
                  </svg>
                  Jan 2026 &ndash; Present
                </span>
                <span className="exp-badge exp-badge--location">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  Ludhiana, IN
                </span>
              </div>

              <p className="exp-summary-body" style={{ marginTop: '14px' }}>
                Optimizing stock management and representative sales tracking pipelines
                for a regional pharmaceutical distributor. Resolving field
                communication barriers and establishing automated spreadsheet workflows.
              </p>

              <details className="papao-dropdown" id="papao-pharma">
                <summary className="papao-summary-btn">
                  <span className="papao-summary-title">
                    <span className="papao-badge-label">PAPAO</span>
                    Analysis Breakdown &amp; Details
                  </span>
                  <span className="papao-toggle-indicator">
                    <span className="papao-toggle-text">View Details</span>
                    <svg
                      className="papao-arrow"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </summary>
                <div className="papao-expanded-content">
                  <div className="papao-row">
                    <div className="papao-tag papao-tag--problem">Problem</div>
                    <div className="papao-desc">
                      Sales representatives operating in highly rigid field
                      environments with manual stock tracking; Invoicing procedures
                      experiencing persistent lag times due to paper-based logs; Supply
                      chain buffers failing to capture seasonal variations, causing
                      frequent medicine stockouts.
                    </div>
                  </div>
                  <div className="papao-row">
                    <div className="papao-tag papao-tag--approach">Approach</div>
                    <div className="papao-desc">
                      Structuring inventory mapping in Excel to automate order sheets
                      and establish real-time reporting protocols.
                    </div>
                  </div>
                  <div className="papao-row">
                    <div className="papao-tag papao-tag--process">Process</div>
                    <div className="papao-desc">
                      Standardizing core stock buffers and dispatch workflows, ensuring
                      sales invoices are verified and orders dispatched within 24 hours.
                    </div>
                  </div>
                  <div className="papao-row">
                    <div className="papao-tag papao-tag--analysis">Analysis</div>
                    <div className="papao-desc">
                      Identifying inventory lag points, pinpointing specific
                      slow-moving medicine categories causing capital stagnation.
                    </div>
                  </div>
                  <div className="papao-row papao-row--outcome">
                    <div className="papao-tag papao-tag--outcome">Outcome</div>
                    <div className="papao-desc">
                      <strong>Reporting latency reduced from 3 days to real-time.</strong>{' '}
                      Automated forecasting prevents essential stockouts by 25% and
                      frees up tied-up capital.
                    </div>
                  </div>
                  <div className="papao-footer-action">
                    <Link href="/projects/pharma/" className="papao-action-link">
                      View Full I.P. Pharma Case Study &rarr;
                    </Link>
                  </div>
                </div>
              </details>
            </div>

            {/* Card 2: Labour Law Advisor */}
            <div className="exp-card-item" id="card-lla">
              <div className="exp-summary-header">
                <div className="exp-summary-left">
                  <div className="exp-logo-box exp-logo-box--lla">
                    <img
                      src="/assets/logos/lla-logo.png"
                      alt="Labour Law Advisor logo"
                      width={36}
                      height={32}
                      className="exp-logo-img-contain"
                    />
                  </div>
                  <div>
                    <h3 className="exp-summary-title">Labour Law Advisor</h3>
                    <div className="exp-summary-role">
                      Social Media Manager / Growth Operations
                    </div>
                  </div>
                </div>
              </div>

              <div className="exp-summary-meta-badges">
                <span className="exp-badge exp-badge--date">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="19" y2="10"></line>
                  </svg>
                  Aug 2024 &ndash; Jul 2025
                </span>
                <span className="exp-badge exp-badge--location">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  Jaipur, IN
                </span>
              </div>

              <p className="exp-summary-body" style={{ marginTop: '14px' }}>
                Led end-to-end data and operational mapping for community-led products
                and digital brands. Handled audience acquisition, standardized media
                processing, and grew Jagruk.Shop by 10x.
              </p>

              <details className="papao-dropdown" id="papao-lla">
                <summary className="papao-summary-btn">
                  <span className="papao-summary-title">
                    <span className="papao-badge-label">PAPAO</span>
                    Analysis Breakdown &amp; Details
                  </span>
                  <span className="papao-toggle-indicator">
                    <span className="papao-toggle-text">View Details</span>
                    <svg
                      className="papao-arrow"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </summary>
                <div className="papao-expanded-content">
                  <div className="papao-row">
                    <div className="papao-tag papao-tag--problem">Problem</div>
                    <div className="papao-desc">
                      Unstructured organic conversion funnels for consulting packages
                      and low brand community integration on new digital initiatives.
                    </div>
                  </div>
                  <div className="papao-row">
                    <div className="papao-tag papao-tag--approach">Approach</div>
                    <div className="papao-desc">
                      Mapped target customer demographic behavior and created
                      standardized SEO pipelines to maximize digital assets.
                    </div>
                  </div>
                  <div className="papao-row">
                    <div className="papao-tag papao-tag--process">Process</div>
                    <div className="papao-desc">
                      Standardized search metadata for 50+ high-traffic business
                      videos. Created operational brand pages and launched targeted
                      newsletters.
                    </div>
                  </div>
                  <div className="papao-row">
                    <div className="papao-tag papao-tag--analysis">Analysis</div>
                    <div className="papao-desc">
                      Maintained weekly and monthly analytics sheets, tracking
                      retention trends and click funnels using Google Analytics and
                      Excel.
                    </div>
                  </div>
                  <div className="papao-row papao-row--outcome">
                    <div className="papao-tag papao-tag--outcome">Outcome</div>
                    <div className="papao-desc">
                      <strong>
                        Grew Jagruk.Shop social following from 400 to 4,000+ organic,
                        highly targeted followers (10x growth).
                      </strong>{' '}
                      Video search click-through rate (CTR) increased by 15% across
                      optimized playlists.
                    </div>
                  </div>
                  <div className="papao-footer-action">
                    <a
                      href="https://www.youtube.com/@LabourLawAdvisor"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="papao-action-link"
                    >
                      Visit LLA YouTube Channel ↗
                    </a>
                  </div>
                </div>
              </details>
            </div>

            {/* Card 3: Mad Influence */}
            <div className="exp-card-item" id="card-mad">
              <div className="exp-summary-header">
                <div className="exp-summary-left">
                  <div className="exp-logo-box exp-logo-box--mad">
                    <img
                      src="/assets/logos/mad-influence-logo.png"
                      alt="Mad Influence logo"
                      width={38}
                      height={38}
                      className="exp-logo-img-contain"
                    />
                  </div>
                  <div>
                    <h3 className="exp-summary-title">Mad Influence</h3>
                    <div className="exp-summary-role">Data Research Intern</div>
                  </div>
                </div>
              </div>

              <div className="exp-summary-meta-badges">
                <span className="exp-badge exp-badge--date">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="19" y2="10"></line>
                  </svg>
                  Mar 2024 &ndash; Jul 2024
                </span>
                <span className="exp-badge exp-badge--location">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  Noida, IN
                </span>
              </div>

              <p className="exp-summary-body" style={{ marginTop: '14px' }}>
                Assisted in influencer campaign operations, tracking data, and
                building Excel-based client reporting templates for corporate brand
                partners.
              </p>

              <details className="papao-dropdown" id="papao-mad">
                <summary className="papao-summary-btn">
                  <span className="papao-summary-title">
                    <span className="papao-badge-label">PAPAO</span>
                    Analysis Breakdown &amp; Details
                  </span>
                  <span className="papao-toggle-indicator">
                    <span className="papao-toggle-text">View Details</span>
                    <svg
                      className="papao-arrow"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </summary>
                <div className="papao-expanded-content">
                  <div className="papao-row">
                    <div className="papao-tag papao-tag--problem">Problem</div>
                    <div className="papao-desc">
                      The marketing agency managed diverse, multi-creator brand
                      campaigns, but lacked standardized performance reports for
                      corporate clients.
                    </div>
                  </div>
                  <div className="papao-row">
                    <div className="papao-tag papao-tag--approach">Approach</div>
                    <div className="papao-desc">
                      Aggregated raw cross-platform telemetry (Instagram/YouTube) and
                      engineered structured Excel reporting templates.
                    </div>
                  </div>
                  <div className="papao-row">
                    <div className="papao-tag papao-tag--process">Process</div>
                    <div className="papao-desc">
                      Automated metric calculations using lookup formulas and
                      standardized weekly data pipelines for corporate brand partners.
                    </div>
                  </div>
                  <div className="papao-row">
                    <div className="papao-tag papao-tag--analysis">Analysis</div>
                    <div className="papao-desc">
                      Calculated key reach/engagement metrics and built professional
                      dashboard reports to present campaign ROI.
                    </div>
                  </div>
                  <div className="papao-row papao-row--outcome">
                    <div className="papao-tag papao-tag--outcome">Outcome</div>
                    <div className="papao-desc">
                      Successfully managed reporting structures for 5+ major corporate
                      campaigns,{' '}
                      <strong>reducing client reporting delivery time by 40%</strong>{' '}
                      and improving metric accuracy.
                    </div>
                  </div>
                  <div className="papao-footer-action">
                    <a
                      href="https://madinfluence.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="papao-action-link"
                    >
                      Visit Mad Influence ↗
                    </a>
                  </div>
                </div>
              </details>
            </div>

            {/* Card 4: MRM/McCann */}
            <div className="exp-card-item" id="card-mccann">
              <div className="exp-summary-header">
                <div className="exp-summary-left">
                  <div className="exp-logo-box exp-logo-box--mccann">
                    <img
                      src="/assets/logos/mrm-logo.svg"
                      alt="MRM McCann logo"
                      width={38}
                      height={14}
                      className="exp-logo-img-contain"
                    />
                  </div>
                  <div>
                    <h3 className="exp-summary-title">MRM / McCann</h3>
                    <div className="exp-summary-role">
                      Account Management Intern
                    </div>
                  </div>
                </div>
              </div>

              <div className="exp-summary-meta-badges">
                <span className="exp-badge exp-badge--date">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="19" y2="10"></line>
                  </svg>
                  Sep 2023 &ndash; Dec 2023
                </span>
                <span className="exp-badge exp-badge--location">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  Gurgaon, IN
                </span>
              </div>

              <p className="exp-summary-body" style={{ marginTop: '14px' }}>
                Supported senior planners in ad spend tracking and budget allocation
                checks across diverse multi-channel campaigns.
              </p>

              <details className="papao-dropdown" id="papao-mccann">
                <summary className="papao-summary-btn">
                  <span className="papao-summary-title">
                    <span className="papao-badge-label">PAPAO</span>
                    Analysis Breakdown &amp; Details
                  </span>
                  <span className="papao-toggle-indicator">
                    <span className="papao-toggle-text">View Details</span>
                    <svg
                      className="papao-arrow"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </summary>
                <div className="papao-expanded-content">
                  <div className="papao-row">
                    <div className="papao-tag papao-tag--problem">Problem</div>
                    <div className="papao-desc">
                      High-volume, fast-moving multi-channel client accounts required
                      real-time tracking of media spend and delivery milestones
                      without unified status sheets.
                    </div>
                  </div>
                  <div className="papao-row">
                    <div className="papao-tag papao-tag--approach">Approach</div>
                    <div className="papao-desc">
                      Built centralized operational tracking sheets to monitor client
                      deliverables and media spend velocity.
                    </div>
                  </div>
                  <div className="papao-row">
                    <div className="papao-tag papao-tag--process">Process</div>
                    <div className="papao-desc">
                      Coordinated cross-functional workflows between creative teams,
                      media buyers, and senior planners on daily deliverables.
                    </div>
                  </div>
                  <div className="papao-row">
                    <div className="papao-tag papao-tag--analysis">Analysis</div>
                    <div className="papao-desc">
                      Audited budget allocations against campaign pace to detect
                      over-spend or under-delivery early.
                    </div>
                  </div>
                  <div className="papao-row papao-row--outcome">
                    <div className="papao-tag papao-tag--outcome">Outcome</div>
                    <div className="papao-desc">
                      <strong>Maintained 100% on-time asset delivery rate</strong>{' '}
                      across Q4 client campaigns with zero budget overruns.
                    </div>
                  </div>
                  <div className="papao-footer-action">
                    <a
                      href="https://www.mrm.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="papao-action-link"
                    >
                      Visit MRM / McCann ↗
                    </a>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* SECTION 3: CERTIFICATIONS */}
        <section
          className="sd-section"
          style={{ marginTop: '4rem', marginBottom: '5rem' }}
        >
          <div className="sd-section-header">
            <h2
              className="sd-heading"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2rem',
                fontWeight: 900,
                textTransform: 'uppercase',
              }}
            >
              Certifications
            </h2>
            <div className="sd-underline"></div>
          </div>

          <div style={{ maxWidth: '600px' }}>
            <div
              style={{
                background: '#ffffff',
                border: '2.5px solid #0C0D0E',
                borderRadius: '8px',
                padding: '28px',
                boxShadow: '4px 4px 0px #0C0D0E',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  fontWeight: 800,
                  color: '#FF3B00',
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                }}
              >
                Microsoft &middot; Certified Professional
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.5rem',
                  fontWeight: 900,
                  color: '#0C0D0E',
                  margin: '0 0 10px 0',
                }}
              >
                Microsoft Business Analyst
              </h3>
              <p
                style={{
                  fontSize: '15px',
                  color: '#555562',
                  lineHeight: 1.6,
                  margin: '0 0 16px 0',
                }}
              >
                Data modeling, Power BI dashboard design, DAX expressions, operational
                workflow mapping, and business insights generation.
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
                  color: '#0C0D0E',
                  background: '#FFFDF5',
                  border: '2px solid #0C0D0E',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  boxShadow: '2px 2px 0px #0C0D0E',
                  textDecoration: 'none',
                }}
              >
                View Verified Certificate &rarr;
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
