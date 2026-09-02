import {
  Flashcards,
  PracticeProblems,
  Quiz,
  StudyGuide
} from "@edu-sdk/react";

const flashcards = [
  {
    front: "What is voltage?",
    back: "Electrical potential difference."
  },
  {
    front: "What is current?",
    back: "The flow of electric charge."
  }
];

const questions = [
  {
    question: "What is the unit of electric current?",
    options: ["Volt", "Ampere", "Ohm", "Watt"],
    correctAnswer: 1
  },
  {
    question: "Which quantity is measured in ohms?",
    options: ["Voltage", "Current", "Resistance", "Power"],
    correctAnswer: 2
  }
];

const guide = {
  title: "Electricity",
  summary:
    "Electricity describes phenomena associated with electric charge and its movement.",
  keyConcepts: [
    {
      concept: "Voltage",
      explanation:
        "Voltage represents electric potential difference between two points."
    },
    {
      concept: "Current",
      explanation:
        "Current describes the rate at which electric charge flows."
    }
  ],
  reviewQuestions: [
    "What is voltage?",
    "How are voltage, current, and resistance related?"
  ]
};

const problems = [
  {
    question:
      "A 12 V battery is connected to a 4 Ω resistor. What current flows?",
    hint:
      "Use the relationship between voltage, current, and resistance.",
    answer: "3 A",
    solution:
      "Using Ohm's law, I = V / R = 12 / 4 = 3 A."
  },
  {
    question: 'A resistor has 6 V across it and carries 2 A. What is its resistance?',
    hint: "Use Ohm's law to relate voltage, current, and resistance.",
    answer: '3 Ω',
    solution: "Using Ohm's law, R = V / I. Therefore, R = 6 / 2 = 3 Ω."
  }
];

export default function Page() {
  return (
    <main>
      <h1>Edu SDK Playground</h1>

      <section>
        <h2>Flashcards</h2>
        <Flashcards flashcards={flashcards} />
      </section>

      <section>
        <h2>Quiz</h2>
        <Quiz questions={questions} />
      </section>

      <section>
        <h2>Study Guide</h2>
        <StudyGuide studyGuide={guide} />
      </section>

      <section>
        <h2>Practice Problems</h2>
        <PracticeProblems problems={problems} />
      </section>
    </main>
  );
}