'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

interface ProjectItem {
  id: string;
  index: string;
  dateBadge: string;
  dateRange: string;
  client: string;
  role: string;
  category: string;
  title: string;
  tools: string[];
  href: string;
  previewImg?: string;
  logoImg?: string;
  alignment: 'left' | 'right' | 'center';
}

const projects: ProjectItem[] = [
  {
    id: 'pharma',
    index: '01',
    dateBadge: 'JAN 2026',
    dateRange: '01/2026 — Present',
    client: 'I.P. PHARMA',
    role: 'Business Operations Manager',
    category: 'OPERATIONS MANAGEMENT',
    title: 'Real-Time Stock Reporting for 120+ Retail Accounts',
    tools: ['EXCEL AUTOMATION', 'DATA MODELING', 'INVENTORY CONTROLS'],
    href: '/projects/pharma/',
    previewImg: '/assets/pharma-preview.jpg',
    logoImg: '/assets/logos/I_P_Pharma_Logo.jpg',
    alignment: 'left',
  },
  {
    id: 'olist',
    index: '02',
    dateBadge: 'OCT 2024',
    dateRange: '2024',
    client: 'OLIST E-COMMERCE',
    role: 'Business Analyst',
    category: 'BUSINESS ANALYSIS',
    title: 'Cutting Delivery Delays Across 99K Orders',
    tools: ['SQL', 'EXCEL', 'TABLEAU', 'BPMN WORKFLOW'],
    href: '/projects/olist/',
    previewImg: '/assets/olist-preview.png',
    alignment: 'right',
  },
  {
    id: 'lla',
    index: '03',
    dateBadge: 'AUG 2024',
    dateRange: '08/2024 — 07/2025',
    client: 'LABOUR LAW ADVISOR',
    role: 'Social Media Manager / Growth Operations',
    category: 'GROWTH OPERATIONS',
    title: 'Operational Mapping & E-Commerce Scaling for Jagruk.Shop',
    tools: ['PROCESS MAPPING', 'COMMUNITY TELEMETRY', 'SEARCH CTR OPTIMIZATION'],
    href: '/work/lla/',
    logoImg: '/assets/logos/lla-logo.png',
    alignment: 'left',
  },
  {
    id: 'mad-influence',
    index: '04',
    dateBadge: 'MAR 2024',
    dateRange: '03/2024 — 07/2024',
    client: 'MAD INFLUENCE',
    role: 'Data Research Intern',
    category: 'DATA RESEARCH',
    title: 'Multi-Creator Campaign Telemetry Automation',
    tools: ['EXCEL AUTOMATION', 'CROSS-PLATFORM TELEMETRY', 'REPORTING TEMPLATES'],
    href: '/work/mad-influence/',
    logoImg: '/assets/logos/mad-influence-logo.png',
    alignment: 'right',
  },
  {
    id: 'mrm-mccann',
    index: '05',
    dateBadge: 'SEP 2023',
    dateRange: '09/2023 — 12/2023',
    client: 'MRM / MCCANN',
    role: 'Account Management Intern',
    category: 'ACCOUNT MANAGEMENT',
    title: 'Enterprise Ad Spend Pacing & Milestone Schedule Tracking',
    tools: ['BUDGET PACING', 'WORKFLOW COORDINATION', 'MILESTONE AUDITING'],
    href: '/work/mrm-mccann/',
    logoImg: '/assets/logos/mrm-logo.svg',
    alignment: 'left',
  },
  {
    id: 'vrinda',
    index: '06',
    dateBadge: 'MAY 2023',
    dateRange: '2023',
    client: 'VRINDA STORE',
    role: 'Data Analyst',
    category: 'DATA ANALYTICS',
    title: 'Multi-Channel Sales Performance & Customer Demographics',
    tools: ['ADVANCED EXCEL', 'PIVOT CHARTS', 'RFM SEGMENTATION'],
    href: '/projects/vrinda/',
    previewImg: '/assets/vrinda-preview.jpg',
    alignment: 'center',
  },
];

export default function WorkChronology() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const targetPoint = scrollY + windowHeight * 0.35;

      for (let i = cardRefs.current.length - 1; i >= 0; i--) {
        const el = cardRefs.current[i];
        if (el) {
          const rect = el.getBoundingClientRect();
          const top = rect.top + scrollY;
          if (targetPoint >= top - 100) {
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

  const active = projects[activeIndex] || projects[0];

  return (
    <div className="tim-work-layout">
      {/* ── STICKY CHRONOLOGY RAIL (Tim Roussilhe Style, customized with Month & Year) ── */}
      <aside className="tim-chronology-rail" aria-hidden="true">
        <div className="tim-chronology-widget">
          <div className="tim-chronology-counter">
            <span className="tim-counter-active">{active.index}</span>
            <span className="tim-counter-slash">/</span>
            <span className="tim-counter-total">06</span>
          </div>
          <div className="tim-chronology-date">{active.dateBadge}</div>
          <div className="tim-chronology-client">{active.client}</div>
        </div>
      </aside>

      {/* ── MOBILE STICKY CHIP ── */}
      <div className="tim-mobile-chronology-chip" aria-hidden="true">
        <span className="tim-chip-index">{active.index} / 06</span>
        <span className="tim-chip-bullet">&middot;</span>
        <span className="tim-chip-date">{active.dateBadge}</span>
        <span className="tim-chip-bullet">&middot;</span>
        <span className="tim-chip-client">{active.client}</span>
      </div>

      {/* ── ASYMMETRICAL CARD STREAM (Tim Roussilhe Placement Rhythm) ── */}
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
              {/* Top Meta Bar */}
              <div className="tim-card-topbar">
                <div className="tim-card-badge-wrap">
                  <span className="tim-card-index-tag">{proj.index}</span>
                  <span className="tim-card-date-badge">{proj.dateBadge}</span>
                </div>
                <span className="tim-card-category-tag">{proj.category}</span>
              </div>

              {/* Card Preview Visual */}
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
                    {proj.logoImg && (
                      <div className="tim-card-logo-box">
                        <img
                          src={proj.logoImg}
                          alt={`${proj.client} logo`}
                          width={72}
                          height={72}
                          className="tim-card-logo-img"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div className="tim-card-logo-meta">
                      <div className="tim-card-logo-client">{proj.client}</div>
                      <div className="tim-card-logo-role">{proj.role}</div>
                      <div className="tim-card-logo-range">{proj.dateRange}</div>
                    </div>
                  </div>
                )}
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
    </div>
  );
}
