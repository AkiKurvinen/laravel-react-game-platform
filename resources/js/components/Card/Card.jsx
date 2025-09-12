import React from 'react';
import { Typography } from '@mui/material';
import styled from '@emotion/styled';
import { Button, TextField } from '@mui/material';

const UnstyledCard = ({ game, ...props }) => {
    return (
        <div key={game.id || game.name} {...props}>
            <div>
                <h2>{game.name}</h2>
                <p>{game.description}</p>
                <Button variant='contained' href={game.link}>Play</Button>
            </div>
            <img src={`./img/thumbs/${game.thumbnail}`} className={`cardImg`} alt={game.name} />
        </div>
    );
}

export const Card = styled(UnstyledCard)`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  gap: 2em;

  & div:first-of-type,
  & div:first-child {
    width: 100%;
    vertical-align: top;
    text-align: justify;
  }
  & div:last-of-type img,
  & div:last-child img {
    max-width: 100%;
    height: auto;
  }

  & small {
    margin-left: 2em;
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
    & div:first-of-type {
      margin-bottom: 0;
    }
  }
`