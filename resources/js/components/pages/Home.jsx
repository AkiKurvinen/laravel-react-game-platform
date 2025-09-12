import React, { useEffect, useState } from 'react';

import {Hero} from '../Hero/Hero';
import {Card} from '../Card/Card';
import Typography from '@mui/material/Typography';

export default function Home() {
    const [gameInfo, setGameInfo] = useState([])
    useEffect(() => {
        async function fetchGameInfo() {
            const resp = await fetch("/gameinfo.json");
            const respJson = await resp.json();
            setGameInfo(respJson.games);
        }
        fetchGameInfo();
    }, [])

    return <>
    <Hero heroimage={"./img/banner.jpg"}>
        <Typography variant={"h1"}>Great Games</Typography>
        <Typography variant={"subtitle1"}>Just play it!</Typography>
    </Hero>

        <div className="w-100 d-flex justify-content-center">
            <div style={{maxWidth: "1000px"}} className='w-100'>
                <div className="d-flex justify-content-center w-100">
                    <h1 className='mx-4 mt-4 text-uppercase fw-900 display-6'>Available Games<span style={{fontSize: "65px", marginLeft: "3px", position: "relative", top: "3px"}}>:</span></h1>
                </div>
                <div className='d-flex mx-3'>
                    {
                    gameInfo.map(game => 
                        <Card key={game.id || game.name} game={game} />
                    )
                    }
                </div>
            </div>
        </div>
    </>
}