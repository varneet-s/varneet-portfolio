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
    <a class="cta" href="" onclick="if(window.Calendly){window.Calendly.initPopupWidget({url:'https://calendly.com/varneetsingh45/30min'});return false;}else{window.open('https://calendly.com/varneetsingh45/30min','_blank');return false;}">Let's Talk &rarr;</a>
    <button class="menu-toggle" id="mobile-menu-toggle" aria-expanded="false" aria-controls="mobile-nav" onclick="if(window.toggleMobileNav){window.toggleMobileNav();}return false;">MENU</button>
  `;
}
