import { useState } from 'react'
import './App.css'
import Desktop from './Desktop View/Desktop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Desktop />
    </>
  )
}

export default App
