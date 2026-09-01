import { generateText, Output } from 'ai';
import { z } from 'zod';
import { generationOptionsSchema } from '../shared/schema.js';
import { InvalidInputError } from '../errors/errors.js';

export const createFlashcardsOptionsSchema = generationOptionsSchema.extend({
    count: z.number().int().positive()
});

const flashcardSchema = z.object({
    front: z.string().min(1).describe('The front part of the flashcard'),
    back: z.string().min(1).describe('The back part of the flashcard')
});

export type Flashcard = z.infer<typeof flashcardSchema>;
type Flashcards = Flashcard[]

export type CreateFlashcardsOptions = z.infer<typeof createFlashcardsOptionsSchema>;

export async function createFlashcards(options: CreateFlashcardsOptions): Promise<Flashcards> {
    const result = createFlashcardsOptionsSchema.safeParse(options);
    if (!result.success) {
        throw new InvalidInputError(result.error.issues[0]?.message ?? "Invalid flashcard generation options");
    }
    
    const { model, content, count, difficulty = 'medium' } = result.data;

    const { output }  = await generateText({
        model,
        prompt: `Create ${count} flashcards from this content: ${content} and with this difficulty level: ${difficulty}`,
        output: Output.object({
            schema: z.object({
                cards: z.array(flashcardSchema).length(count)
            })
        })
   });

   return output.cards;
}