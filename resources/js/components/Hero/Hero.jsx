import React from 'react';
import { Typography } from '@mui/material';
import styled from '@emotion/styled';

const UnstyledHero = ({  ...props}) => {
    return (<div className='d-flex justify-content-center w-100' {...props}>
            <div
                className='banner mx-3 d-flex justify-content-center align-items-center'
                style={{
                    backgroundImage: "url('/imgs/banner.jpg')",
                }}
            >
                <Typography variant='h1'>Great games</Typography>
            </div>
        </div>)
}

export const Hero = styled(UnstyledHero)`
    h1{
        color: ${(props) => props.theme.palette.text.secondary};
        font-size: 2em;
    }
`