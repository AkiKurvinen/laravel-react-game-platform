import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Icon } from "../Icon/Icon";

const avatar_base = (size) => css`
  display: inline-block;
  height: ${size ? size : "100px"};
  width: ${size ? size : "100px"};
  background-position-x: right; /* Center the image */
  background-position-y: 0;
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
`;
const avatar_round = css`
  border-radius: 50%;
`;

export const styledAvatar = ({ avatarimage, className }) => {
  return (
    <>
      {!avatarimage && <Icon icon="mui-account" />}
      {avatarimage && (
        <div
          style={{ backgroundImage: `url(${avatarimage})` }}
          className={className}
        />
      )}
    </>
  );
};
export const Avatar = styled(styledAvatar)`
  ${(props) => avatar_base(props.size)};
  ${(props) => (props.isRounded ? avatar_round : null)};
`;
