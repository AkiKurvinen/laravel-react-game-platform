import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { Button, TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { useParams } from 'react-router-dom';
import Leaderboard from '../small/Leaderboard';

export default function GameStart() {
    const {game} = useParams();
    const [user, setUser] = useState(null);
    const [leaderboard, setLeaderboard] = useState([]);
    useEffect(async () => {
      fetch('/api/user', {
        credentials: 'include', // if you use cookie/session auth
        headers: {
          'Accept': 'application/json',
        },
      })
      .then(res => {
        if (res.ok) return res.json();
        throw new Error('Not authenticated');
      })
      .then(data => setUser(data))
      .catch(() => setUser(null));
      
      setLeaderboard(await Leaderboard(game))
    }, []);
    console.log(leaderboard)
    return <>
        <div className='m-2 w-100'>
            <h1 className='m-2' >Hi there {user ? user.username : 'Guest'}</h1>
            <div className="mt-2 d-flex justify-content-center m-2">
                <div style={{maxWidth: "900px", width: "100%"}}>
                    <div className='p-3 d-flex flex-column  m-2 w-100'>
                      <Button href={`/game/${game}/game/`} variant='contained' className='m-2 w-100'>pelaa</Button>
                      {
                        leaderboard.length > 0 
                        ?
                        <>
                          <h2 className='text-light'>{game} top 10 leaderboard:</h2>
                          {
                            leaderboard.map(record => <p className='m-0 fs-4'>{record.username} | {record.metric}</p>)
                          }
                        </> : <></>
                      }
                    </div>
                </div>
            </div>
        </div>
    </>
}