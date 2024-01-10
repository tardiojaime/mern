import { useState } from 'react'
import './App.css'
import { FirstApp } from './FirstApp'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
    <FirstApp/>
    </>
  )
}

export default App
