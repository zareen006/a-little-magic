import { useState } from 'react';
import { content } from '@/content';
import { useGlobalReveal } from '@/hooks/useGlobalReveal';
import { FloatingDecorations } from '@/components/FloatingDecorations';
import { FloatingMusic } from '@/components/FloatingMusic';
import { TopNav } from '@/components/TopNav';
import { Confetti } from '@/components/Confetti';
import { HeartBurst } from '@/components/FloatingDecorations';
import { Welcome } from '@/sections/Welcome';
import { BirthdayMessage } from '@/sections/BirthdayMessage';
import { PhotoMemories } from '@/sections/PhotoMemories';
import { MemoryTimeline } from '@/sections/MemoryTimeline';
import { OurSong } from '@/sections/OurSong';
import { LittleThings } from '@/sections/LittleThings';
import { VideoMemory } from '@/sections/VideoMemory';
import { Surprise } from '@/sections/Surprise';
import { FinalPage } from '@/sections/FinalPage';

export default function App() {
  const [entered, setEntered] = useState(false);
  const [confetti, setConfetti] = useState(false);

  useGlobalReveal([entered]);

  const fireConfetti = () => {
    setConfetti(false);
    requestAnimationFrame(() => setConfetti(true));
  };

  const replay = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const musicSrc = content.music.src || content.song.src;

  return (
    <div className="relative min-h-[100svh] w-full overflow-x-hidden">
      <FloatingDecorations count={entered ? 16 : 10} />
      <Confetti play={confetti} />

      {!entered ? (
        <>
          <Welcome
            name={content.name}
            musicSrc={musicSrc}
            onOpen={() => setEntered(true)}
          />
        </>
      ) : (
        <>
          <TopNav visible={entered} />
          <main>
            <BirthdayMessage />
            <PhotoMemories />
            <MemoryTimeline />
            <OurSong />
            <LittleThings />
            <VideoMemory />
            <Surprise onConfetti={fireConfetti} />
            <FinalPage onReplay={replay} />
          </main>
          <HeartBurst active={confetti} />
        </>
      )}

      {entered && <FloatingMusic src={musicSrc} />}
    </div>
  );
}
