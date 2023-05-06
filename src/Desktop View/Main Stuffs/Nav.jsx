import React, {useState} from 'react'
import { Box, Paper, Typography, Stack,  createTheme, ThemeProvider ,Button, IconButton, Drawer , Toolbar } from '@mui/material'
import logo from "/src/assets/shared/logo.svg"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';


const theme = createTheme({
   components:{
    MuiDrawer:{
        styleOverrides:{
            paper:{
                backgroundColor:'rgba(255, 255, 255, 0.04)',
                backdropFilter: 'blur(81.5485px)',
                color:'white'
            }
        }
    }
   }
})


function Nav() {
  const [isDrawerOpen, setisDrawerOpen] = useState(false);

  return (
    <Box
    p={{
        sm:'24px',
        lg:'70px',
    }}
    >

        <Toolbar id="desktopNav">

         <Stack 
         direction='row' 
         spacing={{
            sm:20,
            lg:80,
               
         }}
         sx={{position:'relative', alignItems:'center'}} > 

      <Box>
      <Box component='img' src={logo} />
            
            <Box 
            sx={{
                width:{
                    sm:'118px',
                    lg:"420px"
                },
                 height:'1px', 
                 background:'#ffffff', 
                 mixBlendMode:'normal',
                  opacity:0.25, 
                  position:'absolute', 
                  top:{
                    sm:'3.4vh',
                    lg:'4vh',
                    custom:'2.4vh',
                  }, 
                  left:{
                    sm:'62px',
                    lg:'130px'
                  },
                   zIndex: 2 
                   }} />

      </Box>

            <Stack 
            direction='row'
            spacing={{
                 sm: 4 , //600
                 md: 8, //900
                 custom2: 12, 
                lg: 10  //1200

            }}
            sx={{
            padding:{
                sm:'15px',
                lg:'24px'
            },
                backgroundColor:'rgba(255, 255, 255, 0.04)',
                backdropFilter: 'blur(81.5485px)'
            }}
            >

          <Link to={'/'} style={{textDecoration:'none', color:'white'}}>
          <Stack 
           direction='row' 
           sx={{alignItems:'center'}}
           spacing={{
                     sm:0.5,
                      lg:1.4,
                      
           }}>
            <Typography><b>00</b></Typography>
           <Typography>  HOME </Typography>
           </Stack>
          </Link>

         
         <Link to={'Destination'} style={{textDecoration:'none', color:'white'}}>
         <Stack 
           direction='row' 
           sx={{alignItems:'center'}}
           spacing={{
                      sm:0.5,
                      lg:1.4
           }}>
            <Typography><b>01</b></Typography>
           <Typography>  DESTINATION  </Typography>
           </Stack>

         </Link>

        
        <Link to={'Crew'} style={{textDecoration:'none', color:'white'}}>
        <Stack 
           direction='row' 
           sx={{alignItems:'center'}}
           spacing={{
                      sm:0.5,
                      lg:1.4
           }}>
            <Typography><b>02</b></Typography>
           <Typography>   CREW </Typography>
           </Stack>
        </Link>
           

           <Link to={'Technology'} style={{textDecoration:'none', color:'white'}}>
           <Stack 
           direction='row' 
           sx={{alignItems:'center'}}
           spacing={{
                      sm:0.5,
                      lg:1.4
           }}>
            <Typography> <b>03</b></Typography>
           <Typography> TECHNOLOGY </Typography>
           </Stack>
           </Link>

            </Stack>
        

         </Stack>

        </Toolbar>


 {/* NAVBAR FOR SCREEN SIZES SMALLER THAN 600PX */}
     
     <Toolbar id='desktopNav2'>

        <Box sx={{display:'flex', justifyContent:'space-between'}}  >

        <Box component='img' src={logo} />
    
    
<IconButton size='small' edge='start' color='inherit' aria-label='logo' onClick={()=> setisDrawerOpen(true)} >
     <MenuIcon fontSize='large' />
       </IconButton>

        </Box>

     </Toolbar>

     {/* DRAWER FOR  THE SIDE MENU */}

    <ThemeProvider theme={theme} >
    <Drawer anchor='right' open={isDrawerOpen} onClose={() => setisDrawerOpen(false)}  >

<Box  width='450px' textAlign='center' role='presentation' >

<Stack spacing={6} style={{textTransform:'uppercase', padding:'100px' }}>


      <Link to={'/'} style={{textDecoration:'none', color:'white'}}>
     <Typography fontSize='30px'>Home</Typography>
     </Link>


     <Link to={'Destination'} style={{textDecoration:'none', color:'white'}}>
  <Typography fontSize='30px'>Destination</Typography>
     </Link>

     <Link to={'Crew'} style={{textDecoration:'none', color:'white'}}>
  <Typography fontSize='30px'>Crew</Typography>
     </Link>

     <Link to={'Technology'} style={{textDecoration:'none', color:'white'}}>
  <Typography fontSize='30px'>Technology</Typography>
     </Link>





    </Stack>

</Box>

</Drawer>
    </ThemeProvider>

      
    </Box>
  )
}

export default Nav
