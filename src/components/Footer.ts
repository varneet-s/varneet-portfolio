export function renderFooter(): string {
  const isSubdir = window.location.pathname.includes('/projects/');
  const prefix = isSubdir ? '../' : '';

  return `
    <div class="container footer-inner">
      <!-- Left: Logo emblem & links -->
      <div class="footer-brand-group">
        <a href="${prefix}index.html" class="footer-logo-link">
          <img src="${prefix}assets/varneet-avatar.png" alt="Varneet Singh" class="footer-logo-img">
        </a>
        <nav class="footer-nav">
          <a href="${prefix}about.html" class="nav-link">About</a>
          <a href="${prefix}now.html" class="nav-link">Now</a>
          <a href="${prefix}writing.html" class="nav-link">Writing</a>
          <a href="${prefix}projects.html" class="nav-link">Projects</a>
          <a href="${prefix}experience.html" class="nav-link">Career</a>
          <a href="${prefix}resume.pdf" target="_blank" rel="noopener" class="nav-link">Resume</a>
        </nav>
      </div>

      <!-- Right: Social icons -->
      <div class="footer-socials-group">
        <a href="https://linkedin.com/in/varneet-singh/" target="_blank" rel="noopener" title="LinkedIn" class="footer-social-icon footer-social-icon--linkedin">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        </a>
        <a href="https://github.com/varneet-s/" target="_blank" rel="noopener" title="GitHub" class="footer-social-icon footer-social-icon--github">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </a>
        <a href="mailto:varneetsingh45@gmail.com" title="Email" class="footer-social-icon footer-social-icon--email">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
        </a>
      </div>
    </div>
  `;
}
