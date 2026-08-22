import { Section } from '@/components/Section';
import { content } from '@/content';
import { Film } from 'lucide-react';

export function VideoMemory() {
  const { src, poster, caption } = content.video;
  return (
    <Section
      id="video"
      eyebrow="Press play on us"
      title="One More Memory 🎥"
      subtitle="A little something moving, just for you."
    >
      <div className="mx-auto max-w-3xl">
        <div className="group relative overflow-hidden rounded-[2rem] bg-black/5 p-3 shadow-[0_24px_60px_-20px_rgba(194,77,124,0.45)]">
          <div className="relative overflow-hidden rounded-2xl">
            {src ? (
              <video
                src={src}
                poster={poster}
                controls
                playsInline
                className="aspect-video w-full bg-black object-cover"
              />
            ) : (
              <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden">
                <img
                  src={poster}
                  alt={caption}
                  className="absolute inset-0 h-full w-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3a2230]/60 to-transparent" />
                <div className="relative z-10 flex flex-col items-center gap-3 text-center text-white">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
                    <Film className="h-7 w-7" />
                  </span>
                  <p className="px-6 text-sm text-white/90">
                    Add a video file to play a special memory here. 🎥
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        <p className="font-script mt-5 text-center text-2xl text-blush-600">{caption}</p>
      </div>
    </Section>
  );
}
