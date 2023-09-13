import Gameplay from "./components/Gameplay"
import StartGame from "./components/StartGame"
import './App.css'

import { useState } from "react"

function App() {

  const [isStarted,setIsStarted]=useState(false)

  const toggleGame=()=> setIsStarted(prev=>!prev)
  
  return (
    <>
     {isStarted ? 
      <Gameplay/> 
      :
      <StartGame toggle={toggleGame}/>
     } 

    </>
  )
}

export default App
