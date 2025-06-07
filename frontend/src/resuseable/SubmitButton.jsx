import React from 'react'
import { Link } from 'react-router-dom'

const SubmitButton = ({label}) => {
  return (
      <button  type='submit'
      className='bg-[#4CAF50]  w-full rounded-lg text-white h-[46px] flex font-bold
       items-center justify-center text-base cursor-pointer'>
{label}
   </button>
  )
}

export default SubmitButton