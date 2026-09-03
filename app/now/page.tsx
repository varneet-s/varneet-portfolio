import React from 'react';
import Script from 'next/script';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Now | Varneet Singh — Business Analyst',
  description:
    'What Varneet Singh is working on right now — current focus, learning, and projects.',
  openGraph: {
    title: 'Now | Varneet Singh — Business Analyst',
    description:
      'What Varneet Singh is working on right now — current focus, learning, and projects.',
    images: ['https://varneet.in/assets/og-preview.jpg'],
  },
  twitter: {
    title: 'Now | Varneet Singh — Business Analyst',
    description:
      'What Varneet Singh is working on right now — current focus, learning, and projects.',
    images: ['https://varneet.in/assets/og-preview.jpg'],
  },
};

export default function NowPage() {
  return (
    <main>
      <Script src="https://tally.so/widgets/embed.js" strategy="lazyOnload" />

      <div className="now-section">
        {/* LEFT: Sticky heading */}
        <div className="now-left">
          <h1 className="now-heading">
            Now<span className="now-heading-dot"></span>
          </h1>
          <p>
            An up to date snapshot of what I&apos;m doing right now &mdash; kept short.
          </p>
          <p>
            I came across Sam Dickie&apos;s portfolio and liked how he designed his
            Now page &mdash; it felt honest and minimal, something worth trying for
            myself.
          </p>
          <p>So here we go &#9994;</p>
        </div>

        {/* RIGHT: direct sticky cards */}
        <div className="now-right" id="now-card-stack">
          <div className="now-card" id="card-aug">
            <div className="now-card-month">August 26</div>
            <div className="now-card-items">
              <p>
                Reading <em>1984</em> by George Orwell
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="now-cta-section" id="free-services-section">
        <div className="free-cta-card">
          <h2 className="cta-headline">
            Test My Data Skills{' '}
            <span className="underline-green">Free For 2 Weeks</span>&mdash;
            <br />
            No Risk, Real Results.
          </h2>
          <p className="cta-subtext">
            Send me a broken dashboard, a messy dataset, or a manual reporting
            bottleneck. I&apos;ll build a production-ready solution in{' '}
            <span className="inline-pill-badge">14 days</span> so you can evaluate my
            skills risk-free.
          </p>
          <div className="cta-tags-row">
            <span className="cta-tag">&#10003; Automated Dashboards &amp; Reporting</span>
            <span className="cta-tag">&#10003; Process Optimization &amp; SQL Queries</span>
            <span className="cta-tag">&#10003; Clear Business &amp; Data Insights</span>
          </div>
          <div>
            <iframe
              data-tally-src="https://tally.so/embed/javPW4?alignLeft=1&amp;hideTitle=1&amp;transparentBackground=1&amp;dynamicHeight=1&amp;formEventsForwarding=1"
              loading="lazy"
              width="100%"
              height="220"
              frameBorder="0"
              title="Portfolio Contact"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
