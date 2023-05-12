import React, {useState} from 'react'
import { Box, Typography, Stack } from '@mui/material'
import moon from "/src/assets/destination/image-moon.png"
import mars from "/src/assets/destination/image-mars.png"
import europa from "/src/assets/destination/image-europa.png"
import titan from "/src/assets/destination/image-titan.png"
import Nav from './Nav'
import desktopBackground from '/src/assets/destination/background-destination-desktop.jpg'
import tabletBackground from "/src/assets/destination/background-destination-tablet.jpg"


const images = [`${moon}`, `${mars}`, `${europa}`, `${titan}`];

const header = [
    "MOON",
    "MARS",
    "EUROPA",
    "TITAN"
]


const texts = [
    "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites." ,

   "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",

   "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",

   "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."



];

 const distance = [
    "384,400 KM",
    "225 MIL. KM",
    "628 MIL. KM",
    "1.6 BIL. KM"

 ];

  const travelTime = [
    "3 DAYS",
    "9 MONTHS",
    "3 YEARS",
    "7 YEARS"

  ];

function Destination() {
    const [currentIndex, setCurrentIndex] = useState(0);

   const handleMoonClick = () => {
    setCurrentIndex(0)
   }

   const handleMarsClick = () => {
    setCurrentIndex(1)
   }

   const handleEuropaClick = () => {
    setCurrentIndex(2)
   }

   const handleTitanClick = () => {
    setCurrentIndex(3)
   }

   

  return (
  <>
                <Nav />


<Stack 
    direction={{sm:"column", lg:"row"}}
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
      spacing={{lg:32}}
      >


   <Stack spacing={{lg:2}}>
   <Typography variant="h4" sx={{textAlign:"center"}} > <span style={{opacity:0.5}} >01</span> PICK YOUR DESTINATION </Typography>

<Box 
component='img' 
src={images[currentIndex]} 
alt="Current images" 
sx={{
 width:{
     lg: "90%"
 }
}}
/>
   </Stack>

      
  <Stack 
  sx={{
    width:{
      lg: "35%"
  },
  }}
  spacing={2}
   >
  


     
<Stack direction='row' spacing={8} >
  

 <Typography onClick={handleMoonClick} sx={{cursor:"pointer"}} > MOON </Typography>
 <Typography onClick={handleMarsClick} sx={{cursor:"pointer"}} > MARS </Typography>
 <Typography onClick={handleEuropaClick} sx={{cursor:"pointer"}} > EUROPA </Typography>
 <Typography onClick={handleTitanClick} sx={{cursor:"pointer"}} > TITAN </Typography>

</Stack>

    <Typography variant='h1' > {header[currentIndex]} </Typography>

    <Typography> {texts[currentIndex]} </Typography>

    <Box/> {/*The underlined div */}

    <Stack direction='row' spacing={{lg:10}}> 

    <Stack>
       <Typography>AVG. DISTANCE</Typography>
       <Typography> {distance[currentIndex]} </Typography>
    </Stack>

 
    <Stack>
       <Typography> EST. TRAVEL TIME </Typography>
       <Typography> {travelTime[currentIndex]} </Typography>
    </Stack>


    </Stack>

  </Stack>


    
    </Stack>

  </>
  )
}

export default Destination
