import React, { useEffect } from 'react';
import Button from "@mui/material/Button";
import { Colors } from './Globals';
import { Typography } from '@mui/material';
import { useState } from 'react';

export default function Header() {
    var loggedin = localStorage.getItem("loggedin")

    useEffect(()=>{
        fetch("/isloggedin").then(out => out.text()).then(out => {
            localStorage.setItem("loggedin", out)
            if (loggedin !== out) { 
                window.location.reload()
            }
        });
    }, [])
    return <nav className='p-2'>
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
    </nav>
}