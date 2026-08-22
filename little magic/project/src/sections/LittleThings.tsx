import { Section } from '@/components/Section';
import { content } from '@/content';

export function LittleThings() {
  return (
    <Section
      id="little-things"
      eyebrow="The tiny details"
      title="Little Things I Love About You 💗"
      subtitle="All the small things that make you, you."
    >
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
        {content.littleThings.map((thing, i) => (
          <ThingCard key={i} emoji={thing.emoji} text={thing.text} index={i} />
        ))}
      </div>
    </Section>
  );
}

function ThingCard({
  emoji,
  text,
  index,
}: {
  emoji: string;
  text: string;
  index: number;
}) {
  return (
    <div
      className="group relative animate-fadeInUp cursor-default overflow-hidden rounded-3xl bg-white/75 p-6 text-center shadow-[0_12px_30px_-14px_rgba(194,77,124,0.35)] backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-[0_24px_50px_-14px_rgba(194,77,124,0.45)]"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blush-100/0 via-transparent to-lavender-100/0 opacity-0 transition-opacity duration-500 group-hover:from-blush-100/60 group-hover:to-lavender-100/60 group-hover:opacity-100" />
      <div className="relative">
        <span className="block text-4xl transition-transform duration-500 group-hover:scale-125 group-hover:-rotate-6 sm:text-5xl">
          {emoji}
        </span>
        <p className="font-serif-display mt-3 text-lg text-[#5a3b48] sm:text-xl">{text}</p>
      </div>
      <span className="pointer-events-none absolute -right-2 -top-2 text-xl opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
        💗
      </span>
    </div>
  );
}
