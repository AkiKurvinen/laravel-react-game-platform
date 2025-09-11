import FormControl from '@mui/material/FormControl';
import { useForm } from 'react-hook-form';
import { Button, TextField, Typography } from '@mui/material';
import React from 'react';
import {Colors} from '../Globals';
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
                email:    data.email,
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
        <div className='d-flex w-100 justify-content-center'>
            <FormControl className='d-flex flex-column rounded border p-3 m-1' sx={{maxWidth: "400px", width: "100%"}}>
                <div className="d-flex justify-content-center">
                    <b style={{color: Colors.primary}} className='fs-4 fw-900 text-uppercase'>Rekisteröidy<span style={{color: Colors.theme, fontSize: "35px", marginLeft: "3px"}}>.</span></b>
                </div>
                <TextField {...register('username', { required: true })} className='mb-1 mt-2' variant="outlined" label="Käyttäjänimi" name="username"/>
                {
                    'username' in error 
                    ? Errors(error["username"])
                    : <></>
                }
                <TextField {...register('email', { required: true })} className='mb-1 mt-2' variant="outlined" label="Sähköposti" name="email"/>
                {
                    'email' in error 
                    ? Errors(error["email"])
                    : <></>
                }
                <TextField type='password' {...register('password', { required: true })} className='mb-1 mt-2' variant="outlined" label="Salasana" name="password"/>
                {
                    'password' in error 
                    ? Errors(error["password"])
                    : <></>
                }
                <Button onClick={handleSubmit(onSubmit)} type="submit" variant='contained' className='mb-2 mt-2 w-100'>Rekisteröidy</Button>
                {
                    'message' in error 
                    ? <Typography sx={{color: Colors.success}}>{error['message']}. <a href="/login">Click here to login to your new account</a></Typography>
                    : <></>
                }
            </FormControl>
        </div>
    )
}