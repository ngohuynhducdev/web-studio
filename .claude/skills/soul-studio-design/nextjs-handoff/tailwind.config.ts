import type { Config } from 'tailwindcss';

/**
 * SOUL STUDIO — Tailwind config
 * Mirrors colors_and_type.css. Edit both when changing tokens.
 */
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.75rem',          // 28px side padding
      screens: { '2xl': '1200px' }, // hard cap matches --container
    },
    extend: {
      colors: {
        ivory:        '#FFF8F1',
        'ivory-soft': '#FBF1E5',
        'sand-beige': '#E3D4C5',
        'sand-light': '#EFE3D6',
        'sand-deep':  '#D2BFAB',
        clay:         '#9E8472',
        bark:         '#5C453A',
        wine:         '#23060B',   // primary CTA
        'wine-hover': '#350D14',
        'wine-press': '#170307',
        espresso:     '#1D110C',   // body text on light, deep brand bg
        // Semantic aliases (matched to CSS variables)
        fg: {
          DEFAULT: '#1D110C',
          1:       '#1D110C',
          2:       '#5C453A',
          3:       '#9E8472',
          inverse: '#FFF8F1',
        },
        border: {
          DEFAULT: 'rgba(35,6,11,0.10)',
          strong:  'rgba(35,6,11,0.22)',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        body:    ['var(--font-body)', 'Source Sans 3', 'Source Sans Pro', '-apple-system', 'system-ui', 'sans-serif'],
        mono:    ['ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        eyebrow: ['12px',  { lineHeight: '1.3', letterSpacing: '0.18em' }],
        small:   ['14px',  { lineHeight: '1.5' }],
        body:    ['16px',  { lineHeight: '1.55' }],
        h4:      ['18px',  { lineHeight: '1.18' }],
        h3:      ['22px',  { lineHeight: '1.18' }],
        // Headings use clamp() — defined via utility classes (see globals.css)
      },
      letterSpacing: {
        eyebrow: '0.18em',
        button:  '0.04em',
        display: '-0.01em',
      },
      borderRadius: {
        xs:    '6px',
        sm:    '10px',
        md:    '16px',
        lg:    '24px',
        xl:    '36px',
        '2xl': '48px',
        // pill = rounded-full
      },
      spacing: {
        // Brand spacing (8pt scale)
        's-1':  '4px',
        's-2':  '8px',
        's-3':  '12px',
        's-4':  '16px',
        's-5':  '24px',
        's-6':  '32px',
        's-7':  '48px',
        's-8':  '64px',
        's-9':  '96px',
        's-10': '128px',
        // Grid system
        gutter:     '25px',
        'side-margin': '26px',
      },
      maxWidth: {
        container: '1200px',
      },
      boxShadow: {
        1:    '0 1px 2px rgba(35,6,11,0.04), 0 1px 1px rgba(35,6,11,0.03)',
        2:    '0 6px 18px rgba(35,6,11,0.06), 0 2px 6px rgba(35,6,11,0.04)',
        3:    '0 24px 60px rgba(35,6,11,0.10), 0 6px 14px rgba(35,6,11,0.05)',
        glow: '0 0 60px rgba(255, 220, 180, 0.35)', // candle-glow accent
      },
      transitionTimingFunction: {
        out:    'cubic-bezier(0.22, 0.61, 0.36, 1)',
        'in-out': 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
      transitionDuration: {
        fast: '150ms',
        base: '260ms',
        slow: '520ms',
      },
      animation: {
        // Subtle reveals only — no springs, no bounces
        'fade-in':  'fadeIn 520ms cubic-bezier(0.22, 0.61, 0.36, 1) both',
        'rise-in':  'riseIn 600ms cubic-bezier(0.22, 0.61, 0.36, 1) both',
      },
      keyframes: {
        fadeIn: { from: { opacity: '0' }, to: { opacity: '1' } },
        riseIn: {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
