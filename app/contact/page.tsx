import React from 'react';
import Script from 'next/script';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Let's Talk | Varneet Singh — Business Analyst",
  description:
    'Get in touch with Varneet Singh — BA roles in e-commerce and consumer tech, freelance engagements, or just a conversation about data.',
  openGraph: {
    title: "Let's Talk | Varneet Singh — Business Analyst",
    description:
      'Get in touch with Varneet Singh — BA roles in e-commerce and consumer tech, freelance engagements, or just a conversation about data.',
    images: ['https://varneet.in/assets/og-preview.jpg'],
  },
  twitter: {
    title: "Let's Talk | Varneet Singh — Business Analyst",
    description:
      'Get in touch with Varneet Singh — BA roles in e-commerce and consumer tech, freelance engagements, or just a conversation about data.',
    images: ['https://varneet.in/assets/og-preview.jpg'],
  },
};

export default function ContactPage() {
  return (
    <main>
      <Script src="https://tally.so/widgets/embed.js" strategy="lazyOnload" />

      {/* Simple Headline Header */}
      <section className="simple-page-header">
        <div className="container">
          <h1 className="page-title">
            <span className="underline-green">Let&apos;s Talk</span>
          </h1>
          <p className="hero-subtitle">
            Open for full-time BA roles, freelance engagements, or a quick chat about
            your operational challenges.
          </p>
          <div className="contact-info-row">
            <a
              href="mailto:varneetsingh45@gmail.com"
              className="footer-social-link"
              id="footer-social-gmail"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              Gmail
            </a>
            <a
              href="https://linkedin.com/in/varneet-singh/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              id="footer-social-linkedin"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              LinkedIn
            </a>
            <a
              href="https://github.com/varneet-s/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              id="footer-social-github"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              GitHub
            </a>
            <span className="contact-info-item">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              Ludhiana, Punjab
            </span>
          </div>
        </div>
      </section>

      {/* Side-by-Side Layout: 2 Weeks Free Box + Tally Form */}
      <section className="contact-form-section">
        <div className="contact-grid-wrapper">
          {/* 2 Weeks Free Services Box */}
          <div className="contact-free-box-pop">
            <h2 className="contact-free-title">2 Weeks Free Services</h2>
            <p className="contact-free-desc">
              Not sure if I&apos;m the right fit? Test how I work for zero risk. Give
              me a real spreadsheet, data pipeline, or workflow issue — I&apos;ll
              deliver a working solution in 14 days.
            </p>

            <ul className="contact-services-pop-list">
              <li>
                <span className="arrow">&rarr;</span>
                <div>
                  <strong className="list-strong-white">
                    Dashboard &amp; Reporting Setup
                  </strong>{' '}
                  &mdash; Excel/Tableau dashboards that replace manual reporting
                </div>
              </li>
              <li>
                <span className="arrow">&rarr;</span>
                <div>
                  <strong className="list-strong-white">Process Audits</strong>{' '}
                  &mdash; Map your workflow, flag friction points &amp; recommend
                  fixes
                </div>
              </li>
              <li>
                <span className="arrow">&rarr;</span>
                <div>
                  <strong className="list-strong-white">
                    Data Cleaning &amp; Pipelines
                  </strong>{' '}
                  &mdash; Convert messy spreadsheets into structured SQL queries
                </div>
              </li>
              <li>
                <span className="arrow">&rarr;</span>
                <div>
                  <strong className="list-strong-white">Ad-hoc Analysis</strong>{' '}
                  &mdash; Answer high-stakes business questions with clear data
                  modeling
                </div>
              </li>
            </ul>

            <a
              href="mailto:varneetsingh45@gmail.com?subject=Let's%20Talk%20-%20[Role/Company]"
              className="cta-button cta-button--green"
            >
              Email Me Directly &rarr;
            </a>
          </div>

          {/* Tally Form Side-by-Side */}
          <div className="contact-form-box-side">
            <h2 className="contact-form-title">Send a Message</h2>
            <iframe
              data-tally-src="https://tally.so/embed/javPW4?alignLeft=1&amp;hideTitle=1&amp;transparentBackground=1&amp;dynamicHeight=1&amp;formEventsForwarding=1"
              loading="lazy"
              width="100%"
              height="280"
              frameBorder="0"
              title="Portfolio Contact"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
