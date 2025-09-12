import React from 'react';
import { Typography } from '@mui/material';
import styled from '@emotion/styled';
import { Button, TextField } from '@mui/material';

const UnstyledCard = ({ game, ...props }) => {
    return (
        <div className="boxi-outer card-outer" key={game.id || game.name} {...props}>
            <div className='card-inner boxi'>
                <div className="card-content">
                    <h2 className={`cardTitle`}>{game.name}</h2>
                    <img src={game.thumbnail} className={`cardImg`} alt={game.name} />
                    <p className={`cardDesc`}>{game.description}</p>
                    <Button variant='contained' sx={{fontWeight: 'bold'}} href={game.link}>pelaa</Button>
                </div>
            </div>
        </div>
    );
}

export const Card = styled(UnstyledCard)`
    .card-outer {
        width: 50%;
        margin: 8px;
    }
    .card-inner {
        display: flex;
    }
    .card-content {
        margin-left: 0.5em;
        display: flex;
        flex-direction: column;
    }
    .cardTitle {
        color: ${(props) => props.theme.palette.primary.main};
        text-transform: uppercase;
        text-decoration: underline;
        text-decoration-color: var(--theme-color);
    }
    .cardImg {
        max-width: 500px;
        max-height: 250px;
        border-radius: 8px;
    }
    .cardDesc {
        color: ${(props) => props.theme.palette.primary.main};
        font-size: 20px;
    }
`