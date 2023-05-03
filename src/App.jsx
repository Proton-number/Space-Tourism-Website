import { useState } from 'react'
import './App.css'
import Desktop from './Desktop View/Desktop'
import Mobile from './Mobile View/Mobile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Desktop />
     <Mobile />
    </>
  )
}

export default App
