import type { Metadata } from 'next';
import { Playfair_Display, Source_Sans_3 } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-display',
});

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'SOUL STUDIO — Thai Massage',
  description:
    'Immerse yourself in the atmosphere of Thai relaxation and harmony. SOUL STUDIO offers unique treatments and a true journey into the world of Thai culture and healing.',
  openGraph: {
    title: 'SOUL STUDIO — Thai Massage',
    description: 'A sanctuary of balance where traditional Eastern practices meet a professional medical approach.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable}`}>
      <body className="bg-ivory text-espresso font-body antialiased">
        {children}
      </body>
    </html>
  );
}
