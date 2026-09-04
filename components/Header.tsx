'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CalendlyButton from './CalendlyButton';
import MobileNav from './MobileNav';

export default function Header() {
  const pathname = usePathname();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const checkBottom = () => {
      setScrolled(window.scrollY > 8);
      const distanceFromBottom =
        document.documentElement.scrollHeight -
        window.scrollY -
        window.innerHeight;
      if (distanceFromBottom <= 100) {
        setAtBottom(true);
      } else {
        setAtBottom(false);
      }
    };

    window.addEventListener('scroll', checkBottom, { passive: true });
    checkBottom();

    // IntersectionObserver on footer to dissolve navbar line when footer enters
    const footer = document.getElementById('main-footer');
    let observer: IntersectionObserver | null = null;
    if (footer && typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setAtBottom(true);
          } else {
            checkBottom();
          }
        },
        { threshold: 0.05 }
      );
      observer.observe(footer);
    }

    return () => {
      window.removeEventListener('scroll', checkBottom);
      if (observer) observer.disconnect();
    };
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setMobileNavOpen(false);
  }, [pathname]);

  const isProjects = pathname?.startsWith('/projects') || pathname?.startsWith('/work');
  const isWriting = pathname?.startsWith('/writing') || pathname?.startsWith('/blog');
  const isAbout = pathname?.startsWith('/about');

  let activeData = 'home';
  if (isProjects) activeData = 'projects';
  else if (isWriting) activeData = 'writing';
  else if (isAbout) activeData = 'about';

  return (
    <>
      <header
        id="main-header"
        data-active={activeData}
        data-scrolled={scrolled ? 'true' : 'false'}
        data-at-bottom={atBottom ? 'true' : 'false'}
      >
        <div className="logo">
          <Link href="/" className="logo-link" id="logo-home">
            VARNEET
          </Link>
        </div>
        <nav className="nav-links-desktop">
          <Link href="/projects/" className={`nav-box-btn ${isProjects ? 'active' : ''}`}>
            Work
          </Link>
          <Link href="/blog/" className={`nav-box-btn ${isWriting ? 'active' : ''}`}>
            Blog
          </Link>
          <Link href="/about/" className={`nav-box-btn ${isAbout ? 'active' : ''}`}>
            About
          </Link>
          <CalendlyButton className="nav-box-btn nav-box-cta">
            Let&apos;s Talk &rarr;
          </CalendlyButton>
        </nav>
        <button
          className="menu-toggle"
          id="mobile-menu-toggle"
          aria-expanded={mobileNavOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileNavOpen((prev) => !prev)}
        >
          MENU
        </button>
      </header>

      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
    </>
  );
}
