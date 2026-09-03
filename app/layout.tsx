import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  metadataBase: new URL('https://varneet.in'),
  title: {
    default: 'Varneet Singh — Business Operations Manager | Aspiring Business Analyst',
    template: '%s | Varneet Singh',
  },
  description:
    'Business Operations Manager at I.P. Pharma targeting Business Analyst roles. Specialized in Excel, SQL, Tableau, and BPMN process optimization.',
  icons: {
    icon: '/assets/logo-wordmark.svg',
  },
  openGraph: {
    title: 'Varneet Singh — Business Operations Manager | Aspiring Business Analyst',
    description:
      'Business Operations Manager at I.P. Pharma targeting Business Analyst roles. Specialized in Excel, SQL, Tableau, and BPMN process optimization.',
    url: 'https://varneet.in',
    siteName: 'Varneet Singh Portfolio',
    images: [
      {
        url: 'https://varneet.in/assets/og-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Varneet Singh Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Varneet Singh — Business Operations Manager | Aspiring Business Analyst',
    description:
      'Business Operations Manager at I.P. Pharma targeting Business Analyst roles. Specialized in Excel, SQL, Tableau, and BPMN process optimization.',
    images: ['https://varneet.in/assets/og-preview.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Calendly Widget Stylesheet */}
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </head>
      <body className="page-body">
        {/* Google Tag Manager / Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CQDBHK7BZF"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CQDBHK7BZF');
          `}
        </Script>

        {/* Calendly Script */}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />

        <div id="root">
          <Header />
          {children}
          <Footer />
        </div>

        <ScrollReveal />
      </body>
    </html>
  );
}
