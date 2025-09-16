import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";

const section_base = css`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  text-align: left;
  box-sizing: border-box;
  padding: 2em;
  display: flex;
  flex-direction: column;
  gap: 64px;

  @media screen and (max-width: 800px) {
    padding: 1em;
  }
`;

export const StyledSection = ({
  id,
  name,
  children,
  ...props
}) => (
  <section {...props}>
    <a href="" id={id}></a>
    {name && <Typography variant={"h2"}>{name}</Typography>}
    {children}
  </section>
);
export const Section = styled(StyledSection)`
  ${section_base}
`;