import Link from 'next/link';

export function CloseCta() {
  return (
    <section className="border-fd-border space-y-3 border-t pt-10">
      <h2 className="text-xl font-semibold">Start with a quiz</h2>
      <Link
        href="/docs/getting-started/installation"
        className="bg-fd-primary text-fd-primary-foreground inline-flex items-center rounded-md px-4 py-2 text-sm font-medium"
      >
        Get started
      </Link>
    </section>
  );
}
