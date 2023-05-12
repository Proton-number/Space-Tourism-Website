import React, {useState} from 'react'
import { Box, Typography, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material'
import desktopBackground from '/src/assets/crew/background-crew-desktop.jpg'
import tabletBackground from "/src/assets/crew/background-crew-tablet.jpg"
import Anousheh from "/src/assets/crew/image-anousheh-ansari.png"
import Douglas from "/src/assets/crew/image-douglas-hurley.png"
import Mark from "/src/assets/crew/image-mark-shuttleworth.png"
import Victor from "/src/assets/crew/image-victor-glover.png"
import Nav from './Nav'
import { motion } from 'framer-motion';


const images = [`${Douglas}`, `${Mark}`, `${Victor}` , `${Anousheh}`]

const role = [
    "COMMANDER",
    "MISSION SPECIALIST",
    "PILOT",
    "FLIGHT ENGINEER"

]

const name = [
    "DOUGLAS HURLEY",

    "MARK SHUTTLEWORTH",

    "VICTOR GLOVER",

    "ANOUSHEH ANSARI"

]

const texts = [
       "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",

       "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",

       "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64, and served as a station systems flight engineer.",

       "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
]



function Crew() {
    const [currentIndex, setCurrentIndex] = useState(0);
  const [activeButton, setActiveButton] = useState(1);

  const MotionButton = motion(ToggleButton)
    
  const handleButtonClick = (event, buttonNumber) => {
       if (buttonNumber !== null) {
       setActiveButton(buttonNumber);
       }
     };

    const firstHandleClick = () => {
           setCurrentIndex(0)
    }

    const secondHandleClick = () => {
           setCurrentIndex(1)
    }

    const thirdHandleClick = () => {
           setCurrentIndex(2)
    }

    const fourthHandleClick = () => {
           setCurrentIndex(3)
    }


  return (
  <>

  <Nav />

<Stack
    direction={{sm:"column", lg:"row"}}
    sx={{
       padding:{
              sm:'30px',
              lg:'90px'
          },
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

<Stack direction={{sm:'column', lg:'row'}}>

 <Stack 
 spacing={{
       lg:3
 }}>
<Typography variant="h4">  <span style={{opacity:"0.5"}} >02</span>  MEET YOUR CREW </Typography>

 <Typography variant="h3" sx={{opacity:'0.5'}} > {role[currentIndex]} </Typography>

 <Typography variant="h3" > {name[currentIndex]}  </Typography>

 <Typography 
 variant="body1" 
 sx={{
       width:{
     lg: "60%"
 },
 opacity:'0.5'
 }} > {texts[currentIndex]} </Typography>



<ToggleButtonGroup
         value={activeButton}
         exclusive
         onChange={handleButtonClick}
         style={{ display: 'flex' }}
       >
         <MotionButton onClick={firstHandleClick}  whileHover={{opacity:1}} value={1} style={{ backgroundColor: 'white', opacity: activeButton === 1 ? 1 : 0.5, width: 30, height: 30, borderRadius: '50%', margin: '0 10px' }} />
         <MotionButton onClick={secondHandleClick} whileHover={{opacity:1}} value={2} style={{ backgroundColor: 'white', opacity: activeButton === 2 ? 1 : 0.5, width: 30, height: 30, borderRadius: '50%', margin: '0 10px' }} />
         <MotionButton onClick={thirdHandleClick} whileHover={{opacity:1}} value={3} style={{ backgroundColor: 'white', opacity: activeButton === 3 ? 1 : 0.5, width: 30, height: 30, borderRadius: '50%', margin: '0 10px' }} />
         <MotionButton onClick={fourthHandleClick} whileHover={{opacity:1}} value={4} style={{ backgroundColor: 'white', opacity: activeButton === 4 ? 1 : 0.5, width: 30, height: 30, borderRadius: '50%', margin: '0 10px' }} />
       </ToggleButtonGroup>

 </Stack>

 <Box component="img" src={images[currentIndex]} sx={{width:'45%', height:"auto", objectFit:"contain"}} />

</Stack>
   
 </Stack>

  </>
  )
}

export default Crew
