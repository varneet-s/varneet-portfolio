document.addEventListener('DOMContentLoaded', () => {
  // ==========================================================================
  // MOBILE NAVIGATION DRAWER
  // ==========================================================================
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinksRight = document.querySelector('.nav-links-right');
  const navLinks = document.querySelectorAll('.nav-link');

  if (hamburger) {
    const mobileTarget = navLinksRight || navMenu;
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      if (mobileTarget) mobileTarget.classList.toggle('active');
      document.body.style.overflow = (mobileTarget && mobileTarget.classList.contains('active')) ? 'hidden' : '';
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        if (mobileTarget) mobileTarget.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // ==========================================================================
  // PROJECT FILTER ENGINE
  // ==========================================================================
  const filterBar = document.querySelector('.filter-bar');

  if (filterBar) {
    const badges = filterBar.querySelectorAll('.filter-badge');
    const projectList = document.querySelector('.projects-list');
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

  if (header) {
    window.addEventListener('scroll', () => {
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
    }, { passive: true });
  }
});
