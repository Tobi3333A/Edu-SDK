import { generateText, Output } from 'ai';
import { z } from 'zod';
import { GenerationOptions } from '../shared/types.js';


export type Flashcard = {
    front: string;
    back: string;
};

export type Flashcards = Flashcard[]

export type CreateFlashcardsOptions = GenerationOptions & {
    count: number
}

export async function createFlashcards({ content, model, difficulty = 'medium', count }: CreateFlashcardsOptions): Promise<Flashcards> {
   const { output }  = await generateText({
        model,
        prompt: `Create ${count} flashcards from this content: ${content} and with this difficulty level: ${difficulty}`,
        output: Output.array({
            element: z.object({
                front: z.string().describe('The front part of a flash card'),
                back: z.string().describe('The back part of a flash card')
            })
        })
   });

   return output;
}