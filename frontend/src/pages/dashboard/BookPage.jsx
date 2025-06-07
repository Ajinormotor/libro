import BookIndex from '@/components/dashboard/books'
import React from 'react'
import { ToastContainer } from 'react-toastify'

const BookPage = () => {
  return (
    <div className='w-full max-w-[1800px] 4xl:h-[70vh]'> 
    <ToastContainer />
        <BookIndex  />
         </div>
  )
}

export default BookPage