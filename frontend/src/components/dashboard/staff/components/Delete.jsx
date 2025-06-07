import React from 'react'
import warning from "../../../../assets/delete.webp"
import book_info from "../../../../assets/book_info.webp"

const Delete = ({setShowDelete}) => {
  return (
        <div className='w-full flex items-center justify-center overflow-hidden'>
      <div className='max-w-[700px] md:max-h-[450px] flex flex-col
       gap-4 w-full overflow-y-scroll bg-white rounded-lg p-4'>
       


<div className='flex items-center gap-2'>
    <img src={warning} alt='' loading='lazy'
    className='w-10 h-10 ' />
    <h1 className='text-[#111827] text-[18px]'>Delete Book</h1>
</div>


<h1 className='text-base text-[#4B5563]'>Are you sure you want to delete this book? This action cannot be undone.</h1>

<div className=' flex gap-4 items-center  bg-[#F9FAFB] rounded-lg p-3'>

     <img src={book_info} alt='' loading='lazy'
    className='w-[150px] h-[100px] rounded-[4px] ' />

    <div className='flex flex-col'>
        <h1 className='text-[#111827] text-base font-bold'>Introduction to Computer Networks</h1>
        <p className='text-[#6B7280] text-sm'> David Anderson</p>
        <div className='flex items-center gap-2'>
            <h1 className='text-[#6B7280] text-sm'>  ISBN: 978-3-16-148410-0</h1>
           {/* <div
                    className={`w-[64px] h-[25px] rounded-lg flex items-center justify-center ${
                      book.status === 'Available' ? 'bg-[#F0FDF4]' : 'bg-[#FFF7ED]'
                    }`}
                  >
                    <h1
                      className={`text-sm ${
                        book.status === 'Available' ? 'text-[#16A34A]' : 'text-[#EA580C]'
                      }`}
                    >
                      {book.status}
                    </h1>
                  </div> */}

                     <div
                    className={`w-[64px] h-[25px] rounded-lg flex items-center justify-center 
                   bg-[#F0FDF4]
                    `}
                  >
                    <h1
                      className={`text-sm 
                        text-[#16A34A]
                      `}
                    >
                     Available
                    </h1>
                  </div>
        </div>
    </div>
</div>
        <div className='w-full flex items-center justify-end pt-3 pb-5 gap-5'>
                     <button
                 onClick={() => setShowDelete(false)}
            
                       className='bg-white border-[1px] border-[#E5E7EB] w-full rounded-lg text-[#4B5563] h-[46px] flex font-bold items-center justify-center text-base cursor-pointer'>
                       Cancel
                     </button>
       
                 <button
                       onClick={() => setShowDelete(false)}

                       className='bg-red-500 border-[1px] border-[#E5E7EB] w-full 
                       rounded-lg text-white h-[46px] flex font-bold items-center justify-center text-base cursor-pointer'>
                    Delete
                     </button>
                   </div>
        </div>
        </div>
  )
}

export default Delete