import React from "react";
import { Typography } from "@mui/material";

export default function GenerateErrors(errorList) {
    var componentList = []
    errorList.forEach(error => {
        componentList.push(
            <Typography>
                Error: {error}
            </Typography>
        )
    })
    return componentList;
}