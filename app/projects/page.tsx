import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { projects } from '@/lib/data/projects';

export const metadata: Metadata = {
  title: 'Projects & Case Studies | Varneet Singh',
  description:
    'Operational data case studies and business analysis projects by Varneet Singh — Olist E-Commerce, I.P. Pharma, and Vrinda Stores.',
};

export default function ProjectsPage() {
  return (
    <main>
      {/* Simple Headline Header */}
      <section className="simple-page-header">
        <div className="container">
          <h1 className="page-title">
            <span className="underline-green">Projects</span>
          </h1>
          <p className="hero-subtitle hero-subtitle--no-margin">
            Detailed structural breakdowns of real-world operational and sales datasets.
            I apply business frameworks to make sense of complex metrics and drive performance.
          </p>
        </div>
      </section>

      {/* Full Projects Grid */}
      <section className="projects-list-page">
        <div className="container">
          <div className="bento-grid">
            {projects.map((p) => {
              const colClass =
                p.colSpan === 7
                  ? 'bento-col-7 bento-card-featured'
                  : p.colSpan === 5
                  ? 'bento-col-5'
                  : 'bento-col-12 bento-card-featured bento-horizontal';

              return (
                <Link
                  key={p.id}
                  href={`/projects/${p.slug}/`}
                  className={`bento-card ${colClass} project-item`}
                  id={`project-item-${p.id}`}
                  data-category={p.category}
                  data-status={p.status}
                >
                  <div className="project-card-thumb-wrap">
                    <span className="project-number-tag">#{p.num}</span>
                    <img
                      src={p.image}
                      alt={p.title}
                      className="project-card-thumb"
                    />
                  </div>
                  <div className="project-card-body">
                    <div className="project-meta project-meta--card">
                      <span className={`label-role ${p.badgeClass}`}>
                        {p.categoryLabel}
                      </span>
                    </div>
                    <h3 className="project-card-title">{p.title}</h3>
                    <p className="project-card-desc">{p.description}</p>
                    <div className="project-card-tools">
                      {p.tools.map((tool, idx) => (
                        <span key={idx} className="tool-tag">
                          {tool}
                        </span>
                      ))}
                    </div>
                    <div className="project-card-cta">View Case Study &rarr;</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 2: WORK EXPERIENCE */}
      <section
        className="sd-section container"
        style={{ marginTop: '4rem', marginBottom: '4rem' }}
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
            Work Experience
          </h2>
          <div className="sd-underline"></div>
        </div>

        <div className="experience-timeline">
          {/* Card 1: I.P. Pharma */}
          <div className="exp-card-item exp-card-item--pharma" id="card-pharma">
            <div className="exp-teaser-row">
              <div className="exp-teaser-left">
                <div className="exp-logo-box exp-logo-box--pharma">
                  <img
                    src="/assets/logos/I_P_Pharma_Logo.jpg"
                    alt="I.P. Pharma logo"
                    width={44}
                    height={44}
                    className="exp-logo-img-cover"
                  />
                </div>
                <div className="exp-teaser-content">
                  <div className="exp-teaser-topline">
                    <span className="exp-teaser-tag exp-teaser-tag--pharma">Operations</span>
                    <span className="exp-teaser-name">I.P. Pharma</span>
                    <span className="exp-teaser-dot">&middot;</span>
                    <span className="exp-teaser-role">Business Operations Manager</span>
                    <span className="exp-teaser-dot">&middot;</span>
                    <span className="exp-teaser-year">2026&ndash;Present</span>
                  </div>
                  <p className="exp-teaser-dek">
                    Reduced reporting latency from 3 days to real-time and automated forecasting across 120+ retail accounts.
                  </p>
                </div>
              </div>
              <div className="exp-teaser-cta">
                <Link href="/projects/pharma/" className="exp-teaser-link">
                  View Case Study &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Labour Law Advisor */}
          <div className="exp-card-item exp-card-item--lla" id="card-lla">
            <div className="exp-teaser-row">
              <div className="exp-teaser-left">
                <div className="exp-logo-box exp-logo-box--lla">
                  <img
                    src="/assets/logos/lla-logo.png"
                    alt="Labour Law Advisor logo"
                    width={36}
                    height={32}
                    className="exp-logo-img-contain"
                  />
                </div>
                <div className="exp-teaser-content">
                  <div className="exp-teaser-topline">
                    <span className="exp-teaser-tag exp-teaser-tag--lla">Growth Ops</span>
                    <span className="exp-teaser-name">Labour Law Advisor</span>
                    <span className="exp-teaser-dot">&middot;</span>
                    <span className="exp-teaser-role">Social Media Manager / Growth Operations</span>
                    <span className="exp-teaser-dot">&middot;</span>
                    <span className="exp-teaser-year">2024&ndash;2025</span>
                  </div>
                  <p className="exp-teaser-dek">
                    Scaled Jagruk.Shop social following 10x (400 to 4,000+) and boosted video search CTR by 15%.
                  </p>
                </div>
              </div>
              <div className="exp-teaser-cta">
                <Link href="/work/lla/" className="exp-teaser-link">
                  View Case Study &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3: Mad Influence */}
          <div className="exp-card-item exp-card-item--mad" id="card-mad">
            <div className="exp-teaser-row">
              <div className="exp-teaser-left">
                <div className="exp-logo-box exp-logo-box--mad">
                  <img
                    src="/assets/logos/mad-influence-logo.png"
                    alt="Mad Influence logo"
                    width={38}
                    height={38}
                    className="exp-logo-img-contain"
                  />
                </div>
                <div className="exp-teaser-content">
                  <div className="exp-teaser-topline">
                    <span className="exp-teaser-tag exp-teaser-tag--mad">Data &amp; Analytics</span>
                    <span className="exp-teaser-name">Mad Influence</span>
                    <span className="exp-teaser-dot">&middot;</span>
                    <span className="exp-teaser-role">Data Research Intern</span>
                    <span className="exp-teaser-dot">&middot;</span>
                    <span className="exp-teaser-year">2024</span>
                  </div>
                  <p className="exp-teaser-dek">
                    Aggregated cross-platform campaign telemetry and reduced client reporting turnaround by 40%.
                  </p>
                </div>
              </div>
              <div className="exp-teaser-cta">
                <Link href="/work/mad-influence/" className="exp-teaser-link">
                  View Case Study &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* Card 4: MRM / McCann */}
          <div className="exp-card-item exp-card-item--mccann" id="card-mccann">
            <div className="exp-teaser-row">
              <div className="exp-teaser-left">
                <div className="exp-logo-box exp-logo-box--mccann">
                  <img
                    src="/assets/logos/mrm-logo.svg"
                    alt="MRM McCann logo"
                    width={38}
                    height={14}
                    className="exp-logo-img-contain"
                  />
                </div>
                <div className="exp-teaser-content">
                  <div className="exp-teaser-topline">
                    <span className="exp-teaser-tag exp-teaser-tag--mccann">Media Operations</span>
                    <span className="exp-teaser-name">MRM / McCann</span>
                    <span className="exp-teaser-dot">&middot;</span>
                    <span className="exp-teaser-role">Account Management Intern</span>
                    <span className="exp-teaser-dot">&middot;</span>
                    <span className="exp-teaser-year">2023</span>
                  </div>
                  <p className="exp-teaser-dek">
                    Maintained 100% on-time asset delivery rate across Q4 enterprise campaigns with zero budget overruns.
                  </p>
                </div>
              </div>
              <div className="exp-teaser-cta">
                <Link href="/work/mrm-mccann/" className="exp-teaser-link">
                  View Case Study &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
