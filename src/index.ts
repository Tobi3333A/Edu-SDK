export { createFlashcards } from './flashcard/create-flashcards.js';
export type { Flashcard, CreateFlashcardsOptions } from './flashcard/create-flashcards.js';

export { createNote } from './notes/create-note.js';
export type { Note, CreateNoteOptions } from './notes/create-note.js';

export { createQuiz } from './quizzes/create-quiz.js';
export type { Quiz, QuizQuestion, CreateQuizOptions } from './quizzes/create-quiz.js';

export { createStudyGuide } from './studyguide/create-studyguide.js';
export type { StudyGuide, CreateStudyGuideOptions } from './studyguide/create-studyguide.js';

export type { Difficulty } from './shared/schema.js';

export { EduSDKError, InvalidInputError } from './errors/errors.js';