import { describe, expect, test } from "vitest";
import { createQuizOptionsSchema } from '../src/quizzes/create-quiz';

describe('createQuizOptionsSchema', () => {
    test('rejects a question count of zero', () => {
        const result = createQuizOptionsSchema.safeParse({
            model: 'google/gemini-3.6-flash',
            content: 'Electricity',
            count: 0
        });
        expect(result.success).toBe(false);
    });

    test('rejects fewer than two options', () => {
        const result = createQuizOptionsSchema.safeParse({
            model: 'google/gemini-3.6-flash',
            content: 'Electricity',
            count: 10,
            numOfOptions: 1
        });
        expect(result.success).toBe(false);
    });

    test('rejects an invalid diffiulty level', () => {
        const result = createQuizOptionsSchema.safeParse({
            model: 'google/gemini-3.6-flash',
            content: 'Electricity',
            count: 5,
            difficulty: 'extreme'
        });
        expect(result.success).toBe(false);
    });

    test('accepts valid quiz options', () => {
        const result = createQuizOptionsSchema.safeParse({
            model: 'google/gemini-3.6-flash',
            content: 'Electricity',
            count: 10,
            numOfOptions: 4,
        });
        expect(result.success).toBe(true);
    });
});