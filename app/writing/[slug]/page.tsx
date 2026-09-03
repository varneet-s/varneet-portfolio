import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { articles } from '@/lib/data/writing';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return { title: 'Article Not Found' };

  return {
    title: `${article.title} — Varneet Singh — Business Analyst`,
    description: article.description,
    openGraph: {
      title: `${article.title} — Varneet Singh — Business Analyst`,
      description: article.description,
      images: ['https://varneet.in/assets/og-preview.jpg'],
    },
    twitter: {
      title: `${article.title} — Varneet Singh — Business Analyst`,
      description: article.description,
      images: ['https://varneet.in/assets/og-preview.jpg'],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="container" style={{ paddingTop: '3rem', paddingBottom: '5rem' }}>
      <article
        className="post-single-card"
        style={{
          background: '#FFFFFF',
          border: '2px solid #0C0D0E',
          borderRadius: '20px',
          padding: '2.5rem',
          maxWidth: '800px',
          margin: '0 auto',
          boxShadow: '4px 4px 0px #0C0D0E',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '0.75rem',
            alignItems: 'center',
            marginBottom: '1.5rem',
          }}
        >
          <span className="pudding-pill">{article.num}</span>
          <span className="pudding-date">{article.date}</span>
        </div>

        <h1
          style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 900,
            color: '#0C0D0E',
            marginBottom: '1.5rem',
            lineHeight: 1.15,
          }}
        >
          {article.title}
        </h1>

        <div
          className="post-content"
          style={{
            fontSize: '1.1rem',
            lineHeight: 1.7,
            color: '#2D2F31',
            marginBottom: '2rem',
          }}
          dangerouslySetInnerHTML={{ __html: article.contentHtml }}
        />

        <div
          style={{
            borderTop: '2px solid #0C0D0E',
            paddingTop: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <Link href="/writing/" className="btn-outline">
            &larr; Back to Writing
          </Link>
          {article.externalLink && (
            <a
              href={article.externalLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              {article.externalLink.label}
            </a>
          )}
        </div>
      </article>
    </main>
  );
}
