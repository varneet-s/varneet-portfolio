/**
 * Strongly-typed Mobile Navigation Controller
 * Handles mobile drawer state, DOM isolation, touch scroll locking, and event delegation.
 */

export interface NavStateOptions {
  forceState?: 'open' | 'closed';
}

export class MobileNavManager {
  private static lastToggleTimestamp = 0;
  private static readonly DEBOUNCE_MS = 150;
  private static isInitialized = false;

  /**
   * Initializes event listeners and attaches the mobile drawer to document.body
   */
  public static init(): void {
    if (typeof window === 'undefined' || this.isInitialized) return;
    this.isInitialized = true;

    const setup = () => {
      this.ensureDrawerInBody();
      this.attachEventListeners();
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', setup);
    } else {
      setup();
    }
    
    // Register global window helper for fallback compatibility
    (window as any).toggleMobileNav = (forceState?: 'open' | 'closed') => {
      this.toggle({ forceState });
    };
  }

  /**
   * Ensures #mobile-nav exists and is appended directly to document.body.
   * Dynamically constructs drawer markup if not present in the DOM.
   */
  public static ensureDrawerInBody(): HTMLElement {
    let nav = document.getElementById('mobile-nav');

    if (!nav) {
      const isSubdir = window.location.pathname.includes('/projects/') || window.location.pathname.includes('/writing/');
      const prefix = isSubdir ? '../' : '';

      nav = document.createElement('nav');
      nav.id = 'mobile-nav';
      nav.className = 'mobile-nav';
      nav.setAttribute('data-state', 'closed');
      nav.innerHTML = `
        <div class="mobile-nav-header">
          <button class="mobile-nav-close" id="mobile-menu-close" aria-label="Close menu" onclick="var n=document.getElementById('mobile-nav');if(n){n.setAttribute('data-state','closed');n.classList.remove('active');document.body.removeAttribute('data-nav-open');document.body.style.overflow='';}return false;">BACK</button>
        </div>
        <div class="mobile-nav-links">
          <a href="${prefix}projects.html" class="mobile-nav-card">WORK</a>
          <a href="${prefix}writing.html" class="mobile-nav-card">WRITING</a>
          <a href="${prefix}about.html" class="mobile-nav-card">ABOUT</a>
          <a href="" onclick="if(window.Calendly){window.Calendly.initPopupWidget({url:'https://calendly.com/varneetsingh45/30min'});}return false;" class="mobile-nav-card">LET'S TALK &rarr;</a>
        </div>
        <div class="mobile-nav-footer">
          <div class="mobile-nav-col mobile-nav-col-left">
            <a href="https://linkedin.com/in/varneet-singh/" target="_blank" rel="noopener" class="mobile-nav-badge">LINKEDIN</a>
            <a href="https://github.com/varneet-s/" target="_blank" rel="noopener" class="mobile-nav-badge">GITHUB</a>
          </div>
          <div class="mobile-nav-col mobile-nav-col-right">
            <a href="mailto:varneetsingh45@gmail.com" class="mobile-nav-badge">EMAIL</a>
            <a href="${prefix}resume.pdf" target="_blank" rel="noopener" class="mobile-nav-badge">RESUME</a>
          </div>
        </div>
      `;
      document.body.appendChild(nav);
    } else if (nav.parentElement !== document.body) {
      document.body.appendChild(nav);
    }

    return nav;
  }

  /**
   * Toggles the mobile navigation drawer state
   */
  public static toggle(options: NavStateOptions = {}): void {
    const now = Date.now();
    if (options.forceState === undefined && now - this.lastToggleTimestamp < this.DEBOUNCE_MS) {
      return;
    }
    this.lastToggleTimestamp = now;

    const nav = this.ensureDrawerInBody();
    const toggleBtn = document.getElementById('mobile-menu-toggle') as HTMLButtonElement | null;

    const currentState = nav.getAttribute('data-state');
    const isCurrentlyOpen = currentState === 'open' || nav.classList.contains('active');
    const shouldClose = options.forceState ? options.forceState === 'closed' : isCurrentlyOpen;

    if (shouldClose) {
      this.close(nav, toggleBtn);
    } else {
      this.open(nav, toggleBtn);
    }
  }

  /**
   * Opens the mobile menu drawer
   */
  public static open(nav: HTMLElement, toggleBtn: HTMLButtonElement | null): void {
    nav.setAttribute('data-state', 'open');
    nav.classList.add('active');
    if (toggleBtn) {
      toggleBtn.setAttribute('aria-expanded', 'true');
    }
    document.body.setAttribute('data-nav-open', 'true');
    document.body.style.overflow = 'hidden';
  }

  /**
   * Closes the mobile menu drawer
   */
  public static close(nav: HTMLElement, toggleBtn: HTMLButtonElement | null): void {
    nav.setAttribute('data-state', 'closed');
    nav.classList.remove('active');
    if (toggleBtn) {
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
    document.body.removeAttribute('data-nav-open');
    document.body.style.overflow = '';
  }

  /**
   * Attach global document click listener with event delegation
   */
  private static attachEventListeners(): void {
    const handleNavigationInteraction = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const toggle = target.closest('.menu-toggle, #mobile-menu-toggle, .mobile-menu-btn');
      const closeBtn = target.closest('#mobile-menu-close, .mobile-nav-close');
      const navLink = target.closest('#mobile-nav a');

      if (toggle) {
        e.preventDefault();
        this.toggle();
      } else if (closeBtn) {
        e.preventDefault();
        this.toggle({ forceState: 'closed' });
      } else if (navLink) {
        this.toggle({ forceState: 'closed' });
      }
    };

    document.addEventListener('click', handleNavigationInteraction);
  }
}
