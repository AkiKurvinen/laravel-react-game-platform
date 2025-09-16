import { SocialMediaLinks } from "./SocialMediaLinks";

const meta = {
  title: "Design System/Organisms/SocialMediaLinks",
  component: SocialMediaLinks,
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  args: {
    somelinks: [
      { url: "instagram.com", username: "@username" },
      { url: "facebook.com", username: "@username" },
      { url: "youtube.com", username: "@username" },
    ],
  },
};