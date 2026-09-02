document.addEventListener('DOMContentLoaded', function() {
  // Mobile Navigation Click Event Delegation
  document.addEventListener('click', function(e) {
    var target = e.target;
    if (!target) return;

    var toggle = target.closest('.menu-toggle, #mobile-menu-toggle, .mobile-menu-btn');
    var closeBtn = target.closest('#mobile-menu-close, .mobile-nav-close');
    var nav = document.getElementById('mobile-nav');

    if (toggle && nav) {
      e.preventDefault();
      var isOpen = nav.getAttribute('data-state') === 'open' || nav.classList.contains('active');
      if (isOpen) {
        nav.setAttribute('data-state', 'closed');
        nav.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.removeAttribute('data-nav-open');
        document.body.style.overflow = '';
      } else {
        nav.setAttribute('data-state', 'open');
        nav.classList.add('active');
        toggle.setAttribute('aria-expanded', 'true');
        document.body.setAttribute('data-nav-open', 'true');
        document.body.style.overflow = 'hidden';
      }
    } else if (closeBtn && nav) {
      e.preventDefault();
      nav.setAttribute('data-state', 'closed');
      nav.classList.remove('active');
      document.body.removeAttribute('data-nav-open');
      document.body.style.overflow = '';
    } else if (nav && (nav.getAttribute('data-state') === 'open' || nav.classList.contains('active')) && target.closest('#mobile-nav a')) {
      nav.setAttribute('data-state', 'closed');
      nav.classList.remove('active');
      document.body.removeAttribute('data-nav-open');
      document.body.style.overflow = '';
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
