'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const isHome = pathname === '/';
  const isWork = pathname?.startsWith('/projects') || pathname?.startsWith('/work');
  const isBlog = pathname?.startsWith('/writing');
  const isAbout = pathname?.startsWith('/about');

  return (
    <header className="dh-header-wrapper" id="main-header">
      <div className="dh-header-container">
        {/* Left: Avatar Brand Badge */}
        <Link href="/" className="dh-avatar-badge" title="Varneet Singh — Home">
          <img
            src="/assets/varneet-avatar.png"
            alt="Varneet Singh avatar"
            width={38}
            height={38}
            className="dh-avatar-img"
          />
          <span className="dh-avatar-text">Varneet S.</span>
        </Link>

        {/* Center: Floating Pill Navigation (Hellmann Style) */}
        <nav className="dh-nav-pill" aria-label="Main Navigation">
          <Link href="/" className={`dh-nav-link ${isHome ? 'active' : ''}`}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <span>home.</span>
          </Link>

          <Link href="/projects/" className={`dh-nav-link ${isWork ? 'active' : ''}`}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
            <span>work.</span>
          </Link>

          <Link href="/writing/" className={`dh-nav-link ${isBlog ? 'active' : ''}`}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            <span>blog.</span>
          </Link>

          <Link href="/about/" className={`dh-nav-link ${isAbout ? 'active' : ''}`}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span>about.</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

