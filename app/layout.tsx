import type { Metadata } from 'next';
import { inter } from '@/app/ui/fonts';

import '@/app/ui/global.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Freedom Dashboard',
    default: 'Freedom Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dash.vercel.app'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
