import { CloseCta } from '@/components/home/close-cta';
import { Hero } from '@/components/home/hero';
import { HomeFooter } from '@/components/home/home-footer';
import { Surfaces } from '@/components/home/surfaces';

export const metadata = {
  title: {
    absolute: 'Edu SDK · The TypeScript SDK for AI-powered learning',
  },
  description: 'Generate learning materials from any content, then render them as UI.',
};

export default function HomePage() {
  return (
    <main className="flex w-full flex-1 flex-col">
      <Hero />
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-20 px-4 py-16 sm:py-20">
        <Surfaces />
        <CloseCta />
        <HomeFooter />
      </div>
    </main>
  );
}
