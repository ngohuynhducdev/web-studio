'use client';

import { useState } from 'react';
import { Menu, X } from '@/components/Icon';
import { cn } from '@/lib/cn';

const NAV = ['Experience', 'Services', 'About', 'Therapist', 'Reviews', 'Pricing', 'Contact'];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-ivory border-b border-border @container">
        <div className="max-w-container mx-auto px-7 py-5 flex items-center justify-between gap-6">
          <div className="font-display font-medium text-[14px] tracking-[0.22em] text-espresso">
            SOUL&nbsp;&nbsp;STUDIO
          </div>
          <nav className="ss-nav-links">
            {NAV.map((s) => (
              <a key={s} href={`#${s.toLowerCase()}`} className="hover:text-espresso transition-colors">
                {s}
              </a>
            ))}
          </nav>
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="w-11 h-11 rounded-full bg-espresso text-ivory grid place-items-center hover:bg-bark transition-colors"
          >
            <Menu size={18} strokeWidth={1.75} />
          </button>
        </div>
      </header>

      {/* Slide-down menu sheet (used on tablet & mobile) */}
      <div
        aria-hidden={!open}
        className={cn(
          'fixed inset-0 z-[100]',
          open ? 'pointer-events-auto' : 'pointer-events-none',
        )}
      >
        <div
          onClick={() => setOpen(false)}
          className={cn(
            'absolute inset-0 bg-espresso/50 transition-opacity duration-base ease-out',
            open ? 'opacity-100' : 'opacity-0',
          )}
        />
        <div
          className={cn(
            'absolute top-3 left-3 right-3 bg-ivory rounded-3xl p-6 shadow-3',
            'transition-all duration-base ease-out',
            open ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0',
          )}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="font-display font-medium text-[14px] tracking-[0.22em]">SOUL&nbsp;&nbsp;STUDIO</div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="w-9 h-9 rounded-full bg-espresso text-ivory grid place-items-center"
            >
              <X size={16} strokeWidth={1.75} />
            </button>
          </div>
          {NAV.map((s, i) => (
            <a
              key={s}
              href={`#${s.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className={cn(
                'block py-3.5 font-display text-[22px] text-espresso',
                i < NAV.length - 1 && 'border-b border-border',
              )}
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
