import BooksDetailsIndex from '@/components/bookdetails'
import React from 'react'
import { Helmet } from 'react-helmet'

import { ToastContainer } from 'react-toastify'

const BookDetails = () => {
  
  return (
    
    <div className='w-full max-w-[1800px] 4xl:h-[70vh]'>
        <ToastContainer  />
         <Helmet>
      <title>Libro | Book Details</title>
      </Helmet>
     <BooksDetailsIndex  />
     
     </div>
  )
}

export default BookDetails