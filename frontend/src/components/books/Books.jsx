import { useAuthStore } from '@/store/authStore'
import { useBookStore } from '@/store/bookStore'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const Books = () => {

  const {books, fetchBook, borrowBook }= useBookStore()
  const { user} = useAuthStore()
  // console.log("Books in fronten:", books)
  
  useEffect(() => {
    fetchBook()
  }, [fetchBook])
  const [borrow,setBorrow] = useState('')
  
  const handleBorrowBook = async(id) => {
    
    const {message, success,bookStatus} = await borrowBook(id)
  
      if(!user){
        toast.error('Please sign in ')
      }
  
    if(success){
      toast.success(message)
      setBorrow(bookStatus)
    }
  
    if(bookStatus === ' borrowed'){
      toast.error('This book is unavialble')
    }
  
  
  
  }
  
  console.log('borrow Status', borrow)
  
    return (
      <div className='flex flex-col gap-10  p-2 md:p-5'>
          <div className='flex items-center justify-between'>
              <h1 className="md:text-3xl font-bold">This week books</h1>
  
              <Link className=''>
              <h1 className='md:text-base text-sm text-[#00AB6B]'>View all</h1></Link>
  
          </div>
  
          <div className='overflow-hidden border-none p-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4
          justify-items-center gap md:gap-5'>
              {
                 books.map((book,index) => (
                      <div key={index} 
         className='flex flex-col md:max-w-[230px]  w-full border-none gap-10'>
          <div className=' relative'>
  
            
       <img src={book.image} alt='' loading='lazy'
         className='md:max-w-[230px] max-w-full w-full rounded-lg h-[250px] border-none'  />
  
                <div
                      className={`w-[64px] h-[25px]  flex items-center justify-center
                         absolute top-0 left-0 z-10 ${
                        book.status === 'Available' ? 'bg-[#F0FDF4]' : 'bg-[#FFF7ED]'
                      }`}
                    >
                      <h1
                        className={`text-sm ${
                          book.status === 'available' ? 'text-[#16A34A]' : 'text-[#EA580C]'
                        }`}
                      >
                        {book.status.charAt(0).toUpperCase() + book.status.slice(1)}
                      </h1>
                    </div>
  
          </div>
    
         <div className='flex flex-col pl-5 gap-1 border-none items-center justify-center pt-3'>
  
  <h1 className="text-black text-base font-semibold text-center">{book.bookName}</h1>
  <p className="text-[#4B5563] text-base">{book.authorName}</p>
  
  <ul className='flex items-center gap-1'>
      <li> <i className="ri-star-fill text-yellow-500"></i> </li>
             <li> <i className="ri-star-fill text-yellow-500"></i> </li>
             <li> <i className="ri-star-fill text-yellow-500"></i> </li>
              <li> <i className="ri-star-fill text-yellow-500"></i> </li>
                  <li> <i className="ri-star-fill text-yellow-500"></i> </li>
  </ul>
  
  <div className='flex items-center gap-2'>
      <p className="text-[#00AB6B] text-base">{book.price}</p>
      <span className="line-through text-[#9CA3AF] text-base">{book.discountPrice}</span>
  </div>
  
  
                  <Link
    to={book.status !== 'borrowed' ? `/book/${book._id}` : ""}
    onClick={() => handleBorrowBook(book)}
    className={`max-w-[136px] w-full rounded-lg text-white h-[46px] flex 
      items-center justify-center text-base 
      ${book.status === 'borrowed' ? "bg-gray-500 cursor-not-allowed" : "bg-[#00AB6B] cursor-pointer"}`}
  >
    Read Book
  </Link>
  
                    
  </div>
  
  
                      </div>
                  ))
  
              }
          </div>
  
      </div>
    )
  
}

export default Books