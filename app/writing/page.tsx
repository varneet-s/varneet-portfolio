import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { articles } from '@/lib/data/writing';

export const metadata: Metadata = {
  title: 'Writing & Articles | Varneet Singh — Business Analysis & Operations',
  description:
    'Reflections on business analysis, requirements gathering, operational frameworks, and career pivots by Varneet Singh.',
};

export default function WritingPage() {
  return (
    <main>
      {/* Simple Headline Header */}
      <section className="simple-page-header">
        <div className="container">
          <h1 className="page-title">
            <span className="underline-green">Writing</span>
          </h1>
          <p className="hero-subtitle hero-subtitle--no-margin">
            Thoughts on business analysis, requirements engineering, and career pivots.
          </p>
        </div>
      </section>

      {/* Writing Grid */}
      <section className="writing-section" id="writing-listing">
        <div className="container">
          <div className="pudding-grid">
            {articles.map((art) => (
              <Link
                key={art.slug}
                href={`/writing/${art.slug}/`}
                className="pudding-card pudding-card-link"
              >
                <div className="pudding-meta">
                  <span className="pudding-pill">{art.num}</span>
                  <span className="pudding-date">{art.date}</span>
                </div>
                <div className={`pudding-frame pudding-frame--${art.frameColor}`}>
                  <div className="pudding-inner-graphic">
                    <div className="pudding-card-type">{art.type}</div>
                    <div className="pudding-card-source">{art.source}</div>
                  </div>
                </div>
                <h2 className="pudding-title">{art.title}</h2>
                <p className="pudding-desc">{art.description}</p>
                <span className="read-post-tag">Read Full Post &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
