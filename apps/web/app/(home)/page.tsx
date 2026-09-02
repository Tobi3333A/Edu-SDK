import { CloseCta } from '@/components/home/close-cta';
import { Hero } from '@/components/home/hero';
import { HomeFooter } from '@/components/home/home-footer';
import { Surfaces } from '@/components/home/surfaces';

export const metadata = {
  title: 'Edu SDK',
  description: 'Turn any content into interactive learning surfaces.',
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
