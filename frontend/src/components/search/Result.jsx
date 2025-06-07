
import { useAuthStore } from '@/store/authStore';
import { useBookStore } from '@/store/bookStore';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import { toast } from 'react-toastify';

const Result = () => {



const {books, fetchBook, borrowBook }= useBookStore()


useEffect(() => {
  fetchBook()
}, [fetchBook])
// eslint-disable-next-line no-unused-vars
const [borrow,setBorrow] = useState('')
  const { user} = useAuthStore()
  const {searchBooks} = useBookStore()
  
const [searchTerm, setSearchTerm] = useState()
const navigate = useNavigate()

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

const handleSearch = (e) => {
    e.preventDefault()
    const urlParams = new URLSearchParams(window.location.search)
 urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString()
    searchBooks(searchQuery)
    navigate(`/search?${searchQuery}`)
}

useEffect(() => {
   
    const urlParams = new URLSearchParams(location.search)
    const searchedUrlParams = urlParams.get('searchTerm')

    if(searchedUrlParams){
    const searchQuery = urlParams.toString()
    searchBooks(searchQuery)
    setSearchTerm(searchedUrlParams)
    // navigate(`/search?${searchQuery}`)
}
},[searchBooks])




  return (
    <div className='flex flex-col gap-5'>


<div className='w-full flex items-center md:p-5'>
      <form
                     onSubmit={handleSearch}
                     className='min-h-10 w-full focus-within:outline-1
                    focus-within:outline-[#4CAF50] flex items-center p-1
                     rounded-lg border-[1px] border-gray-200 '>
                      
                        <input type='text'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                         placeholder='Search....' 
                        className='bg-transparent outline-none border-0 w-full
                        text-[#4CAF50] opcaity-80 placeholder:text-[#4CAF50]' />
                          <i className="ri-search-line text-[#4B5563]"></i>
                        
                    </form>
</div>


{books ?

         <div className='flex flex-col gap-10  p-2 md:p-5'>
                <div className='flex items-center justify-between'>
                    <h1 className="md:text-3xl font-bold">This week books</h1>
        
                    <Link className=''>
                    <h1 className='md:text-base text-sm text-[#00AB6B]'>View all</h1></Link>
        
                </div>
        
                 <div className='flex flex-col md:flex-row gap-5 items-center justify-center'>
        

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
        
        
                            <button onClick={() => handleBorrowBook(book)}
              className={` max-w-[136px] w-full rounded-lg text-white h-[46px] flex 
               items-center justify-center text-base 
              ${book.status === 'borrowed' ?  "  bg-gray-500 cursor-not-allowed" :  "bg-[#00AB6B] cursor-pointer"} `}>
                                     Read Book
                                      </button>
                          
        </div>
        
        
                            </div>
                        ))
        
                    }
          

                </div>
        
            </div>

            :  
            <p className='font-bold md:text-3xl text-xl'>No Book Found</p> 
            }
    </div>
  )
}

export default Result