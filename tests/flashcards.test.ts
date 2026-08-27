import { describe, expect, test } from 'vitest';
import { createFlashcardsOptionsSchema } from '../src/flashcard/create-flashcards';

describe('createFlashcardsOptionsSchema', () => {
    test('rejects negative number of flashcards', () => {
        const result = createFlashcardsOptionsSchema.safeParse({
            model: 'google/gemini-3.6-flash',
            content: 'Electricity',
            count: -1
        });
        expect(result.success).toBe(false);
    });

    test('accepts valid flashcards options', () => {
        const result = createFlashcardsOptionsSchema.safeParse({
            model: 'google/gemini-3.6-flash',
            content: 'Electricity',
            count: 2
        });
        expect(result.success).toBe(true);
    });
});