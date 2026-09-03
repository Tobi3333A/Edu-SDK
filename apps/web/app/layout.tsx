import { RootProvider } from 'fumadocs-ui/provider/next';
import { Analytics } from '@vercel/analytics/react';
import './global.css';
import '@edu-sdk/react/styles.css';
import { IBM_Plex_Sans, Newsreader } from 'next/font/google';
import { appName, ogImage, siteUrl } from '@/lib/shared';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: appName,
    template: `%s · ${appName}`,
  },
  description:
    'Documentation and resources for Edu SDK — build educational experiences with ease.',
  openGraph: {
    images: [ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    images: [ogImage],
  },
};

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plex-sans',
});

const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-newsreader',
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${plexSans.variable} ${newsreader.variable} ${plexSans.className}`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col">
        <RootProvider>{children}</RootProvider>
        <Analytics />
      </body>
    </html>
  );
}
