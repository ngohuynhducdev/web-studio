'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import styles from './BachThao.module.css';
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
    <div
      className={`fixed right-4 z-40 flex flex-col items-end gap-4 md:right-8 ${
        isDemo ? 'bottom-[4.75rem] md:bottom-20' : 'bottom-5 md:bottom-8'
      }`}
    >
      {/* Zalo button */}
      <a
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className="group relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--bt-amber)] text-[var(--bt-light)] no-underline transition-[filter,transform] duration-[220ms] hover:brightness-110 hover:-translate-y-0.5"
        aria-label="Nhắn Zalo đặt lịch"
      >
        <span className={styles.floatZaloRing} aria-hidden="true" />
        <span className="relative z-[1]"><ChatIcon /></span>
        {/* Tooltip */}
        <span className="absolute right-[calc(100%+0.625rem)] top-1/2 -translate-y-1/2 whitespace-nowrap rounded bg-[var(--bt-ink)] px-[0.625rem] py-[0.3125rem] text-[0.72rem] font-semibold tracking-[0.04em] text-[var(--bt-light)] opacity-0 transition-opacity duration-200 pointer-events-none group-hover:opacity-100 after:absolute after:left-full after:top-1/2 after:-translate-y-1/2 after:border-[5px] after:border-transparent after:border-l-[var(--bt-ink)] after:content-['']">
          Nhắn Zalo
        </span>
      </a>

      {/* Back to top */}
      <button
        className={`inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--bt-dark)] text-[var(--bt-light)] shadow-[0_8px_24px_-12px_rgba(20,32,27,0.5)] transition-[opacity,transform,color] duration-300 ${
          showTop
            ? 'pointer-events-auto translate-y-0 opacity-100 hover:text-[var(--bt-amber-light)] hover:-translate-y-0.5'
            : 'pointer-events-none translate-y-2 opacity-0'
        }`}
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
