import React from 'react'
import { Box, Paper, Typography, Stack} from '@mui/material'

function Home() {
  return (
    <>

    <Stack 
    direction={{sm:'column', lg:'row'}} 
    sx={{
        padding:{
            lg:'80px'
        }
    }}
    spacing={{
        lg:72
    }}
     >

        <Stack sx={{width:'40%'}}>

            <Typography  variant='h5' fontSize='2rem'> SO, YOU WANT TO TRAVEL TO </Typography>

            <Typography variant='h1' sx={{fontSize:'7rem'}}> SPACE</Typography>

            <Typography variant='p' sx={{textAlign:'justify', fontSize:'1.2rem'}} >Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</Typography>
        </Stack>

        <Box sx={{
            width:'200px',
            height:'200px',
            background:'#ffffff',
            borderRadius:'50%',
            cursor:'pointer',
            color:'black',
            position:'relative',
            zIndex: 3
        }} > 
            <Typography sx={{position:'absolute', top:'50%', left:'50%', transform: 'translate(-50%, -50%)', fontSize:'2rem'}}> EXPLORE </Typography>
            </Box>


    </Stack>
      
    </>
  )
}

export default Home
