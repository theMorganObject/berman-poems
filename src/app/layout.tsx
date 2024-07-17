import type { Metadata } from 'next';
import { Source_Sans_3, Tangerine } from 'next/font/google';
import './globals.css';
import Background from '@/components/UI/Background';

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-sans-3',
});
const tangerine = Tangerine({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-tangerine',
});

export const metadata: Metadata = {
  title: 'Collected Poems',
  description: 'The collected works of Stephen Harlow Berman',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`relative min-h-screen ${sourceSans3.variable} ${tangerine.variable}`}
      >
        {children}
        <Background />
      </body>
    </html>
  );
}
