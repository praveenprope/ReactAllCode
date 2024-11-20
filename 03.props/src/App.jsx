import { useState } from 'react'
import './App.css'
import CricketPlayerCard from './CricketPlayerCard'

function App() {
 

  return (
    <>
    <CricketPlayerCard 
    src="https://wallpapers.com/images/hd/indian-virat-kohli-hd-kbhth421szaj1qw8.jpg" 
    playerName="Virat Kholi"
    team = "RCB"
    /> 
    <br />
    <CricketPlayerCard 
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQlTheTr6p4pBOd6vLLpAARPPNSMAJMxQ8mw&s"
    playerName = "Rohit Sharma"
    team = "Mumbai Indians"
    />
    </>
  )
}

export default App
