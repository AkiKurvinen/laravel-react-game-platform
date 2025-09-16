import * as React from "react";
import { Section } from "./Section";
import { Card } from "../Card/Card";

const meta = {
    title: "Design System/Templates/Section",
    component: Section,
    tags: ["autodocs"]
};

export default meta;

export const Default = {
    render: (args) => (
        <Section name="Games Section" id={"games"} {...args}>
            <Card game={{
                id: 1,
                name: "Box Mover",
                description: "Move the box to win!",
                link: "/game/box-mover",
                gallery: [
                    {
                        original: "drag-the-box-game.jpg"
                    }
                ],
            }} />
            <Card game={{
                id: 2,
                name: "Button Clicker",
                description: "Click the button as fast as you can!",
                link: "/game/button-clicker",
                gallery: [
                    {
                        original: "click-button-game.jpg"
                    }
                ],
            }} />
        </Section>
    ),
};