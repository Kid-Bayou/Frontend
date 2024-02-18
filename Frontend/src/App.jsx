import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Counter from "./Counter"
import Temperature from "./Temperature"
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter />
      <Temperature />
    </>
  )
}

export default App
