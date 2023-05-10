import React, { useState } from "react"
import "./App.css"
import Square from "./components/Square"

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])

  const handleClick = (selectedIndex) => {
    const newBoard = [...board]
    newBoard[selectedIndex] = "✪" 
    setBoard(newBoard) 
  }

  return (
    <>
      <h1>Super Saiyan Treasure Hunt</h1>
      <Square board={board} handleClick={handleClick}/>
    </>
  )
}

export default App
