// Single source of truth for Mist Spring Spa nav links — shared by Header + Footer.
export const NAV_LINKS = [
  { href: '#about', label: 'About Us' },
  { href: '#services', label: 'Services' },
  { href: '#menu', label: 'Price List' },
  { href: '#gallery', label: 'Our Space' },
  { href: '#reviews', label: 'Reviews' },
];

// Booking CTA — kept separate since it uses a different style in Header/Footer.
export const BOOKING_LINK = { href: '#booking', label: 'Book Now' };

// Social links — single source of truth for the top bar (Header) + Footer.
// `path` is the `d` of the <path> in a 16×16 viewBox.
export const SOCIAL_LINKS = [
  { label: 'Facebook', href: '#', path: 'M10.5 6.5h1.5V4.2c-.3 0-1.1-.1-2-.1-2 0-3.3 1.2-3.3 3.4v1.6H4.7v2.5h2V18h2.6v-6.4h2l.3-2.5H9.3V7.8c0-.7.2-1.3 1.2-1.3z' },
  { label: 'Instagram', href: '#', path: 'M8 5.2c-1.5 0-2.8 1.3-2.8 2.8S6.5 10.8 8 10.8s2.8-1.3 2.8-2.8S9.5 5.2 8 5.2zm0 4.6c-1 0-1.8-.8-1.8-1.8S7 6.2 8 6.2s1.8.8 1.8 1.8S9 9.8 8 9.8zM11 3H5C3.9 3 3 3.9 3 5v6c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm1 8c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v6zm-.8-6.3a.5.5 0 11-1 0 .5.5 0 011 0z' },
  { label: 'TikTok', href: '#', path: 'M11.5 6.4c-.9 0-1.7-.4-2.3-1v4.4c0 1.8-1.5 3.3-3.3 3.3S2.6 11.6 2.6 9.8s1.5-3.3 3.3-3.3c.2 0 .3 0 .5.1v1.7c-.2-.1-.3-.1-.5-.1-.9 0-1.6.7-1.6 1.6s.7 1.6 1.6 1.6 1.6-.7 1.6-1.6V2.5h1.7c.1 1.2 1 2.1 2.2 2.2v1.7z' },
  { label: 'YouTube', href: '#', path: 'M13.2 6.1c-.1-.6-.5-1-1.1-1.1C11 4.8 8 4.8 8 4.8s-3 0-4.1.2c-.6.1-1 .5-1.1 1.1C2.6 7.2 2.6 8 2.6 8s0 .8.2 1.9c.1.6.5 1 1.1 1.1 1.1.2 4.1.2 4.1.2s3 0 4.1-.2c.6-.1 1-.5 1.1-1.1.2-1.1.2-1.9.2-1.9s0-.8-.2-1.9zM6.8 9.4V6.6L9.2 8 6.8 9.4z' },
] as const;

// Demo email for the top contact bar (bookingSection has no email field yet).
export const CONTACT_EMAIL = 'suoimay.spa@gmail.com';
