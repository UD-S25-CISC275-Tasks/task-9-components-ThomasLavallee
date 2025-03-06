import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    // Get the state and state setter
    const [isVisible, visibilitySetter] = useState<boolean>(false);
    const answer: number = 42;

    // Button to turn on/off showing the answer
    return (
        <div>
            <Button
                onClick={() => {
                    visibilitySetter(!isVisible);
                }}
            >
                Reveal Answer
            </Button>
            {isVisible ? <span>{answer}</span> : <span></span>}
            Reveal Answer
        </div>
    );
}
