import React from "react";
import { Hero } from "./Hero";
import { Typography } from "@mui/material";

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
    <Hero heroimage={"./img/banner.jpg"}>
      <Typography variant={"h1"}>Great Games</Typography>
      <Typography variant={"subtitle1"}>Just play it!</Typography>
    </Hero>
  ),
};