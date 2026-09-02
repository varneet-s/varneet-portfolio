/**
 * Strongly-typed Mobile Navigation Controller
 * Handles mobile drawer state, DOM isolation, touch scroll locking, and event delegation.
 */

export interface NavStateOptions {
  forceState?: 'open' | 'closed';
}

export class MobileNavManager {
  private static lastToggleTimestamp = 0;
  private static readonly DEBOUNCE_MS = 250;

  /**
   * Initializes event listeners and attaches the mobile drawer to document.body
   */
  public static init(): void {
    if (typeof window === 'undefined') return;

    this.ensureDrawerInBody();
    this.attachEventListeners();
    
    // Register global window helper for fallback compatibility
    (window as any).toggleMobileNav = (forceState?: 'open' | 'closed') => {
      this.toggle({ forceState });
    };
  }

  /**
   * Ensures #mobile-nav exists and is appended directly to document.body
   */
  public static ensureDrawerInBody(): HTMLElement | null {
    const nav = document.getElementById('mobile-nav');
    if (nav && nav.parentElement !== document.body) {
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
      return; // Ignore duplicate event triggers within 250ms
    }
    this.lastToggleTimestamp = now;

    const nav = this.ensureDrawerInBody();
    const toggleBtn = document.getElementById('mobile-menu-toggle') as HTMLButtonElement | null;
    if (!nav) return;

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
    document.addEventListener('click', (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const toggle = target.closest('.menu-toggle, #mobile-menu-toggle, .mobile-menu-btn');
      const closeBtn = target.closest('#mobile-menu-close, .mobile-nav-close');
      const navLink = target.closest('#mobile-nav a');

      if (toggle) {
        e.preventDefault();
        e.stopPropagation();
        this.toggle();
      } else if (closeBtn) {
        e.preventDefault();
        e.stopPropagation();
        this.toggle({ forceState: 'closed' });
      } else if (navLink) {
        this.toggle({ forceState: 'closed' });
      }
    });
  }
}
