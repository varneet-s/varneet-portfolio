'use client';

import React from 'react';
import Image from 'next/image';
import CalendlyButton from './CalendlyButton';

export default function Footer() {
  return (
    <footer id="main-footer" className="site-footer">
      <div className="local-footer-banner">
        <div className="local-footer-bg-title">VARNEET</div>

        <div className="local-footer-content">
          <div className="local-footer-avatar-wrap">
            <img
              src="/assets/varneet-avatar.png"
              alt="Varneet Singh, Illustrated Portrait"
              className="local-footer-avatar-img"
              width={140}
              height={140}
            />
            <CalendlyButton className="local-footer-email-badge">
              BOOK A CALL &rarr;
            </CalendlyButton>
          </div>

          <div className="local-footer-bottom-bar">
            <a
              href="https://linkedin.com/in/varneet-singh/"
              target="_blank"
              rel="noopener noreferrer"
              className="local-footer-pill"
            >
              LINKEDIN
            </a>
            <a
              href="https://github.com/varneet-s/"
              target="_blank"
              rel="noopener noreferrer"
              className="local-footer-pill"
            >
              GITHUB
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="local-footer-pill"
            >
              RESUME
            </a>
            <a
              href="mailto:varneetsingh45@gmail.com"
              className="local-footer-pill"
            >
              EMAIL
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
