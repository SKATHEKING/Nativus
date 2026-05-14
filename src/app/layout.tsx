import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Cormorant_Garamond, Space_Grotesk } from 'next/font/google';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

import './globals.css';

const grotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-sans' });
const cormorant = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-display', weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: 'Nativus',
  description: 'A modern music label website skeleton for releases, artists, support, and merch.',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${grotesk.variable} ${cormorant.variable} bg-bg text-fg antialiased`}>
        <div className="min-h-screen bg-radial-sheen">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}