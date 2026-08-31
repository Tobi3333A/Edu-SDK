import { generateText } from "ai";
import { z } from 'zod';
import { generationOptionsSchema } from "../shared/schema.js";
import { InvalidInputError } from "../errors/errors.js";

export const createNoteOptionsSchema = generationOptionsSchema.extend({
    length: z.enum(['short', 'medium', 'long']).optional()
});

export type CreateNoteOptions = z.infer<typeof createNoteOptionsSchema>;

const noteSchema = z.string().min(1).describe('The content of the notes in markdown');

export type Note = z.infer<typeof noteSchema>;

export async function createNote(options: CreateNoteOptions): Promise<Note> {
    const result = createNoteOptionsSchema.safeParse(options);
    if (!result.success) {
        throw new InvalidInputError(result.error.issues[0]?.message ?? "Invalid note generation options");
    }

    const { model, content, difficulty = 'medium', length = 'medium' } = result.data;

    const { text } = await generateText({
        model,
        prompt: `
Create a ${difficulty}-difficulty note of approximately ${length} length
using the provided content.

Format the note in Markdown.
Use headings to organize sections and bold important terms and concepts.

Content:
${content}
    `
    });

    return text;
}