import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

const LINKS = [
  { id: 'message', label: 'Letter' },
  { id: 'photos', label: 'Memories' },
  { id: 'timeline', label: 'Moments' },
  { id: 'song', label: 'Song' },
  { id: 'little-things', label: 'Little Things' },
  { id: 'video', label: 'Video' },
  { id: 'surprise', label: 'Surprise' },
];

export function TopNav({ visible }: { visible: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  if (!visible) return null;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled ? 'bg-white/70 shadow-sm backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 text-blush-600"
        >
          <Heart className="h-4 w-4 fill-blush-400 text-blush-400" />
          <span className="font-script text-xl">For You</span>
        </button>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <li key={l.id}>
              <button
                type="button"
                onClick={() => go(l.id)}
                className="rounded-full px-3 py-1.5 text-sm text-[#6b4a57] transition hover:bg-blush-100 hover:text-blush-600"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-blush-500 shadow-sm backdrop-blur md:hidden"
        >
          <span className="flex flex-col gap-1">
            <span className={`h-0.5 w-5 bg-current transition ${open ? 'translate-y-1.5 rotate-45' : ''}`} />
            <span className={`h-0.5 w-5 bg-current transition ${open ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-5 bg-current transition ${open ? '-translate-y-1.5 -rotate-45' : ''}`} />
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="mx-4 mb-3 space-y-1 rounded-2xl bg-white/90 p-3 shadow-lg backdrop-blur">
          {LINKS.map((l) => (
            <li key={l.id}>
              <button
                type="button"
                onClick={() => go(l.id)}
                className="block w-full rounded-xl px-4 py-2.5 text-left text-sm text-[#6b4a57] transition hover:bg-blush-100 hover:text-blush-600"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
