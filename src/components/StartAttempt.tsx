import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    // numAttempts state
    const [numAttempts, attemptSetter] = useState<number>(4);

    // inProgress state
    const [inProgress, progressSetter] = useState<boolean>(false);

    // Display three buttons: Start Quiz, Stop Quiz, Mulligan
    return (
        <div>
            <Button
                onClick={() => {
                    progressSetter(true);
                    attemptSetter(numAttempts - 1);
                }}
                disabled={inProgress || numAttempts <= 0}
            >
                Start Quiz
            </Button>
            <Button
                onClick={() => {
                    progressSetter(false);
                }}
                disabled={!inProgress}
            >
                Stop Quiz
            </Button>
            <Button
                onClick={() => {
                    attemptSetter(numAttempts + 1);
                }}
                disabled={inProgress}
            >
                Mulligan
            </Button>
            Attempts Remaining: {numAttempts}
        </div>
    );
}
