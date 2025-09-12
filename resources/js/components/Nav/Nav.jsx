import React from "react";
import { NavLink } from "../NavLink/NavLink";
import styled from "@emotion/styled";
import { css } from "@emotion/react";


const StyledNav = ({
    links,
    logo,
    children,
    ...props
}) => {
    const [open, setOpen] = React.useState(false);

    const openMenu = () => {
        setOpen(!open);
    };

    return (
        <nav {...props}>
            <a href="/#hero" className="logo">
                {logo ? (
                    <img src={logo} width={500} height={500} alt="Auger Games" />
                ) : (
                    <>Logo</>
                )}
            </a>
            {!open ? (
                <button className="burger" onClick={openMenu}>
                    &equiv;
                </button>
            ) : (
                <button className="burger" onClick={openMenu}>
                    &times;
                </button>
            )}
            <ul className={open ? "expanded" : ""}>
                {links ? (
                    <>
                        {links.map((link, idx) => {
                            return (
                                <li key={idx}>
                                    <NavLink
                                        target={link.target}
                                        label={link.text}
                                        key={link.target}
                                        onClick={openMenu}
                                        isNextLink={link.isNextLink || false}
                                    />
                                </li>
                            );
                        })}
                    </>
                ) : (
                    <>
                        <li>
                            <NavLink target="#" label="Home" key={"home"} />
                        </li>
                    </>
                )}
                {children}
            </ul>
        </nav>
    );
};

export const Nav = styled(StyledNav)`
  position: -webkit-sticky;
  position: sticky;
  background-color: var(--mui-palette-secondary-main);
  width: 100%;
  height: 60px;
  top: 0;
  z-index: 999;

  ul {
    width: fit-content;
    width: -moz-fit-content;
    list-style-type: none;
    margin: 0 0 0 auto;
    padding: 0;
    overflow: hidden;
    position: absolute;
    right: 0;
  }
  ul li, ul a {
    float: left;
    width: auto;
  }

  @media screen and (max-width: 800px) {
    ul {
      display: block;
      clear: both;
      margin-right: 0;
      background-color: inherit;
      max-height: 80vh;
      overflow-y: auto;
      top: 60px;
    }
    ul {
      display: none;
    }
    ul li, ul a {
      float: none;
      display: block; /* change to block */
    }
    .expanded {
      display: block;
    }
  }

  /* Create Hamburger component? */
  .burger {
    font-family: Arial, Helvetica, sans-serif;
    box-sizing: border-box;
    display: block;
    color: var(--mui-palette-background-paper);
    text-align: center;
    padding: 12px 25px;
    text-decoration: none;
    height: 60px;
    font-size: 2em;
    float: right;
    cursor: pointer;
    background-color: var(--mui-palette-primary-main);
    border: none;
  }
  .burger:hover {
    background-color: var(--mui-palette-primary-light);
  }

  /* Create logo component? */
  .logo {
    padding: 0.25em 1em;
    float: left;
  }
  .logo img {
    height: 48px;
    width: auto;
  }
  .logo:hover {
    opacity: 0.9;
  }
  @media screen and (max-width: 800px) {
    .burger {
      display: block;
    }
  }
`;