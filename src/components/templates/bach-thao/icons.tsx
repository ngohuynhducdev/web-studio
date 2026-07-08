// Inline SVG icons — hand-drawn herbal / botanical feel.

export function LeafIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19.2 2.96c.6 5.5-1.3 13.6-8.2 17.04Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6" />
    </svg>
  );
}

export function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

export function PhoneIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.42 2 2 0 0 1 3.57 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.79a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function MapPinIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function ClockIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export function StarIcon({ filled = true }: { filled?: boolean }) {
  return (
    <svg width={12} height={12} viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />
    </svg>
  );
}

export function ZaloIcon() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.04 2 11c0 2.4 1.08 4.58 2.83 6.18L4 22l4.93-1.4c.97.26 2.02.4 3.07.4 5.52 0 10-4.04 10-9s-4.48-10-10-10z" />
    </svg>
  );
}

export function FacebookIcon() {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function ChatIcon() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

export function LotusIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 20c-4.4 0-8-2.5-8-5.5 0 0 3-1 8-1s8 1 8 1c0 3-3.6 5.5-8 5.5Z" />
      <path d="M12 20c-2 0-3.5-3-3.5-6S12 8 12 8s3.5 3 3.5 6-1.5 6-3.5 6Z" />
      <path d="M12 20c-1-1.5-5-2.5-6.5-1.5M12 20c1-1.5 5-2.5 6.5-1.5" />
    </svg>
  );
}

export function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4.5" width="18" height="17" rx="2.5" />
      <line x1="3" y1="9.5" x2="21" y2="9.5" />
      <line x1="8" y1="2.5" x2="8" y2="6.5" />
      <line x1="16" y1="2.5" x2="16" y2="6.5" />
    </svg>
  );
}

export function StoneStackIcon({ className }: { className?: string }) {
  // Stacked spa stones + lotus & leaf sprig (line-art).
  return (
    <svg className={className} width={56} height={56} viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <ellipse cx="23" cy="44" rx="15" ry="5" />
      <ellipse cx="23" cy="35" rx="12" ry="4.2" />
      <ellipse cx="23" cy="27" rx="9" ry="3.4" />
      <path d="M23 24c-2.4-2.6-2.4-6 0-9 2.4 3 2.4 6.4 0 9Z" />
      <path d="M23 24c2.6-1.6 4.4-4.4 4.6-8-2.6 1-4.3 3-4.6 5.4" />
      <path d="M23 24c-2.6-1.6-4.4-4.4-4.6-8 2.6 1 4.3 3 4.6 5.4" />
      <path d="M31 17c4.2-1.6 7.4-4.8 8.6-9.2-4.4 1-7.6 3.4-9 6.8" />
    </svg>
  );
}

export function PlumeriaIcon({ className }: { className?: string }) {
  // Red frangipani on stacked spa stones (decorative section mark).
  return (
    <svg className={className} width={48} height={48} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <ellipse cx="24" cy="41" rx="13" ry="4.4" fill="#2b3a33" />
      <ellipse cx="24" cy="37.5" rx="9.5" ry="3.4" fill="#4f5f56" />
      <g>
        {[0, 72, 144, 216, 288].map((a) => (
          <ellipse key={a} cx="24" cy="13.5" rx="4.4" ry="8" fill="#bb4a31" transform={`rotate(${a} 24 20.5)`} />
        ))}
        {[0, 72, 144, 216, 288].map((a) => (
          <ellipse key={`i${a}`} cx="24" cy="15" rx="2.2" ry="5" fill="#d56a4d" transform={`rotate(${a} 24 20.5)`} />
        ))}
      </g>
      <circle cx="24" cy="20.5" r="3.1" fill="#e6a93f" />
    </svg>
  );
}

export function ChevronLeftIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

export function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

export function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path d="M12 8c.6 2.2 1.8 3.4 4 4-2.2.6-3.4 1.8-4 4-.6-2.2-1.8-3.4-4-4 2.2-.6 3.4-1.8 4-4Z" />
    </svg>
  );
}

export function HandsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 11V6.5a1.5 1.5 0 0 1 3 0V10" />
      <path d="M8 10V5a1.5 1.5 0 0 1 3 0v5" />
      <path d="M11 10V6a1.5 1.5 0 0 1 3 0v5" />
      <path d="M14 10.5V8a1.5 1.5 0 0 1 3 0v6a6 6 0 0 1-6 6h-1a6 6 0 0 1-5.2-3l-2.3-4a1.5 1.5 0 0 1 2.6-1.5L5 11" />
    </svg>
  );
}

export function BotanicalSprigIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 56 96"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M28 88 Q27 70 26 54 Q25 36 28 14" />
      <path d="M26 72 Q10 68 6 55 Q14 51 26 65" />
      <path d="M27 58 Q42 50 48 38 Q38 41 27 52" />
      <path d="M27 44 Q12 34 10 22 Q20 24 27 38" />
      <path d="M27 32 Q40 22 44 12 Q35 16 27 28" />
    </svg>
  );
}
