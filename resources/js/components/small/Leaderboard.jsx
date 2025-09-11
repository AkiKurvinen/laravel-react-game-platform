import React from "react";
import { Typography } from "@mui/material";
import { Colors } from "../Globals";

export default async function Leaderboard(game) {
    var leaderboard = []
    const result = await fetch(`/api/leaderboard/${game}`);
    const resultJson = await result.json();
    console.log(resultJson);
    leaderboard = resultJson;

    console.log("leaderboard" + leaderboard.length.toString())
    return leaderboard
}