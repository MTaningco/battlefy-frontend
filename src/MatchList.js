import { Paper, Typography } from "@mui/material";
import React, { Fragment, useState } from "react";

function MatchList({matches}) {
    matches.map((element) => {
        console.log(element);
    })
    return (
        <Paper>
            {
                matches.map((element) => {
                    console.log(element);
                    return(
                        <Paper>
                            <Typography>{element.summonerName}</Typography>
                        </Paper>
                    );
                })
            }
        </Paper>
    );
}

export default MatchList;