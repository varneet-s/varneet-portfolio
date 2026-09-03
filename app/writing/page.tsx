import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { articles } from '@/lib/data/writing';

export const metadata: Metadata = {
  title: 'Thoughts & Articles | Varneet Singh',
  description:
    'Reflections on business analysis, requirements gathering, operational frameworks, and career transitions by Varneet Singh.',
  openGraph: {
    title: 'Thoughts & Articles | Varneet Singh',
    description:
      'Writing about business operations, requirements engineering, and analytical frameworks.',
    images: ['/assets/index-preview.jpg'],
  },
};

export default function WritingPage() {
  return (
    <main className="dh-page-wrapper">
      {/* 1. MONUMENTAL HERO SECTION (David Hellmann Style) */}
      <section className="dh-hero-wrapper" id="blog-hero">
        <div
          className="dh-hero-bg"
          style={{ backgroundImage: `url('/assets/about/reading.jpg')` }}
          aria-hidden="true"
        ></div>

        <div className="dh-hero-headline-wrap">
          <div className="dh-hero-subtag">
            <span>Writing &middot; Reflections &middot; Analytical Frameworks</span>
          </div>
          <h1 className="dh-hero-giant-title dh-hero-giant-title--blog">
            Thoughts &amp;<br />Articles.
          </h1>
        </div>
      </section>

      {/* 2. OVERLAPPING SHEET WITH EDITORIAL INTRO & ARTICLE LIST */}
      <section className="dh-sheet-container" id="blog-listing">
        <div className="dh-sheet-inner">
          <h2 className="dh-editorial-heading">
            &hellip;things I think about &mdash;<br />
            stories from operational life, systems thinking, and business analysis.
          </h2>

          <div className="dh-blog-list">
            {articles.map((art) => (
              <Link
                key={art.slug}
                href={`/writing/${art.slug}/`}
                className="dh-blog-card"
                id={`article-${art.slug}`}
              >
                <div className="dh-blog-meta">
                  <span
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: '#E5FF00',
                      padding: '3px 10px',
                      borderRadius: '9999px',
                      fontWeight: 800,
                    }}
                  >
                    {art.type}
                  </span>
                  <span>{art.date}</span>
                  <span>&middot;</span>
                  <span>{art.source}</span>
                </div>
                <h3 className="dh-blog-title">{art.title}</h3>
                <p className="dh-blog-dek">{art.description}</p>
                <div
                  style={{
                    marginTop: '1.25rem',
                    fontFamily: 'var(--font-mono, monospace)',
                    fontSize: '13px',
                    fontWeight: 800,
                    color: '#A855F7',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <span>Read Full Essay &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
