import { useEffect } from 'react';
import { Music, Music2, Volume2, VolumeX } from 'lucide-react';
import { formatTime, useAudioPlayer } from '@/hooks/useAudioPlayer';

/**
 * Small music control that floats in the corner while scrolling.
 * Won't autoplay — only plays after the visitor taps it.
 */
export function FloatingMusic({ src }: { src: string }) {
  const { isPlaying, toggle, progress, currentTime, duration, ready } = useAudioPlayer(src);

  // Pause audio when the tab is hidden to avoid surprises
  useEffect(() => {
    if (!src) return;
    const onVis = () => {
      if (document.hidden && isPlaying) toggle();
    };
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src, isPlaying]);

  if (!src) {
    return (
      <button
        type="button"
        disabled
        title="Add an audio file to enable music"
        className="pill-btn fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/70 text-blush-400 shadow-lg backdrop-blur disabled:opacity-50 sm:h-14 sm:w-14"
      >
        <Music className="h-5 w-5" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isPlaying ? 'Pause music' : 'Play music'}
      className="pill-btn fixed bottom-5 right-5 z-50 flex h-12 items-center gap-2 rounded-full bg-white/80 px-3 text-blush-600 shadow-lg backdrop-blur-md transition-colors hover:bg-white sm:h-14 sm:px-4"
    >
      <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blush-300 to-lavender-300 text-white sm:h-9 sm:w-9">
        {isPlaying ? (
          <Music2 className="h-4 w-4 animate-pulse" />
        ) : (
          <VolumeX className="h-4 w-4" />
        )}
        {isPlaying && (
          <span className="absolute inset-0 animate-ping rounded-full bg-blush-300 opacity-40" />
        )}
      </span>
      <span className="hidden text-xs font-medium leading-tight text-[#8a6273] sm:block">
        {isPlaying ? 'Now playing' : 'Play music'}
        {ready && isPlaying && (
          <span className="block tabular-nums text-[10px] text-blush-400">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
        )}
      </span>
      {isPlaying && (
        <span className="sr-only">{Math.round(progress * 100)} percent</span>
      )}
    </button>
  );
}

export function FloatingMusicAlt({ src }: { src: string }) {
  // Tiny variant used on the welcome screen before scrolling
  const { isPlaying, toggle } = useAudioPlayer(src);
  if (!src) return null;
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isPlaying ? 'Pause music' : 'Play music'}
      className="pill-btn flex h-11 w-11 items-center justify-center rounded-full bg-white/70 text-blush-500 shadow-md backdrop-blur"
    >
      {isPlaying ? <Volume2 className="h-5 w-5" /> : <Music className="h-5 w-5" />}
    </button>
  );
}
