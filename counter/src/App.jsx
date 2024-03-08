import { useState } from 'react'; {/* onClick is used to add the value normal js */}

import './App.css'

function App() {
  const [counter, setCounter] = useState(5)
  // let counter = 5
  const addValue = ()=>{
    console.log("clicked", counter)
    // counter = counter + 1
    setCounter(counter+1)

  }
  
  const removeValue = ()=>{
    console.log("clicked", counter)
    setCounter(counter-1)
  }
// this is a demo app for hooks where i will be making a counter 

  return (
    <>
     <h1>hello counter</h1> 
     <h2>counter value: {counter}</h2>

     <button onClick={addValue}>Add value {counter}</button>    {/* onClick is used to add the value normal js */}
     <br />
     <button onClick={removeValue}
     >Remove value {counter}</button>
     <button>cart {counter}</button>
     
    </>
  )
}

export default App
