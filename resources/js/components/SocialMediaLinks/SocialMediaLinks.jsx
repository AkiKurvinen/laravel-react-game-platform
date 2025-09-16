import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { SoMeLink } from "../SoMeLink/SoMeLink";

const somelinks_base = css`
  display: flex;
  gap: 2em;
  margin: 1em auto 1em auto;
  justify-content: center;
  flex-wrap: wrap;
`;

function StyledSocialMediaLinks({
  somelinks,
  vertical,
  color = "--mui-palette-secondary-main",
  ...props
}) {
  return (
    <div {...props}>
      {somelinks &&
        somelinks.map((somelink, idx) => {
          return (
            <SoMeLink
              somelink={somelink}
              index={idx}
              color={color}
              key={idx}
              vertical={vertical}
            ></SoMeLink>
          );
        })}
    </div>
  );
}

export const SocialMediaLinks = styled(StyledSocialMediaLinks)`
  ${somelinks_base}
`;