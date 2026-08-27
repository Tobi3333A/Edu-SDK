import { generateText, Output } from 'ai';
import { z } from 'zod';
import { generationOptionsSchema } from '../shared/schema.js';

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
    const { model, content, count, difficulty = 'medium' } = createFlashcardsOptionsSchema.parse(options);

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