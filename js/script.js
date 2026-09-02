document.addEventListener('DOMContentLoaded', () => {
  // ==========================================================================
  // MOBILE NAVIGATION DRAWER & DYNAMIC LINKS
  // ==========================================================================
  const navLinksLeft = document.querySelector('.nav-links-left');
  const navLinksRight = document.querySelector('.nav-links-right');

  // Clone left side links (About, Now, Writing) into right side links container for mobile layout
  if (navLinksLeft && navLinksRight) {
    const leftLinks = navLinksLeft.querySelectorAll('.nav-link');
    // Prepend in reverse order so they appear at the beginning of the drawer in correct order
    Array.from(leftLinks).reverse().forEach(link => {
      const cloned = link.cloneNode(true);
      cloned.classList.add('mobile-only-link');
      cloned.id = cloned.id ? cloned.id + '-mobile' : '';
      navLinksRight.insertBefore(cloned, navLinksRight.firstChild);
    });
  }

  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const mobileTarget = navLinksRight || navMenu;
  const navLinks = document.querySelectorAll('.nav-link, .mobile-only-link');

  if (hamburger) {
    let savedScrollY = 0;

    // Create dim overlay element once
    const dimOverlay = document.createElement('div');
    dimOverlay.className = 'nav-dim-overlay';
    document.body.appendChild(dimOverlay);

    function openMenu() {
      savedScrollY = window.scrollY;
      hamburger.classList.add('active');
      if (mobileTarget) mobileTarget.classList.add('active');
      dimOverlay.classList.add('active');
      document.body.style.top = `-${savedScrollY}px`;
      document.documentElement.classList.add('menu-active');
    }

    function closeMenu() {
      hamburger.classList.remove('active');
      if (mobileTarget) mobileTarget.classList.remove('active');
      dimOverlay.classList.remove('active');
      document.documentElement.classList.remove('menu-active');
      document.body.style.top = '';
      window.scrollTo({ top: savedScrollY, behavior: 'instant' });
    }

    hamburger.addEventListener('click', () => {
      const isOpen = mobileTarget && mobileTarget.classList.contains('active');
      isOpen ? closeMenu() : openMenu();
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMenu();
      });
    });

    // Tap empty space on glass drawer to close
    if (mobileTarget) {
      mobileTarget.addEventListener('click', (e) => {
        const isLink = e.target.closest('a, button');
        if (!isLink) closeMenu();
      });
    }

    // Tap dim overlay to close
    dimOverlay.addEventListener('click', closeMenu);
  }

  // ==========================================================================
  // PROJECT FILTER ENGINE
  // ==========================================================================
  const filterBar = document.querySelector('.filter-bar');

  if (filterBar) {
    const badges = filterBar.querySelectorAll('.filter-badge');
    const projectList = document.querySelector('.bento-grid, .projects-grid, .projects-list');
    const cards = projectList ? projectList.querySelectorAll('.project-item') : [];
    const emptyState = projectList ? projectList.querySelector('.filter-empty-state') : null;

    function applyFilter(filterValue) {
      let visibleCount = 0;

      cards.forEach(card => {
        if (filterValue === 'all') {
          card.classList.remove('filter-hidden');
          card.removeAttribute('hidden');
          visibleCount++;
        } else {
          const category = card.getAttribute('data-category');
          const status = card.getAttribute('data-status');
          const matches = category === filterValue || status === filterValue;

          if (matches) {
            card.classList.remove('filter-hidden');
            card.removeAttribute('hidden');
            visibleCount++;
          } else {
            card.classList.add('filter-hidden');
            card.setAttribute('hidden', '');
          }
        }
      });

      // Empty state
      if (emptyState) {
        if (visibleCount === 0) {
          emptyState.removeAttribute('hidden');
        } else {
          emptyState.setAttribute('hidden', '');
        }
      }
    }

    badges.forEach(badge => {
      badge.addEventListener('click', () => {
        const filterValue = badge.getAttribute('data-filter');
        const isAlreadyActive = badge.classList.contains('active');

        // Deactivate all badges
        badges.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-pressed', 'false');
        });

        // If clicking the active badge, reset to "All"
        if (isAlreadyActive && filterValue !== 'all') {
          const allBadge = filterBar.querySelector('[data-filter="all"]');
          allBadge.classList.add('active');
          allBadge.setAttribute('aria-pressed', 'true');
          applyFilter('all');
        } else {
          badge.classList.add('active');
          badge.setAttribute('aria-pressed', 'true');
          applyFilter(filterValue);
        }
      });
    });
  }

  // ==========================================================================
  // EXPERIENCE ACCORDION (PAPAO / STAR DETAILS)
  // ==========================================================================
  const expHeaders = document.querySelectorAll('.exp-header');

  expHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const card = header.closest('.exp-card');
      const isExpanded = card.classList.contains('expanded');
      
      // OPTIONAL accordion behavior: Close all other cards first
      document.querySelectorAll('.exp-card').forEach(otherCard => {
        if (otherCard !== card) {
          otherCard.classList.remove('expanded');
        }
      });
      
      // Toggle current card
      if (isExpanded) {
        card.classList.remove('expanded');
      } else {
        card.classList.add('expanded');
      }
    });
  });

  // ==========================================================================
  // SAM DICKIE STYLE HEADER SCROLL REVEAL (Hide on down, center expand on up)
  // ==========================================================================
  const header = document.querySelector('#main-header');
  let lastScrollTop = 0;
  let ticking = false;

  if (header) {
    window.addEventListener('scroll', () => {
      // If mobile menu is open, disable scroll-hide logic entirely to prevent the active menu from vanishing
      if (mobileTarget && mobileTarget.classList.contains('active')) {
        return;
      }

      if (!ticking) {
        window.requestAnimationFrame(() => {
          let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          
          if (scrollTop > 120) {
            if (scrollTop > lastScrollTop) {
              // Scrolling DOWN -> Hide navbar
              header.classList.add('nav-hidden');
              header.classList.remove('nav-revealed');
            } else {
              // Scrolling UP -> Reveal navbar from center
              if (header.classList.contains('nav-hidden')) {
                header.classList.remove('nav-hidden');
                header.classList.add('nav-revealed');
              }
            }
          } else {
            // At top of page
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

  // ==========================================================================
  // GLOBAL SCROLL REVEAL ANIMATIONS
  // ==========================================================================
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('section, .sam-featured-item, .testimonial-card, .exp-card-item, .cs-analysis-card, .metrics-strip').forEach(el => {
    el.classList.add('reveal-on-scroll');
    revealObserver.observe(el);
  });
});
