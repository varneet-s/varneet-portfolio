import Link from 'next/link';

export default function NotFound() {
  return (
    <main>
      <section className="error-container" style={{
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '4rem 1.5rem',
      }}>
        <h1 className="error-code" style={{
          fontFamily: 'var(--font-display), sans-serif',
          fontSize: 'clamp(4rem, 10vw, 7rem)',
          fontWeight: 800,
          color: 'var(--color-primary-green, #10B981)',
          margin: 0,
          lineHeight: 1,
        }}>
          404
        </h1>
        <p className="error-message" style={{
          fontFamily: 'var(--font-display), sans-serif',
          fontSize: 'clamp(1.4rem, 3vw, 2.2rem)',
          fontWeight: 700,
          color: '#111115',
          margin: '1rem 0 1.5rem',
          maxWidth: '25ch',
        }}>
          This page took a wrong turn somewhere in the data.
        </p>
        <p className="error-subtext" style={{
          fontSize: '1.05rem',
          color: '#4B4B55',
          marginBottom: '2rem',
          maxWidth: '45ch',
        }}>
          The link you followed might be broken, or the page may have moved.
        </p>
        <Link href="/" className="cta-button cta-button--large">
          &larr; Back to Home
        </Link>
      </section>
    </main>
  );
}
