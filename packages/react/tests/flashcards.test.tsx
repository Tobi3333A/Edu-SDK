import "@testing-library/jest-dom/vitest";
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Flashcards } from "../src/flashcards/flashcards.js";

const flashcards = [
    {
        front: "What is voltage?",
        back: "Electrical potential difference."
    },
    {
        front: "What is current?",
        back: "The flow of electric charge."
    }
];

describe('Flashcards', () => {
    test('shows the first flashcard', () => {
        render(<Flashcards flashcards={flashcards} />);
        expect(screen.getByText('What is voltage?')).toBeInTheDocument();
        expect(screen.getByText('1 / 2')).toBeInTheDocument();
    });

    test('flips the card when clicked', async () => {
        const user = userEvent.setup();
        render(<Flashcards flashcards={flashcards} />);

        await user.click(screen.getByRole('button', {
            name: "What is voltage?"
        }));

        expect(screen.getByText("Electrical potential difference.")).toBeInTheDocument();
    });

    test('moves to the next flashcard', async () => {
        const user = userEvent.setup();
        render(<Flashcards flashcards={flashcards} />);
        await user.click(screen.getByRole('button', {
            name: 'Next'
        }));

        expect(screen.getByText('What is current?')).toBeInTheDocument();
        expect(screen.getByText('2 / 2')).toBeInTheDocument();
    });

    test('resets the flipped state when changing flashcards', async () => {
        const user = userEvent.setup();
        render(<Flashcards flashcards={flashcards} />);
        await user.click(screen.getByRole('button', {
            name: 'What is voltage?'
        }));

        expect(screen.getByText("Electrical potential difference.")).toBeInTheDocument();

        await user.click(screen.getByRole('button', {
            name: 'Next'
        }));

        expect(screen.getByText('What is current?')).toBeInTheDocument();
        expect(screen.queryByText("The flow of electric charge.")).not.toBeInTheDocument();
    });

    test('disables navigation at boundaries', async () => {
        const user = userEvent.setup();
        render(<Flashcards flashcards={flashcards} />);

        const previous = screen.getByRole('button', {
            name: 'Previous'
        });

        const next = screen.getByRole('button', {
            name: 'Next'
        });

        expect(previous).toBeDisabled();

        await user.click(next);

        expect(previous).not.toBeDisabled();
        expect(next).toBeDisabled();
    });

    test('renders nothing when there are no flashcards', () => {
        const { container } = render(<Flashcards flashcards={[]} />);

        expect(container).toBeEmptyDOMElement();
    });

    test("applies a custom root class", () => {
        const { container } = render(<Flashcards flashcards={flashcards} className="custom-flashcards" />);

        expect(container.firstChild).toHaveClass("edu-flashcards", "custom-flashcards");
    });
});

