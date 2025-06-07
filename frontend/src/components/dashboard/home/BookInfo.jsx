import React, { useState } from 'react'
// import book_info from "../../../assets/book_info.webp"

// import editIcon from "../../../assets/actions_icon (1).webp"
// import deleteIcon from "../../../assets/actions_icon (2).webp"
// import optionIcon from "../../../assets/actions_icon (3).webp"
import PaginatorLink from '@/resuseable/PaginatorLink'
import { useBookStore } from '@/store/bookStore'





const BookInfo = () => {

    // const isStatus = 'Avavilable'
     const {books} = useBookStore()

const ITEMS_PER_PAGE = 15
    const [currentPage, setCurrentPage] = useState(1);
    const firstIndex = (currentPage - 1)* ITEMS_PER_PAGE
    const lastIndex = currentPage * ITEMS_PER_PAGE
  const currentBooks = Array.isArray(books) ? books.slice(firstIndex, lastIndex) : [];
    const paginate = (pageNumber) => { setCurrentPage(pageNumber)}

   

    
  return (

<div className='flex flex-col gap-2'>



{/* table */}
<div className="overflow-x-auto p-3">

  <table className="min-w-full divide-y divide-gray-200">
    <thead className="bg-gray-100">
      <tr>
        <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">BookInfo</th>
        <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Price</th>
        <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Status</th>
        <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 hidden md:block">ISBN</th>
              {/* <th className="px-6 py-3 text-left text-sm font-medium text-gray-700"> Actions </th> */}
      </tr>
    </thead>

<tbody className="bg-white divide-y divide-gray-200">
            {currentBooks.map((book,index) => (
              <tr key={book.id}>

                <td className="md:px-6 px-3 py-4 text-sm text-gray-900">
                  <div className="flex flex-col md:flex-row items-center gap-2">
                    <img src={book.image} alt="" className="w-12 h-12 rounded-lg" />
                    <div className="flex flex-col gap-1">
                      <h1 className="text-[#111827] text-base">{book.bookName}</h1>
                      <p className="text-[#6B7280] text-sm">{book.authorName}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                     <div className='flex items-center gap-1'>
                 <h1 className='text-[#4B5563] text-[18px] font-semibold'> {book.price} </h1> 
                 <span className='line-through text-[#4B5563] text-base opacity-70'>
                  {book.discountPrice}
                 </span>
                  </div>
                  
                  </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  <div
                    className={`w-[64px] h-[25px] rounded-lg flex items-center justify-center ${
                      book.status === 'Available' ? 'bg-[#F0FDF4]' : 'bg-[#FFF7ED]'
                    }`}
                  >
                    <h1
                      className={`text-sm ${
                        book.status === 'Available' ? 'text-[#16A34A]' : 'text-[#EA580C]'
                      }`}
                    >
                      {book.status.charAt(0).toUpperCase() + book.status.slice(1)}
                    </h1>
                  </div>
                </td>
              

                  <td className="hidden md:block px-6 py-4 text-sm text-[#4B5563]">{"978-3-16-148410-" + (index + 1) }</td>
                {/* <td>
                  <div className="flex gap-2 items-center">
                    <img src={editIcon} alt="edit" className="w-5 h-5" />
                    <img src={deleteIcon} alt="delete" className="w-5 h-5" />
                    <img src={optionIcon} alt="options" className="w-5 h-5" />
                  </div>
                </td> */}
              </tr>
            ))}
          </tbody>

  </table>

</div>


{/* pagainator */}

<div className=''>
        <PaginatorLink
          paginate={paginate}
          itemsPerPage={ITEMS_PER_PAGE}
          currentPage={currentPage}
          totalItems={bookinfo.length}
        />

</div>


</div>

  )
}

export default BookInfo


  const bookinfo = [
    {
      id: 1,
      title: 'Introduction to Computer Networks',
      author: 'David Anderson',
      category: 'Technology',
      status: 'Available',
      isbn: '978-3-16-148410-0',
    },
    {
      id: 2,
      title: 'Modern Web Development',
      author: 'Jane Doe',
      category: 'Web Development',
      status: 'Available',
      isbn: '978-1-23-456789-7',
    },
    {
      id: 3,
      title: 'Learning JavaScript',
      author: 'John Smith',
      category: 'Programming',
      status: 'Borrowed',
      isbn: '978-0-12-345678-9',
    },
    {
      id: 4,
      title: 'Data Structures & Algorithms',
      author: 'Emily Stone',
      category: 'Computer Science',
      status: 'Available',
      isbn: '978-9-87-654321-0',
    },
    {
      id: 5,
      title: 'Cloud Computing Basics',
      author: 'Mark Johnson',
      category: 'Cloud',
      status: 'Available',
      isbn: '978-4-56-123789-0',
    }
  ];