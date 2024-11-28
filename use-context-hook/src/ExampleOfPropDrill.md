//Navbar.jsx//
import React from 'react'
import Button from './Button'

const Navbar = ({count}) => {
  return (
    <div>
      I am Navbar
      <Button count={count}/>
    </div>
  )
}

export default Navbar

//Button.jsx//
import React from 'react'
import Counter from './Counter'

const Button = ({count}) => {
  return (
    <div>
      <button>Click Me.</button>
        <Counter count={count}/>
    </div>
  )
}

export default Button

//Counter.jsx
import React from 'react'

const Counter = ({count}) => {
  return (
    <div>
      {count}
    </div>
  )
}

export default Counter

// in this example the state count is passed as prop from "app.jsx file to ---->
                                                                                navbar.jsx---->
                                                                                                Button.jsx---->
                                                                                                                counter.jsx"
this is the example of prop drilling and we pass count state as a prop from app.jsx to counter.jsx even if it is not required to overcome from this problem we useContext hook concept. 