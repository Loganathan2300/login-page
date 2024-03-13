import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
  const navicate=useNavigate()
  return (
    <div>
      <h1>Page Not Found</h1>
      <button onClick={()=>navicate("/")}>Click the button</button>
    </div>
  )
}

export default Error