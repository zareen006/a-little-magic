import { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Section } from '@/components/Section';
import { content } from '@/content';

export function PhotoMemories() {
  const [open, setOpen] = useState<number | null>(null);

  const close = () => setOpen(null);
  const prev = () => setOpen((i) => (i === null ? i : (i - 1 + content.photos.length) % content.photos.length));
  const next = () => setOpen((i) => (i === null ? i : (i + 1) % content.photos.length));

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <Section
      id="photos"
      eyebrow="Snapshots of us"
      title="Our Little Memories 📸"
      subtitle="A few moments I never want to forget."
    >
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {content.photos.map((photo, i) => (
          <Polaroid
            key={i}
            src={photo.url}
            caption={photo.caption}
            rotate={photo.rotate}
            index={i}
            onOpen={() => setOpen(i)}
          />
        ))}
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[#3a2230]/70 p-4 backdrop-blur-md"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/80 text-[#6b4a57] shadow-lg transition hover:scale-110 hover:bg-white"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
            className="absolute left-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-blush-500 shadow-lg transition hover:scale-110 hover:bg-white sm:left-6"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
            className="absolute right-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-blush-500 shadow-lg transition hover:scale-110 hover:bg-white sm:right-6"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <figure
            className="animate-scaleIn max-h-[85vh] max-w-3xl overflow-hidden rounded-2xl bg-white p-3 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={content.photos[open].url}
              alt={content.photos[open].caption}
              className="max-h-[70vh] w-full rounded-xl object-contain"
            />
            <figcaption className="font-script mt-3 text-center text-2xl text-blush-600">
              {content.photos[open].caption}
            </figcaption>
          </figure>
        </div>
      )}
    </Section>
  );
}

function Polaroid({
  src,
  caption,
  rotate,
  index,
  onOpen,
}: {
  src: string;
  caption: string;
  rotate: number;
  index: number;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative mx-auto block w-full max-w-xs animate-fadeInUp bg-white p-3 pb-4 text-left shadow-[0_12px_30px_-12px_rgba(194,77,124,0.4)] transition-all duration-500 hover:z-10 hover:!rotate-0 hover:scale-105 hover:shadow-[0_24px_50px_-12px_rgba(194,77,124,0.5)]"
      style={{
        transform: `rotate(${rotate}deg)`,
        animationDelay: `${index * 0.12}s`,
      }}
    >
      <span className="absolute -top-3 left-1/2 h-5 w-16 -translate-x-1/2 rotate-[-3deg] rounded-sm bg-blush-200/70 shadow-sm" />
      <div className="relative overflow-hidden rounded-sm">
        <img
          src={src}
          alt={caption}
          loading="lazy"
          className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-blush-500/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
      <p className="font-script mt-3 text-center text-xl text-[#6b4a57]">{caption}</p>
    </button>
  );
}
