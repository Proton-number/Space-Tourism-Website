import React from 'react'
import { Box, Paper, Typography, Stack,  createTheme, ThemeProvider } from '@mui/material'
import './Desktop.css'
import background from '/src/assets/home/background-home-desktop.jpg'



function Desktop() {


  return (
    <Box 
    id='desktop-view' 
    sx={{
      backgroundImage:`url(${background})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
       '@media (max-width: 600px)': {
        backgroundImage: 'url("/src/assets/home/background-home-tablet.jpg")',
        },
    }}
     >
      big boooyyyfddss
    </Box>
  )
}

export default Desktop
