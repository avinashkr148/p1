import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> {/* <> they are fragments*/}
     <h1 className='bg-green-400'>tailwind</h1>
     <Card username="avinash"/>
     <Card username=" alok"/>
     
    </>
  )
}

export default App
