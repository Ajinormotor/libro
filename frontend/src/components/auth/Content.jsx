import React, { useState } from 'react'
import logo_icon from "../../assets/logo_icon.png"
import bubble_bg from "../../assets/bubble_bg.png"
import green_logo_icon from "../../assets/green_logo_icon.png"

import Signup from './Signup'
import Login from './Login'


const Content = () => {

    const [ button, setButton] = useState('Login')
  return (
    <div className='flex  items-bottom justify-center h-screen 2xl:h-[400px]'>


        <div className='md:max-w-[50%] w-full hidden   min-h-[150vh] 2xl:h-[40vh] relative
        bg-[#4cb050] md:flex md:flex-col gap-4 items-center justify-center'>

<img src={logo_icon} alt='' loading='lazy'
className='' />
            <h1 className='text-[36px] font-bold text-white'>Welcome to Libro</h1>
            <p className='text-white text-xl'>Your personal digital library management system</p>

            <img src={bubble_bg} alt='' loading='lazy' 
            className='w-[160px] h-[160px] rounded-full absolute left-[250px] bottom-[30px]
             opacity-10 ' />

               <img src={bubble_bg} alt='' loading='lazy' 
            className='w-[108px] h-[108px] rounded-full absolute right-[150px] bottom-[300px]
             opacity-10 ' />

               <img src={bubble_bg} alt='' loading='lazy' 
            className='w-[96px] h-[96px] rounded-full absolute left-[50px] top-[30px]
             opacity-10 ' />

        </div>


{/* form */}

<div className='md:max-w-[50%] w-full flex items-center  justify-center md:mt-[100px] h-full
'>


<div className=' p-5 w-full  flex flex-col justify-center   gap-8'>

     <div className='flex gap-1'>
    <img src={green_logo_icon} alt='' loading='lazy'
    className='w-8 h-8'  />
    <h1 className='text-[#4CAF50] text-2xl font-bold'>Libro</h1>
            </div>


{/* Button */}
            <div className='flex items-center border-b-[2px] rounded-[1px] border-[#9CA3AF]
             w-full h-10 gap-5 '>

                <div onClick={() => setButton('Login')}
                 className={`border-b-[2px] rounded-[1px] mt-[2px] h-10 flex justify-start cursor-pointer
                 ${button === 'Login' ? "border-[#4CAF50] ": "border-[#9CA3AF]"}`} >
                             <h1 className={`text-base
      ${button === 'Login' ? 'text-[#4CAF50]' : 'text-[#9CA3AF] '}`} >Login</h1>
                </div>

                                
  <div onClick={() => setButton('Register')}
                 className={`border-b-[2px] rounded-[1px] mt-[2px] h-10 flex justify-start cursor-pointer
                 ${button === 'Register' ? "border-[#4CAF50] ": "border-[#9CA3AF]"}`} >
         <h1 className={`text-base
      ${button === 'Register' ? 'text-[#4CAF50]' : 'text-[#9CA3AF] '}`} > Sign up</h1>
                </div>

            </div>


{/* welcome text */}
            <div className=''>
                <h1 className='text-[#111827] text-2xl font-semibold'>Welcome Back</h1>
                <p className='text-[#4B5563] text-base'>Sign in to manage your library</p>
            </div>

   { button === 'Login' &&  <Login  />
            }


               { button === 'Register' &&   
               <div className='w-full flex'> <Signup  />   </div>
            }
    
</div>


</div>

    </div>
  )
}

export default Content