import Grid2 from '@mui/material/Grid2'
import CTAComponent from './CTAComponent'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { lightTheme, darkTheme } from './customTheme'
import DisplayComponent from './Display.jsx'
import DisplayComponent2 from './Display2.jsx'
import DisplayComponent3 from './Display3.jsx'
import SubmitTextField from './test.jsx'

function App() {

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Grid2 
        container direction={"column"} 
        padding={10}  
        border={6} 
        justifyContent={"center"} alignItems={"center"} justifyItems={"center"} alignContent={"center"}
      >
        {/* <SubmitTextField /> */}
        <CTAComponent />
        {/* <DisplayComponent /> */}
        {/* <DisplayComponent2 /> */}
        <DisplayComponent3 />
      </Grid2>
    </ThemeProvider>
  )
}

export default App
