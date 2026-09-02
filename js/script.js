document.addEventListener('DOMContentLoaded', function() {
  // Mobile Navigation toggle delegation via window.toggleMobileNav
  document.addEventListener('click', function(e) {
    var target = e.target;
    if (!target) return;
    var toggle = target.closest('.menu-toggle, #mobile-menu-toggle, .mobile-menu-btn');
    var closeBtn = target.closest('#mobile-menu-close, .mobile-nav-close');
    if ((toggle || closeBtn) && typeof window.toggleMobileNav === 'function') {
      e.preventDefault();
      e.stopPropagation();
      window.toggleMobileNav(closeBtn ? 'closed' : undefined);
    }
  });

  // Project Filter Engine
  var filterBar = document.querySelector('.filter-bar');
  if (filterBar) {
    var badges = filterBar.querySelectorAll('.filter-badge');
    var projectList = document.querySelector('.bento-grid, .projects-grid, .projects-list');
    var cards = projectList ? projectList.querySelectorAll('.project-item') : [];
    var emptyState = projectList ? projectList.querySelector('.filter-empty-state') : null;

    badges.forEach(function(badge) {
      badge.addEventListener('click', function() {
        var filterValue = badge.getAttribute('data-filter') || 'all';
        var visibleCount = 0;

        badges.forEach(function(b) {
          b.classList.remove('active');
          b.setAttribute('aria-pressed', 'false');
        });

        badge.classList.add('active');
        badge.setAttribute('aria-pressed', 'true');

        cards.forEach(function(card) {
          if (filterValue === 'all') {
            card.classList.remove('filter-hidden');
            card.removeAttribute('hidden');
            visibleCount++;
          } else {
            var category = card.getAttribute('data-category');
            var status = card.getAttribute('data-status');
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

  // Header Scroll Hide / Reveal Logic
  var header = document.querySelector('#main-header');
  var lastScrollTop = 0;
  var ticking = false;

  if (header) {
    window.addEventListener('scroll', function() {
      var nav = document.getElementById('mobile-nav');
      if (nav && (nav.getAttribute('data-state') === 'open' || nav.classList.contains('active'))) return;

      if (!ticking) {
        window.requestAnimationFrame(function() {
          var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
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
});
