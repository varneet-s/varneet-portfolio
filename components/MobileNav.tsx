'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import CalendlyButton from './CalendlyButton';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.setAttribute('data-nav-open', 'true');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.removeAttribute('data-nav-open');
      document.body.style.overflow = '';
    }
    return () => {
      document.body.removeAttribute('data-nav-open');
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <nav
      id="mobile-nav"
      className={`mobile-nav ${isOpen ? 'active' : ''}`}
      data-state={isOpen ? 'open' : 'closed'}
      aria-hidden={!isOpen}
    >
      <div className="mobile-nav-header">
        <button
          className="mobile-nav-close"
          id="mobile-menu-close"
          aria-label="Close menu"
          onClick={onClose}
        >
          BACK
        </button>
      </div>
      <div className="mobile-nav-links">
        <Link href="/projects/" className="mobile-nav-card" onClick={onClose}>
          WORK
        </Link>
        <Link href="/writing/" className="mobile-nav-card" onClick={onClose}>
          WRITING
        </Link>
        <Link href="/about/" className="mobile-nav-card" onClick={onClose}>
          ABOUT
        </Link>
        <CalendlyButton className="mobile-nav-card">
          LET&apos;S TALK &rarr;
        </CalendlyButton>
      </div>
      <div className="mobile-nav-footer">
        <div className="mobile-nav-col mobile-nav-col-left">
          <a
            href="https://linkedin.com/in/varneet-singh/"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-nav-badge"
          >
            LINKEDIN
          </a>
          <a
            href="https://github.com/varneet-s/"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-nav-badge"
          >
            GITHUB
          </a>
        </div>
        <div className="mobile-nav-col mobile-nav-col-right">
          <a
            href="mailto:varneetsingh45@gmail.com"
            className="mobile-nav-badge"
          >
            EMAIL
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-nav-badge"
          >
            RESUME
          </a>
        </div>
      </div>
    </nav>
  );
}
