'use client';

import React from 'react';

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

interface CalendlyButtonProps {
  className?: string;
  children: React.ReactNode;
  url?: string;
}

export default function CalendlyButton({
  className = 'cta',
  children,
  url = 'https://calendly.com/varneetsingh45/30min',
}: CalendlyButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (typeof window !== 'undefined' && window.Calendly) {
      window.Calendly.initPopupWidget({ url });
    } else {
      window.open(url, '_blank');
    }
  };

  return (
    <a href={url} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
