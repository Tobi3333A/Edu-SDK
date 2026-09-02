import Link from 'next/link';

export function Hero() {
  return (
    <section className="space-y-6">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Edu SDK</h1>
        <p className="text-fd-muted-foreground max-w-xl text-lg sm:text-xl">
          Building blocks for AI-powered learning experiences.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Link
          href="/docs/getting-started/installation"
          className="bg-fd-primary text-fd-primary-foreground inline-flex items-center rounded-md px-4 py-2 text-sm font-medium"
        >
          Get started
        </Link>
        <Link
          href="/docs"
          className="border-fd-border inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium"
        >
          Read the docs
        </Link>
      </div>
      <p className="text-fd-muted-foreground text-sm">
        Two packages: <code className="font-mono text-sm">edu-sdk</code> and{' '}
        <code className="font-mono text-sm">@edu-sdk/react</code>
      </p>
    </section>
  );
}
