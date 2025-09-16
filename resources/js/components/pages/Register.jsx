import FormControl from '@mui/material/FormControl';
import { useForm } from 'react-hook-form';
import { Button, TextField, Typography } from '@mui/material';
import React from 'react';
import Errors from '../small/Errors';
import { useState } from 'react';
export default function Register() {
    const [error, setError] = useState({});
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        fetch("/api/register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': csrfToken,
            },
            body: JSON.stringify({
                username: data.username,
                email: data.email,
                password: data.password,
            }),
        })
            .then(response => response.json())
            .then(data => {
                setError(data)
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    return (
        <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
            <FormControl sx={{ display: 'flex', flexDirection: 'column', gap: '1em', borderRadius: '8px', border: '1px solid #ccc', padding: '16px', margin: '8px', maxWidth: "400px", width: "100%" }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <b className='fs-4 fw-900 text-uppercase'>Register</b>
                </div>
                <TextField {...register('username', { required: true })} className='mb-1 mt-2' variant="outlined" label="Username" name="username" />
                {
                    'username' in error
                        ? Errors(error["username"])
                        : <></>
                }
                <TextField {...register('email', { required: true })} className='mb-1 mt-2' variant="outlined" label="Email" name="email" />
                {
                    'email' in error
                        ? Errors(error["email"])
                        : <></>
                }
                <TextField type='password' {...register('password', { required: true })} className='mb-1 mt-2' variant="outlined" label="Password" name="password" />
                {
                    'password' in error
                        ? Errors(error["password"])
                        : <></>
                }
                <Button onClick={handleSubmit(onSubmit)} type="submit" variant='contained' className='mb-2 mt-2 w-100'>Register</Button>
                {
                    'message' in error
                        ? <Typography>{error['message']}. <a href="/login">Click here to login to your new account</a></Typography>
                        : <></>
                }
            </FormControl>
        </div>
    )
}