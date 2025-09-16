import FormControl from '@mui/material/FormControl';
import { useForm } from 'react-hook-form';
import { Button, TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { Typography} from '@mui/material';
export default function Login() {
    const [error, setError] = useState({});
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        fetch("/api/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': csrfToken,
            },
            body: JSON.stringify({
                username: data.username,
                password: data.password,
            }),
        })
        .then(response => response.json())
        .then(data => {
            setError(data)
            setTimeout(()=>{
                window.location.replace("/")
            }, 2000)
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
    return (
        <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
            <FormControl sx={{display: 'flex', flexDirection: 'column', borderRadius: '8px', border: '1px solid #ccc', padding: '16px', margin: '8px', maxWidth: "400px", width: "100%"}}>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <b className='fs-4 fw-900 text-uppercase'>Kirjaudu sisään<span style={{fontSize: "35px", marginLeft: "3px"}}>.</span></b>
                </div>
                <TextField {...register('username', { required: true })} className='mb-1 mt-2' variant="outlined" label="Käyttäjänimi" name="username"/>
                <TextField type='password' {...register('password', { required: true })} className='mb-1 mt-2' variant="outlined" label="Salasana" name="password"/>
                <Button onClick={handleSubmit(onSubmit)} type="submit" variant='contained' className='mb-2 mt-2 w-100'>Kirjaudu</Button>
                {
                    'message' in error 
                    ? 
                        error['message'] == "Login successful" 
                        ? <Typography>{error['message']}</Typography>
                        : <Typography>{error['message']}</Typography>
                    : <></>
                }
            </FormControl>
        </div>
    )
}