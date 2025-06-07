import React, { useEffect, useState } from 'react'
// import book_info from "../../../assets/book_info.webp"

import editIcon from "../../../assets/actions_icon (1).webp"
import deleteIcon from "../../../assets/actions_icon (2).webp"
import optionIcon from "../../../assets/actions_icon (3).webp"
import PaginatorLink from '@/resuseable/PaginatorLink'
import Create from './components/Create'
import Update from './components/Update'
import Delete from './components/Delete'
import { useBookStore } from '@/store/bookStore'
import { useNavigate } from 'react-router-dom'





const BooksBookInfo = () => {

    // const isStatus = 'Avavilable'

     const {fetchBook, books, searchBooks} = useBookStore()
     const navgiate = useNavigate()

const ITEMS_PER_PAGE = 15
    const [currentPage, setCurrentPage] = useState(1);
    const firstIndex = (currentPage - 1)* ITEMS_PER_PAGE
    const lastIndex = currentPage * ITEMS_PER_PAGE
const currentBooks = Array.isArray(books) ? books.slice(firstIndex, lastIndex) : [];
    const paginate = (pageNumber) => { setCurrentPage(pageNumber)}

    const [ showCreate, setShowCreate] = useState(false)
     const [ showUpdate, setShowUpdate] = useState(false)

         const [ showDelete, setShowDelete] = useState(false)
                  const [ showUser, setShowUser] = useState('')

        

         useEffect(() => {
          fetchBook()
         }, [fetchBook])

        //  console.log('books:', books)

        const handleDelete = (user) => {
          setShowDelete(!showDelete)
          setShowUser(user)

        }

        
        const handleUpdate = (user) => {
          setShowUpdate(!showDelete)
          setShowUser(user)

        }

        const [searchTerm , setSearchTerm] = useState()


        const handleSearch = async(e) => {
          e.preventDefault()
          const urlParams = new URLSearchParams(window.location.search)
          urlParams.set('searchTerm', searchTerm)
              const searchQuery =  urlParams.toString()
          await searchBooks(searchQuery)
           navgiate(`/dashboard/books?${searchQuery}`)

        }

       useEffect( () => {
          const urlParams = new  URLSearchParams(location.search)
         const searchedUrlParams =  urlParams.get('searchTerm')
         if(searchedUrlParams){
          const searchQuery =  urlParams.toString()
          searchBooks(searchQuery)
          setSearchTerm(searchedUrlParams)
         }

        },[searchBooks])
    

      
    
  return (


<div className='flex flex-col gap-5 pt-5 max-h-screen overflow-hidden'>

{showCreate && <div className='fixed w-full bg-[#000000] overflow-hidden
 opacity-50 inset-0'></div> }

{showCreate && 
<div className='absolute md:top-[30px] top-[60px] md:left-[60px] z-10 w-full py-5 overflow-hidden p-3'> 
    <Create  setShowCreate={setShowCreate} />
    </div>
}


{showUpdate && <div className='fixed w-full bg-[#000000] overflow-hidden
 opacity-50 inset-0'></div> }

{showUpdate && 
<div className='absolute md:top-[30px] top-[60px] md:left-[60px] z-10 w-full py-5 overflow-hidden p-3'> 
    <Update setShowUpdate={setShowUpdate} showUser={showUser} />
    </div>
}


{showDelete && <div className='fixed w-full bg-[#000000] overflow-hidden
 opacity-50 inset-0'></div> }

{showDelete && 
<div className='absolute top-[70px] md:left-[70px] z-10 w-full py-5 overflow-hidden p-3'> 
    <Delete setShowDelete={setShowDelete} showUser={showUser} />
    </div>
}



    <div className='flex flex-col md:flex-row items-center justify-between p-3 gap-2'>

          {/* search inputs */}
                    <form
                     onSubmit={handleSearch}
                     className='min-h-10 w-full max-w-[400px] focus-within:outline-1
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

                    <div className='flex items-center gap-3 max-w-[300px] w-full'>

                        <div onClick={() =>setShowCreate(!showCreate)}
         className=' flex items-center justify-center bg-[#4CAF50] rounded-lg h-10 md:max-w-[172px]
          w-full p-2 gap-2 cursor-pointer'>
                            <i className="ri-add-line text-white"></i>
                            <h1 className='text-white text-base'>Add New Book</h1>
                        </div>
                        
  {/* <div className=' flex items-center justify-center  rounded-lg h-10 md:max-w-[122px] w-full p-2 gap-2 border-[1px] border-[#E5E7EB]
                             '>
                         <i className="ri-filter-3-line"></i>
                            <h1 className='text-[#4B5563] text-base'>Filters <i class="ri-arrow-drop-down-line"></i></h1>
                        </div> */}

                    </div>

    </div>


<div className='flex flex-col gap-2'>


{  !books  &&
<div className='flex items-center justify-center'>
  <h1>No book found</h1>
</div>
}


{ books && <div className='flex flex-col gap-2'>
<div className="overflow-x-auto p-3">

  <table className="min-w-full divide-y divide-gray-200">
    <thead className="bg-gray-100">
      <tr>
        <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">BookInfo</th>
        <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Price</th>
        <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Status</th>
        <th className="px-6 py-3 text-left text-sm font-medium
         text-gray-700 hidden md:table-cell">ISBN</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 hidden md:table-cell"> Actions </th>
      </tr>
    </thead>

<tbody className="bg-white divide-y divide-gray-200">
            {currentBooks.map((book,index) => (
              <tr key={book.id}>
                <td className="px-6 py-4 text-sm text-gray-900">
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
                      book.status === 'available' ? 'bg-[#F0FDF4]' : 'bg-[#FFF7ED]'
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
                </td>

                <td className="hidden md:table-cell px-6 py-4 text-sm 
                text-[#4B5563]">{"978-3-16-148410-" + (index + 1) }</td>

                <td className='hidden md:table-cell'>
                  <div className="flex gap-2 items-center">
                    <img  onClick={() => handleUpdate(book)}
                     src={editIcon} alt="edit" className="w-5 h-5 cursor-pointer" />
                    <img src={deleteIcon} onClick={() => handleDelete(book)}
                     alt="delete" className="w-5 h-5 cursor-pointer" />
                    <img src={optionIcon} alt="options" className="w-5 h-5" />
                  </div>
                  
                </td>

              </tr>
            ))}
          </tbody>

  </table>

</div>



<div className=''>
        <PaginatorLink
          paginate={paginate}
          itemsPerPage={ITEMS_PER_PAGE}
          currentPage={currentPage}
          totalItems={bookinfo.length}
        />

</div>

</div>
}




</div>

</div>

  )
}

export default BooksBookInfo


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