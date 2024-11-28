import React, { useContext } from 'react'
import Counter from './Counter'
import {counterContext} from '../context/context'

const Button = () => {
    const value = useContext(counterContext)
  return (
    <div>
      <button onClick={() => value.setCount((count) => count + 1)}>Click Me.</button>
        <Counter />
    </div>
  )
}

export default Button
