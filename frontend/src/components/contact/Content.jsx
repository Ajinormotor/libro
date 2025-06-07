import React from 'react'
import Form from './Form'

const Content = () => {
  return (
      <div className='min-h-[400px] flex flex-col items-center justify-center w-full py-10'>
        
                 <h1 className='text-3xl font-bold text-black'>Get in Touch</h1>

                 <div className='flex flex-col gap-3 w-full max-w-[768px] '>
                    <Form />
                 </div>

                 <div className='flex items-center justify-center gap-3 w-full py-10'>
                    {
                        contactInfo.map((cont,index) => (
                            <div key={index}
      className='max-w-[368px] h-[202px] w-full border-[1px] border-[#F3F4F6] rounded-lg
      flex flex-col items-center justify-center gap-2'>
                                <img src={cont.image}alt=''loading='lazy'
                                className='w-[68px] h-[68px]' />
            <h1 className='text-xl text-black font-bold text-center'>{cont.title}</h1>
           <p className=''>{cont.value}</p>

                                </div>
                        ))
                    }

                    </div>

    </div>
  )
}

export default Content


import email from "../../assets/contact (1).webp"
import call from "../../assets/contact (2).webp"
import business from "../../assets/contact (3).webp"


const contactInfo = [
  {
     title: "Email Us",
      image: email, 
      value: "support@bookstore.com",
  
    
  },
  {
       title: "Call Us",
      image: call,
      value: "+1 (123) 456-7890",
 

  },
  {
        title: "Business Hours",
      image: business,
      value: "Mon - Fri: 9:00 AM - 6:00 PM",

  },
];
