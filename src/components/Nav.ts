export function renderNav(activePage: string = ''): string {
  const isSubdir = window.location.pathname.includes('/projects/') || window.location.pathname.includes('/writing/');
  const prefix = isSubdir ? '../' : '';

  return `
    <div class="logo">
      <a href="${prefix}index.html" class="logo-link" id="logo-home">VARNEET</a>
    </div>
    <nav class="nav-links-desktop">
      <a href="${prefix}projects.html" class="${activePage === 'projects' ? 'active' : ''}">Work</a>
      <a href="${prefix}writing.html" class="${activePage === 'writing' ? 'active' : ''}">Writing</a>
      <a href="${prefix}about.html" class="${activePage === 'about' || activePage === 'experience' ? 'active' : ''}">About</a>
    </nav>
    <a class="cta" href="https://calendly.com/varneetsingh45/30min" target="_blank" rel="noopener">Let's Talk &rarr;</a>
    <button class="menu-toggle" id="mobile-menu-toggle" aria-expanded="false" aria-controls="mobile-nav">MENU</button>

    <!-- Mobile Nav Overlay -->
    <nav id="mobile-nav" class="mobile-nav" data-state="closed">
      <div class="mobile-nav-header">
        <span class="mobile-nav-logo">VARNEET</span>
        <button class="mobile-nav-close" id="mobile-menu-close">[CLOSE]</button>
      </div>
      <div class="mobile-nav-links">
        <a href="${prefix}projects.html">Work</a>
        <a href="${prefix}writing.html">Writing</a>
        <a href="${prefix}about.html">About</a>
        <a href="https://calendly.com/varneetsingh45/30min" target="_blank" rel="noopener" class="cta-mobile">Let's Talk &rarr;</a>
      </div>
      <div class="mobile-nav-footer">
        <a href="https://linkedin.com/in/varneet-singh/" target="_blank" rel="noopener">LinkedIn &rarr;</a>
        <a href="mailto:varneetsingh45@gmail.com">Email &rarr;</a>
        <a href="${prefix}resume.pdf" target="_blank" rel="noopener">Resume &rarr;</a>
      </div>
    </nav>
  `;
}
