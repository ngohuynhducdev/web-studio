// Signature motif — repeating gold diamond-chain, tiles at any width.
// Used as a thin ornamental strip (header top edge, footer top edge).
// `id` must be unique per usage site (plain server components can't call
// useId's caller-side hook rules reliably here, so callers pass a static key).
export function FretBorder({ id, className }: { id: string; className?: string }) {
  const patternId = `ts-fret-${id}`;
  return (
    <svg className={className} width="100%" height="10" preserveAspectRatio="none" viewBox="0 0 200 10" aria-hidden="true">
      <defs>
        <pattern id={patternId} width="20" height="10" patternUnits="userSpaceOnUse">
          <path d="M0 5 L5 1 L10 5 L15 1 L20 5" fill="none" stroke="var(--ts-gold)" strokeWidth="1.4" />
          <path d="M0 5 L5 9 L10 5 L15 9 L20 5" fill="none" stroke="var(--ts-gold)" strokeWidth="1.4" />
        </pattern>
      </defs>
      <rect width="200" height="10" fill={`url(#${patternId})`} />
    </svg>
  );
}

export function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export function MenuIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

export function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
