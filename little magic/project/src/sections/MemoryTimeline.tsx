import { Section } from '@/components/Section';
import { content } from '@/content';

export function MemoryTimeline() {
  return (
    <Section
      id="timeline"
      eyebrow="The story so far"
      title="Some Moments I'll Always Remember 🫶"
      subtitle="Each one is a piece of us."
    >
      <div className="relative mx-auto max-w-3xl">
        {/* Center line */}
        <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-blush-300 via-lavender-300 to-babyblue-300 sm:left-1/2 sm:-translate-x-1/2" />

        <div className="space-y-12">
          {content.timeline.map((item, i) => (
            <TimelineCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </Section>
  );
}

function TimelineCard({
  item,
  index,
}: {
  item: { date: string; title: string; story: string; photo: string };
  index: number;
}) {
  const isLeft = index % 2 === 0;
  return (
    <div
      className={`reveal relative flex flex-col gap-4 pl-12 sm:flex-row sm:items-center sm:pl-0 ${
        isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'
      }`}
      data-side={isLeft ? 'left' : 'right'}
    >
      {/* Node */}
      <div className="absolute left-4 top-2 z-10 -translate-x-1/2 sm:left-1/2">
        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-blush-400 ring-4 ring-blush-100" />
        <span className="absolute inset-0 animate-ping rounded-full bg-blush-300 opacity-40" />
      </div>

      {/* Spacer for desktop alternating layout */}
      <div className="hidden sm:block sm:w-1/2" />

      <div className="group w-full overflow-hidden rounded-3xl bg-white/80 p-4 shadow-[0_14px_40px_-16px_rgba(180,120,160,0.3)] backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_-16px_rgba(194,77,124,0.4)] sm:w-1/2">
        <div className="overflow-hidden rounded-2xl">
          <img
            src={item.photo}
            alt={item.title}
            loading="lazy"
            className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-110 sm:h-52"
          />
        </div>
        <div className="px-1 pb-1 pt-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blush-500">
            {item.date}
          </p>
          <h3 className="font-serif-display mt-1 text-xl text-[#5a3b48] sm:text-2xl">
            {item.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[#8a6273]">{item.story}</p>
        </div>
      </div>
    </div>
  );
}
