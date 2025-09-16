import React, { useEffect, useState } from 'react';

import { Hero } from '../Hero/Hero';
import { Card } from '../Card/Card';
import { Section } from '../Section/Section';
import { Footer } from '../Footer/Footer';
import Typography from '@mui/material/Typography';

export default function Home() {
    const [gameInfo, setGameInfo] = useState([])
    useEffect(() => {
        async function fetchGameInfo() {
            const resp = await fetch("/gameinfo.json");
            const respJson = await resp.json();
            setGameInfo(respJson.sections);
            console.log(respJson.sections);
        }
        fetchGameInfo();
    }, [])

    return <>
        <Hero heroimage={"./img/banner.jpg"}>
            <Typography variant={"h1"}>Great Games</Typography>
            <Typography variant={"subtitle1"}>Just play it!</Typography>
        </Hero>

        {gameInfo &&
            gameInfo.map(section => (
                <Section key={section.id || section.name} name={section.name} id={section.id}>
                    {section.games.map(game =>
                        <Card key={game.id || game.name} game={game} />
                    )}
                </Section>
            ))
        }
        
        <Footer id="footer" />

    </>
}