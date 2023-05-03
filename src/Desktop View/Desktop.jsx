import React from 'react'
import { Box, Paper, Typography, Stack,  createTheme, ThemeProvider } from '@mui/material'
import './Desktop.css'
import {makeStyles} from '@mui/styles'
import background from '/src/assets/home/background-home-desktop.jpg'


const useStyles = makeStyles({
  root: {
    backgroundImage: 'url("/src/assets/home/background-home-desktop.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    // '@media (max-width: 600px)': {
    //   backgroundImage: 'url("your-image-url-for-small-screens")',
    //  },
  },
});

function Desktop() {

  const classes = useStyles();

  return (
    <Box id='desktop-view' className={classes.root} >
      big boooyyyfddss
    </Box>
  )
}

export default Desktop
