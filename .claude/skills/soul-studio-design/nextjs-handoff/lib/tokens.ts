/**
 * Design tokens as TypeScript constants.
 * Useful for: charts, dynamic styles, runtime color math.
 * For static UI, prefer Tailwind classes / CSS variables.
 */

export const colors = {
  ivory: '#FFF8F1',
  ivorySoft: '#FBF1E5',
  sandBeige: '#E3D4C5',
  sandLight: '#EFE3D6',
  sandDeep: '#D2BFAB',
  clay: '#9E8472',
  bark: '#5C453A',
  wine: '#23060B',
  wineHover: '#350D14',
  winePress: '#170307',
  espresso: '#1D110C',
} as const;

export const spacing = {
  s1: 4, s2: 8, s3: 12, s4: 16, s5: 24,
  s6: 32, s7: 48, s8: 64, s9: 96, s10: 128,
} as const;

export const radii = {
  xs: 6, sm: 10, md: 16, lg: 24, xl: 36, x2l: 48, pill: 9999,
} as const;

export const motion = {
  easeOut: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
  easeInOut: 'cubic-bezier(0.65, 0, 0.35, 1)',
  durations: { fast: 150, base: 260, slow: 520 },
} as const;

export type BrandColor = keyof typeof colors;
