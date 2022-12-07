import './App.css';
import React, { Fragment } from "react";
import { Button, TextField } from '@mui/material';

function App() {
  return (
    <Fragment>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Button variant="contained">Search</Button>
    </Fragment>
  );
}

export default App;
