import { Avatar } from "./Avatar";

const meta = {
    title: "Design System/Atoms/Avatar",
    component: Avatar,
    tags: ["autodocs"],
};

export default meta;

export const Rounded = {
    args: {
        isRounded: true,
        avatarimage: "img/avatar/user-avatar.png",
    },
};
export const Square = {
    args: {
        isRounded: false,
        avatarimage: "img/avatar/user-avatar.png",
    },
};
export const Default = {
    args: {},
};