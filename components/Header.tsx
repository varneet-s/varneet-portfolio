'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CalendlyButton from './CalendlyButton';
import MobileNav from './MobileNav';

export default function Header() {
  const pathname = usePathname();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const [navRevealed, setNavRevealed] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    let lastScrollTop = 0;
    let ticking = false;

    const handleScroll = () => {
      if (mobileNavOpen) return;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

          if (scrollTop > 120) {
            if (scrollTop > lastScrollTop) {
              setNavHidden(true);
              setNavRevealed(false);
            } else {
              setNavHidden(false);
              setNavRevealed(true);
            }
          } else {
            setNavHidden(false);
            setNavRevealed(false);
          }

          lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileNavOpen]);

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
        className={`${navHidden ? 'nav-hidden' : ''} ${navRevealed ? 'nav-revealed' : ''}`}
      >
        <div className="logo">
          <Link href="/" className="logo-link" id="logo-home">
            VARNEET
          </Link>
        </div>
        <nav className="nav-links-desktop">
          <Link href="/projects/" className={isProjects ? 'active' : ''}>
            Work
          </Link>
          <Link href="/writing/" className={isWriting ? 'active' : ''}>
            Writing
          </Link>
          <Link href="/about/" className={isAbout ? 'active' : ''}>
            About
          </Link>
        </nav>
        <CalendlyButton className="cta">
          Let&apos;s Talk &rarr;
        </CalendlyButton>
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
