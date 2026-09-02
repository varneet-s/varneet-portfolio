/**
 * Strongly-typed Mobile Navigation Controller
 * Handles mobile drawer state, DOM isolation, touch scroll locking, and event delegation.
 */

export interface NavStateOptions {
  forceState?: 'open' | 'closed';
}

export class MobileNavManager {
  private static lastToggleTimestamp = 0;
  private static readonly DEBOUNCE_MS = 350;
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
    // 350ms timestamp guard prevents double-toggles from fast event bubbling cascades
    if (options.forceState === undefined && now - this.lastToggleTimestamp < this.DEBOUNCE_MS) {
      return;
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
      if ((e as any)._navHandled) return;

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const toggle = target.closest('.menu-toggle, #mobile-menu-toggle, .mobile-menu-btn');
      const closeBtn = target.closest('#mobile-menu-close, .mobile-nav-close');
      const navLink = target.closest('#mobile-nav a');

      if (toggle) {
        (e as any)._navHandled = true;
        e.preventDefault();
        e.stopPropagation();
        this.toggle();
      } else if (closeBtn) {
        (e as any)._navHandled = true;
        e.preventDefault();
        e.stopPropagation();
        this.toggle({ forceState: 'closed' });
      } else if (navLink) {
        (e as any)._navHandled = true;
        this.toggle({ forceState: 'closed' });
      }
    }, true);
  }
}
