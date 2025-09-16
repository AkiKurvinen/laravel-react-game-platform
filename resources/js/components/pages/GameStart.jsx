import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { Button, TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { useParams } from 'react-router-dom';
import Leaderboard from '../small/Leaderboard';
import Box from '@mui/material/Box';

export default function GameStart() {
  const { game } = useParams();
  const [user, setUser] = useState(null);
  const [leaderboard, setLeaderboard] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/user', {
          credentials: 'include',
          headers: {
            'Accept': 'application/json',
          },
        });
        if (!res.ok) throw new Error('Not authenticated');
        const data = await res.json();
        setUser(data);
      } catch {
        setUser(null);
      }
      const lb = await Leaderboard(game);
      setLeaderboard(lb);
    }
    fetchData().then(() => {
      console.log('data fetched', leaderboard);
    });
  }, []);

  return (
    <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h1">{game}</Typography>
      <Typography variant="body1">Hi there {user ? user.username : 'Guest'}</Typography>
      <Box sx={{ maxWidth: 900, width: '100%', mt: 2 }}>
        <Button href={`/game/${game}/game/`} variant='contained'>Play</Button>

        <Box sx={{ mt: 4 }}>
          <Typography variant="overline">Top 10 leaderboard</Typography>
          <br />
          {
            leaderboard.length > 0
              ?
              <>
                {
                  leaderboard.map((record, idx) => (
                    <p key={record.id || `${record.username}-${record.metric}-${idx}`}>
                      {record.username} | {record.metric}
                    </p>
                  ))
                }
              </> : <>no data</>
          }
        </Box>
      </Box>

    </Box>)
}