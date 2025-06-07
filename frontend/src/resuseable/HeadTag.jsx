import React from 'react'
import { Link } from 'react-router-dom'

const HeadTag = ({label}) => {
  return (

    <div  className='md:h-[200px]  headTagBg w-full  md:p-5  p-3 flex
    flex-col gap-3'   >

        <div className='flex items-center gap-2 md:pt-10 pt-5'>
            <Link to="/">
               <h1 className='text-white'>Home</h1>
            </Link>

            <i className="ri-arrow-right-s-line text-white"></i>

               <Link >
               <h1 className='text-white'>{label}</h1>
            </Link>
         
        </div>

        <h1 className='text-white font-bold  md:text-5xl'> {label }</h1>

    </div>
  )
}

export default HeadTag