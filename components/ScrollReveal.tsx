'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.08 }
    );

    const elements = document.querySelectorAll(
      'section, .testimonial-card, .bento-card, .exp-card, .metrics-strip, .pudding-card'
    );

    elements.forEach((el) => {
      el.classList.add('reveal-on-scroll');
      revealObserver.observe(el);
    });

    return () => {
      elements.forEach((el) => revealObserver.unobserve(el));
      revealObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
