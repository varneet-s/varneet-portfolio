document.addEventListener('DOMContentLoaded', () => {
  // ==========================================================================
  // MOBILE NAVIGATION DRAWER
  // ==========================================================================
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
      
      // Prevent body scrolling when mobile menu is open
      document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile menu when a nav link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
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
});
