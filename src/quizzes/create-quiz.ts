import { generateText, Output } from "ai";
import { z } from 'zod';
import type { GenerationOptions } from "../shared/types.js";

export type QuizQuestion = {
    question: string;
    options: string[];
    correctAnswer: number
}

export type Quiz = QuizQuestion[]

export type CreateQuizOptions = GenerationOptions & {
    count: number;
    numOfOptions?: number
}

export async function createQuiz({
    model,
    content,
    count,
    difficulty = 'medium',
    numOfOptions = 4
}: CreateQuizOptions): Promise<Quiz> {
    const { output } = await generateText({
        model,
        prompt: `Create a ${difficulty}-difficulty quiz with ${count} questions.

Each question must have exactly ${numOfOptions} answer choices.

Content:
${content}
    `,
        output: Output.object({
            schema: z.object({
                questions: z.array(
                    z.object({
                        question: z.string().describe('A question in the quiz'),
                        options: z.array(z.string()).length(numOfOptions).describe('the options for the question'),
                        correctAnswer: z.number().int().min(0).max(numOfOptions - 1).describe('The index position of the correct option using 0-indexing')
                    })
                ).length(count)
            })
        })
    });

    return output.questions
}