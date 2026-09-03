'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ProjectBlogItem {
  id: string;
  fromMonthYear: string;
  toMonthYear: string;
  client: string;
  role: string;
  category: string;
  title: string;
  dek: string;
  tools: string[];
  href: string;
  previewImg: string;
  brandLogo: string;
}

const projects: ProjectBlogItem[] = [
  {
    id: 'olist',
    fromMonthYear: 'May 2026',
    toMonthYear: 'May 2026',
    client: 'OLIST E-COMMERCE',
    role: 'Business Analyst',
    category: 'BUSINESS ANALYSIS',
    title: 'Cutting Delivery Delays Across 99K Orders',
    dek: 'Engineered SQL data pipelines and interactive Tableau dashboards to diagnose delivery bottlenecks across 99,000+ Brazilian customer orders, uncovering logistics root causes and formalizing BPMN fulfillment workflows.',
    tools: ['SQL', 'EXCEL', 'TABLEAU', 'BPMN WORKFLOW'],
    href: '/projects/olist/',
    previewImg: '/assets/olist-preview.png',
    brandLogo: '/assets/logos/olist-logo.svg',
  },
  {
    id: 'vrinda',
    fromMonthYear: 'Apr 2026',
    toMonthYear: 'Apr 2026',
    client: 'VRINDA STORE',
    role: 'Data Analyst',
    category: 'DATA ANALYTICS',
    title: 'Multi-Channel Sales Performance & Customer Demographics',
    dek: 'Architected comprehensive Excel pivot frameworks, RFM customer segmentation models, and multi-channel annual sales telemetry across Amazon, Flipkart, and direct retail channels to drive measurable inventory replenishment clarity.',
    tools: ['ADVANCED EXCEL', 'PIVOT CHARTS', 'RFM SEGMENTATION'],
    href: '/projects/vrinda/',
    previewImg: '/assets/vrinda-preview.jpg',
    brandLogo: '/assets/logos/vrinda-logo.svg',
  },
];

interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  dates: string;
  href: string;
}

const experiences: ExperienceItem[] = [
  {
    id: 'pharma',
    company: 'I.P. Pharma',
    role: 'Business Operations Manager',
    dates: 'January 2026 — Present',
    href: '/projects/pharma/',
  },
  {
    id: 'lla',
    company: 'Labour Law Advisor',
    role: 'Social Media Manager / Growth Operations',
    dates: 'August 2024 — July 2025',
    href: '/work/lla/',
  },
  {
    id: 'mad-influence',
    company: 'Mad Influence',
    role: 'Data Research Intern',
    dates: 'March 2024 — July 2024',
    href: '/work/mad-influence/',
  },
  {
    id: 'mrm-mccann',
    company: 'MRM / McCann',
    role: 'Account Management Intern',
    dates: 'September 2023 — December 2023',
    href: '/work/mrm-mccann/',
  },
];

interface MetricStat {
  value: string;
  label: string;
}

const metrics: MetricStat[] = [
  {
    value: '120+',
    label: 'Retail accounts tracked with real-time stock models',
  },
  {
    value: '99K+',
    label: 'E-commerce order records analyzed end-to-end',
  },
  {
    value: '10x',
    label: 'Audience and community growth scaled in operations',
  },
  {
    value: '40%',
    label: 'Reporting turnaround latency slashed via automation',
  },
];

export default function WorkChronology() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 450);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="tim-work-layout">
      {/* ── 1. PROJECTS STREAM (Using Blog Card Style Architecture) ── */}
      <section className="project-blog-stream" aria-label="Featured Projects">
        {projects.map((proj) => (
          <Link
            key={proj.id}
            href={proj.href}
            className="project-blog-card"
            id={`project-${proj.id}`}
          >
            {/* Topbar: Category Pill on left, Brand Logo on right */}
            <div className="project-blog-topbar">
              <span className="project-blog-pill">{proj.category}</span>
              <div className="project-blog-brand-wrap">
                <img
                  src={proj.brandLogo}
                  alt={`${proj.client} logo`}
                  width={60}
                  height={20}
                  className="project-blog-brand-logo"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Thumbnail Preview Visual (Clean, no text inside image) */}
            <div className="project-blog-visual">
              <img
                src={proj.previewImg}
                alt={`${proj.title} preview`}
                width={1100}
                height={400}
                className="project-blog-img"
                loading="eager"
              />
            </div>

            {/* Dedicated Timeline Bar directly below thumbnail */}
            <div className="project-blog-timeline-bar">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="project-blog-timeline-svg"
              >
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                <line x1="16" x2="16" y1="2" y2="6" />
                <line x1="8" x2="8" y1="2" y2="6" />
                <line x1="3" x2="21" y1="10" y2="10" />
              </svg>
              <span>From {proj.fromMonthYear} to {proj.toMonthYear}</span>
            </div>

            {/* Content Dek & Metadata */}
            <div className="project-blog-content">
              <div className="project-blog-client-line">
                {proj.client} &middot; {proj.role}
              </div>
              <h2 className="project-blog-title">{proj.title}</h2>
              <p className="project-blog-dek">{proj.dek}</p>
              <div className="project-blog-tools-row">
                {proj.tools.map((tool, tIdx) => (
                  <span key={tIdx} className="project-blog-tool-pill">
                    {tool}
                  </span>
                ))}
              </div>
              <div className="project-blog-cta">
                <span>View Case Study &rarr;</span>
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* ── 2. EXPERIENCE SECTION (Damian Watracz Style, matching Screenshot 1) ── */}
      <section className="watracz-exp-section" id="experience" aria-label="Work Experience">
        <div className="watracz-kicker">EXPERIENCE</div>
        <h2 className="watracz-heading">Over 2+ years of experience</h2>
        <p className="watracz-intro">
          I’ve driven operations, data pipelines, and business analysis across high-growth startups, enterprise agencies, and retail supply chains. For full career history, visit my{' '}
          <a
            href="https://www.linkedin.com/in/varneet-singh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn profile
          </a>
          .
        </p>

        {/* Clickable Experience List Rows */}
        <div className="watracz-exp-list">
          {experiences.map((exp) => (
            <Link
              key={exp.id}
              href={exp.href}
              className="watracz-exp-row"
              id={`exp-${exp.id}`}
            >
              <div className="watracz-company">{exp.company}</div>
              <div className="watracz-role">{exp.role}</div>
              <div className="watracz-dates">{exp.dates}</div>
              <div className="watracz-arrow">&rarr;</div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── 3. IMPACT METRICS (Matching Reference Screenshot 3) ── */}
      <section className="watracz-metrics-section" aria-label="Impact Metrics">
        <div className="watracz-kicker">OPERATIONAL METRICS</div>
        <div className="watracz-metrics-grid">
          {metrics.map((m, idx) => (
            <div key={idx} className="watracz-metric-card">
              <div className="watracz-metric-badge" aria-hidden="true" />
              <div className="watracz-metric-value">{m.value}</div>
              <div className="watracz-metric-label">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. CERTIFICATIONS SECTION ── */}
      <section className="tim-certs-section" id="work-certs">
        <div className="tim-certs-card">
          <div className="tim-cert-logo-box">
            <img
              src="/assets/logos/microsoft-logo.png"
              alt="Microsoft Logo"
              width={56}
              height={56}
              className="tim-cert-logo-img"
            />
          </div>
          <div className="tim-cert-details">
            <span className="tim-cert-badge">VERIFIED CREDENTIAL &middot; MARCH 2026</span>
            <h2 className="tim-cert-title">Microsoft Certified: Business Analyst</h2>
            <div className="tim-cert-meta">
              <span>Microsoft &middot; Coursera</span>
              <span>/</span>
              <span>Issued: March 2026</span>
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
      </section>

      {/* ── FLOATING SCROLL-TO-TOP BUTTON ── */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="tim-floating-top-btn"
          aria-label="Scroll to top of work page"
        >
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
            <path d="m18 15-6-6-6 6" />
          </svg>
        </button>
      )}
    </div>
  );
}
