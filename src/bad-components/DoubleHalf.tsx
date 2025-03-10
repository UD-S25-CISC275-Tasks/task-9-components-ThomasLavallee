import React, { useState } from "react";
import { Button } from "react-bootstrap";

// Parameter formatting for components
interface DoubleHalfProps {
    dhValue: number;
    setDhValue: (newDh: number) => void;
}

// Doubler component which uses the dhValue and setDhValue state setter
function Doubler({ dhValue, setDhValue }: DoubleHalfProps): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDhValue(2 * dhValue);
            }}
        >
            Double
        </Button>
    );
}

// Halver component which uses the dhValue and setDhValue state setter
function Halver({ dhValue, setDhValue }: DoubleHalfProps): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDhValue(0.5 * dhValue);
            }}
        >
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler dhValue={dhValue} setDhValue={setDhValue}></Doubler>
            <Halver dhValue={dhValue} setDhValue={setDhValue}></Halver>
        </div>
    );
}
