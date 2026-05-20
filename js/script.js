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
