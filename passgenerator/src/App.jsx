import { useState,useCallback, useEffect, useRef } from 'react'
// import './App.css'

function App() {
  const [length, setLength]= useState(8) 
  const [numAllow, setNumAllow]= useState(false);  {/* allowing the number to be encluded in the password */}
  const [charAllow, setCharAllow] = useState(false); {/* allowing the charecter to be included in the password */}
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null)
  const passgenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllow) str += "0123456789"
    if (charAllow) str += "!@#$%^&*-_+=?"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass)
  }, [length, numAllow, charAllow, setPassword])

  const copyPasswordToClipboard = useCallback(() =>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password])


  useEffect(()=> {
    passgenerator()
  }, [length, numAllow,
  charAllow, passgenerator])
  return (

<div className="w-full h-auto max-w-md mx-auto shadow-md 
  rounded-lg px-8 my-8 bg-gray-600 
   text-orange-500">
      <h1 className='text-white text-center my-3'>password 
      generator</h1> 
    <div className="flex shadow rounded-lg 
    overflow-hidden mb-4">
      <input 
          type="text"
          value={password} 
          className="outline-none w-full py-1 px-3"
          placeholder="password"
          readOnly 
          ref={passwordRef}
          />
         <button
  onClick={copyPasswordToClipboard}
  className='outline-none bg-green-300 text-white px-3 p-y0.5 shrink-2 hover:bg-green-500'
>
  Copy
</button>


    </div>
    <div className='flex text-sm gap-x-1'>
      <div className='flex items-center gap-x-3'>
        <input 
            type="range" 
            min={8}
            max={20}
            value={length}
            className='cursor-pointer'
            onChange={(e)=> {setLength(e.target.value)}}
        />
        <label>length:{length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input 
            type="checkbox"
            defaultChecked={numAllow}
            id="numberInput"
            onChange={() =>{
              setNumAllow((prev) => !prev);
            }}
         />
         <label htmlFor='numberInput'>Numbers</label>
      </div>

      <div className="flex items-center gap-x-1">
        <input 
        type="checkbox"
        defaultChecked={charAllow}
        id='charecterInput'
        onChange={() =>{
          setCharAllow((prev) =>!prev);
        }}
         />
         <label htmlFor="charecterInput">charecterInput</label>
      </div>

      

    </div>

</div>

  )
}

export default App
