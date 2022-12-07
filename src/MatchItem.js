import { Paper, Typography, Grid } from "@mui/material";
import React, { Fragment, useState } from "react";

function MatchItem({matchInfo}) {

    const getKdaRatio = () => {
        if (matchInfo.deaths === 0) {
            return "Perfect";
        } else {
            return (matchInfo.kills + matchInfo.assists) / matchInfo.deaths + ":1";
        }
    };

    const getCsPerMin = () => {
        return Math.round(matchInfo.totalCreepScore/matchInfo.gameDuration * 60 * 10) / 10;
    };

    const getFormattedDuration = () => {
        let min = Math.round(matchInfo.gameDuration / 60)
        let seconds = matchInfo.gameDuration % 60;
        return `${min}min ${seconds}s`;
    }

    return (
        <Paper sx={{ flexGrow: 1 }} style={{backgroundColor: matchInfo.outcome ? "#6e8bff" : "#ff7a6e", padding: "20px", margin: "5px"}}>
            <Grid container spacing={2}>
                <Grid item xs={1}>
                    <Typography style={{color: matchInfo.outcome ? "#403dff" : "#ff4d3d"}}>{matchInfo.outcome ? "Victory": "Defeat"}</Typography>
                    <Typography>{getFormattedDuration()}</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography>{matchInfo.championName}</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography>{`${matchInfo.kills}/${matchInfo.deaths}/${matchInfo.assists}`}</Typography>
                    <Typography>{`${getKdaRatio()} KDA`}</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography>{`Level ${matchInfo.championLevel}`}</Typography>
                    <Typography>{`${matchInfo.totalCreepScore} (${getCsPerMin()}) CS`}</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography>{getKdaRatio()}</Typography>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default MatchItem;