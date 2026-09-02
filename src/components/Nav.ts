export function renderNav(activePage: string = ''): string {
  const isSubdir = window.location.pathname.includes('/projects/');
  const prefix = isSubdir ? '../' : '';

  const links = [
    { id: 'about', label: 'About', href: `${prefix}about.html`, pos: 'left' },
    { id: 'now', label: 'Now', href: `${prefix}now.html`, pos: 'left' },
    { id: 'writing', label: 'Writing', href: `${prefix}writing.html`, pos: 'left' },
    { id: 'projects', label: 'Projects', href: `${prefix}projects.html`, pos: 'right' },
    { id: 'experience', label: 'Career', href: `${prefix}experience.html`, pos: 'right' },
    { id: 'resume', label: 'Resume', href: `${prefix}resume.pdf`, pos: 'right', target: '_blank' },
  ];

  const leftHtml = links
    .filter(l => l.pos === 'left')
    .map(l => `<a href="${l.href}" class="nav-link ${activePage === l.id ? 'active' : ''}" id="nav-link-${l.id}">${l.label}</a>`)
    .join('');

  const rightHtml = links
    .filter(l => l.pos === 'right')
    .map(l => `<a href="${l.href}" class="nav-link ${activePage === l.id ? 'active' : ''}" id="nav-link-${l.id}" ${l.target ? `target="${l.target}" rel="noopener"` : ''}>${l.label}</a>`)
    .join('');

  return `
    <div class="container nav-container">
      <nav class="nav-menu-3col" id="nav-menu-links">
        <div class="nav-links-left">
          ${leftHtml}
        </div>
        <a href="${prefix}index.html" class="nav-emblem-logo" id="logo-home" title="Varneet Singh — Home">
          <img src="${prefix}assets/varneet-avatar.png" alt="Varneet Singh — Home" class="nav-emblem-icon">
        </a>
        <div class="nav-links-right">
          ${rightHtml}
          <a href="mailto:varneetsingh45@gmail.com" class="cta-button" id="nav-cta-talk">Let's Talk &rarr;</a>
        </div>
      </nav>
      <button class="hamburger" id="mobile-menu-toggle" aria-label="Toggle navigation menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  `;
}
