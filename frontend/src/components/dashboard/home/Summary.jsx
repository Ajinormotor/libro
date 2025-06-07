import React, { useEffect } from 'react'
import iconOne from "../../../assets/summary_icon (1).webp"
import iconTwo from "../../../assets/summary_icon (2).webp"
import iconThree from "../../../assets/summary_icon (3).webp"
import iconFour from "../../../assets/summary_icon (4).webp"
import { useBookStore } from '@/store/bookStore'


const Summary = () => {

     const { fetchBooksStats, availableBooks , borrowedBooks} = useBookStore()
    
        useEffect(() => {
            fetchBooksStats()
        }, [fetchBooksStats])

        const summaryData = [
    {
        title: 'New books added in library.',
        icon: iconOne,
        number: 2
    },

     {
        title: 'Books not in library.',
        icon: iconTwo,
        number: 3
    },

     {
        title: 'Borrowed books',
        icon: iconThree,
        number: borrowedBooks?.length
    },

     {
        title: 'Avaliable books',
        icon: iconFour,
        number: availableBooks?.length
    },
]
        


  return (
    <div className='flex flex-col md:flex-row gap-4 md:p-3 w-full'>
        {
            summaryData.map((sum,index) => (
                <div key={index}
                className={`min-h-[150px] rounded-lg md:max-w-[350px] w-full bg-white 
                flex flex-col justify-center  p-4 gap-1
       `}>
                    <img src={sum.icon} alt="" loading='lazy'
                    className='w-12 h-12' />
                    <h1 className='text-2xl text-black font-bold'>{sum.number}</h1>
                    <p className='text-[#6B7280] text-base'>{sum.title}</p>

                    </div>
            ))
        }

    </div>
  )
}

export default Summary