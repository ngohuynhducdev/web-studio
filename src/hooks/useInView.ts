'use client';

import { useEffect, useRef, useState } from 'react';

interface Options {
  threshold?: number;
  rootMargin?: string;
}

export function useInView<T extends Element = Element>(options?: Options) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  const { threshold = 0.12, rootMargin = '0px' } = options ?? {};

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect(); // fire once
        }
      },
      { threshold, rootMargin },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, rootMargin]);

  return [ref, inView] as const;
}
