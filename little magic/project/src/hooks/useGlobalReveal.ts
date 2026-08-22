import { useEffect } from 'react';

/**
 * Globally observes any element with the `reveal` class and adds
 * `is-visible` when it enters the viewport. Re-scans when `deps` change
 * so dynamically added sections (after the welcome transition) are caught.
 */
export function useGlobalReveal(deps: unknown[] = []) {
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );

    const els = document.querySelectorAll('.reveal:not(.is-visible)');
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
