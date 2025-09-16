import React from "react";
import { SocialMediaLinks } from "../SocialMediaLinks/SocialMediaLinks.jsx";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const footer_base = css`
  background-color: var(--mui-palette-secondary-main);
  padding: 2em 1em;
  color: var(--mui-palette-secondary-contrastText);
  text-align: center;
  display: flex;
  flex-direction: column;

  img {
    vertical-align: middle;
    height: 25px;
    width: auto;
  }
  p {
    text-align: center;
  }
`;

const StyledFooter= ({
  id,
  ...props
}) => {
  return (
    <footer id={id} {...props}>
      <p>Great Games - 2025</p>
      <div>
        <SocialMediaLinks
          somelinks={[
            {
              url: "https://github.com/AkiKurvinen/laravel-react-game-platform",
              username: "GitHub",
            }
          ]}
          color="--mui-palette-secondary-contrastText"
        />

        <SocialMediaLinks
          somelinks={[
            {
              url: "./storybook-static/",
              username: "Storybook",
            },
          ]}
          color="--mui-palette-secondary-contrastText"
        />
      </div>
    </footer>
  );
};
export const Footer = styled(StyledFooter)`
  ${footer_base}
`;