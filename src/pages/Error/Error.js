import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CONSTANT } from '../../constant/Index'

const Error = () => {
  const navicate=useNavigate()
  return (
    <div>
      <h1>{CONSTANT.PAGE_ERROR}</h1>
      <button onClick={()=>navicate("/")} className='mx-2 rounded-2 p-1 bg-info text-white'>{CONSTANT.CLICK_TO_BACK}</button>
    </div>
  )
}

export default Error