import { generateText, Output } from "ai";
import { z } from 'zod';
import type { GenerationOptions } from "../shared/types.js";

export type NoteLength = 'short' | 'medium' | 'long';

export type CreateNoteOptions = GenerationOptions & {
    length?: NoteLength
}

export type Note = {
    content: string
}

export async function createNote({ model, content, difficulty = 'medium', length = 'medium' }: CreateNoteOptions): Promise<Note> {
    const { output } = await generateText({
        model,
        prompt: `
Create a ${difficulty}-difficulty note of approximately ${length} length
using the provided content.

Format the note in Markdown.
Use headings to organize sections and bold important terms and concepts.

Content:
${content}
    `,
        output: Output.object({
            schema: z.object({
                content: z.string()
            })
        })
    });

    return output
}