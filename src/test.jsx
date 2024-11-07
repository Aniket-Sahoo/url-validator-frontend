import React, { useState } from 'react';
import { Button, TextField, Box, Grid2 } from '@mui/material';

function SubmitTextField() {
  const [inputText, setInputText] = useState(""); // To store input text
  const [submittedText, setSubmittedText] = useState(""); // To store submitted text

  const handleInputChange = (event) => {
    setInputText(event.target.value); // Update input text
  };

  const handleSubmit = () => {
    setSubmittedText(inputText); // Submit the text
    setInputText(""); // Clear the input field after submit
  };

  return (
    <Grid2 sx={{ maxWidth: 500, padding: 2 }}>
      <TextField
        label="Enter Text"
        variant="outlined"
        fullWidth
        value={inputText}
        onChange={handleInputChange}
        sx={{ marginBottom: 2 }}
      />
      <Button
        variant="contained"
        fullWidth
        onClick={handleSubmit}
      >
        Submit
      </Button>

      {submittedText && (
        <Box sx={{ marginTop: 2 }}>
          <h3>Submitted Text: </h3>
          <p>{submittedText}</p>
        </Box>
      )}
    </Grid2>
  );
}

export default SubmitTextField;
