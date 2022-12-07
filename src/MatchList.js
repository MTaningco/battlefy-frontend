import { Paper, Typography } from "@mui/material";
import React, { Fragment, useState } from "react";
import MatchItem from "./MatchItem"

function MatchList({matches}) {
    return (
        <Paper>
            {
                matches.map((element) => {
                    console.log(element);
                    return(
                        <MatchItem matchInfo={element}></MatchItem>
                    );
                })
            }
        </Paper>
    );
}

export default MatchList;