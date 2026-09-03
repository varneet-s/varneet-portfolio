import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me & My Life | Varneet Singh — Business Analyst',
  description:
    'Business Operations Manager at I.P. Pharma targeting Business Analyst roles. Specialized in Excel inventory tracking systems, process optimization, and SQL.',
  openGraph: {
    title: 'About Me & My Life | Varneet Singh — Business Analyst',
    description:
      'Business Operations Manager at I.P. Pharma targeting Business Analyst roles. Specialized in Excel inventory tracking systems, process optimization, and SQL.',
    images: ['https://varneet.in/assets/og-preview.jpg'],
  },
  twitter: {
    title: 'About Me & My Life | Varneet Singh — Business Analyst',
    description:
      'Business Operations Manager at I.P. Pharma targeting Business Analyst roles. Specialized in Excel inventory tracking systems, process optimization, and SQL.',
    images: ['https://varneet.in/assets/og-preview.jpg'],
  },
};

export default function AboutPage() {
  return (
    <main className="dh-page-wrapper">
      {/* 1. MONUMENTAL HERO SECTION (David Hellmann Style) */}
      <section className="dh-hero-wrapper" id="about-hero">
        <div
          className="dh-hero-bg"
          style={{ backgroundImage: `url('/assets/about/travel.jpg')` }}
          aria-hidden="true"
        ></div>

        <div className="dh-hero-headline-wrap">
          <div className="dh-hero-subtag">
            <span>Identity &middot; Background &middot; Focus</span>
          </div>
          <h1 className="dh-hero-giant-title">
            About Me<br />&amp; My Life.
          </h1>
        </div>
      </section>

      {/* 2. OVERLAPPING EDITORIAL SHEET */}
      <section className="dh-sheet-container" id="about-intro">
        <div className="dh-sheet-inner">
          <h2 className="dh-editorial-heading">
            Hello, I&apos;m Varneet!<br />
            Business Operations Manager &mdash; targeting Business Analyst roles.
          </h2>

          <div className="dh-editorial-cols">
            <div>
              <p>
                I operate at the intersection of operational workflows, data architecture,
                and business strategy. By day, I manage inventory tracking systems and
                operational reporting at I.P. Pharma. By night, I design
                interactive spreadsheet models, write analytical frameworks, and build
                reproducible case studies.
              </p>
              <p>
                My focus is turning messy, unmeasured operational chaos into predictable
                clarity. Whether it&apos;s eliminating three-day reporting delays or
                diagnosing supply chain bottlenecks, I care about the underlying engine:
                accurate metrics, clean data pipelines, and dashboards that executives
                can actually trust.
              </p>
            </div>
            <div>
              <p>
                I took a deliberate, hands-on path to business analysis. Starting in
                journalism, I learned how to interrogate raw numbers, cut through noise,
                and communicate findings with total precision. Transitioning to growth
                operations, I built workflows that scaled digital community initiatives
                tenfold.
              </p>
              <p>
                Currently, I&apos;m focused on expanding my catalog of{' '}
                <Link href="/projects/">real-world business case studies</Link>,
                mastering complex SQL window joins, and building automated reporting
                architectures for expanding organizations.
              </p>
            </div>
          </div>

          {/* 3. SKILLS & TOOLS (Matching Reference Screenshot 2 — Clean on Page Background) */}
          <div className="watracz-skills-clean" id="about-skills">
            <div className="watracz-skills-col">
              <div className="watracz-skills-kicker">ANALYTICAL SKILLS</div>
              <div className="watracz-skills-list">
                <span>Requirements Engineering</span>
                <span className="watracz-skills-slash">/</span>
                <span>Process Mapping</span>
                <span className="watracz-skills-slash">/</span>
                <span>Inventory Controls</span>
                <span className="watracz-skills-slash">/</span>
                <span>DAX &amp; Data Modeling</span>
                <span className="watracz-skills-slash">/</span>
                <span>Workflow Automation</span>
                <span className="watracz-skills-slash">/</span>
                <span>Stakeholder Management</span>
                <span className="watracz-skills-slash">/</span>
                <span>GAP Analysis</span>
              </div>
            </div>

            <div className="watracz-skills-col">
              <div className="watracz-skills-kicker">TOOLS I USE</div>
              <div className="watracz-skills-list">
                <span>Advanced Excel</span>
                <span className="watracz-skills-slash">/</span>
                <span>SQL</span>
                <span className="watracz-skills-slash">/</span>
                <span>Tableau</span>
                <span className="watracz-skills-slash">/</span>
                <span>Power BI</span>
                <span className="watracz-skills-slash">/</span>
                <span>BPMN 2.0</span>
                <span className="watracz-skills-slash">/</span>
                <span>Google Analytics</span>
                <span className="watracz-skills-slash">/</span>
                <span>Jira</span>
                <span className="watracz-skills-slash">/</span>
                <span>Python</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FULL-BLEED DARK SECTION: ANGLED PHOTO STRIP (Hobby Section) */}
      <section className="dh-dark-section" id="about-interests">
        <div className="dh-dark-container">
          <h2 className="dh-section-title-serif">
            Books. Running. Travel. Pour Over Coffee. Data.
          </h2>
          <p className="dh-section-subtitle">
            Outside of work, I balance rigorous analytical discipline with classic
            literature, morning road mileage, manual coffee brewing, and exploring new terrain.
          </p>

          <div className="dh-photo-tilted-strip">
            {/* 1. Reading with Goodreads Link */}
            <a
              href="https://www.goodreads.com/book/show/230149114-1984"
              target="_blank"
              rel="noopener noreferrer"
              className="dh-tilted-card dh-tilted-card--1 dh-tilted-card--link"
              title="View 1984 on Goodreads"
            >
              <img
                src="/assets/about/reading.jpg"
                alt="Reading George Orwell's 1984"
                width={400}
                height={270}
                className="dh-tilted-img"
                loading="lazy"
              />
              <div className="dh-tilted-caption">
                <span>Reading</span>
                <span>George Orwell &middot; 1984 ↗</span>
              </div>
            </a>

            {/* 2. Running */}
            <div className="dh-tilted-card dh-tilted-card--2">
              <img
                src="/assets/about/running.jpg"
                alt="Morning road running routine"
                width={400}
                height={270}
                className="dh-tilted-img"
                loading="lazy"
              />
              <div className="dh-tilted-caption">
                <span>Running</span>
                <span>Unwind &middot; 5K</span>
              </div>
            </div>

            {/* 3. Travel */}
            <div className="dh-tilted-card dh-tilted-card--3">
              <img
                src="/assets/about/travel.jpg"
                alt="Travel resets and exploring scenic mountain destinations"
                width={400}
                height={270}
                className="dh-tilted-img"
                loading="lazy"
              />
              <div className="dh-tilted-caption">
                <span>Travel</span>
                <span>Perspective Reset</span>
              </div>
            </div>

            {/* 4. Pour Over Coffee */}
            <div className="dh-tilted-card dh-tilted-card--4">
              <img
                src="/assets/about/coffee.jpg"
                alt="Pour over coffee ritual with V60 dripper"
                width={400}
                height={270}
                className="dh-tilted-img"
                loading="lazy"
              />
              <div className="dh-tilted-caption">
                <span>Pour Over Coffee</span>
                <span>V60 &middot; Single Origin Ritual</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

