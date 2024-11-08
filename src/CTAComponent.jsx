import * as React from 'react';
import Grid2 from '@mui/material/Grid2';
import TextField from '@mui/material/TextField';
import { Button, Box } from '@mui/material';
import axios from 'axios';

const CTAComponent = () => {

  const [url, setUrl] = React.useState("");
  
  const handleSubmit = async () => {
    try {
      const response = await axios.post('/api/submit-task', { url });
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error submitting task:', error);
    }
  };

  return (
    <>
      <Grid2 container minWidth={500} columns={12}>
        <Grid2 size={9} >
          <TextField 
            label="Enter Prompt" 
            value={url}
            onChange={(e) => setUrl(e.currentTarget.value)}
            fullWidth
          />
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
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Grid2>
      </Grid2>
    </>
  );
}

export default CTAComponent;