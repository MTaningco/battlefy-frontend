import './App.css';
import React, { Fragment, useState } from "react";
import { Box, Button, Grid, TextField } from '@mui/material';
import MatchList from './MatchList'

function App() {
  const [matches, setMatches] = useState([]);
  const [summonerInput, setSummonerInput] = useState("");


  const getLatestMatches = () => {
    const response = fetch(`https://battlefy-backend.onrender.com/api/latestMatches?summoner=${summonerInput}`)
      .then(res => res.json())
      .then(res => setMatches(res))
      .catch((error) => {
        alert("could not find the summoner");
      });
  };

  const handleTextFieldChange = (event) => {
    setSummonerInput(event.target.value);
  };

  
//   <Fragment>
//   <TextField id="outlined-basic" label="Outlined" variant="outlined" />
//   <Button variant="contained" onClick={() => getLatestMatches()}>Search</Button>
// </Fragment>

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <TextField 
            id="outlined-basic" 
            label="Outlined" 
            variant="outlined" 
            value = {summonerInput}
            onChange = {handleTextFieldChange}/>
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" onClick={() => getLatestMatches()}>Search</Button>
        </Grid>
        <Grid item xs={12}>
          <MatchList matches={matches}></MatchList>
        </Grid>
      </Grid>
    </Box>
    );
}

export default App;
