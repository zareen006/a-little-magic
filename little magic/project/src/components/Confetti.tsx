import { useCallback, useEffect, useRef, useState } from 'react';

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  rotation: number;
  spin: number;
  shape: 'rect' | 'circle';
  life: number;
};

const COLORS = ['#ffb3cd', '#f592b6', '#cdb4ff', '#b4d8ff', '#fdf6e9', '#ff8db3', '#e4d6ff'];

/**
 * Canvas confetti burst. Call via the `fire` ref from a parent.
 * Stays mounted; particles are drawn only while active.
 */
export function Confetti({ play }: { play: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number | null>(null);
  const [active, setActive] = useState(false);

  const spawn = useCallback((count: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const w = canvas.width;
    const h = canvas.height;
    const newParticles: Particle[] = Array.from({ length: count }).map(() => {
      const fromLeft = Math.random() > 0.5;
      return {
        x: fromLeft ? -20 : w + 20,
        y: h * (0.1 + Math.random() * 0.5),
        vx: (fromLeft ? 1 : -1) * (2 + Math.random() * 5),
        vy: -(2 + Math.random() * 6),
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        size: 6 + Math.random() * 8,
        rotation: Math.random() * Math.PI,
        spin: (Math.random() - 0.5) * 0.3,
        shape: Math.random() > 0.4 ? 'rect' : 'circle',
        life: 1,
      };
    });
    particlesRef.current = [...particlesRef.current, ...newParticles];
    setActive(true);
  }, []);

  // Fire whenever play flips to true
  useEffect(() => {
    if (play) {
      spawn(140);
      const t2 = setTimeout(() => spawn(90), 500);
      const t3 = setTimeout(() => spawn(60), 1100);
      return () => {
        clearTimeout(t2);
        clearTimeout(t3);
      };
    }
  }, [play, spawn]);

  // Resize handling
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  // Animation loop
  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const gravity = 0.12;
      const drag = 0.992;
      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.vy += gravity;
        p.vx *= drag;
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.spin;
        p.life -= 0.006;
        if (p.life <= 0 || p.y > canvas.height + 40) {
          particles.splice(i, 1);
          continue;
        }
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = Math.max(0, p.life);
        ctx.fillStyle = p.color;
        if (p.shape === 'rect') {
          ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }
      if (particles.length === 0) {
        setActive(false);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
        return;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [active]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[70]"
      aria-hidden="true"
    />
  );
}
