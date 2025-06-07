import React from 'react'

const Form = () => {
  return (

<div className='w-full'>
     <form className='flex flex-col gap-2 w-full'>

        <div className='flex flex-col w-full gap-1'>
            <label htmlFor=''
            className='text-[#374151] text-base'>Full Name</label>
            <input type='text' placeholder='Enter your full name'
            className='bg-[#F9FAFB]  rounded-lg h-12 border-none outline-[#f9f9f9] text-[#9CA3AF] border-[#E5E7EB] p-2'  />
        </div>

          <div className='flex flex-col w-full gap-1'>
            <label htmlFor=''
            className='text-[#374151] text-base'>Email Address</label>
            <input type='text' placeholder='Enter your full name'
            className='bg-[#F9FAFB]  rounded-lg h-12 border-none outline-[#f9f9f9] text-[#9CA3AF] border-[#E5E7EB] p-2'  />
        </div>



          <div className='flex flex-col w-full gap-1'>
            <label htmlFor=''
            className='text-[#374151] text-base'> Subject </label>
            <input type='text' placeholder='What is your message about?'
            className='bg-[#F9FAFB]  rounded-lg h-12 border-none outline-[#f9f9f9] text-[#9CA3AF] border-[#E5E7EB] p-2'  />
        </div>

          <div className='flex flex-col w-full gap-1'>
            <label htmlFor=''
            className='text-[#374151] text-base'>Message</label>
            <textarea type='text' placeholder='Write your message here..'
            className='bg-[#F9FAFB]  rounded-lg h-12 border-none outline-[#f9f9f9] text-[#9CA3AF]
             border-[#E5E7EB] p-2 min-h-[150px]'  />
        </div>

        {/* button */}

         <button
      className='bg-[#00AB6B] m w-full rounded-lg text-white h-[46px] flex mt-2
       items-center justify-center text-base cursor-pointer'>Send  Message</button>

         </form>
        </div>
  )
}

export default Form