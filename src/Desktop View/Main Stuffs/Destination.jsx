import React, {useState} from 'react'
import { Box, Paper, Typography, Stack,  createTheme, ThemeProvider ,Button, IconButton, Drawer , Toolbar } from '@mui/material'

function Destination() {
  return (
    <Box>

   <Typography> 01 PICK YOUR DESTINATION </Typography>

      
  <Stack>
  <Box component='img' />


     
<Stack direction='row'>

 <Typography> MOON </Typography>
 <Typography> MARS </Typography>
 <Typography> EUROPA </Typography>
 <Typography> TITAN </Typography>

</Stack>

    <Typography variant='h1' > Subject </Typography>

    <Typography> Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, perspiciatis delectus ut a sit dolores quisquam, quam eius earum adipisci labore dignissimos aspernatur, rem ratione accusantium. Dignissimos sit architecto explicabo. </Typography>

    <Box/> {/*The underlined div */}

    <Stack direction='row'> 

    <Stack>
       <Typography>AVG. DISTANCE</Typography>
       <Typography></Typography>
    </Stack>

 
    <Stack>
       <Typography> EST. TRAVEL TIME </Typography>
       <Typography></Typography>
    </Stack>


    </Stack>

  </Stack>


    
    </Box>
  )
}

export default Destination
