'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

interface ProjectItem {
  id: string;
  index: string;
  fromMonthYear: string;
  toMonthYear: string;
  client: string;
  role: string;
  category: string;
  title: string;
  tools: string[];
  href: string;
  previewImg?: string;
  brandLogo: string;
  alignment: 'left' | 'right' | 'center';
}

const projects: ProjectItem[] = [
  {
    id: 'olist',
    index: '01',
    fromMonthYear: 'May 2026',
    toMonthYear: 'May 2026',
    client: 'OLIST E-COMMERCE',
    role: 'Business Analyst',
    category: 'BUSINESS ANALYSIS',
    title: 'Cutting Delivery Delays Across 99K Orders',
    tools: ['SQL', 'EXCEL', 'TABLEAU', 'BPMN WORKFLOW'],
    href: '/projects/olist/',
    previewImg: '/assets/olist-preview.png',
    brandLogo: '/assets/logos/olist-logo.svg',
    alignment: 'left',
  },
  {
    id: 'vrinda',
    index: '02',
    fromMonthYear: 'Apr 2026',
    toMonthYear: 'Apr 2026',
    client: 'VRINDA STORE',
    role: 'Data Analyst',
    category: 'DATA ANALYTICS',
    title: 'Multi-Channel Sales Performance & Customer Demographics',
    tools: ['ADVANCED EXCEL', 'PIVOT CHARTS', 'RFM SEGMENTATION'],
    href: '/projects/vrinda/',
    previewImg: '/assets/vrinda-preview.jpg',
    brandLogo: '/assets/logos/vrinda-logo.svg',
    alignment: 'right',
  },
  {
    id: 'pharma',
    index: '03',
    fromMonthYear: 'Jan 2026',
    toMonthYear: 'Present',
    client: 'I.P. PHARMA',
    role: 'Business Operations Manager',
    category: 'OPERATIONS MANAGEMENT',
    title: 'Real-Time Stock Reporting for 120+ Retail Accounts',
    tools: ['EXCEL AUTOMATION', 'DATA MODELING', 'INVENTORY CONTROLS'],
    href: '/projects/pharma/',
    previewImg: '/assets/pharma-preview.jpg',
    brandLogo: '/assets/logos/I_P_Pharma_Logo.jpg',
    alignment: 'left',
  },
  {
    id: 'lla',
    index: '04',
    fromMonthYear: 'Aug 2024',
    toMonthYear: 'Jul 2025',
    client: 'LABOUR LAW ADVISOR',
    role: 'Social Media Manager / Growth Operations',
    category: 'GROWTH OPERATIONS',
    title: 'Operational Mapping & E-Commerce Scaling for Jagruk.Shop',
    tools: ['PROCESS MAPPING', 'COMMUNITY TELEMETRY', 'SEARCH CTR OPTIMIZATION'],
    href: '/work/lla/',
    brandLogo: '/assets/logos/lla-logo.png',
    alignment: 'right',
  },
  {
    id: 'mad-influence',
    index: '05',
    fromMonthYear: 'Mar 2024',
    toMonthYear: 'Jul 2024',
    client: 'MAD INFLUENCE',
    role: 'Data Research Intern',
    category: 'DATA RESEARCH',
    title: 'Multi-Creator Campaign Telemetry Automation',
    tools: ['EXCEL AUTOMATION', 'CROSS-PLATFORM TELEMETRY', 'REPORTING TEMPLATES'],
    href: '/work/mad-influence/',
    brandLogo: '/assets/logos/mad-influence-logo.png',
    alignment: 'left',
  },
  {
    id: 'mrm-mccann',
    index: '06',
    fromMonthYear: 'Sep 2023',
    toMonthYear: 'Dec 2023',
    client: 'MRM / MCCANN',
    role: 'Account Management Intern',
    category: 'ACCOUNT MANAGEMENT',
    title: 'Enterprise Ad Spend Pacing & Milestone Schedule Tracking',
    tools: ['BUDGET PACING', 'WORKFLOW COORDINATION', 'MILESTONE AUDITING'],
    href: '/work/mrm-mccann/',
    brandLogo: '/assets/logos/mrm-logo.svg',
    alignment: 'center',
  },
];

export default function WorkChronology() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const targetPoint = scrollY + windowHeight * 0.38;

      setShowScrollTop(scrollY > 450);

      for (let i = cardRefs.current.length - 1; i >= 0; i--) {
        const el = cardRefs.current[i];
        if (el) {
          const rect = el.getBoundingClientRect();
          const top = rect.top + scrollY;
          if (targetPoint >= top - 80) {
            setActiveIndex(i);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const active = projects[activeIndex] || projects[0];

  return (
    <div className="tim-work-layout">
      {/* ── DESKTOP FIXED SIDE RAIL (Active Project Tracker) ── */}
      <aside className="tim-chronology-rail" aria-hidden="true">
        <div className="tim-chronology-widget">
          <div className="tim-chronology-counter">
            <span className="tim-counter-active">{active.index}</span>
            <span className="tim-counter-slash">/</span>
            <span className="tim-counter-total">06</span>
          </div>
          <div className="tim-chronology-date">
            {active.fromMonthYear === active.toMonthYear
              ? active.fromMonthYear
              : `${active.fromMonthYear} — ${active.toMonthYear}`}
          </div>
          <div className="tim-chronology-client">{active.client}</div>
        </div>
      </aside>

      {/* ── ASYMMETRICAL CARD STREAM ── */}
      <div className="tim-cards-stream">
        {projects.map((proj, idx) => (
          <article
            key={proj.id}
            ref={(el) => {
              cardRefs.current[idx] = el;
            }}
            className={`tim-project-card tim-card--${proj.alignment} ${
              activeIndex === idx ? 'is-active' : ''
            }`}
            id={`work-${proj.id}`}
          >
            <Link href={proj.href} className="tim-card-inner">
              {/* Top Meta Bar: Category Tag on left, Brand Logo on right (NO chronological number on right) */}
              <div className="tim-card-topbar">
                <span className="tim-card-category-tag">{proj.category}</span>
                <div className="tim-card-brand-wrap">
                  <img
                    src={proj.brandLogo}
                    alt={`${proj.client} logo`}
                    width={48}
                    height={28}
                    className="tim-card-brand-logo"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Card Preview Visual (Clean, no text/timeline inside thumbnail) */}
              <div className="tim-card-visual">
                {proj.previewImg ? (
                  <img
                    src={proj.previewImg}
                    alt={`${proj.title} preview`}
                    width={900}
                    height={380}
                    className="tim-card-img"
                    loading={idx <= 1 ? 'eager' : 'lazy'}
                  />
                ) : (
                  <div className="tim-card-logo-visual">
                    <div className="tim-card-logo-box">
                      <img
                        src={proj.brandLogo}
                        alt={`${proj.client} logo`}
                        width={64}
                        height={64}
                        className="tim-card-logo-img"
                        loading="lazy"
                      />
                    </div>
                    <div className="tim-card-logo-meta">
                      <div className="tim-card-logo-client">{proj.client}</div>
                      <div className="tim-card-logo-role">{proj.role}</div>
                    </div>
                  </div>
                )}
              </div>

              {/* ── TIMELINE BAR BELOW THE THUMBNAIL ── */}
              <div className="tim-card-timeline-bar">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="tim-timeline-svg"
                >
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                </svg>
                <span className="tim-timeline-text">
                  From {proj.fromMonthYear} to {proj.toMonthYear}
                </span>
              </div>

              {/* Card Info Details */}
              <div className="tim-card-info">
                <div className="tim-card-client-line">
                  <span className="tim-client-name">{proj.client}</span>
                  <span className="tim-client-role">&middot; {proj.role}</span>
                </div>

                <h2 className="tim-card-title">{proj.title}</h2>

                <div className="tim-card-tools-row">
                  {proj.tools.map((tool, tIdx) => (
                    <span key={tIdx} className="tim-tool-pill">
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="tim-card-cta">
                  <span>View Case Study &rarr;</span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

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
