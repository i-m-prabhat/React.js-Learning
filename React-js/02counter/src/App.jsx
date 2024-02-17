import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App()
{

  let [counter, setCounter] = useState(15)

  //let counter = 15

  const addValue = () =>
  {
    //counter = counter + 1
    // if (counter >= 20)
    // {
    //   setCounter(20);
    // } else
    // {
    //   setCounter(counter + 1)
    // }

    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    // its  update prev + new value

  }

  const removeValue = () =>
  {
    if (counter <= 0)
    {
      setCounter(0);
    } else
    {
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter value: {counter}</h2>

      <button
        onClick={addValue}
      >Add value {counter}</button>
      <br />
      <button
        onClick={removeValue}
      >remove value {counter}</button>
      <p>footer: {counter}</p>
      <p>min value 0 and max value 20</p>
    </>
  )
}

export default App