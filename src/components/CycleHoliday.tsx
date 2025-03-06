import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "Christmas"
    | "Halloween"
    | "Easter"
    | "Independence Day"
    | "Thanksgiving";

export function CycleHoliday(): React.JSX.Element {
    // currentHoliday state
    const [currentHoliday, holidaySetter] = useState<Holiday>("Christmas");

    // Map each holiday to an emoji
    const HOLIDAYEMOJIES: Record<Holiday, string> = {
        Christmas: "🎄",
        Halloween: "🎃",
        Easter: "🥚",
        "Independence Day": "🎇",
        Thanksgiving: "🦃"
    };

    // Map each holiday to the next one following it alphabetically
    const ALPHABETHOLIDAYS: Record<Holiday, Holiday> = {
        Christmas: "Easter",
        Easter: "Halloween",
        Halloween: "Independence Day",
        "Independence Day": "Thanksgiving",
        Thanksgiving: "Christmas"
    };

    // Map each holiday to the next one following it in the year
    const YEARHOLIDAYS: Record<Holiday, Holiday> = {
        Christmas: "Easter",
        Easter: "Independence Day",
        "Independence Day": "Halloween",
        Halloween: "Thanksgiving",
        Thanksgiving: "Christmas"
    };

    // Button for changing either alphabetically or by time of the year
    return (
        <div>
            <Button
                onClick={() => {
                    holidaySetter(ALPHABETHOLIDAYS[currentHoliday]);
                }}
            >
                Advance by Alphabet
            </Button>
            Holiday: {HOLIDAYEMOJIES[currentHoliday]}
            <Button
                onClick={() => {
                    holidaySetter(YEARHOLIDAYS[currentHoliday]);
                }}
            >
                Advance by Year
            </Button>
        </div>
    );
}
