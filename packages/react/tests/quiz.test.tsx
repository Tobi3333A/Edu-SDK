import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Quiz } from '../src/quiz/quiz';
import userEvent from "@testing-library/user-event";

const questions = [
    {
        question: "What is voltage?",
        options: [
            "Electrical potential difference",
            "Electrical resistance",
            "Electrical current",
            "Electrical power"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the unit of current?",
        options: [
            "Volt",
            "Ampere",
            "Ohm",
            "Watt"
        ],
        correctAnswer: 1
    }
];

describe('Quiz', () => {
    test('shows the first question', () => {
        render(<Quiz questions={questions} />);

        expect(screen.getByText('What is voltage?')).toBeInTheDocument();
        expect(screen.getByText('1 / 2')).toBeInTheDocument();
    });

    test('moves to the next question', async () => {
        const user = userEvent.setup();
        render(<Quiz questions={questions} />);
        await user.click(screen.getByRole('button', {
            name: 'Electrical potential difference'
        }));
        await user.click(screen.getByRole('button', {
            name: 'Submit'
        }));
        await user.click(screen.getByRole('button', {
            name: 'Next'
        }));

        expect(screen.getByText('What is the unit of current?')).toBeInTheDocument();
        expect(screen.getByText('2 / 2')).toBeInTheDocument();
    });

    test('shows correct/incorrect message', async () => {
        const user = userEvent.setup();
        render(<Quiz questions={questions} />);

        await user.click(screen.getByRole('button', {
            name: 'Electrical potential difference'
        }));
        await user.click(screen.getByRole('button', {
            name: 'Submit'
        }));

        expect(screen.getByText('Correct!')).toBeInTheDocument();

        await user.click(screen.getByRole('button', {
            name: 'Next'
        }));
        await user.click(screen.getByRole('button', {
            name: 'Volt'
        }));
        await user.click(screen.getByRole('button', {
            name: 'Submit'
        }));

        expect(screen.getByText('Incorrect. The correct answer is Ampere')).toBeInTheDocument();
    });

    test('disables submit until an option is selected', async () => {
        const user = userEvent.setup();
        render(<Quiz questions={questions} />);

        const submitButton = screen.getByRole('button', {
            name: 'Submit'
        });

        expect(submitButton).toBeDisabled();

        await user.click(screen.getByRole('button', {
            name: 'Electrical potential difference'
        }));

        expect(submitButton).not.toBeDisabled();
    });

    test('starts the next question without a selected answer', async () => {
        const user = userEvent.setup();
        render(<Quiz questions={questions} />);

        await user.click(screen.getByRole('button', {
            name: 'Electrical potential difference'
        }));

        await user.click(screen.getByRole('button', {
            name: 'Submit'
        }));

        await user.click(screen.getByRole('button', {
            name: 'Next'
        }));

        const submitButton = screen.getByRole('button', {
            name: 'Submit'
        });

        expect(submitButton).toBeDisabled();
        expect(screen.queryByText('Correct!')).not.toBeInTheDocument();
    });

    test('preserves submitted answers when returning to a previous question', async () => {
        const user = userEvent.setup();
        render(<Quiz questions={questions} />);

        await user.click(screen.getByRole('button', {
            name: 'Electrical potential difference'
        }));

        await user.click(screen.getByRole('button', {
            name: 'Submit'
        }));

        expect(screen.getByText('Correct!')).toBeInTheDocument();

        await user.click(screen.getByRole('button', {
            name: 'Next'
        }));

        await user.click(screen.getByRole('button', {
            name: 'Previous'
        }));

        expect(screen.getByText('What is voltage?')).toBeInTheDocument();
        expect(screen.getByText('Correct!')).toBeInTheDocument();
    });

    test('shows score at the end of quiz', async () => {
        const user = userEvent.setup();
        render(<Quiz questions={questions} />);

        await user.click(screen.getByRole('button', {
            name: 'Electrical potential difference'
        }));
        await user.click(screen.getByRole('button', {
            name: 'Submit'
        }));
        await user.click(screen.getByRole('button', {
            name: 'Next'
        }));
        await user.click(screen.getByRole('button', {
            name: 'Volt'
        }));
        await user.click(screen.getByRole('button', {
            name: 'Submit'
        }));

        expect(screen.getByText('Score: 1 / 2')).toBeInTheDocument();
    });

    test('renders nothing when there are no questions', () => {
        const { container } = render(<Quiz questions={[]} />);
        expect(container).toBeEmptyDOMElement();
    });

    test("applies a custom root class", () => {
        const { container } = render(<Quiz questions={questions} className="custom-quiz" />);

        expect(container.firstChild).toHaveClass("edu-quiz", "custom-quiz");
    });
});