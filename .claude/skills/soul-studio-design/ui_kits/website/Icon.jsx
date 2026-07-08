/* global React */
const { useState } = React;

const ICON_PATHS = {
  arrowUpRight: 'M7 17l10-10M9 7h8v8',
  arrowRight:   'M5 12h14M13 6l6 6-6 6',
  menu:         'M4 7h16M4 12h16M4 17h16',
  x:            'M6 6l12 12M18 6L6 18',
  phone:        'M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.95.36 1.88.7 2.77a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.31-1.27a2 2 0 0 1 2.11-.45c.89.34 1.82.57 2.77.7A2 2 0 0 1 22 16.92Z',
  mail:         'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Z',
  mapPin:       'M20 10c0 7-8 13-8 13s-8-6-8-13a8 8 0 0 1 16 0Z',
  instagram:    'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z',
  facebook:     'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
  chevronRight: 'M9 18l6-6-6-6',
  check:        'M5 13l4 4L19 7',
};

function Icon({ name, size = 18, stroke = 1.75, className = '', style = {} }) {
  const d = ICON_PATHS[name] || '';
  // mail needs an extra line for the envelope
  const extra = name === 'mail' ? <path d="M22 7l-10 7L2 7" /> : null;
  const circle = name === 'mapPin' ? <circle cx="12" cy="10" r="3" /> : (name === 'instagram' ? <path d="M17.5 6.5h.01M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8z" /> : null);
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      style={style}
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={d} />
      {circle}
      {extra}
    </svg>
  );
}

window.Icon = Icon;
