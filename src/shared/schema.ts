import { z } from "zod";
import type { LanguageModel } from "ai";

const difficultySchema = z.enum(['easy', 'medium', 'hard']);

export type Difficulty = z.infer<typeof difficultySchema>;

const languageModelSchema = z.custom<LanguageModel>(
    (value) => typeof value === "object" && value !== null,
    "Model must be a model ID or LanguageModel"
);

export const generationOptionsSchema = z.object({
    model: z.union([
        z.string().min(1, "Model must be supplied"),
        languageModelSchema
    ]),
    content: z.string().min(1, "Content cannot be empty"),
    difficulty: difficultySchema.optional()
});