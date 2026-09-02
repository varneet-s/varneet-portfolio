export function renderNav(activePage: string = ''): string {
  const isSubdir = window.location.pathname.includes('/projects/') || window.location.pathname.includes('/writing/');
  const prefix = isSubdir ? '../' : '';

  const links = [
    { id: 'projects', label: 'Work', href: `${prefix}projects.html` },
    { id: 'experience', label: 'Experience', href: `${prefix}experience.html` },
    { id: 'writing', label: 'Writing', href: `${prefix}writing.html` },
    { id: 'about', label: 'About', href: `${prefix}about.html` },
  ];

  const linksHtml = links
    .map(l => `<a href="${l.href}" class="nav-link ${activePage === l.id ? 'active' : ''}" id="nav-link-${l.id}">${l.label}</a>`)
    .join('');

  return `
    <div class="container nav-container">
      <div class="nav-layout-left">
        <a href="${prefix}index.html" class="nav-logo-link" id="logo-home" title="Varneet Singh — Home">
          <svg class="nav-logo-svg" viewBox="0 0 240 50" width="150" height="32" fill="none">
            <text x="0" y="34" font-family="'Poppins', sans-serif" font-size="28" font-weight="900" letter-spacing="-0.04em" fill="#0C0D0E">VARNEET</text>
            <path d="M142 36 L160 22 L175 28 L198 12 M198 12 L206 12 L206 20" stroke="#FF3B00" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="160" cy="22" r="2.5" fill="#FF3B00"/>
            <circle cx="175" cy="28" r="2.5" fill="#FF3B00"/>
            <circle cx="198" cy="12" r="3" fill="#FF3B00"/>
          </svg>
        </a>
        <nav class="nav-menu-links">
          ${linksHtml}
        </nav>
      </div>

      <div class="nav-layout-right">
        <a href="${prefix}index.html#contact" class="cta-button" id="nav-cta-talk">Let's Talk &rarr;</a>
        <button class="mobile-menu-btn" id="mobile-menu-toggle" aria-label="Toggle navigation menu">
          MENU
        </button>
      </div>
    </div>

    <!-- Full-Screen Mobile Nav Overlay (#FF3B00 Copper Background) -->
    <div class="mobile-nav-overlay" id="mobile-nav-overlay">
      <div class="mobile-nav-header">
        <span class="mobile-nav-logo">VARNEET</span>
        <button class="mobile-nav-close" id="mobile-menu-close">[CLOSE]</button>
      </div>
      <div class="mobile-nav-body">
        <div class="mobile-nav-links">
          <a href="${prefix}projects.html" class="mobile-nav-card">Work</a>
          <a href="${prefix}experience.html" class="mobile-nav-card">Experience</a>
          <a href="${prefix}writing.html" class="mobile-nav-card">Writing</a>
          <a href="${prefix}about.html" class="mobile-nav-card">About</a>
          <a href="${prefix}index.html#contact" class="mobile-nav-card mobile-nav-card--cta">Let's Talk &rarr;</a>
        </div>
        <div class="mobile-nav-footer">
          <a href="https://linkedin.com" target="_blank" rel="noopener" class="mobile-social-box">LinkedIn &rarr;</a>
          <a href="mailto:varneetsingh45@gmail.com" class="mobile-social-box">Email &rarr;</a>
          <a href="${prefix}resume.pdf" target="_blank" rel="noopener" class="mobile-social-box">Resume &rarr;</a>
        </div>
      </div>
    </div>
  `;
}
