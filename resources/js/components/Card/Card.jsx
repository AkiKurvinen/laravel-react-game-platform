import React from 'react';
import { Typography } from '@mui/material';
import styled from '@emotion/styled';
import { Button, TextField } from '@mui/material';

const UnstyledCard = ({ game, ...props }) => {
    return (
        <div className="boxi-outer w-50 m-2" key={game.id || game.name} {...props}>
            <div className='d-flex boxi'>
                <div className="ms-2 d-flex flex-column">
                    <h2 className={`text-uppercase cardTitle`}>{game.name}</h2>
                    <img src={game.thumbnail} className={`rounded cardImg`} alt={game.name} />
                    <p className={`cardDesc`}>{game.description}</p>
                    <Button variant='contained' className='fw-bold' href={game.link}>pelaa</Button>
                </div>
            </div>
        </div>
    );
}

export const Card = styled(UnstyledCard)`
    .cardTitle {
        color: ${(props) => props.theme.palette.primary.main};
        text-decoration: underline;
        text-decoration-color: var(--theme-color);
    }

    .cardImg {
        max-width: 500px;
        max-height: 250px;
    }

    .cardDesc {
        color: ${(props) => props.theme.palette.primary.main};
        font-size: 20px;
    }
`