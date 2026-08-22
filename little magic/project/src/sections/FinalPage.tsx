import { RotateCcw, Heart } from 'lucide-react';
import { Confetti } from '@/components/Confetti';
import { HeartBurst } from '@/components/FloatingDecorations';
import { content } from '@/content';

export function FinalPage({ onReplay }: { onReplay: () => void }) {
  return (
    <section className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden px-6 py-20 text-center">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-blush-200/60 blur-3xl animate-drift" />
        <div className="absolute -right-16 bottom-20 h-80 w-80 rounded-full bg-lavender-200/60 blur-3xl animate-drift [animation-delay:2s]" />
        <div className="absolute left-1/3 top-1/2 h-64 w-64 rounded-full bg-babyblue-200/50 blur-3xl animate-drift [animation-delay:4s]" />
      </div>

      <div className="relative z-10 flex max-w-2xl flex-col items-center">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-blush-500 shadow-sm backdrop-blur">
          <Heart className="h-3.5 w-3.5 fill-blush-400 text-blush-400" />
          Forever & always
        </span>

        <h1 className="dreamy-heading text-5xl leading-tight sm:text-7xl">
          Happy Birthday, {content.name} 🎂💗
        </h1>

        <p className="mt-6 max-w-md text-base text-[#6b4a57] sm:text-lg">
          Here's to more memories, more laughter, more adventures and many more beautiful
          moments together.
        </p>

        {/* Photo placeholder */}
        <div className="mt-10 aspect-square w-44 overflow-hidden rounded-full border-4 border-white/80 shadow-[0_20px_50px_-15px_rgba(194,77,124,0.5)] sm:w-52">
          <img
            src={content.photos[0]?.url}
            alt="A favorite memory"
            className="h-full w-full object-cover"
          />
        </div>

        <button
          type="button"
          onClick={onReplay}
          className="pill-btn mt-12 animate-pulseGlow bg-gradient-to-r from-blush-400 via-blush-500 to-lavender-300 bg-[length:200%_auto] px-8 py-4 text-base font-semibold text-white animate-gradientShift"
        >
          <RotateCcw className="h-5 w-5" />
          Experience It Again ✨
        </button>

        <p className="font-script mt-10 text-2xl text-blush-500 sm:text-3xl">
          Made with love, just for you 💗
        </p>
      </div>
    </section>
  );
}
