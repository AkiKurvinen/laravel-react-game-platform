import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { Instagram, Facebook, LinkedIn, YouTube } from "@mui/icons-material";
import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
  Clear,
  QuestionMark,
} from "@mui/icons-material";
import StorybookIcon from "../../../../public/img/svg/storybook.svg";
import Twitterx from "../../../../public/img/svg/twitterx.svg";

import { FaAnglesRight } from "react-icons/fa6";
import { HiCloud } from "react-icons/hi";
import { MdDone, MdLogin, MdLogout, MdAccountCircle } from "react-icons/md";

const icon_base = (fill, stroke, box) => css`
  display: inline-block;
  width: ${box};
  height: ${box};
  text-align: center;
  object-fit: contain;
  fill: ${fill};
  stroke: ${stroke};
`;

function getIcon(icon, className) {
  switch (true) {
    case icon == "instagram":
      return <Instagram className={className} />;
    case icon == "facebook":
      return <Facebook className={className} />;
    case icon == "twitter":
      return <Twitterx className={className} />;
    case icon == "linkedin":
      return <LinkedIn className={className} />;
    case icon == "youtube":
      return <YouTube className={className} />;
    case icon == "arrowleft":
      return <KeyboardArrowLeft className={className} />;
    case icon == "arrowright":
      return <KeyboardArrowRight className={className} />;
    case icon == "storybook":
      return <StorybookIcon className={className} />;
    case icon == "mui-arrowright":
      return <KeyboardArrowRight className={className} />;
    case icon == "storybook":
      return <StorybookIcon className={className} />;
    case icon == "react-fontawesome":
      return <FaAnglesRight className={className} />;
    case icon == "react-heroicons":
      return <HiCloud className={className} />;
    case icon == "mui-clear":
      return <Clear className={className} />;
    case icon == "mui-done":
      return <MdDone className={className} />;
    case icon == "mui-login":
      return <MdLogin className={className} />;
    case icon == "mui-logout":
      return <MdLogout className={className} />;
    case icon == "mui-account":
      return <MdAccountCircle className={className} />;
    case icon == "stroke-svg":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-6 h-6 ${className}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
          />
        </svg> // source: heroicons.com
      );
  }
  return <QuestionMark className={className} />;
}

const StyledIcon= ({ className = "icon", icon }) => {
  return getIcon(icon, className);
};

export const Icon = styled(StyledIcon)`
  ${(props) =>
    icon_base(
      props.fill ? `var(${props.fill})` : "currentColor",
      props.stroke ? `var(${props.stroke})` : "",
      props.box ? props.box : "32px"
    )};
`;
