'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import styles from './SuoiMay.module.css';
import { ChatIcon } from './icons';

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
        className="group relative inline-flex items-center justify-center w-[2.875rem] h-[2.875rem] md:w-12 md:h-12 rounded-full bg-[var(--sm-accent)] text-[var(--sm-light)] no-underline cursor-pointer transition-[filter,transform] duration-[220ms] hover:brightness-105 hover:-translate-y-0.5"
        aria-label="Nhắn Zalo giữ chỗ"
      >
        <span className={styles.floatZaloRing} aria-hidden="true" />
        <span className="relative z-[1]"><ChatIcon /></span>
        {/* Tooltip */}
        <span className="absolute right-[calc(100%+0.625rem)] top-1/2 -translate-y-1/2 bg-[var(--sm-accent)] text-[var(--sm-bg)] text-[0.72rem] font-semibold tracking-[0.04em] whitespace-nowrap px-[0.625rem] py-[0.3125rem] rounded pointer-events-none opacity-0 transition-opacity duration-200 group-hover:opacity-100 after:content-[''] after:absolute after:left-full after:top-1/2 after:-translate-y-1/2 after:border-[5px] after:border-transparent after:border-l-[var(--sm-accent)]">
          Nhắn Zalo
        </span>
      </a>

      {/* Back to top */}
      <button
        className={`inline-flex items-center justify-center w-11 h-11 rounded-full bg-[var(--sm-bg0)] border border-[rgba(244,237,226,0.15)] text-[var(--sm-light)]/65 cursor-pointer transition-[opacity,transform,background,color] duration-300 ${showTop ? 'opacity-100 pointer-events-auto translate-y-0 hover:text-[var(--sm-light)] hover:-translate-y-0.5' : 'opacity-0 pointer-events-none translate-y-2'}`}
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
