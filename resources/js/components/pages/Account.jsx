import React from "react";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { FormControl, Typography, TextField, Button } from "@mui/material";

export default function Account() {
    const [message, setMessage] = useState({});
    const [email, setEmail] = useState("loading...");
    const [username, setUsername] = useState("loading...");
    const [newPassword, setNewPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [repeatError, setRepeatError] = useState("");

    useEffect(() => {
        fetch("/api/user").then(out => out.json()).then(out => {
            setEmail(out.email);
            setUsername(out.username);
        });
    }, [])

    function saveSettings() {
        setRepeatError("");
        if (newPassword && newPassword !== repeatPassword) {
            setRepeatError("Passwords do not match");
            return;
        }
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        fetch("/api/account", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': csrfToken,
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: newPassword,
            }),
        })
            .then(response => response.json())
            .then(data => {
                setMessage(data)
                setNewPassword("");
                setRepeatPassword("");
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
            <FormControl sx={{ display: 'flex', flexDirection: 'column', gap: '1em', borderRadius: '8px', border: '1px solid #ccc', padding: '16px', margin: '8px', maxWidth: "400px", width: "100%" }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <b className='fs-4 fw-900 text-uppercase'>Account settings</b>
                </div>
                <TextField value={username} onChange={(e) => { setUsername(e.target.value) }} 
                className='mb-1 mt-2' variant="outlined" label="Username" name="username" 
                data-cy="form-account-username"/>
                <TextField value={email} onChange={(e) => { setEmail(e.target.value) }} 
                className='mb-1 mt-2' variant="outlined" label="Email" name="email" 
                data-cy="form-account-email"/>
                <TextField value={newPassword} onChange={(e) => { setNewPassword(e.target.value) }} type='password' className='mb-1 mt-2' variant="outlined" 
                label="New password (optional)" name="password" data-cy="form-account-password"/>
                <TextField value={repeatPassword} onChange={(e) => { setRepeatPassword(e.target.value) }} 
                type='password' className='mb-1 mt-2' variant="outlined" label="Repeat new password" 
                name="repeatPassword" data-cy="form-account-repeat-password"/>
                {repeatError && <Typography color="error">{repeatError}</Typography>}
                <Button onClick={() => { saveSettings() }} variant='contained' className='mb-2 mt-2 w-100' 
                data-cy="form-account-save-button">Save changes</Button>
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