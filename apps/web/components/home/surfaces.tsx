import Link from 'next/link';

const surfaces = [
  {
    create: 'createFlashcards()',
    createHref: '/docs/core/create-flashcards',
    ui: '<Flashcards />',
    uiHref: '/docs/react/flashcards',
  },
  {
    create: 'createQuiz()',
    createHref: '/docs/core/create-quiz',
    ui: '<Quiz />',
    uiHref: '/docs/react/quiz',
  },
  {
    create: 'createStudyGuide()',
    createHref: '/docs/core/create-study-guide',
    ui: '<StudyGuide />',
    uiHref: '/docs/react/study-guide',
  },
  {
    create: 'createPracticeProblems()',
    createHref: '/docs/core/create-practice-problems',
    ui: '<PracticeProblems />',
    uiHref: '/docs/react/practice-problems',
  },
];

export function Surfaces() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Surfaces</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {surfaces.map((surface) => (
          <article
            key={surface.create}
            className="border-fd-border bg-fd-card rounded-lg border p-4"
          >
            <p className="font-mono text-sm">
              <Link href={surface.createHref} className="hover:underline">
                {surface.create}
              </Link>
              <span className="text-fd-muted-foreground"> → </span>
              <Link href={surface.uiHref} className="hover:underline">
                {surface.ui}
              </Link>
            </p>
          </article>
        ))}
        <article className="border-fd-border bg-fd-card text-fd-muted-foreground rounded-lg border p-4 sm:col-span-2">
          <p className="font-mono text-sm">
            <Link href="/docs/core/create-note" className="hover:underline">
              createNote()
            </Link>
            <span> → Markdown, no React component</span>
          </p>
        </article>
      </div>
    </section>
  );
}
