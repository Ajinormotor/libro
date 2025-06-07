import React, { useEffect } from 'react'
import iconOne from "../../../assets/summaryBook_icon (1).webp"
import iconTwo from "../../../assets/summaryBook_icon (2).webp"
import iconThree from "../../../assets/summaryBook_icon (3).webp"
import iconFour from "../../../assets/summaryBook_icon (4).webp"
import { useBookStore } from '@/store/bookStore'
// import { booksData } from '@/data/bookData'



const BookSummary = () => {
    const { fetchBooksStats, availableBooks , borrowedBooks,books} = useBookStore()

    useEffect(() => {
        fetchBooksStats()
    }, [fetchBooksStats])
    



const summaryData = [
    {
        title: 'Total Books',
        icon: iconOne,
        number:  books?.length
    },

     {
        title: 'Available',
        icon: iconTwo,
        number: availableBooks?.length
    },

     {
        title: 'Borrowed ',
        icon: iconThree,
        number: borrowedBooks?.length
    },

     {
        title: 'Lost',
        icon: iconFour,
        number: '20'
    },
]

  return (
    <div className='flex flex-col md:flex-row gap-4 md:p-3'>
        {
            summaryData.map((sum,index) => (
                <div key={index}
                className={`min-h-[130px] rounded-lg md:max-w-[350px] w-full bg-white 
                flex  justify-between   p-4 gap-1
       `}>
        
        <div className='flex flex-col gap-2'>
    <img src={sum.icon} alt="" loading='lazy'
                    className='w-12 h-12' />
                    <h1 className='text-2xl text-black font-bold'>{sum.number}</h1>

                    </div>
                    <p className='text-[#6B7280] text-base'>{sum.title}</p>

                    </div>
            ))
        }

    </div>
  )
}

export default BookSummary