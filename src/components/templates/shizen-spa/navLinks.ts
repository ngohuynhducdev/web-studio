// Single source of truth cho nav links của Shizen Spa — dùng chung Header + Footer.
export const NAV_LINKS = [
  { href: '#services', label: 'Dịch vụ' },
  { href: '#pricing',  label: 'Bảng giá' },
  { href: '#team',     label: 'Đội ngũ' },
  { href: '#gallery',  label: 'Không gian' },
];

// CTA đặt lịch — tách riêng vì dùng style khác và xuất hiện trong Footer thay cho "Không gian".
export const BOOKING_LINK = { href: '#booking', label: 'Đặt lịch' };
