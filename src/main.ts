import '../css/styles.css';
import { renderNav } from './components/Nav';
import { renderFooter } from './components/Footer';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inject Nav if #main-header exists
  const headerEl = document.getElementById('main-header');
  if (headerEl) {
    const activePage = headerEl.getAttribute('data-active') || '';
    headerEl.innerHTML = renderNav(activePage);
  }

  // 2. Inject Footer if #main-footer exists
  const footerEl = document.getElementById('main-footer');
  if (footerEl) {
    footerEl.innerHTML = renderFooter();
  }

  // 3. Mobile Nav Overlay Logic ([MENU] button and [CLOSE] button)
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const toggleBtn = target ? target.closest('#mobile-menu-toggle, .mobile-menu-btn') : null;
    const closeBtn = target ? target.closest('#mobile-menu-close, .mobile-nav-close') : null;
    const overlay = document.getElementById('mobile-nav-overlay');

    if (toggleBtn && overlay) {
      e.preventDefault();
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    } else if (closeBtn && overlay) {
      e.preventDefault();
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    } else if (overlay && overlay.classList.contains('active') && target.closest('#mobile-nav-overlay a')) {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // 4. Header Scroll Hide / Reveal Logic
  const header = document.querySelector('#main-header');
  let lastScrollTop = 0;
  let ticking = false;

  if (header) {
    window.addEventListener('scroll', () => {
      const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
      if (mobileNavOverlay && mobileNavOverlay.classList.contains('active')) return;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          
          if (scrollTop > 120) {
            if (scrollTop > lastScrollTop) {
              header.classList.add('nav-hidden');
              header.classList.remove('nav-revealed');
            } else {
              if (header.classList.contains('nav-hidden')) {
                header.classList.remove('nav-hidden');
                header.classList.add('nav-revealed');
              }
            }
          } else {
            header.classList.remove('nav-hidden');
            header.classList.remove('nav-revealed');
          }
          
          lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // 5. Project Filter Engine Logic
  const filterBar = document.querySelector('.filter-bar');
  if (filterBar) {
    const badges = filterBar.querySelectorAll('.filter-badge');
    const projectList = document.querySelector('.bento-grid, .projects-grid, .projects-list');
    const cards = projectList ? projectList.querySelectorAll('.project-item') : [];
    const emptyState = projectList ? projectList.querySelector('.filter-empty-state') : null;

    badges.forEach(badge => {
      badge.addEventListener('click', () => {
        const filterValue = badge.getAttribute('data-filter') || 'all';
        let visibleCount = 0;

        badges.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-pressed', 'false');
        });

        badge.classList.add('active');
        badge.setAttribute('aria-pressed', 'true');

        cards.forEach(card => {
          if (filterValue === 'all') {
            card.classList.remove('filter-hidden');
            card.removeAttribute('hidden');
            visibleCount++;
          } else {
            const category = card.getAttribute('data-category');
            const status = card.getAttribute('data-status');
            if (category === filterValue || status === filterValue) {
              card.classList.remove('filter-hidden');
              card.removeAttribute('hidden');
              visibleCount++;
            } else {
              card.classList.add('filter-hidden');
              card.setAttribute('hidden', '');
            }
          }
        });

        if (emptyState) {
          if (visibleCount === 0) emptyState.removeAttribute('hidden');
          else emptyState.setAttribute('hidden', '');
        }
      });
    });
  }

  // 6. Experience Accordion Logic
  const expHeaders = document.querySelectorAll('.exp-header');
  expHeaders.forEach(expHeader => {
    expHeader.addEventListener('click', () => {
      const card = expHeader.closest('.exp-card');
      if (!card) return;
      const isExpanded = card.classList.contains('expanded');
      
      document.querySelectorAll('.exp-card').forEach(c => {
        if (c !== card) c.classList.remove('expanded');
      });

      if (isExpanded) card.classList.remove('expanded');
      else card.classList.add('expanded');
    });
  });

  // 7. IntersectionObserver Scroll Reveal
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('section, .testimonial-card, .bento-card, .exp-card, .metrics-strip').forEach(el => {
    el.classList.add('reveal-on-scroll');
    revealObserver.observe(el);
  });
});
