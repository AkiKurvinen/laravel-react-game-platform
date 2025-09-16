import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const StyledHero = ({ heroimage, children, ...props }) => {
  return (
    <div id="hero" {...props}>
      <img src={`${heroimage}`} width="1920" height="1080" alt={"Hero"} />
      <div>{children}</div>
    </div>
  );
};

export const Hero = styled(StyledHero)`
  height: 100vh; /* You must set a specified height */
  width: 100%;
  position: relative;
  background-color: var(--mui-palette-primary-main);
  & img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-top: -2px;
  }
  & div {
    text-align: left;
    color: white;
    box-sizing: border-box;
    position: absolute;
    bottom: 6em;
    right: 5vw;
  }
  & div i {
    font-size: 1.4em;
    font-weight: 300;
    font-style: italic;
  }

  @media screen and (max-width: 800px) {
    height: 250px; /* You must set a specified height */
    background-position-x: unset;
    background-position-y: unset;
    background-position: center;
    position: relative;

    & div {
      margin-top: 78px;
      position: absolute;
      bottom: 1em;
      left: 1em;
      text-align: right;
    }
    & div h1{
      text-align: right;
    }
    & div i {
      font-size: 1em;
    }
  }
`;