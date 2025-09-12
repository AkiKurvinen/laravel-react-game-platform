import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import React from "react";
import { FormControl, Typography, TextField, Button } from "@mui/material";

export default function Account() {
    const [message, setMessage] = useState({});
    const [email, setEmail] = useState("loading...");
    const [username, setUsername] = useState("loading...");
    const [newPassword, setNewPassword] = useState("");


    useEffect(()=>{
        fetch("/api/user").then(out=>out.json()).then(out => {
            setEmail(out.email);
            setUsername(out.username);
        });
    }, [])

    function saveSettings() {
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        fetch("/api/account", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': csrfToken,
            },
            body: JSON.stringify({
                username: username,
                email:    email,
                password: newPassword,
            }),
        })
        .then(response => response.json())
        .then(data => {
            setMessage(data)
            setNewPassword("")
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    return (
        <div className='d-flex w-100 justify-content-center'>
        <FormControl className='d-flex flex-column rounded border p-3 m-1' sx={{maxWidth: "400px", width: "100%"}}>
            <div className="d-flex justify-content-center">
                <b className='fs-4 fw-900 text-uppercase'>Käyttäjätilin asetukset<span style={{ fontSize: "35px", marginLeft: "3px"}}>.</span></b>
            </div>
            <TextField value={username} onChange={(e)=>{setUsername(e.target.value)}} className='mb-1 mt-2' variant="outlined" label="Käyttäjänimi" name="username"/>
            <TextField value={email} onChange={(e)=>{setEmail(e.target.value)}} className='mb-1 mt-2' variant="outlined" label="Sähköposti" name="email"/>
            <TextField value={newPassword} onChange={(e)=>{setNewPassword(e.target.value)}} type='password' className='mb-1 mt-2' variant="outlined" label="Uusi Salasana (optional)" name="password"/>
            <Button onClick={()=>{saveSettings()}} variant='contained' className='mb-2 mt-2 w-100'>tallenna muutokset</Button>
            {
                'message' in message 
                ? 
                message['message'] == "account settings saved" 
                    ? <Typography>{message['message']}</Typography>
                    : <Typography>{message['message']}</Typography>
                : <></>
            }
        </FormControl>
    </div>
    )
}