// Single source of truth for Shizen Spa nav links — shared by Header + Footer.
export const NAV_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#pricing',  label: 'Pricing' },
  { href: '#team',     label: 'Team' },
  { href: '#gallery',  label: 'Spaces' },
];

// Booking CTA — kept separate since it uses a different style and appears in the Footer instead of "Spaces".
export const BOOKING_LINK = { href: '#booking', label: 'Book Now' };
