import React from 'react'
import logo from "../assets/lgo_icon.webp"

const navData = [
    {
        title: 'Home'
    },

        {
        title: 'About'
    },

        {
        title: 'Books'
    },

        {
        title: 'Contact '
    },
]

const Footer = () => {
  return (
    <div className='bg-[#111827] w-full flex flex-col md:p-5 p-3 gap-5'>

      <div className=' flex flex-col md:flex-row  justify-between '>

        <div className='flex flex-col gap-3'>
 <div className='flex gap-1'>
<img src={logo} alt='' loading='lazy'
className='w-8 h-8'  />
<h1 className='text-[#4CAF50] text-2xl font-bold'>Libro</h1>
        </div>

          <p className='text-[#9CA3AF] text-base'>Your one-stop destination for all your literary <br className='hidden md:block' /> needs.
             Discover amazing books at great prices.</p>
        </div>


{/* Quick Links */}
        <div className='flex flex-col gap-2'>
          <h1 className='text-white text-[18px]'>Quick Links</h1>

            <div className='flex  flex-col items-start gap-1'>
            {
                navData.map((nav,index) => (
<div key={index} className=''>
    <h1  className={` text-base  hover:text-[#00AB6B] text-[#4B5563]`}>{nav.title}</h1>

</div>
                ))
            }

        </div>
        </div>

        {/* Newsletter */}
        <div className='flex flex-col gap-4'>
          <h1 className='text-white text-[18px]'>Newsletter</h1>

          <p className='text-[#9CA3AF] text-base'>Subscribe to receive updates, access to <br className='hidden md:block' />
           exclusive deals, and more.</p>
           <div className='md:max-w-[401px] w-full flex items-center gap-1'>
            <input type='' placeholder='Enter your mail'
            className='w-full h-[40px] outline-0 border-0 bg-[#1F2937] rounded-lg p-1
            placeholder:text-[#9CA3AF] text-base' />
            <button className='bg-[#00AB6B] h-[40px] max-w-[109px] w-full rounded-lg flex items-center justify-center
            text-white'>
              Subscribe
            </button>
           </div>

        </div>

      </div>


{/* lower Footer */}
      <div className='border-t-[1px] border-white min-h-[50px] flex flex-col md:flex-row  w-full  p-2
      items-center justify-between gap-2 '>

<h1 className='text-[#9CA3AF] text-base'>© 2024 Bokifa. All rights reserved.</h1>

<div className='flex gap-1 items-center '>
  
  <i className="ri-facebook-circle-line text-xl text-white"></i>
   <i className="ri-linkedin-fill text-xl text-white"></i>
<i className="ri-twitter-line text-xl text-white"></i>
<i className="ri-youtube-fill text-xl text-white"></i>


</div>
      </div>

    </div>
  )
}

export default Footer