import React, { useState } from 'react';
import axios from 'axios';
import { Button, TextField, Box, Grid2 } from '@mui/material';

function CTAComponent2() {

  const [url, setUrl] = useState("");
  
  const handleSubmit = async () => {
    try {
      const response = await axios.post('/api/submit-task', { url });
      setUrl('');
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error submitting task:', error);
    }
  };

  return (
    <Grid2 display={{xs: "block", md: "none"}} py={6} sx={{ width: "100%" }} maxWidth={600}>
      <TextField
        label="Enter URL"
        variant="outlined"
        fullWidth
        value={url}
        onChange={(e) => setUrl(e.currentTarget.value)}
        sx={{ marginBottom: 2, boxShadow: 1 }}
      />
      <Button
        variant="contained"
        fullWidth
        onClick={handleSubmit}
      >
        Submit
      </Button>

      {/* {submittedText && (
        <Box sx={{ marginTop: 2 }}>
          <h3>Submitted Text: </h3>
          <p>{submittedText}</p>
        </Box>
      )} */}
    </Grid2>
  );
}

export default CTAComponent2;
