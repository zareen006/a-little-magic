import { useState } from 'react';
import { Sparkles, Heart } from 'lucide-react';
import { FloatingMusicAlt } from '@/components/FloatingMusic';
import { TwinkleLayer } from '@/components/FloatingDecorations';

export function Welcome({
  name,
  musicSrc,
  onOpen,
}: {
  name: string;
  musicSrc: string;
  onOpen: () => void;
}) {
  const [leaving, setLeaving] = useState(false);

  const handleOpen = () => {
    setLeaving(true);
    setTimeout(onOpen, 900);
  };

  return (
    <div
      className={`relative min-h-[100svh] w-full overflow-hidden transition-all duration-700 ${
        leaving ? 'scale-110 opacity-0 blur-md' : 'scale-100 opacity-100'
      }`}
    >
      {/* Dreamy gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blush-200/60 blur-3xl animate-drift" />
        <div className="absolute -right-20 top-1/3 h-80 w-80 rounded-full bg-lavender-200/60 blur-3xl animate-drift [animation-delay:1.5s]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-babyblue-200/50 blur-3xl animate-drift [animation-delay:5s]" />
      </div>
      <TwinkleLayer count={20} />

      <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-6 text-center">
        <div className="animate-scaleIn">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-blush-500 shadow-sm backdrop-blur">
            <Heart className="h-3.5 w-3.5 fill-blush-400 text-blush-400" />
            Just for you
          </span>
        </div>

        <h1
          className="dreamy-heading animate-fadeInUp [animation-delay:0.15s] text-5xl leading-tight sm:text-7xl md:text-8xl"
        >
          A Little Something
          <br className="hidden sm:block" /> For You 💗
        </h1>

        <p className="mt-6 max-w-md animate-fadeInUp text-base text-[#8a6273] [animation-delay:0.35s] sm:text-lg">
          Add a short birthday message of your choice.
        </p>

        <div className="mt-10 flex animate-fadeInUp flex-col items-center gap-5 [animation-delay:0.55s] sm:flex-row">
          <button
            type="button"
            onClick={handleOpen}
            className="pill-btn animate-pulseGlow bg-gradient-to-r from-blush-400 via-blush-500 to-lavender-300 bg-[length:200%_auto] px-8 py-4 text-base font-semibold text-white animate-gradientShift"
          >
            <Sparkles className="h-5 w-5" />
            Open Your Surprise ✨
          </button>
          <FloatingMusicAlt src={musicSrc} />
        </div>

        <p className="mt-12 animate-fadeInUp text-xs text-blush-400/70 [animation-delay:0.8s]">
          Best experienced with sound on 🎧
        </p>
      </div>

      {/* Bottom fade into the experience */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/40 to-transparent" />
    </div>
  );
}
