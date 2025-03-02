import { Question, QuestionType } from "./interfaces/question";

/**
 * Create a new blank question with the given `id`, `name`, and `type. The `body` and
 * `expected` should be empty strings, the `options` should be an empty list, the `points`
 * should default to 1, and `published` should default to false.
 */
export function makeBlankQuestion(
    id: number,
    name: string,
    type: QuestionType,
): Question {
    // Returns new Question interface object with the fields filled out
    return {
        id: id,
        name: name,
        body: "",
        type: type,
        options: [],
        expected: "",
        points: 1,
        published: false,
    };
}

/**
 * Consumes a question and a potential `answer`, and returns whether or not
 * the `answer` is correct. You should check that the `answer` is equal to
 * the `expected`, ignoring capitalization and trimming any whitespace.
 *
 * HINT: Look up the `trim` and `toLowerCase` functions.
 */
export function isCorrect(question: Question, answer: string): boolean {
    // Remove whitespace and turn answer to lowercase
    const trimmedAnswer: string = answer.trim().toLowerCase();

    // Copy interface but without whitespace and lowercase in expected
    const trimmedQuestion: Question = {
        ...question,
        options: [...question.options],
        expected: question.expected.trim().toLowerCase(),
    };

    // Compare if answer and expected are equal
    return trimmedAnswer === trimmedQuestion.expected;
}

/**
 * Consumes a question and a potential `answer`, and returns whether or not
 * the `answer` is valid (but not necessarily correct). For a `short_answer_question`,
 * any answer is valid. But for a `multiple_choice_question`, the `answer` must
 * be exactly one of the options.
 */
export function isValid(question: Question, answer: string): boolean {
    let isValidQuestion: boolean;

    // For short answer question any answer is valid
    if (question.type === "short_answer_question") {
        isValidQuestion = true;
    } else {
        // Check if answer matches at least one of the multiple choice options
        isValidQuestion = question.options.some(
            (currentAnswer: string): boolean => {
                return currentAnswer === answer;
            },
        );
    }

    return isValidQuestion;
}

/**
 * Consumes a question and produces a string representation combining the
 * `id` and first 10 characters of the `name`. The two strings should be
 * separated by ": ". So for example, the question with id 9 and the
 * name "My First Question" would become "9: My First Q".
 */
export function toShortForm(question: Question): string {
    let questionName: string;

    // Get first 10 characters of name field, if they exist
    question.name.length < 10 ?
        (questionName = question.name)
    :   (questionName = question.name.slice(0, 10));

    // Create the question string
    let questionString: string = `${question.id}: ${questionName}`;

    return questionString;
}

/**
 * Consumes a question and returns a formatted string representation as follows:
 *  - The first line should be a hash sign, a space, and then the `name`
 *  - The second line should be the `body`
 *  - If the question is a `multiple_choice_question`, then the following lines
 *      need to show each option on its line, preceded by a dash and space.
 *
 * The example below might help, but don't include the border!
 * ----------Example-------------
 * |# Name                      |
 * |The body goes here!         |
 * |- Option 1                  |
 * |- Option 2                  |
 * |- Option 3                  |
 * ------------------------------
 * Check the unit tests for more examples of what this looks like!
 */
export function toMarkdown(question: Question): string {
    // Set up the first two lines
    let formattedQuestion: string = `# ${question.name}\n${question.body}`;

    // If question is multiple choice, add all the options on separate lines
    if (question.type === "multiple_choice_question") {
        // Format the options
        let multipleChoiceOptions: string = question.options.reduce(
            (combinedOptions: string, currentOption: string): string => {
                return combinedOptions + "- " + currentOption + "\n";
            },
            "",
        );

        // Remove extra newline from last option
        multipleChoiceOptions = multipleChoiceOptions.slice(
            0,
            multipleChoiceOptions.length - 1,
        );

        // Add options to whole question
        formattedQuestion += "\n" + multipleChoiceOptions;
    }

    return formattedQuestion;
}

/**
 * Return a new version of the given question, except the name should now be
 * `newName`.
 */
export function renameQuestion(question: Question, newName: string): Question {
    // Create new question, with all fields of old question, new name, and deep copy of options array
    let newQuestion = {
        ...question,
        name: newName,
        options: [...question.options],
    };

    return newQuestion;
}

/**
 * Return a new version of the given question, except the `published` field
 * should be inverted. If the question was not published, now it should be
 * published; if it was published, now it should be not published.
 */
export function publishQuestion(question: Question): Question {
    // Create new question with all old fields, inverted published field, and deep copy of options array
    let newQuestion = {
        ...question,
        published: !question.published,
        options: [...question.options],
    };

    return newQuestion;
}

/**
 * Create a new question based on the old question, copying over its `body`, `type`,
 * `options`, `expected`, and `points` without changes. The `name` should be copied
 * over as "Copy of ORIGINAL NAME" (e.g., so "Question 1" would become "Copy of Question 1").
 * The `published` field should be reset to false.
 */
export function duplicateQuestion(id: number, oldQuestion: Question): Question {
    // Copy all old fields, change name, change id, change published to false, and make a deep copy of the options array
    let newQuestion = {
        ...oldQuestion,
        id: id,
        name: `Copy of ${oldQuestion.name}`,
        published: false,
        options: [...oldQuestion.options],
    };

    return newQuestion;
}

/**
 * Return a new version of the given question, with the `newOption` added to
 * the list of existing `options`. Remember that the new Question MUST have
 * its own separate copy of the `options` list, rather than the same reference
 * to the original question's list!
 * Check out the subsection about "Nested Fields" for more information.
 */
export function addOption(question: Question, newOption: string): Question {
    // Creates new question with all fields of old question, and deep copy of options array with new option added
    let newQuestion = {
        ...question,
        options: [...question.options, newOption],
    };

    return newQuestion;
}

/**
 * Consumes an id, name, and two questions, and produces a new question.
 * The new question will use the `body`, `type`, `options`, and `expected` of the
 * `contentQuestion`. The second question will provide the `points`.
 * The `published` status should be set to false.
 * Notice that the second Question is provided as just an object with a `points`
 * field; but the function call would be the same as if it were a `Question` type!
 */
export function mergeQuestion(
    id: number,
    name: string,
    contentQuestion: Question,
    { points }: { points: number },
): Question {
    // Creates new question, deep copy of options array, uses parameters as values for fields
    let newQuestion = {
        ...contentQuestion,
        options: [...contentQuestion.options],
        id: id,
        name: name,
        published: false,
        points: points,
    };

    return newQuestion;
}
