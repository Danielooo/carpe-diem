import type { Metadata } from 'next';
import { Bricolage_Grotesque, Caveat, DM_Sans } from 'next/font/google';
import './globals.css';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bricolage',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
});

const caveat = Caveat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-caveat',
});

export const metadata: Metadata = {
  title: 'Pluk de dag – Daan & Vic',
  description:
    'De homepage van Daan en Vic: professionele dagplukkers, amateur in al het andere.',
  icons: { icon: '/img/favicon.svg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="nl"
      className={`${bricolage.variable} ${dmSans.variable} ${caveat.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
