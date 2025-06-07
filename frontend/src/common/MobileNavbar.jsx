import React from 'react'
import logo from "../assets/lgo_icon.webp"

const MobileNavbar = () => {
  return (
    <div className='min-h-[50px] flex items-center justify-center'>

   <div className='flex gap-1'>
<img src={logo} alt='' loading='lazy'
className='w-8 h-8'  />
<h1 className='text-[#4CAF50] text-2xl font-bold'>Libro</h1>
        </div>

    </div>
  )
}

export default MobileNavbar