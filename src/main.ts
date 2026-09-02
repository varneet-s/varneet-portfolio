import '../css/styles.css';
import { renderNav } from './components/Nav';
import { renderFooter } from './components/Footer';

document.addEventListener('DOMContentLoaded', () => {
  // Inject Nav if #main-header has data-active attribute
  const headerEl = document.getElementById('main-header');
  if (headerEl) {
    const activePage = headerEl.getAttribute('data-active') || '';
    headerEl.innerHTML = renderNav(activePage);
  }

  // Inject Footer if #main-footer exists
  const footerEl = document.getElementById('main-footer');
  if (footerEl) {
    footerEl.innerHTML = renderFooter();
  }

  // Mobile Drawer Toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinksRight = document.querySelector('.nav-links-right');
  
  if (hamburger && navLinksRight) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinksRight.classList.toggle('active');
      document.documentElement.classList.toggle('menu-active');
    });
  }

  // Scroll Reveal Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    },
    { threshold: 0.08 }
  );

  document.querySelectorAll('section, .testimonial-card, .bento-card').forEach((el) => {
    el.classList.add('reveal-on-scroll');
    observer.observe(el);
  });
});
