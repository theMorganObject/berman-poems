import Image from 'next/image';
import type { Metadata } from 'next';
import { Source_Sans_3, Tangerine } from 'next/font/google';
import './globals.css';
import BackgroundImage from '@/components/UI/BackgroundImage';
import parchment from '../../public/parchment-bg.webp';

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
        <BackgroundImage
          image={
            <Image
              src={parchment}
              alt='Light tan parchment paper background with wheat grain texture'
              className='object-cover object-center'
              fill
            />
          }
        >
          {children}
        </BackgroundImage>
      </body>
    </html>
  );
}
