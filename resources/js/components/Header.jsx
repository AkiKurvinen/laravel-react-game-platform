import React, { useEffect } from 'react';
import Button from "@mui/material/Button";
import { Nav } from './Nav/Nav';
import { NavLink } from './NavLink/NavLink';
import { Icon } from './Icon/Icon';
import { Avatar } from './Avatar/Avatar';

export default function Header() {
    var loggedin = localStorage.getItem("loggedin")

    useEffect(() => {
        fetch("/isloggedin").then(out => out.text()).then(out => {
            localStorage.setItem("loggedin", out)
            if (loggedin !== out) {
                window.location.reload()
            }
        });
    }, [])
    return (
        <Nav
            links={[
                { target: "/#popular-games", text: "Popular Games" },
                { target: "/#new-games", text: "New Games" },
                { target: "/#info", text: "About" },
            ]}
            logo="/img/games-logo-white.png"
        >
            {
                loggedin === "true" ?
                    <>
                        <NavLink
                            leftBorder
                            isNextLink
                            label={"Account"}
                            target={"/account"}
                            endicon={
                                <Avatar
                                    avatarimage={'/img/avatar/user-avatar.png'}
                                    size="30px"
                                    isRounded={true}
                                    className="avatar"
                                />
                            }
                        ></NavLink>
                        <NavLink
                            leftBorder
                            target="/logout"
                            endicon={<Icon icon="mui-logout" />}
                        />

                    </>
                    : <>
                        <NavLink
                            label="Login"
                            leftBorder
                            target="/login"
                        />
                        <NavLink
                            label="Register"
                            leftBorder
                            target="/register" />
                    </>
            }
        </Nav>
    )
    /*
    
    <nav className='p-2'>
        <Button href="/">Home</Button>
        {
            loggedin === "true"
            ? <>
                <Button href="/logout">Log Out</Button>
                <Button href="/account">Account</Button>
              </>
            : <>
                <Button href="/login">Login</Button>
                <Button href="/register">Register</Button>
            </>
        }
    </nav>*/
}