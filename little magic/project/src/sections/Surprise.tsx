import { useState } from 'react';
import { Gift } from 'lucide-react';
import { Section } from '@/components/Section';
import { content } from '@/content';
import { Confetti } from '@/components/Confetti';
import { HeartBurst } from '@/components/FloatingDecorations';

export function Surprise({ onConfetti }: { onConfetti: () => void }) {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    if (opened) return;
    setOpened(true);
    onConfetti();
  };

  return (
    <Section
      id="surprise"
      eyebrow="One last thing"
      title="There's one more thing... 🎁"
      subtitle="Go on, open it."
    >
      <div className="flex flex-col items-center gap-10">
        {/* Gift box */}
        <button
          type="button"
          onClick={handleOpen}
          aria-label="Open your final surprise"
          className="relative flex h-56 w-56 flex-col items-center justify-end sm:h-64 sm:w-64"
        >
          {/* Box body */}
          <div
            className={`relative h-36 w-44 rounded-lg bg-gradient-to-br from-blush-300 to-blush-500 shadow-[0_18px_40px_-12px_rgba(194,77,124,0.6)] transition-all duration-700 sm:h-40 sm:w-48 ${
              opened ? 'scale-90 opacity-80' : 'animate-boxJump'
            }`}
          >
            <span className="absolute left-1/2 top-0 h-full w-6 -translate-x-1/2 bg-blush-600/40" />
            <span className="absolute left-0 top-1/2 h-6 w-full -translate-y-1/2 bg-blush-600/40" />
          </div>
          {/* Lid */}
          <div
            className={`absolute -top-2 h-10 w-52 rounded-md bg-gradient-to-br from-blush-400 to-blush-600 shadow-lg transition-all duration-700 ease-out sm:w-56 ${
              opened ? '-translate-y-20 -rotate-12 opacity-0' : ''
            }`}
          >
            <span className="absolute left-1/2 top-1/2 h-full w-5 -translate-x-1/2 -translate-y-1/2 bg-blush-700/50" />
          </div>
          {/* Bow */}
          <span
            className={`absolute -top-6 text-4xl transition-all duration-700 ${
              opened ? '-translate-y-24 rotate-12 opacity-0' : ''
            }`}
          >
            🎀
          </span>
          {!opened && (
            <span className="mt-4 flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-blush-600 shadow-md backdrop-blur">
              <Gift className="h-4 w-4" /> Open Your Final Surprise
            </span>
          )}
        </button>

        {/* Hidden message */}
        <div
          className={`max-w-xl transition-all duration-1000 ${
            opened ? 'scale-100 opacity-100' : 'pointer-events-none scale-90 opacity-0'
          }`}
        >
          <div className="glass-card rounded-[2rem] p-8 text-center sm:p-12">
            {content.surpriseMessage.map((line, i) => (
              <p
                key={i}
                className={`${
                  i === 1
                    ? 'font-script text-3xl text-blush-600 sm:text-4xl'
                    : 'font-serif-display text-lg text-[#5a3b48] sm:text-xl'
                } ${i > 0 ? 'mt-3' : ''}`}
                style={{
                  animation: opened ? `fadeInUp 0.8s ${0.2 + i * 0.3}s both` : 'none',
                }}
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
