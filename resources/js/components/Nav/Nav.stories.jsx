import { Nav } from "./Nav";

const meta = {
    title: "Design System/Organisms/Nav",
    component: Nav,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
};

export default meta;

export const Default = {
    args: {
        links: [
            { target: "#home", text: "Home" },
            { target: "#about", text: "About" },
            { target: "#contact", text: "Contact" },
        ],
        logo: "./img/games-logo-white.png",
    },
};