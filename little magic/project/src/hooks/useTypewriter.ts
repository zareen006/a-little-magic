import { useEffect, useState } from 'react';

/**
 * Reveals text progressively, like a typewriter.
 * Returns the currently-visible substring and whether it's done.
 */
export function useTypewriter(text: string, speed = 38, startDelay = 200) {
  const [output, setOutput] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    setOutput('');
    setDone(false);
    if (!text) {
      setDone(true);
      return;
    }
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    const startTimer = setTimeout(() => {
      timer = setInterval(() => {
        i += 1;
        setOutput(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(timer);
          setDone(true);
        }
      }, speed);
    }, startDelay);
    return () => {
      clearTimeout(startTimer);
      clearInterval(timer);
    };
  }, [text, speed, startDelay]);

  return { output, done };
}
