import { useState,useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  const [adjective, setAdjective] = useState("good")
  //without callBack
  // const getAdjective=() => { 
  //       return "another"+count;
  //      }  

  // //with callBack
  // const getAdjective = useCallback(
  //   () => { 
  //     return "another"+count
  //    },
  //    []
  // )
  
   //with callBack but this function is still freeze untill count2 dosenot change
   const getAdjective = useCallback(
    () => { 
      return "another"+count2
     },
     [count2]
  )

  return (
    <>
    <Navbar adjective={"good"} getAdjective={getAdjective}/>
    {/* at the time we click on count button means each timr the counter state is change so entite component is rerender each time and "getAdjective function " is also rerendered again and again so javascript treate every time the function is chenge even this functoin is same and getAdjective prop is also change and navbar component is rerender again and again even you useMemo hook so we useCallback hook */}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setCount2((count2) => count2 + 1)}>
          count2 is {count2}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
