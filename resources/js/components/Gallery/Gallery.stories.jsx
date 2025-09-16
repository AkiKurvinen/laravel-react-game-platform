import { Gallery } from "./Gallery";

const meta = {
    title: "Design System/Organisms/Gallery",
    component: Gallery,
    tags: ["autodocs"],
};

export default meta;

export const Default = {
    args: {
        aspectRatio: "16/9",
        thumbnailSize: { width: "80px", height: "80px" },
        images: [
            { original: "click-button-game.jpg", thumbnail: "click-button-game-small.jpg" },
            { original: "drag-the-box-game.jpg", thumbnail: "drag-the-box-game-small.jpg" },
            { original: "Storybook Video", videoId: "gdlTFPebzAU" },
        ],
    },
    parameters: {
        design: {
            url: "https://www.figma.com/",
            type: "figma",
        },
    },
};