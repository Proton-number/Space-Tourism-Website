import React, {useState} from 'react'
import { Box, Typography, Stack, ToggleButton, ToggleButtonGroup  } from '@mui/material'
import launchVehicle from "/src/assets/technology/image-launch-vehicle-landscape.jpg"
import spaceCapsule from "/src/assets/technology/image-space-capsule-landscape.jpg"
import spacePort from "/src/assets/technology/image-spaceport-landscape.jpg"
import desktopBackground from '/src/assets/technology/background-technology-desktop.jpg'
import tabletBackground from "/src/assets/technology/background-technology-tablet.jpg"
import Nav from './Nav'
import { motion } from 'framer-motion';



const images = [`${launchVehicle}`, `${spacePort}`, `${spaceCapsule}`];


const header = [
    "LAUNCH VEHICLE",
    "SPACEPORT",
    "SPACE CAPSULE"
]

const texts = [
    "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",

    "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",

    "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
]



function Technology() {
    const [currentIndex, setCurrentIndex] = useState(0);
  const [activeButton, setActiveButton] = useState(1);

  const MotionButton = motion(ToggleButton)

  const handleButtonClick = (event, buttonNumber) => {
    if (buttonNumber !== null) {
    setActiveButton(buttonNumber);
    }
  };


    const handleOneClick = () => {
        setCurrentIndex(0)
       }

       const handleTwoClick = () => {
        setCurrentIndex(1)
       }

       const handleThreeClick = () => {
        setCurrentIndex(2)
       }

    //    const styles = {
    //     display:'flex',
    //     justifyContent:"center",
    //     backgroundColor:'white',
    //     padding:'15px',
    //     color:'black',
    //     borderRadius:'50%',
    //     height:'20px',
    //     width:'20px'
    //    }



  return (
 <>

<Nav />

    <Stack
     sx={{
        justifyContent:"center",
        alignItems:'center',
          backgroundImage:{
            sm:  `url(${tabletBackground})`,
            lg: `url(${desktopBackground})`
          },
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh'
        }}
    >

<Typography 
     sx={{
    position:'absolute',
    top:{
        lg: "180px"
    },
    left:{
        lg:'180px'
    }
    }} variant="h4" 
    > <span style={{opacity:0.5}}>03</span> SPACE LAUNCH 101 </Typography>

  <Stack 
  direction={{lg:"row"}}
  p={{
    lg: 20
  }}
  spacing={{
    lg: 12
  }}
  >


<ToggleButtonGroup
         value={activeButton}
         exclusive
         onChange={handleButtonClick}
         style={{display:"flex", flexDirection:"column", justifyContent:"space-between"}}
       >
         <MotionButton onClick={handleOneClick}  whileHover={{opacity:1}} value={1} style={{ backgroundColor: 'white', opacity: activeButton === 1 ? 1 : 0.5, width: 50, height: 50, borderRadius: '50%', margin: '0 10px' }}> 1 </MotionButton>

         <MotionButton onClick={handleTwoClick} whileHover={{opacity:1}} value={2} style={{ backgroundColor: 'white', opacity: activeButton === 2 ? 1 : 0.5, width: 50, height: 50, borderRadius: '50%', margin: '0 10px' }}>2</MotionButton>

         <MotionButton onClick={handleThreeClick} whileHover={{opacity:1}} value={3} style={{ backgroundColor: 'white', opacity: activeButton === 3 ? 1 : 0.5, width: 50, height: 50, borderRadius: '50%', margin: '0 10px' }}>3</MotionButton>

       </ToggleButtonGroup>

     <Stack spacing={{lg:2}}>

         <Typography sx={{opacity:0.5}} >THE TERMINOLOGY...</Typography>


         <Typography variant='h3' > {header[currentIndex]} </Typography>

<Typography sx={{
       width:{
     lg: "60%"
},
opacity:0.5
}}
  >  {texts[currentIndex]} </Typography>

     </Stack>

     <Box 
     component="img"  
     src={images[currentIndex]} 
     sx={{
         width:{
             lg:'100%'
         },
         height:{
            lg:"100%"
         }
     }} />

  </Stack>

   
 </Stack>
 </>
  )
}

export default Technology
