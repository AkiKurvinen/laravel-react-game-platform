import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";


const link_base = css`
  background-color: var(--mui-palette-secondary-main);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  color: #fff;
  text-align: center;
  height: 60px;
  text-decoration: none;
  padding: 1em 2em;

  &:hover {
    background-color: var(--mui-palette-primary-main);
    cursor: pointer;
  }
  svg {
    margin-left: 0.25em;
  }
  .avatar {
    margin-left: 0.5em;
  }
  @media screen and (max-width: 800px) {
    text-align: left;
  }
`;
/**
 * Main navigation link
 */
const left_border = css`
  border-left: solid thin var(--mui-palette-secondary-main);
  @media screen and (max-width: 800px) {
    border-left: none;
    border-top: solid thin var(--mui-palette-secondary-main);
  }
`;
const StyledNavLink = ({
  target,
  label,
  endicon,
  leftBorder,
  className,
  ...props
}) => {
  return (
    <a href={target} className={className} {...props}>
      {label}
      {endicon}
    </a>
  );
};

export const NavLink = styled(StyledNavLink)`
  ${link_base}
  ${(props) => (props.leftBorder ? left_border : "")};
`;
