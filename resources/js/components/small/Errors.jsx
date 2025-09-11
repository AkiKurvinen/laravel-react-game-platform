import React from "react";
import { Typography } from "@mui/material";
import { Colors } from "../Globals";

export default function GenerateErrors(errorList) {
    var componentList = []
    errorList.forEach(error => {
        componentList.push(
            <Typography sx={{color: Colors.theme}}>
                Error: {error}
            </Typography>
        )
    })
    return componentList;
}