export type Flashcard = {
    front: string;
    back: string;
};

export function createFlashcard(
    front: string,
    back: string
): Flashcard {
    return {
        front,
        back
    };
}