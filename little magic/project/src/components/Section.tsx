import { ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';

/**
 * Standard section wrapper with an animated script heading + subtitle,
 * a scroll-reveal entrance, and consistent vertical rhythm.
 */
export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = '',
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <section
      id={id}
      ref={ref}
      className={`relative mx-auto w-full max-w-6xl px-5 py-20 sm:py-28 ${className}`}
    >
      <header
        className={`reveal ${visible ? 'is-visible' : ''} mb-12 text-center sm:mb-16`}
      >
        {eyebrow && (
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-blush-500/80">
            {eyebrow}
          </p>
        )}
        <h2 className="dreamy-heading text-4xl sm:text-5xl md:text-6xl">{title}</h2>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-xl text-sm text-[#8a6273] sm:text-base">
            {subtitle}
          </p>
        )}
        <div className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-blush-300 to-transparent" />
      </header>
      {children}
    </section>
  );
}
