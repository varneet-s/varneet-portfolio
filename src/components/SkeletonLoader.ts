/**
 * Strongly-typed Loading Skeleton Controller
 * Manages shimmer animations and smooth content cross-fades for images and dynamic cards.
 */

export class SkeletonLoader {
  /**
   * Initializes skeleton loaders for images and dynamic project cards
   */
  public static init(): void {
    if (typeof document === 'undefined') return;

    const setup = () => {
      this.attachImageSkeletons();
      this.attachOverlaySkeletons();
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', setup);
    } else {
      setup();
    }
  }

  /**
   * Attaches shimmer skeletons to standard images until fully loaded
   */
  private static attachImageSkeletons(): void {
    const images = document.querySelectorAll('img[data-skeleton="true"], .project-img, .project-card-img, .hero-avatar-img, .local-footer-avatar-img');

    images.forEach((node) => {
      const img = node as HTMLImageElement;
      
      // If already cached/loaded by browser
      if (img.complete && img.naturalHeight !== 0) {
        this.markLoaded(img);
        return;
      }

      img.classList.add('skeleton-shimmer');

      img.addEventListener('load', () => {
        this.markLoaded(img);
      });

      img.addEventListener('error', () => {
        this.markLoaded(img);
      });
    });
  }

  /**
   * Fades out skeleton overlay cards once content is ready
   */
  private static attachOverlaySkeletons(): void {
    const overlays = document.querySelectorAll('.skeleton-overlay');
    overlays.forEach((overlay) => {
      setTimeout(() => {
        overlay.classList.add('loaded');
        setTimeout(() => overlay.remove(), 400);
      }, 200);
    });
  }

  /**
   * Removes skeleton shimmer class with smooth transition
   */
  private static markLoaded(img: HTMLImageElement): void {
    img.classList.remove('skeleton-shimmer');
    img.style.transition = 'opacity 0.3s ease-out';
    img.style.opacity = '1';
  }
}
