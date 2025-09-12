import { Hero } from "./Hero";
import { Typography } from "../../atoms/Typography/Typography";

const meta = {
  title: "Design System/Organisms/Hero",
  component: Hero,
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  args: {
    heroimage: "./img/banner.jpg",
  },
  render: (args) => (
    <Hero {...args}>
      <Typography as={"h1"}>Auger Games</Typography>
      <Typography as={"i"}>Beyod loot boxes</Typography>
    </Hero>
  ),
};