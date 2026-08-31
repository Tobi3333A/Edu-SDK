import z from "zod";

const difficultySchema = z.enum(['easy', 'medium', 'hard']);

export type Difficulty = z.infer<typeof difficultySchema>;

export const generationOptionsSchema = z.object({
    model: z.string().min(1, "Model must be supplied"),
    content: z.string().min(1, "Content cannot be empty"),
    difficulty: difficultySchema.optional()
})