import Link from 'next/link';
import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock';

const createQuizExample = `import { createQuiz } from "edu-sdk";

const quiz = await createQuiz({
  model: "google/gemini-3.6-flash",
  content,
  count: 10,
  difficulty: "medium"
});`;

const quizUiExample = `import { Quiz } from "@edu-sdk/react";
import "@edu-sdk/react/styles.css";

<Quiz questions={quiz} />`;

export const metadata = {
  title: 'Edu SDK',
  description: 'Building blocks for AI-powered learning experiences.',
};

export default function HomePage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-10 px-4 py-16">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold">Edu SDK</h1>
        <p className="text-fd-muted-foreground text-lg">
          Building blocks for AI-powered learning experiences.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Generation</h2>
        <DynamicCodeBlock lang="ts" code={createQuizExample} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">UI</h2>
        <DynamicCodeBlock lang="tsx" code={quizUiExample} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">What you generate, you can render</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b">
                <th className="py-2 pr-4 font-medium">Generation</th>
                <th className="py-2 font-medium">UI</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 pr-4 font-mono">createFlashcards()</td>
                <td className="py-2 font-mono">{'<Flashcards />'}</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 pr-4 font-mono">createQuiz()</td>
                <td className="py-2 font-mono">{'<Quiz />'}</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 pr-4 font-mono">createStudyGuide()</td>
                <td className="py-2 font-mono">{'<StudyGuide />'}</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 pr-4 font-mono">createPracticeProblems()</td>
                <td className="py-2 font-mono">{'<PracticeProblems />'}</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono">createNote()</td>
                <td className="text-fd-muted-foreground py-2">—</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <p>
        <Link
          href="/docs/getting-started/installation"
          className="font-medium underline underline-offset-4"
        >
          Get started with installation
        </Link>
      </p>
    </main>
  );
}
