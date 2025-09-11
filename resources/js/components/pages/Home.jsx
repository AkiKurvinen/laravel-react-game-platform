import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { Colors } from '../Globals';
import { Button, TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';

export default function Home() {
    const [gameInfo, setGameInfo] = useState([])
    useEffect(async ()=>{
        const resp = await fetch("/gameinfo.json");
        const respJson = await resp.json();
        setGameInfo(respJson.games);
    }, [])

    return <>
        <div className='d-flex justify-content-center w-100'>
            <div className='banner mx-3 d-flex justify-content-center align-items-center'>
                <Typography className='cool-title fw-900 text-uppercase display-2' style={{textDecoration: `underline ${Colors.theme}`}}>Great games</Typography>
            </div>
        </div>
        <div className="w-100 d-flex justify-content-center">
            <div style={{maxWidth: "1000px"}} className='w-100'>
                <div className="d-flex justify-content-center w-100">
                    <h1 className='mx-4 mt-4 text-uppercase fw-900 display-6' style={{color: Colors.primary, fontWeight: "900"}}>Available Games<span style={{color: Colors.theme, fontSize: "65px", marginLeft: "3px", position: "relative", top: "3px"}}>:</span></h1>
                </div>
                <div className='d-flex mx-3'>
                    {
                    gameInfo.map(game => 
                        <div className="boxi-outer w-50 m-2">
                            <div className='d-flex boxi'>
                                <div className="ms-2 d-flex flex-column">
                                    <h2 className='text-uppercase'
                                        style={{color: Colors.primary, 
                                        textDecoration: "underline", 
                                        textDecorationColor: Colors.theme}}>{game.name}</h2>
                                    <img src={game.thumbnail} style={{maxWidth: "500px", maxHeight: "250px"}} className='rounded'></img>
                                    <p style={{color: Colors.primary, fontSize: "20px"}}>{game.description}</p>
                                    <Button variant='contained' className='fw-bold' href={game.link}>pelaa</Button>
                                </div>
                            </div>
                        </div>
                    )
                    }
                </div>
            </div>
        </div>
    </>
}