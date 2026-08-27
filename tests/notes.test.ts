import { describe, expect, test } from 'vitest';
import { createNoteOptionsSchema } from '../src/notes/create-note';

describe('createNotesOptionschema', () => {
    test('rejects invalid length type', () => {
        const result = createNoteOptionsSchema.safeParse({
            model: 'google/gemini-3.6-flash',
            content: 'Electricity',
            difficulty: 'medium',
            length: 'small'
        });
        expect(result.success).toBe(false);
    });

    test('accepts valid notes options', () => {
        const result = createNoteOptionsSchema.safeParse({
            model: 'google/gemini-3.6-flash',
            content: 'Electricity',
            difficulty: 'medium',
            length: 'short'
        });
        expect(result.success).toBe(true);
    });
});