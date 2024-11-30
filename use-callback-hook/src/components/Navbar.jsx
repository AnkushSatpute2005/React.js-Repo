import React from 'react'
import { memo } from 'react'

const Navbar = ({adjective,getAdjective}) => {
    console.log("nav bar is renderd")
  return (
    <div>
      i am {adjective} navbar
    <button>{getAdjective()}</button>
    </div>
  )
}

export default memo(Navbar)
