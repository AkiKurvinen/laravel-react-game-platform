import React from "react";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
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
        <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
        <FormControl sx={{display: 'flex', flexDirection: 'column', borderRadius: '8px', border: '1px solid #ccc', padding: '16px', margin: '8px', maxWidth: "400px", width: "100%"}}>
            <div style={{display: 'flex', justifyContent: 'center'}}>
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