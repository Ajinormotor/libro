// import { Button } from '@chakra-ui/react'
import Button from '@/resuseable/Button'
import React from 'react'
import bookOne from "../../assets/book (1).webp"
import bookTwo from "../../assets/book (2).webp"
import bookThree from "../../assets/book (3).webp"
import CountUp from 'react-countup'

const images = [
  {img: bookOne },
    {img:  bookTwo },
      {img: bookThree },
]

const counData = [
  {title: "Authors" , start: 0 , stop: 1258},
    {title: "Books Sold" , start: 0 , stop: 25858},
    {title: "Happy" , start: 0 , stop: 91},
      {title: "Total books" , start: 0 , stop: 9255},
]

const Hero = () => {
  return (

    <div className='flex flex-col  p-2'>


    <div className='flex flex-col md:flex-row min-h-[380px] items-center p-2 md:p-5 gap-5'>

      <div className='flex flex-col gap-4 md:max-w-[350px] lg:max-w-[600px] w-full'>
        <p className='text-[#00AB6B] text-base'> A brand new stories</p>
        <h1 className=' text-[38px] leading-[45px] md:text-[48px] md:leading-[55px]'>THE WORLD OF YOUNG <br className='hidden md:block' /> ADULT BOOKS</h1>

<Button>
Discover Now
</Button>
    
  
      </div>

      <div className='relative '>

        <div className='rounded-full md:w-[64px] md:h-[64px] w-[54px] h-[54px] bg-[#FF4D00] flex items-center
         justify-center absolute top-[-8px] right-[-10px] z-20'>
          <h1 className='md:text-base text-sm text-white'>15% <br />OFF</h1>
        </div>
        
      <div className="relative flex h-[300px]  w-full">
  {images.map((image, index) => (
    <div key={index} className="relative flex-1">
      <img
        src={image.img}
        alt=""
        loading="lazy"
        className="relative top-0 left-[5px] w-full h-full object-cover z-10 rounded-lg"
      />
    </div>
  ))}
</div>


      </div>

    </div>


{/* Count up */}

<div className='min-h-[100px] flex items-center justify-center bg-[#00AB6B]  py-3'>

  <div className='flex items-center justify-center gap-7 md:gap-20 w-full '>
    {
      counData.map((count,index) => ( 
        <div key={index} className='text-center'>
   <h1 className='md:text-5xl text-2xl font-bold text-white' ><CountUp  start={count.start} end={count.stop} duration={10}  /> </h1>
    <p className='md:text-10 text-[10px] text-white'>{count.title}</p>
    </div>
))
}
  </div>


</div>

        </div>
  )
}

export default Hero