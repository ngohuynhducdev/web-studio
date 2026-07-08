'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import styles from './ShizenSpa.module.css';

interface Props {
  zaloUrl?: string;
}

export default function FloatingActions({ zaloUrl }: Props) {
  const [showTop, setShowTop] = useState(false);
  const pathname = usePathname();

  const isExternal = !!zaloUrl && !zaloUrl.startsWith('#');
  const href = zaloUrl ?? '#booking';

  const isDemo = pathname?.startsWith('/templates/');

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 480);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`fixed right-4 z-40 flex flex-col items-end gap-4 md:right-8 ${isDemo ? 'bottom-[4.75rem] md:bottom-20' : 'bottom-5 md:bottom-8'}`}>
      {/* Zalo button */}
      <a
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className="group relative inline-flex items-center justify-center w-[2.875rem] h-[2.875rem] md:w-12 md:h-12 rounded-full bg-[var(--sz-earth)] text-white no-underline cursor-pointer transition-[background,transform] duration-[220ms] hover:bg-[#7d6249] hover:-translate-y-0.5"
        aria-label="Nhắn Zalo đặt lịch"
      >
        {/* Pulse ring — class keeps keyframe scoped */}
        <span className={styles.floatZaloRing} aria-hidden="true" />
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="relative z-[1]">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        {/* Tooltip */}
        <span className="absolute right-[calc(100%+0.625rem)] top-1/2 -translate-y-1/2 bg-[var(--sz-earth)] text-white text-[0.72rem] font-medium tracking-[0.04em] whitespace-nowrap px-[0.625rem] py-[0.3125rem] rounded pointer-events-none opacity-0 transition-opacity duration-200 group-hover:opacity-100 after:content-[''] after:absolute after:left-full after:top-1/2 after:-translate-y-1/2 after:border-[5px] after:border-transparent after:border-l-[var(--sz-earth)]">
          Nhắn Zalo
        </span>
      </a>

      {/* Back to top */}
      <button
        className={`inline-flex items-center justify-center w-11 h-11 bg-[rgba(250,248,243,0.92)] border border-[var(--sz-border)] text-[var(--sz-ink)]/60 shadow-[0_0.25rem_1rem_rgba(90,70,50,0.12)] cursor-pointer transition-[opacity,transform,background,color] duration-300 ${showTop ? 'opacity-100 pointer-events-auto translate-y-0 hover:bg-[var(--sz-off)] hover:text-[var(--sz-ink)] hover:-translate-y-0.5' : 'opacity-0 pointer-events-none translate-y-2'}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Về đầu trang"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="3 9 7 5 11 9" />
        </svg>
      </button>
    </div>
  );
}
