// theme.js
import { createTheme } from '@mui/material/styles';

const baseTheme = createTheme({
  // Custom breakpoints
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 1000,
      xl: 1250,
      xxl: 1424,
      xxxl: 1600,
    },
  },
});

// Light Mode Theme
export const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'light',
    background: {
      default: '#F2F3F4',
      paper: '#f7f7f8',
    },
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#ff4081',
    },
    text: {
      primary: '#333',
      secondary: '#888888',
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        // Setting default props, for example
        variant: "outlined",
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          // Background color for the entire input area
          backgroundColor: "#DBD7D2",
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#a3a3a3", // Border color on hover
            borderWidth: "1px",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#a3a3a3", // Border color on focus,
          },
        },
        input: {
          // Styling the input text
          color: "black",
          padding: "16px 18px", // Padding within the input
        },
        notchedOutline: {
          // Border styling
          borderColor: "#d3d3d3",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#888", // Label color
          "&.Mui-focused": {
            color: "#888", // Label color when focused
          },
        },
      },
    },
    // Base overrides that affect multiple input types (outlined, filled, standard)
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: "1rem", // Base font size for input text
        },
        input: {
          color: "black", // Text color in the input field
        },
      },
    },
  },
});

// Dark Mode Theme
export const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'dark',
    background: {
      default: '#242424',
      paper: '#333333',
    },
    primary: {
      main: '#90caf9',
    },
    blue:{
      main:"#1976d2",
    },
    secondary: {
      main: '#F0DFAD',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#bbbbbb',
    },
  },
});

