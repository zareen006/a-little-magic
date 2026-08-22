import { Section } from '@/components/Section';
import { useTypewriter } from '@/hooks/useTypewriter';
import { content } from '@/content';

export function BirthdayMessage() {
  const greeting = `Dear ${content.name},`;
  const { output: greetingOut } = useTypewriter(greeting, 55, 300);

  return (
    <Section
      id="message"
      eyebrow="A letter for you"
      title={`Happy Birthday, ${content.name} 🎂`}
      subtitle="I wrote this for you — every word of it."
    >
      <div className="mx-auto max-w-2xl">
        <article className="soft-card relative rounded-[2rem] p-8 sm:p-12">
          {/* tape detail */}
          <span className="absolute -top-3 left-1/2 h-6 w-24 -translate-x-1/2 rotate-[-2deg] rounded-sm bg-blush-200/70 shadow-sm" />

          <p className="font-script text-3xl text-blush-600 sm:text-4xl">{greetingOut}</p>

          <div className="mt-6 space-y-5">
            {content.letter.map((line, i) => (
              <LetterLine key={i} line={line} delay={900 + i * 1400} />
            ))}
          </div>

          <p className="font-script mt-8 text-right text-2xl text-blush-500 sm:text-3xl">
            Always yours 💗
          </p>
        </article>
      </div>
    </Section>
  );
}

function LetterLine({ line, delay }: { line: string; delay: number }) {
  const { output, done } = useTypewriter(line, 28, delay);
  return (
    <p
      className={`font-serif-display text-lg leading-relaxed text-[#6b4a57] transition-opacity duration-500 sm:text-xl ${
        done ? 'opacity-100' : 'opacity-90'
      }`}
    >
      {output}
      {!done && <span className="ml-0.5 inline-block w-0.5 animate-pulse bg-blush-400 align-middle" style={{ height: '1.1em' }} />}
    </p>
  );
}
