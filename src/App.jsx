
import './App.css'
import { FirstApp } from './FirstApp'
import { CounterApp } from './CounterApp'
function App() {

  return (
    <>
      <h1>Vite + React</h1>
    <FirstApp title="Hola soy daniel" numero = {15}/>
    <CounterApp/>
    </>
  )
}

export default App
