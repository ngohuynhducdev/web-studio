'use client';

import { useEffect, useRef } from 'react';

// Vertical parallax: translates the element as its parent moves through the
// viewport. Measures the parent (not the element itself) so the transform
// doesn't feed back into the measurement. Respects prefers-reduced-motion.
export function useParallax<T extends HTMLElement>(speed = 0.1) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const target = el.parentElement ?? el;
    let raf = 0;

    const update = () => {
      raf = 0;
      const rect = target.getBoundingClientRect();
      const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * speed;
      el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed]);

  return ref;
}
