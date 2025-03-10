import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";

const PEOPLE = [
    "Alan Turing",
    "Grace Hopper",
    "Ada Lovelace",
    "Charles Babbage",
    "Barbara Liskov",
    "Margaret Hamilton",
];

export function ChooseTeam(): React.JSX.Element {
    const [allOptions, setAllOptions] = useState<string[]>(PEOPLE);
    const [team, setTeam] = useState<string[]>([]);

    function chooseMember(newMember: string) {
        // If the team doesn't include this member, add them to team and remove them from options
        if (!team.includes(newMember)) {
            // Add the new member to the team
            const newTeam: string[] = [...team, newMember];
            setTeam(newTeam);

            // Remove newMember from options list
            const newOptions = allOptions.filter((option: string) => {
                return option != newMember;
            });
            setAllOptions(newOptions);
        }
    }

    function clearTeam() {
        // Set team state to be new empty array
        const emptyTeam: string[] = [];
        setTeam(emptyTeam);

        // Reset options array
        setAllOptions(PEOPLE);
    }

    return (
        <div>
            <h3>Choose Team</h3>
            <Row>
                <Col>
                    {allOptions.map((option: string) => (
                        <div key={option} style={{ marginBottom: "4px" }}>
                            Add{" "}
                            <Button
                                onClick={() => {
                                    chooseMember(option);
                                }}
                                size="sm"
                            >
                                {option}
                            </Button>
                        </div>
                    ))}
                </Col>
                <Col>
                    <strong>Team:</strong>
                    {team.map((member: string) => (
                        <li key={member}>{member}</li>
                    ))}
                    <Button onClick={clearTeam}>Clear Team</Button>
                </Col>
            </Row>
        </div>
    );
}
