import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Icon } from "../Icon/Icon";

const somelink_base = (color, vertical) => css`
  color: var(${color});
  display: flex;
  align-items: center;
  text-decoration: none;
  flex-direction: ${vertical ? "column" : "row"};
  gap: 0.5em;

  & i {
    line-height: 1em;
  }
  &:hover {
    opacity: 0.5;
  }
  svg {
    width: 20px;
    height: 20px;
    fill: var(${color});
  }
`;

function setsomeicon(someurl) {
  switch (true) {
    case someurl.includes("github"):
      return <Icon icon="github" />;
    case someurl.includes("instagram"):
      return <Icon icon="instagram" />; // <Instagram/>
    case someurl.includes("facebook"):
      return <Icon icon="facebook" />; // <Facebook/>
    case someurl.includes("twitter"):
      return <Icon icon="twitter" />; //<Twitter/>
    case someurl.includes("linkedin"):
      return <Icon icon="linkedin" />; //<LinkedIn/>
    case someurl.includes("youtube"):
      return <Icon icon="youtube" />; //<YouTube/>
    case someurl.includes("storybook"):
      return <Icon icon="storybook" />; //<img src={'./img/svg/storybook.svg'} alt={'SB'} />
  }
}

const StyledSoMeLink = ({
  somelink,
  index,
  className = "social",
}) => {
  return (
    <a key={index} href={somelink.url} className={className} target="_blank">
      {setsomeicon(somelink.url)}
      <i>{somelink.username}</i>
    </a>
  );
};

export const SoMeLink = styled(StyledSoMeLink)`
  ${(props) =>
    somelink_base(props.color ? props.color : "--black", props.vertical)};
`;