import React from 'react'
import { Box, Paper, Typography, Stack,  createTheme, ThemeProvider } from '@mui/material'
import './Desktop.css'
import desktopBackground from '/src/assets/home/background-home-desktop.jpg'
import tabletBackground from "/src/assets/home/background-home-tablet.jpg"
import Nav from './Main Stuffs/Nav'
import Home from './Main Stuffs/Home'
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom'




function Desktop() {

  
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1920,
        custom: 801,
        custom2: 1000
      },
    },
    
  });

  return (
  <Router>
     <ThemeProvider theme={theme}>

<Box 
id='desktop-view' 
sx={{
 backgroundImage:{
   sm:  `url(${tabletBackground})`,
   lg: `url(${desktopBackground})`
 },
 backgroundRepeat: 'no-repeat',
 backgroundSize: 'cover',
 backgroundPosition: 'center',
 height: '100vh',
 
}}
>
 <Nav />

<Routes>



</Box>

</Routes>

</ThemeProvider>
  </Router>
  )
}

export default Desktop
