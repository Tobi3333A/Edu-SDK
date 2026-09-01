'use client'

import type { Flashcard } from "edu-sdk";
import { useState } from "react";
import { cn } from "../utils/index.js";

export type FlashcardsClassNames = {
    root?: string;
    counter?: string;
    card?: string;
    controls?: string;
    prevButton?: string;
    nextButton?: string
}

export type FlashcardsProps = {
    flashcards: Flashcard[],
    className?: string;
    classNames?: FlashcardsClassNames
};

export function Flashcards({ flashcards, className, classNames }: FlashcardsProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    if (flashcards.length === 0) return null;

    const currentCard = flashcards[currentIndex];

    function nextCard() {
        if (currentIndex < flashcards.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setIsFlipped(false);
        }
    }

    function prevCard() {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
            setIsFlipped(false);
        }
    }

    function flipCard() {
        setIsFlipped(prev => !prev);
    }

    return (
        <div className={cn("edu-flashcards", className, classNames?.root)}>
            <div className={cn("edu-flashcards__counter", classNames?.counter)}>
                {currentIndex + 1} / {flashcards.length}
            </div>

            <button type="button" onClick={flipCard} className={cn("edu-flashcards__card", classNames?.card)}>
                {isFlipped ? currentCard.back : currentCard.front}
            </button>

            <div className={cn("edu-flashcards__controls", classNames?.controls)}>
                <button type="button"
                    onClick={prevCard} disabled={currentIndex === 0}
                    className={cn("edu-flashcards__button", "edu_flashcards__previous", classNames?.prevButton)}>
                        Previous
                </button>
                <button type="button"
                    onClick={nextCard} disabled={currentIndex === flashcards.length - 1}
                    className={cn("edu-flashcards__button", "edu_flashcards__next", classNames?.nextButton)}>
                        Next
                </button>
            </div>
        </div>
    )
}