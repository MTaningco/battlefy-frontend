import { Paper, Typography, Grid, Box } from "@mui/material";
import React, { Fragment, useState } from "react";
import spellList from './summoner.json';

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

    const getImageSrcFromSpellKey = (id) => {
        for (var spellName in spellList.data) {
            if (spellList.data[spellName].key === ("" + id)) {
                return spellName
            }
        }
    };

    console.log(getImageSrcFromSpellKey(4));

    return (
        <Paper sx={{ flexGrow: 1 }} style={{backgroundColor: matchInfo.outcome ? "#6e8bff" : "#ff7a6e", padding: "20px", margin: "5px"}}>
            <Grid container spacing={2}>
                <Grid item xs={1}>
                    <Typography style={{color: matchInfo.outcome ? "#403dff" : "#ff4d3d"}}>{matchInfo.outcome ? "Victory": "Defeat"}</Typography>
                    <Typography>{getFormattedDuration()}</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography>{matchInfo.championName}</Typography>
                    <Box
                        component="img"
                        sx={{
                        height: 30,
                        width: 30,
                        maxHeight: { xs: 30, md: 30 },
                        maxWidth: { xs: 30, md: 30 },
                        }}
                        alt=""
                        src={`http://ddragon.leagueoflegends.com/cdn/12.22.1/img/champion/${matchInfo.championName}.png`}
                    />
                    {
                        matchInfo.spells.map((id) => {
                            return (
                                <Box
                                    component="img"
                                    sx={{
                                    height: 30,
                                    width: 30,
                                    maxHeight: { xs: 30, md: 30 },
                                    maxWidth: { xs: 30, md: 30 },
                                    }}
                                    alt=""
                                    src={`http://ddragon.leagueoflegends.com/cdn/12.22.1/img/spell/${getImageSrcFromSpellKey(id)}.png`}
                                />
                            );
                        })
                    }
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
                    {
                        matchInfo.items.map(item => {
                            if (item === 0) {
                                return (
                                    <Box
                                        component="img"
                                        sx={{
                                        height: 30,
                                        width: 30,
                                        maxHeight: { xs: 30, md: 30 },
                                        maxWidth: { xs: 30, md: 30 },
                                        }}
                                        alt=""
                                        src={`http://ddragon.leagueoflegends.com/cdn/12.22.1/img/item/7050.png`}
                                    />
                                );
                            } else {
                                return (
                                    <Box
                                        component="img"
                                        sx={{
                                        height: 30,
                                        width: 30,
                                        maxHeight: { xs: 30, md: 30 },
                                        maxWidth: { xs: 30, md: 30 },
                                        }}
                                        alt=""
                                        src={`http://ddragon.leagueoflegends.com/cdn/12.22.1/img/item/${item}.png`}
                                    />
                                );
                            }
                        })
                    }
                </Grid>
            </Grid>
        </Paper>
    );
}

export default MatchItem;