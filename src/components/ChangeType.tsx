import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    // Declare state and statesetter
    const [questionType, setType] = useState<QuestionType>(
        "short_answer_question"
    );

    // When button clicked, change type, and display the type
    return (
        <div>
            <Button
                onClick={() => {
                    questionType === "multiple_choice_question"
                        ? setType("short_answer_question")
                        : setType("multiple_choice_question");
                }}
            >
                Change Type
            </Button>
            {questionType === "multiple_choice_question" ? (
                <span>Multiple Choice</span>
            ) : (
                <span>Short Answer</span>
            )}
        </div>
    );
}
