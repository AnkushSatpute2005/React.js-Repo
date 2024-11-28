import React from 'react'
import { useParams } from 'react-router-dom'
useParams
const User = () => {
    const params = useParams();
  return (
    <div>
      i am user {params.username}
    </div>
  )
}

export default User
