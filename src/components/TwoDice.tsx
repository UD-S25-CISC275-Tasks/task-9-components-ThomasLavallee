import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    // State of die 1
    const [die1Number, die1Setter] = useState<number>(2);

    // State of die 2
    const [die2Number, die2Setter] = useState<number>(3);

    // Button for rolling each die, checks if they are equal and displays appropriate message
    return (
        <div>
            <Button
                onClick={() => {
                    die1Setter(d6);
                }}
            >
                Roll Left
            </Button>
            Die 1: <span data-testid="left-die">{die1Number}</span>
            Die 2: <span data-testid="right-die">{die2Number}</span>
            <Button
                onClick={() => {
                    die2Setter(d6);
                }}
            >
                Roll Right
            </Button>
            {die1Number === die2Number ? (
                die1Number === 1 && die2Number === 1 ? (
                    <span>Lose</span>
                ) : (
                    <span>Win</span>
                )
            ) : (
                <span></span>
            )}
        </div>
    );
}
