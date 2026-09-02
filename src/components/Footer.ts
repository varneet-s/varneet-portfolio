export function renderFooter(): string {
  const isSubdir = window.location.pathname.includes('/projects/') || window.location.pathname.includes('/writing/');
  const prefix = isSubdir ? '../' : '';

  return `
    <div class="local-footer-banner">
      <div class="local-footer-bg-title">VARNEET</div>
      
      <div class="local-footer-content">
        <div class="local-footer-avatar-wrap">
          <img src="${prefix}assets/varneet-avatar.png" alt="Varneet Singh — Illustrated Portrait" class="local-footer-avatar-img">
          <a href="https://calendly.com/varneetsingh45/30min" target="_blank" rel="noopener" class="local-footer-email-badge">
            BOOK A CALL &rarr;
          </a>
        </div>

        <div class="local-footer-bottom-bar">
          <a href="https://linkedin.com/in/varneet-singh/" target="_blank" rel="noopener" class="local-footer-pill">LINKEDIN</a>
          <a href="https://github.com/varneet-s/" target="_blank" rel="noopener" class="local-footer-pill">GITHUB</a>
          <a href="${prefix}resume.pdf" target="_blank" rel="noopener" class="local-footer-pill">RESUME</a>
          <a href="mailto:varneetsingh45@gmail.com" class="local-footer-pill">EMAIL</a>
        </div>
      </div>
    </div>
  `;
}
