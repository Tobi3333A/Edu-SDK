import { generateText, Output } from "ai";
import { z } from 'zod';
import { generationOptionsSchema } from "../shared/schema.js";
import { InvalidInputError } from "../errors/errors.js";

export const createQuizOptionsSchema = generationOptionsSchema.extend({
    count: z.number().int().positive(),
    numOfOptions: z.number().int().min(2).optional()
});

export type CreateQuizOptions = z.infer<typeof createQuizOptionsSchema>;

function createQuizQuestionSchema(numOfOptions: number) {
    return z.object({
        question: z.string().describe('A question in the quiz'),
        options: z.array(z.string()).length(numOfOptions).describe(`Exactly ${numOfOptions} options for this qustion`),
        correctAnswer: z.number().int().min(0).max(numOfOptions - 1).describe('The index position of the correct option using 0-indexing')
    });
}

export type QuizQuestion = z.infer<ReturnType<typeof createQuizQuestionSchema>>;
export type Quiz = QuizQuestion[];

export async function createQuiz(options: CreateQuizOptions): Promise<Quiz> {
    const result = createQuizOptionsSchema.safeParse(options);
    if (!result.success) {
        throw new InvalidInputError(result.error.issues[0]?.message ?? 'Invalid quiz generation options')
    }
    const { model, content, count, difficulty = 'medium', numOfOptions = 4 } = result.data;

    const quizQuestionSchema = createQuizQuestionSchema(numOfOptions);

    const { output } = await generateText({
        model,
        prompt: `Create a ${difficulty}-difficulty quiz with ${count} questions.

Each question must have exactly ${numOfOptions} answer choices.

Content:
${content}
    `,
        output: Output.object({
            schema: z.object({
                questions: z.array(quizQuestionSchema).length(count)
            })
        })
    });

    return output.questions
}