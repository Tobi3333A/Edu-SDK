export type Difficulty = 'easy' | 'medium' | 'hard';

export type GenerationOptions = {
    model: string;
    content: string;
    difficulty?: Difficulty
}