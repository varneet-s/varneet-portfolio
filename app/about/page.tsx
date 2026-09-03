import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me & My Life | Varneet Singh',
  description:
    'About Varneet Singh — Business Operations Manager specializing in supply chain data, workflow optimization, and analytical systems.',
  openGraph: {
    title: 'About Me & My Life | Varneet Singh',
    description:
      'Business Operations Manager specializing in process optimization, SQL, Excel modeling, and operational clarity.',
    images: ['/assets/index-preview.jpg'],
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
            Business Operations Manager.
          </h2>

          <div className="dh-editorial-cols">
            <div>
              <p>
                I operate at the intersection of operational workflows, data architecture,
                and business strategy. By day, I manage inventory tracking systems and
                field representative pipelines at I.P. Pharma. By night, I design
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
        </div>
      </section>

      {/* 3. FULL-BLEED DARK SECTION: ANGLED PHOTO STRIP */}
      <section className="dh-dark-section" id="about-interests">
        <div className="dh-dark-container">
          <h2 className="dh-section-title-serif">
            Books. Running. Travel. Coffee. Data.
          </h2>
          <p className="dh-section-subtitle">
            Outside of work, I balance rigorous analytical discipline with classic
            literature, morning road mileage, and exploring new terrain to reset my perspective.
          </p>

          {/* TODO: replace placeholder photos below with personal photos */}
          <div className="dh-photo-tilted-strip">
            <div className="dh-tilted-card dh-tilted-card--1">
              <img
                src="/assets/about/reading.jpg"
                alt="Reading Orwell and classical literature"
                width={400}
                height={270}
                className="dh-tilted-img"
                loading="lazy"
              />
              <div className="dh-tilted-caption">
                <span>Reading</span>
                <span>Orwell &middot; 1984</span>
              </div>
            </div>

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
          </div>
        </div>
      </section>

      {/* 4. CURRICULUM VITAE / WORK EXPERIENCE (David Hellmann Style) */}
      <section className="dh-dark-section" style={{ paddingTop: '2rem' }} id="about-cv">
        <div className="dh-dark-container">
          <h2 className="dh-section-title-serif">Curriculum Vitae.</h2>
          <p className="dh-section-subtitle">
            Operational roles, enterprise agency experience, and hands-on business analysis.
          </p>

          <div className="dh-cv-list">
            {/* 1. I.P. Pharma */}
            <Link href="/projects/pharma/" className="dh-cv-card" id="cv-pharma">
              <div className="dh-cv-logo-box">
                <img
                  src="/assets/logos/I_P_Pharma_Logo.jpg"
                  alt="I.P. Pharma logo"
                  width={64}
                  height={64}
                  className="dh-cv-logo-img"
                />
              </div>
              <div className="dh-cv-info">
                <h3 className="dh-cv-role">Business Operations Manager</h3>
                <div className="dh-cv-meta">
                  <span>01/2026 &mdash; Present</span>
                  <span>/</span>
                  <span>Ludhiana, India</span>
                  <span>/</span>
                  <span>I.P. Pharma</span>
                </div>
                <p className="dh-cv-dek">
                  Engineered automated inventory forecasting models and field representative tracking for 120+ retail accounts. Reduced reporting latency from 3 days to real-time.
                </p>
              </div>
            </Link>

            {/* 2. Labour Law Advisor */}
            <Link href="/work/lla/" className="dh-cv-card" id="cv-lla">
              <div className="dh-cv-logo-box">
                <img
                  src="/assets/logos/lla-logo.png"
                  alt="Labour Law Advisor logo"
                  width={56}
                  height={50}
                  className="dh-cv-logo-img"
                />
              </div>
              <div className="dh-cv-info">
                <h3 className="dh-cv-role">Social Media Manager / Growth Operations</h3>
                <div className="dh-cv-meta">
                  <span>08/2024 &mdash; 07/2025</span>
                  <span>/</span>
                  <span>Jaipur, India</span>
                  <span>/</span>
                  <span>Labour Law Advisor</span>
                </div>
                <p className="dh-cv-dek">
                  Led end-to-end data and operational mapping for Jagruk.Shop, scaling social community followers 10x (400 to 4,000+) and boosting video search CTR by 15%.
                </p>
              </div>
            </Link>

            {/* 3. Mad Influence */}
            <Link href="/work/mad-influence/" className="dh-cv-card" id="cv-mad">
              <div className="dh-cv-logo-box">
                <img
                  src="/assets/logos/mad-influence-logo.png"
                  alt="Mad Influence logo"
                  width={56}
                  height={56}
                  className="dh-cv-logo-img"
                />
              </div>
              <div className="dh-cv-info">
                <h3 className="dh-cv-role">Data Research Intern</h3>
                <div className="dh-cv-meta">
                  <span>03/2024 &mdash; 07/2024</span>
                  <span>/</span>
                  <span>Noida, India</span>
                  <span>/</span>
                  <span>Mad Influence</span>
                </div>
                <p className="dh-cv-dek">
                  Aggregated multi-creator campaign telemetry across Instagram and YouTube into automated Excel client reporting templates, cutting turnaround time by 40%.
                </p>
              </div>
            </Link>

            {/* 4. MRM / McCann */}
            <Link href="/work/mrm-mccann/" className="dh-cv-card" id="cv-mccann">
              <div className="dh-cv-logo-box">
                <img
                  src="/assets/logos/mrm-logo.svg"
                  alt="MRM McCann logo"
                  width={64}
                  height={24}
                  className="dh-cv-logo-img"
                />
              </div>
              <div className="dh-cv-info">
                <h3 className="dh-cv-role">Account Management Intern</h3>
                <div className="dh-cv-meta">
                  <span>09/2023 &mdash; 12/2023</span>
                  <span>/</span>
                  <span>Gurgaon, India</span>
                  <span>/</span>
                  <span>MRM / McCann</span>
                </div>
                <p className="dh-cv-dek">
                  Audited media spend pacing and coordinated milestone delivery schedules across creative and media teams, achieving a 100% on-time asset delivery rate with zero budget overruns.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. AWARDS & CERTIFICATIONS (David Hellmann Style) */}
      <section className="dh-dark-section" style={{ paddingTop: '2rem', paddingBottom: '7rem' }} id="about-certs">
        <div className="dh-dark-container">
          <h2 className="dh-section-title-serif">Certifications.</h2>
          <p className="dh-section-subtitle">
            Verified credentials and professional certifications.
          </p>

          <div className="dh-cv-list">
            <div className="dh-cv-card" style={{ cursor: 'default' }}>
              <div
                className="dh-cv-logo-box"
                style={{
                  background: '#FFFDF5',
                  color: '#FF3B00',
                  fontWeight: 900,
                  fontSize: '28px',
                  fontFamily: 'var(--font-mono, monospace)',
                }}
              >
                MS
              </div>
              <div className="dh-cv-info">
                <h3 className="dh-cv-role">Microsoft Certified: Business Analyst</h3>
                <div className="dh-cv-meta">
                  <span>Professional Certificate</span>
                  <span>/</span>
                  <span>Microsoft &middot; Coursera</span>
                  <span>/</span>
                  <span>Credential ID: N1UGS1TCSPFD</span>
                </div>
                <p className="dh-cv-dek" style={{ marginBottom: '1rem' }}>
                  Covers end-to-end data modeling, Power BI dashboard architecture, DAX expressions, operational workflow mapping, and stakeholder insights delivery.
                </p>
                <a
                  href="https://www.coursera.org/account/accomplishments/professional-cert/N1UGS1TCSPFD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dh-nav-link"
                  style={{
                    display: 'inline-flex',
                    background: 'rgba(255,255,255,0.1)',
                    color: '#FFFFFF',
                    width: 'fit-content',
                    border: '1px solid rgba(255,255,255,0.2)',
                  }}
                >
                  View Verified Certificate &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
