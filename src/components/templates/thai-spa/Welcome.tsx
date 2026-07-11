// SIGNATURE SECTION for thai-spa — "Welcome Ritual".
// Showcases the 4-step welcome experience customers receive when they walk in —
// reinforces the luxury Thai hospitality positioning unique to this template.

import type { StepsSection } from '@/types';

export default function Welcome({ data }: { data: StepsSection }) {
  if (!data.steps || data.steps.length === 0) return null;

  return (
    <section id="welcome-ritual" className="relative overflow-hidden bg-[var(--ts-ivory-soft)] py-24 md:py-32">
      {/* Decorative arch frame on top */}
      <div
        aria-hidden="true"
        className="absolute -top-12 left-1/2 h-24 w-[420px] -translate-x-1/2 rounded-b-[200px] border-b border-[var(--ts-border)]"
      />

      <div className="mx-auto max-w-container px-5 md:px-10">

        {/* Head — centered editorial */}
        <div className="mb-16 flex flex-col items-center gap-5 text-center md:mb-20">
          {data.eyebrow && (
            <span className="inline-flex items-center gap-4 text-[11px] font-semibold tracking-[0.28em] uppercase text-[var(--ts-wine)]">
              <span className="block h-px w-10 bg-[var(--ts-bark)]" />
              {data.eyebrow}
              <span className="block h-px w-10 bg-[var(--ts-bark)]" />
            </span>
          )}
          <h2
            className="m-0 text-[36px] leading-[1.1] tracking-[-0.02em] text-[var(--ts-wine)] md:text-[52px]"
            style={{ fontFamily: 'var(--ts-font-display, "Playfair Display", Georgia, serif)' }}
          >
            {data.headingMain}{' '}
            {data.headingItalic && <em className="italic text-[var(--ts-bark)]">{data.headingItalic}</em>}
          </h2>
          <p className="m-0 max-w-[52ch] text-[15px] leading-[1.75] text-[var(--ts-bark)] md:text-[16px]">
            Every guest who walks in is welcomed with a traditional Thai ritual — unhurried, never perfunctory.
          </p>
        </div>

        {/* 4 steps — horizontal timeline */}
        <ol className="m-0 grid grid-cols-1 gap-0 list-none p-0 md:grid-cols-2 lg:grid-cols-4">
          {data.steps.map((step, i) => (
            <li
              key={step._key}
              className="relative flex flex-col gap-5 border-t border-[var(--ts-border)] p-7 first:lg:border-l-0 md:border-l md:p-8 lg:border-l lg:border-t-0"
              style={{
                borderTopColor: i === 0 ? 'transparent' : undefined,
              }}
            >
              {/* Decorative serif number */}
              <div className="flex items-center gap-3">
                <span
                  className="text-[44px] font-light leading-none text-[var(--ts-bark)] opacity-60 md:text-[52px]"
                  style={{ fontFamily: 'var(--ts-font-display, "Playfair Display", Georgia, serif)' }}
                >
                  {step.num ?? `0${i + 1}`}
                </span>
                <span className="block h-px flex-1 bg-[var(--ts-border)]" />
              </div>

              {/* Title */}
              {step.title && (
                <h3
                  className="m-0 text-[20px] leading-tight text-[var(--ts-wine)] md:text-[22px]"
                  style={{ fontFamily: 'var(--ts-font-display, "Playfair Display", Georgia, serif)' }}
                >
                  {step.title}
                </h3>
              )}

              {/* Desc */}
              {step.desc && (
                <p className="m-0 text-[14px] leading-[1.7] text-[var(--ts-bark)]">
                  {step.desc}
                </p>
              )}
            </li>
          ))}
        </ol>

        {/* Footer ornament — Thai pattern hint */}
        <div className="mt-14 flex items-center justify-center gap-3 text-[12px] italic text-[var(--ts-clay)]">
          <span className="block h-px w-12 bg-[var(--ts-border)]" />
          <span>ritual ~ 10 minutes before treatment begins</span>
          <span className="block h-px w-12 bg-[var(--ts-border)]" />
        </div>
      </div>
    </section>
  );
}
