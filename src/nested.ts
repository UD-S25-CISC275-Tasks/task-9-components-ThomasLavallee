import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    // Filter out unpublished questions
    let publishedQuestions: Question[] = questions.filter(
        (currentQuestion: Question): boolean => {
            return currentQuestion.published;
        },
    );

    // Clone all questions to make deep copies
    let clonedQuestions: Question[] = publishedQuestions.map(
        (currentQuestion: Question): Question => {
            return {
                ...currentQuestion,
                options: [...currentQuestion.options],
            };
        },
    );

    return clonedQuestions;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    // Save only the nonempty questions
    const nonEmptyQuestions: Question[] = questions.filter(
        (currentQuestion: Question): boolean => {
            return (
                currentQuestion.body.length > 0 ||
                currentQuestion.expected.length > 0 ||
                currentQuestion.options.length > 0
            );
        },
    );

    // Make a deep copy of each question (the options array)
    const clonedQuestions: Question[] = nonEmptyQuestions.map(
        (currentQuestion: Question): Question => {
            return {
                ...currentQuestion,
                options: [...currentQuestion.options],
            };
        },
    );

    return clonedQuestions;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number,
): Question | null {
    // Find the matching question
    const matchingQuestion: Question | undefined = questions.find(
        (currentQuestion: Question) => {
            return currentQuestion.id === id;
        },
    );

    // If match not found, return NULL
    if (matchingQuestion === undefined) {
        return null;
    }

    // Make a deep copy of the question (deep copy of the options array)
    const clonedQuestion: Question = {
        ...matchingQuestion,
        options: [...matchingQuestion.options],
    };

    return clonedQuestion;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    // Save only questions that do not match the id
    const filteredQuestions: Question[] = questions.filter(
        (currentQuestion: Question): boolean => {
            return currentQuestion.id !== id;
        },
    );

    // Make deep copies of the question
    const clonedQuestions: Question[] = filteredQuestions.map(
        (currentQuestion: Question): Question => {
            return {
                ...currentQuestion,
                options: [...currentQuestion.options],
            };
        },
    );

    return clonedQuestions;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    console.log(questions);

    return [];
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    console.log(questions);

    return 0;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    console.log(questions);

    return 0;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    console.log(questions);

    return "";
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    console.log(questions);

    return [];
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    console.log(questions);

    return [];
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    console.log(questions);

    return false;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType,
): Question[] {
    console.log(questions, id, name, type);

    return [];
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string,
): Question[] {
    console.log(questions, targetId, newName);

    return [];
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType,
): Question[] {
    console.log(questions, targetId, newQuestionType);

    return [];
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string,
): Question[] {
    console.log(questions, targetId, targetOptionIndex, newOption);
    return [];
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number,
): Question[] {
    console.log(questions, targetId, newId);
    return [];
}
