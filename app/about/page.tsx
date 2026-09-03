import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Varneet Singh — Business Operations Manager',
  description:
    'Learn about Varneet Singh — Business Operations Manager specializing in process optimization, data-driven decisions, Excel, SQL, and Tableau.',
  openGraph: {
    title: 'About | Varneet Singh — Business Operations Manager',
    description:
      'Business Operations Manager specializing in process optimization and data analysis.',
    images: ['/assets/index-preview.jpg'],
  },
};

export default function AboutPage() {
  return (
    <main className="about-page-container">
      {/* 1. ABOUT HERO SECTION */}
      <section className="sd-section">
        <div className="sd-grid-2col">
          <div>
            <div className="sd-section-header">
              <h1 className="sd-heading">About</h1>
              <div className="sd-underline"></div>
            </div>

            <div className="sd-text-body">
              <p>
                A business operations manager with a passion at the intersection of
                data, process efficiency, and business strategy. By day I oversee
                supply chain data and operational workflows at I.P. Pharma, and by
                night I build interactive data models, practice advanced SQL, and
                write about analytical frameworks.
              </p>
              <p>
                I&apos;m currently focused on expanding my portfolio of{' '}
                <Link href="/projects/">real-world case studies</Link>, mastering
                complex SQL join patterns, and exploring automated reporting
                architectures for growing businesses.
              </p>
            </div>
          </div>

          {/* Profile Card */}
          <div className="sd-profile-card">
            <img
              src="/assets/varneet-avatar.png"
              alt="Varneet Singh"
              className="sd-profile-img"
              width={130}
              height={130}
            />
            <div className="sd-profile-name">Varneet Singh</div>
            <div className="sd-profile-sub">Business Analyst</div>
            <span className="sd-badge-pill">Ludhiana, India</span>
          </div>
        </div>
      </section>

      {/* 2. BACKGROUND SECTION */}
      <section className="sd-section">
        <div className="sd-section-header">
          <h2 className="sd-heading">Background</h2>
          <div className="sd-underline"></div>
        </div>

        <div className="sd-text-body">
          <p>
            I&apos;ve taken a deliberate, hands-on path to my career in business
            operations. Starting in journalism, I learned how to ask sharp
            questions, extract core facts from noise, and communicate complex
            narratives simply. Moving into content operations and growth, I managed
            community channels and built systems that scaled engagement 10x.
          </p>
          <p>
            Through managing multi-channel operations, I realized that the part of
            every project I loved most was the underlying system: discovering data
            bottlenecks, auditing process flows, and turning guesswork into clean,
            actionable dashboards.
          </p>

          <blockquote className="sd-blockquote">
            <p>
              &ldquo;I decided to pursue a career helping businesses turn messy
              operational data into predictable clarity &mdash; and I haven&apos;t
              looked back since.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      {/* 3. INTERESTS SECTION */}
      <section className="sd-section">
        <div className="sd-section-header">
          <h2 className="sd-heading">Interests</h2>
          <div className="sd-underline"></div>
        </div>

        <div className="sd-text-body">
          <p>
            I thrive on solving unstructured problems and optimizing business
            workflows. Right now, I&apos;m actively refining skills across:
          </p>

          <div className="sd-pill-container">
            <span className="pill pill-blue">Business Analysis</span>
            <span className="pill pill-green">SQL &amp; Data Pipelines</span>
            <span className="pill pill-purple">Power BI &amp; Dashboards</span>
            <span className="pill pill-yellow">BPMN 2.0 Process Modeling</span>
            <span className="pill pill-pink">Behavioral Economics</span>
          </div>

          <p>
            Outside of work, I read a lot — mostly fiction and classics. Right now
            I&apos;m working through <em>1984</em> by George Orwell. I try to run
            regularly and use it as unwind time. I enjoy travelling when I get the
            chance — new places are a good way to reset. I also spend time on
            continuous self-learning, usually through books and long-form content
            rather than short videos.
          </p>
        </div>
      </section>

      {/* 4. CURRENT ROLE SECTION */}
      <section className="sd-section">
        <div className="sd-section-header">
          <h2 className="sd-heading">Current Role</h2>
          <div className="sd-underline"></div>
        </div>

        <div className="sd-text-body">
          <p>
            Currently, I work as a{' '}
            <strong>Business Operations Manager at I.P. Pharma</strong> (since
            January 2026). In this role, I manage inventory tracking models, analyze
            stock-level variations, and automate daily reporting routines for
            executive leadership.
          </p>
          <p>
            Previously, I spent a year at{' '}
            <a
              href="https://www.youtube.com/@LabourLawAdvisor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Labour Law Advisor
            </a>{' '}
            as a Growth &amp; Content Operations Specialist, scaling their
            e-commerce brand{' '}
            <a
              href="https://jagruk.shop/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jagruk.Shop
            </a>{' '}
            from 400 to 4,000+ followers while setting up standard operating
            procedures (SOPs).
          </p>
        </div>
      </section>

      {/* 5. TECHNICAL STACK SECTION */}
      <section className="sd-section">
        <div className="sd-section-header">
          <h2 className="sd-heading">Technical Stack &amp; Toolkit</h2>
          <div className="sd-underline"></div>
        </div>

        <div className="sd-skills-wrapper">
          <div className="sd-skill-bar-item">
            <div className="sd-skill-bar-header">
              <span className="sd-skill-bar-name">Microsoft Excel</span>
              <span className="sd-skill-bar-meta">Advanced &middot; 90%</span>
            </div>
            <div className="sd-skill-bar-track">
              <div className="sd-skill-bar-fill sd-skill-bar-fill--90"></div>
            </div>
            <div className="sd-skill-bar-desc">
              Pivot tables, XLOOKUP, nested logic, data modeling &amp; executive
              dashboard design.
            </div>
          </div>

          <div className="sd-skill-bar-item">
            <div className="sd-skill-bar-header">
              <span className="sd-skill-bar-name">SQL &amp; Databases</span>
              <span className="sd-skill-bar-meta">Intermediate &middot; 65%</span>
            </div>
            <div className="sd-skill-bar-track">
              <div className="sd-skill-bar-fill sd-skill-bar-fill--65"></div>
            </div>
            <div className="sd-skill-bar-desc">
              Window functions, CTEs, complex joins, data aggregation &amp; query
              optimization.
            </div>
          </div>

          <div className="sd-skill-bar-item">
            <div className="sd-skill-bar-header">
              <span className="sd-skill-bar-name">Tableau &amp; Power BI</span>
              <span className="sd-skill-bar-meta">Intermediate &middot; 60%</span>
            </div>
            <div className="sd-skill-bar-track">
              <div className="sd-skill-bar-fill sd-skill-bar-fill--60"></div>
            </div>
            <div className="sd-skill-bar-desc">
              Interactive dashboard creation, KPI tracking &amp; visual storytelling.
            </div>
          </div>

          <div className="sd-skill-bar-item">
            <div className="sd-skill-bar-header">
              <span className="sd-skill-bar-name">Process Modeling (BPMN)</span>
              <span className="sd-skill-bar-meta">Intermediate &middot; 55%</span>
            </div>
            <div className="sd-skill-bar-track">
              <div className="sd-skill-bar-fill sd-skill-bar-fill--55"></div>
            </div>
            <div className="sd-skill-bar-desc">
              MS Visio workflow mapping, bottleneck identification &amp; SOP
              creation.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
