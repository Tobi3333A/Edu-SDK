import { CloseCta } from '@/components/home/close-cta';
import { Hero } from '@/components/home/hero';
import { HomeFooter } from '@/components/home/home-footer';
import { Pairing } from '@/components/home/pairing';
import { Surfaces } from '@/components/home/surfaces';

export const metadata = {
  title: 'Edu SDK',
  description: 'Building blocks for AI-powered learning experiences.',
};

export default function HomePage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-16 px-4 py-16 sm:py-20">
      <Hero />
      <Pairing />
      <Surfaces />
      <CloseCta />
      <HomeFooter />
    </main>
  );
}
