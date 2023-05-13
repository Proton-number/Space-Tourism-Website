import { useState } from 'react'
import './App.css'
import Desktop from './Desktop View/Desktop'
import Mobile from './Mobile View/Mobile'
import {createTheme, ThemeProvider } from '@mui/material'


function App() {

  
  const theme = createTheme({
    typography:{
      fontFamily:`'Barlow Condensed' sans-serif`
    }
  })


  return (
  <ThemeProvider theme={theme}>
      <>
     <Desktop />
     <Mobile />
    </>
  </ThemeProvider>
  )
}

export default App
