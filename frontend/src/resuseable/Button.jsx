import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({children,to}) => {
  return (
      <Link to={to}
      className='bg-[#00AB6B] max-w-[136px] w-full rounded-lg text-white h-[46px] flex
       items-center justify-center text-base cursor-pointer'>
{children}
   </Link>
  )
}

export default Button