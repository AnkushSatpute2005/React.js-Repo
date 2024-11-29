import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const nums = new Array(10_000_000).fill(0).map(( _ ,i)=>{
    return {
      index:i,
      isMagical:i===9_000_000
    }
  })
  
  const [count, setCount] = useState(0)
  const [numbers, setNumbers] = useState(nums)

  // const magical = numbers.find(item=>item.isMagical===true)// This is a very Expensiv computation and this page take too much time to count counter thats why we use useMemo hook in react


 // memoization not memorization (learn concept of memoization)
  const magical = useMemo(() => numbers.find(item=>item.isMagical===true), [])//in this case the memo hook rerender only once 
  // const magical = useMemo(() => numbers.find(item=>item.isMagical===true), [number])// here in this case if 'numbers' change then and then only this memo hooh change or rerender


  

  return (
    <>
    <span>magical number is :{magical.index}</span>
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
