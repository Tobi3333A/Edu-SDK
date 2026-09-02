'use client';

import { Quiz } from '@edu-sdk/react';
import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock';

const createQuizExample = `import { createQuiz } from "edu-sdk";

const quiz = await createQuiz({
  model: "google/gemini-3.6-flash",
  content,
  count: 10,
  difficulty: "medium"
});`;

const questions = [
  {
    question: 'What is the unit of electric current?',
    options: ['Volt', 'Ampere', 'Ohm', 'Watt'],
    correctAnswer: 1,
  },
  {
    question: 'Which quantity is measured in ohms?',
    options: ['Voltage', 'Current', 'Resistance', 'Power'],
    correctAnswer: 2,
  },
];

export function Pairing() {
  return (
    <section className="space-y-4">
      <div className="space-y-1">
        <h2 className="text-2xl font-semibold">Generate, then render</h2>
        <p className="text-fd-muted-foreground text-sm">
          Core produces data. React turns it into UI.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
        <div className="min-w-0">
          <p className="mb-2 text-sm font-medium">Generation</p>
          <DynamicCodeBlock lang="ts" code={createQuizExample} />
        </div>
        <div className="min-w-0">
          <p className="mb-2 text-sm font-medium">UI</p>
          <Quiz questions={questions} />
        </div>
      </div>
    </section>
  );
}
