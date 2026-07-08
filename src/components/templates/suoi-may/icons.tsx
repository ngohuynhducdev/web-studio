// Hand-drawn stroke icons — 1.4px weight, consistent across the template.

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
} as const;

export function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" {...base}>
      <path d="M2 7h10M8 3l4 4-4 4" />
    </svg>
  );
}

export function CheckIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" {...base}>
      <path d="M2.5 7.5l3 3 6-7" />
    </svg>
  );
}

export function MailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" {...base}>
      <rect x="2" y="3.5" width="12" height="9" rx="1.2" />
      <path d="M2.4 4.5L8 8.5l5.6-4" />
    </svg>
  );
}

export function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" {...base}>
      <path d="M3 2h3l1.5 3.5-2 1.5a9 9 0 0 0 3.5 3.5l1.5-2L14 10v3a1 1 0 0 1-1 1A11 11 0 0 1 2 3a1 1 0 0 1 1-1z" />
    </svg>
  );
}

export function MapPinIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" {...base}>
      <path d="M8 14.5S3 9.8 3 6.5a5 5 0 0 1 10 0c0 3.3-5 8-5 8z" />
      <circle cx="8" cy="6.5" r="1.8" />
    </svg>
  );
}

export function ClockIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" {...base}>
      <circle cx="8" cy="8" r="6.2" />
      <path d="M8 4.5V8l2.5 1.5" />
    </svg>
  );
}

export function ChatIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 18 18" {...base}>
      <path d="M15.5 11.5a2 2 0 0 1-2 2H6l-3.5 3v-11a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2z" />
    </svg>
  );
}

export function LeafIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 18 18" {...base}>
      <path d="M3 15c0-6 4.5-11 12-11 0 7.5-5 12-12 12z" />
      <path d="M3 15c3-4 6-6 9-7" strokeOpacity="0.6" />
    </svg>
  );
}
