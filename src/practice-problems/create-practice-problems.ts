import { generateText, Output } from 'ai';
import { z } from 'zod';
import { generationOptionsSchema } from "../shared/schema.js";
import { InvalidInputError } from '../errors/errors.js';

export const createPracticeProblemsOptionsSchema = generationOptionsSchema.extend({
    count: z.number().int().positive()
});
export type CreatePracticeProblemsOptions = z.infer<typeof createPracticeProblemsOptionsSchema>;

const practiceProblemSchema = z.object({
    question: z.string().min(1).describe('The question of the practice problem'),
    hint: z.string().min(1).describe('A hint for the student to solve the question'),
    answer: z.string().min(1).describe('The answer to the question'),
    solution: z.string().min(1).describe('A good solution to the question to help the student understand how to solve the question')
});
export type PracticeProblem = z.infer<typeof practiceProblemSchema>;
export type PracticeProblems = PracticeProblem[];

export async function createPracticeProblems(options: CreatePracticeProblemsOptions): Promise<PracticeProblems> {
    const result = createPracticeProblemsOptionsSchema.safeParse(options);
    if (!result.success) {
        throw new InvalidInputError(result.error.issues[0]?.message ?? 'Invalid practice problems generation input');
    }

    const { model, content, difficulty='medium', count } = result.data;

    const { output } = await generateText({
        model,
        prompt: `Create exactly ${count} ${difficulty}-difficulty practice problems using the provided content.

Each practice problem should:
- Test understanding and application of the material, not just simple recall.
- Be answerable using the provided content.
- Have a clear, unambiguous question.
- Include a helpful hint that guides the student without revealing the answer.
- Include a concise final answer.
- Include a clear worked solution explaining how to reach the answer step by step.
- Match the requested difficulty level.
- Avoid duplicate or nearly identical problems.
- Stay grounded in the provided content and do not introduce unsupported facts.

For mathematical or quantitative problems:
- Show the reasoning and calculations clearly in the solution.
- Include units where appropriate.
- Ensure the final answer is consistent with the worked solution.

For conceptual problems:
- Explain the reasoning behind the answer rather than simply restating it.

Difficulty: ${difficulty}
Number of problems: ${count}

Content:
${content}`,
        output: Output.object({
            schema: z.object({
                problems: z.array(practiceProblemSchema).length(count)
            })
        })
    });

    return output.problems
};