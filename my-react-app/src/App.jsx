import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HookCounter from './components/HookCounter'
import UseStateObject from './components/UseStateObject'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <HookCounter /> */}
     <UseStateObject />
    </>
  )
}

export default App
