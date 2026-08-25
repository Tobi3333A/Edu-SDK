import z from "zod";

const difficultySchema = z.enum(['easy', 'medium', 'hard']);

export type Difficulty = z.infer<typeof difficultySchema>;

export const generationOptionsSchema = z.object({
    model: z.string().min(1),
    content: z.string().min(1),
    difficulty: difficultySchema.optional()
})