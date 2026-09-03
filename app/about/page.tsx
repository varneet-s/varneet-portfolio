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

          {/* Photo Strip: Reading, Running, Travel */}
          {/* TODO: replace placeholder photos below with personal photos */}
          <div className="about-photo-strip">
            <div className="about-photo-card">
              {/* TODO: replace placeholder with real reading photo */}
              <img
                src="/assets/about/reading.jpg"
                alt="Reading classics and continuous self-learning"
                width={360}
                height={200}
                loading="lazy"
              />
              <div className="about-photo-caption">
                <span>Reading</span>
                <span>Classics &middot; Orwell</span>
              </div>
            </div>

            <div className="about-photo-card">
              {/* TODO: replace placeholder with real running photo */}
              <img
                src="/assets/about/running.jpg"
                alt="Morning outdoor running routine"
                width={360}
                height={200}
                loading="lazy"
              />
              <div className="about-photo-caption">
                <span>Running</span>
                <span>Unwind &middot; 5K</span>
              </div>
            </div>

            <div className="about-photo-card">
              {/* TODO: replace placeholder with real travel photo */}
              <img
                src="/assets/about/travel.jpg"
                alt="Travel resets and exploring scenic destinations"
                width={360}
                height={200}
                loading="lazy"
              />
              <div className="about-photo-caption">
                <span>Travel</span>
                <span>Perspective Reset</span>
              </div>
            </div>
          </div>
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

      {/* 5. CERTIFICATIONS & CONTINUOUS LEARNING */}
      <section className="sd-section">
        <div className="sd-section-header">
          <h2 className="sd-heading">Certifications</h2>
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
            >
              View Verified Certificate &rarr;
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
