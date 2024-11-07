import Grid2 from '@mui/material/Grid2'
import CTAComponent from './CTAComponent'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { lightTheme, darkTheme } from './customTheme'
import SubmitTextField from './test.jsx'

function App() {

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Grid2 
        container 
        direction={"column"} 
        padding={2}
        height={"100vh"} 
        display={"flex"} 
        justifyContent={"center"}
        border={2} borderColor={"orange"} 
        spacing={0}
        alignItems={"center"} 
      >
        <SubmitTextField />
        <CTAComponent />
      </Grid2>
    </ThemeProvider>
  )
}

export default App
