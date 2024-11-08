import Grid2 from '@mui/material/Grid2'
import CTAComponent from './CTAComponent'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { lightTheme, darkTheme } from './customTheme'
import DisplayComponent from './Display.jsx'
import CTAComponent2 from './CTAComponent2.jsx'

function App() {

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Grid2 
        container direction={"column"} 
        px={10} 
        justifyContent={"center"} alignItems={"center"} justifyItems={"center"} alignContent={"center"}
      >
        <CTAComponent2 />
        <CTAComponent />
        <DisplayComponent />
      </Grid2>
    </ThemeProvider>
  )
}

export default App
