import * as React from 'react';
import Grid2 from '@mui/material/Grid2';
import TextField from '@mui/material/TextField';
import { Button, Box } from '@mui/material';

const CTAComponent = () => {
  return (
    <>
      <Grid2 container maxWidth={500} 
        columns={12}
      >
        <Grid2 size={9} >
          <TextField label="Enter Prompt" fullWidth/>
        </Grid2>
        <Grid2 size={3}>
          <Button
            variant="contained"
            disableElevation
            sx={{
              width: "100%", 
              height: "100%",
              borderRadius: "0px 4px 4px 0px",
            }}
          >
            Submit
          </Button>
        </Grid2>
      </Grid2>
    </>

  );
}

export default CTAComponent;