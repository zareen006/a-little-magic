import { useMemo } from 'react';

type Decoration = {
  kind: 'heart' | 'star' | 'sparkle' | 'dot';
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  drift: number;
};

const EMOJI: Record<Decoration['kind'], string> = {
  heart: '💗',
  star: '✨',
  sparkle: '⭐',
  dot: '·',
};

/**
 * Floating hearts, stars and sparkles that drift upward across the page.
 * Purely decorative and pointer-events-none.
 */
export function FloatingDecorations({ count = 18 }: { count?: number }) {
  const items = useMemo<Decoration[]>(() => {
    const kinds: Decoration['kind'][] = ['heart', 'star', 'sparkle', 'heart', 'dot'];
    return Array.from({ length: count }).map((_, i) => ({
      kind: kinds[i % kinds.length],
      left: Math.random() * 100,
      size: 10 + Math.random() * 18,
      duration: 14 + Math.random() * 16,
      delay: Math.random() * 18,
      opacity: 0.35 + Math.random() * 0.45,
      drift: (Math.random() - 0.5) * 40,
    }));
  }, [count]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden" aria-hidden="true">
      {items.map((d, i) => (
        <span
          key={i}
          className="absolute bottom-[-40px] select-none"
          style={{
            left: `${d.left}%`,
            fontSize: `${d.size}px`,
            opacity: d.opacity,
            animation: `floatUp ${d.duration}s linear ${d.delay}s infinite`,
            ['--drift' as string]: `${d.drift}px`,
          }}
        >
          {EMOJI[d.kind]}
        </span>
      ))}
    </div>
  );
}

/**
 * Twinkling soft star points scattered behind a section.
 */
export function TwinkleLayer({ count = 14 }: { count?: number }) {
  const stars = useMemo(
    () =>
      Array.from({ length: count }).map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 4 + Math.random() * 8,
        delay: Math.random() * 3,
        duration: 2.5 + Math.random() * 2,
      })),
    [count]
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {stars.map((s, i) => (
        <span
          key={i}
          className="absolute text-blush-300"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            fontSize: `${s.size}px`,
            animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
          }}
        >
          ✦
        </span>
      ))}
    </div>
  );
}

/**
 * A burst of floating hearts from the bottom of the screen.
 * Used during the surprise reveal.
 */
export function HeartBurst({ active }: { active: boolean }) {
  const hearts = useMemo(
    () =>
      Array.from({ length: 26 }).map(() => ({
        left: Math.random() * 100,
        size: 14 + Math.random() * 24,
        duration: 4 + Math.random() * 4,
        delay: Math.random() * 1.5,
        emoji: ['💗', '💖', '💕', '💓'][Math.floor(Math.random() * 4)],
      })),
    []
  );
  if (!active) return null;
  return (
    <div className="pointer-events-none fixed inset-0 z-[60] overflow-hidden" aria-hidden="true">
      {hearts.map((h, i) => (
        <span
          key={i}
          className="absolute bottom-[-40px] select-none"
          style={{
            left: `${h.left}%`,
            fontSize: `${h.size}px`,
            animation: `heartRise ${h.duration}s ease-in ${h.delay}s forwards`,
          }}
        >
          {h.emoji}
        </span>
      ))}
    </div>
  );
}
