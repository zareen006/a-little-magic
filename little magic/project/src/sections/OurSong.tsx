import { useRef } from 'react';
import { Play, Pause, Heart } from 'lucide-react';
import { Section } from '@/components/Section';
import { content } from '@/content';
import { formatTime, useAudioPlayer } from '@/hooks/useAudioPlayer';

export function OurSong() {
  const { isPlaying, toggle, progress, currentTime, duration, seek } = useAudioPlayer(
    content.song.src || content.music.src
  );
  const hasAudio = Boolean(content.song.src || content.music.src);
  const barRef = useRef<HTMLDivElement | null>(null);

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const bar = barRef.current;
    if (!bar) return;
    const rect = bar.getBoundingClientRect();
    const fraction = (e.clientX - rect.left) / rect.width;
    seek(Math.min(1, Math.max(0, fraction)));
  };

  return (
    <Section
      id="song"
      eyebrow="Press play"
      title="A Song That Reminds Me of You 🎧"
      subtitle="Whenever I hear it, I think of you."
    >
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 sm:flex-row sm:items-stretch">
        {/* Cover */}
        <div className="relative aspect-square w-44 shrink-0 overflow-hidden rounded-3xl shadow-[0_20px_50px_-15px_rgba(194,77,124,0.5)] sm:w-52">
          <img
            src={content.song.cover}
            alt={content.song.title}
            className={`h-full w-full object-cover transition-transform duration-700 ${
              isPlaying ? 'scale-105' : 'scale-100'
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blush-500/30 to-transparent" />
          <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-blush-500 shadow-md backdrop-blur">
            <Heart className="h-4 w-4 fill-blush-400 text-blush-400" />
          </span>
          {isPlaying && (
            <div className="absolute left-3 top-3 flex items-end gap-1">
              {[0, 1, 2].map((b) => (
                <span
                  key={b}
                  className="w-1 rounded-full bg-white/90"
                  style={{
                    height: '14px',
                    animation: `bobble ${0.6 + b * 0.2}s ease-in-out ${b * 0.15}s infinite`,
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Player */}
        <div className="soft-card flex flex-1 flex-col justify-center gap-5 rounded-3xl p-6 sm:p-8">
          <div>
            <h3 className="font-serif-display text-2xl text-[#5a3b48] sm:text-3xl">
              {content.song.title}
            </h3>
            <p className="mt-1 text-sm text-[#8a6273]">{content.song.artist}</p>
          </div>

          {hasAudio ? (
            <>
              {/* Progress */}
              <div>
                <div
                  ref={barRef}
                  onClick={handleSeek}
                  className="group relative h-2 cursor-pointer rounded-full bg-blush-100"
                >
                  <div
                    className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-blush-400 to-lavender-300"
                    style={{ width: `${progress * 100}%` }}
                  />
                  <div
                    className="absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-md transition-transform group-hover:scale-125"
                    style={{ left: `${progress * 100}%` }}
                  />
                </div>
                <div className="mt-2 flex justify-between text-xs tabular-nums text-[#8a6273]">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={toggle}
                className="pill-btn self-start bg-gradient-to-r from-blush-400 to-lavender-300 px-6 py-3 font-semibold text-white shadow-md"
              >
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                {isPlaying ? 'Pause' : 'Play'}
              </button>
            </>
          ) : (
            <p className="rounded-xl bg-blush-50 px-4 py-3 text-sm text-[#8a6273]">
              Add an audio file to hear this song. 💗
            </p>
          )}
        </div>
      </div>
    </Section>
  );
}
