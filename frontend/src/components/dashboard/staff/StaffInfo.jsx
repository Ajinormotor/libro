import React, { useEffect, useState } from 'react'
// import book_info from "../../../assets/book_info.webp"

// import editIcon from "../../../assets/actions_icon (1).webp"
import deleteIcon from "../../../assets/actions_icon (2).webp"
import optionIcon from "../../../assets/actions_icon (3).webp"
import PaginatorLink from '@/resuseable/PaginatorLink'
import user_logo from "../../../assets/user_logo.png"
import Delete from './components/Delete'
import Update from './components/Update'
import { useUserStore } from '@/store/userStore'





const StaffInfo = () => {

    // const isStatus = 'Avavilable'
       const {users,fetchUsers, success} = useUserStore()

const ITEMS_PER_PAGE = 15
    const [currentPage, setCurrentPage] = useState(1);
    const firstIndex = (currentPage - 1)* ITEMS_PER_PAGE
    const lastIndex = currentPage * ITEMS_PER_PAGE
  const currentUsers = Array.isArray(users)? users.slice(firstIndex, lastIndex) : null;
    const paginate = (pageNumber) => { setCurrentPage(pageNumber)}


      //  const [ showUpdate, setShowUpdate] = useState(false)
       const [ showDelete, setShowDelete] = useState(false)

    

       useEffect(() => {
        fetchUsers()
       },[fetchUsers])

       if(success){
       console.log('Users', users)
      } else{ 
  console.log('couldnt fetch users ')
      }
       console.log('Users', users)

    //  console.log('token in staff', token)
        

    
  return (


<div className='flex flex-col gap-5 pt-5'>

  {/* {showUpdate && <div className='fixed w-full bg-[#000000] overflow-hidden
   opacity-50 inset-0'></div> }
  
  {showUpdate && 
  <div className='absolute md:top-[30px] top-[60px] md:left-[60px] z-10 w-full py-5 overflow-hidden p-3'> 
      <Update setShowUpdate={setShowUpdate} />
      </div>
  }
   */}
  
  {showDelete && <div className='fixed w-full bg-[#000000] overflow-hidden
   opacity-50 inset-0'></div> }
  
  {showDelete && 
  <div className='absolute top-[70px] md:left-[70px] z-10 w-full py-5 overflow-hidden p-3'> 
      <Delete setShowDelete={setShowDelete} />
      </div>
  }
  

    <div className='flex items-center justify-between p-3'>

          {/* search inputs */}
                    {/* <div className='min-h-10 w-full max-w-[400px] focus-within:outline-1
                    focus-within:outline-[#4CAF50] flex items-center p-1
                     rounded-lg border-[1px] border-gray-200 '>
                      
                        <input type='text' placeholder='Search....' 
                        className='bg-transparent outline-none border-0 w-full
                        text-[#4CAF50] opcaity-80 placeholder:text-[#4CAF50]' />
                          <i className="ri-search-line text-[#4B5563]"></i>
                        
                    </div> */}

                    <div className='flex items-center gap-3'>

                        {/* <div className=' flex items-center justify-center bg-[#4CAF50] rounded-lg h-10 md:max-w-[172px] w-full p-2 gap-2'>
                            <i className="ri-add-line text-white"></i>
                            <h1 className='text-white text-base'>Add New Book</h1>
                        </div> */}
  {/* <div className=' flex items-center justify-center  rounded-lg h-10 md:max-w-[122px] w-full p-2 gap-2 border-[1px] border-[#E5E7EB]
                             '>
                         <i className="ri-filter-3-line"></i>
                            <h1 className='text-[#4B5563] text-base'>Filters <i class="ri-arrow-drop-down-line"></i></h1>
                        </div> */}

                    </div>

    </div>



{!users  && <div className='flex items-center justify-center'>
  <h1>No users found</h1>
</div>}


{users && 
<div className='flex flex-col gap-2'>



{/* table */}
<div className="overflow-x-auto p-3">

  <table className="min-w-full divide-y divide-gray-200">
    <thead className="bg-gray-100">
      <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Student ID</th>
        <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Student Info</th>
        <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Department</th>
        <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Status</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700"> Actions </th>
      </tr>
    </thead>

<tbody className="bg-white divide-y divide-gray-200">
            {currentUsers.map((use,index) => (
              <tr key={use._id}>
                 <td className="px-6 py-4 text-sm text-gray-900">  { "STU0" + (index + 1)}</td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  <div className="flex items-center gap-2">
                    <img src={use.profileImage || user_logo} alt="" className="w-10 h-10 rounded-lg" />
                    <div className="flex flex-col gap-1">
                      <h1 className="text-[#111827] text-base">{use.fullName}</h1>
                      <p className="text-[#6B7280] text-sm">{use.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900"> English</td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  <div
                    className={`w-[84px] h-[25px] rounded-lg flex items-center justify-center ${
                   use.status === 'Active' ? 'bg-[#F0FDF4]' : 'bg-[#FEE2E2]'
                    }`}
                  >
                    <h1
                      className={`text-sm ${
                        use.status === 'Active' ? 'text-[#16A34A]' : 'text-[#B91C1C]'
                      }`}
                    >
                      {use.status}
                    </h1>
                  </div>
                </td>
                {/* <td className="px-6 py-4 text-sm text-[#4B5563]">{book.isbn}</td> */}
                <td>
                  <div className="flex gap-2 items-center justify-center">
          
             {/* <img  onClick={() => setShowUpdate(!showUpdate)}
                               src={editIcon} alt="edit" className="w-5 h-5 cursor-pointer" /> */}

                              <img src={deleteIcon} onClick={() => setShowDelete(!showDelete)}
                               alt="delete" className="w-5 h-5 cursor-pointer" />
                    <img src={optionIcon} alt="options" className="w-5 h-5" />
                  </div>
                </td>
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

}

</div>

  )
}

export default StaffInfo


  const bookinfo = [
    {
      id: 1,
      title: 'Josn Smith',
      author: 'john.smith@university.edu',
      category: '3',
      status: 'Active',
      isbn: '978-3-16-148410-0',
    },
    {
      id: 2,
      title: 'Emma Wilson',
      author: 'john.smith@university.edu',
      category: '4',
      status: 'Active',
      isbn: '978-1-23-456789-7',
    },
    {
      id: 3,
      title: 'Learning JavaScript',
      author: 'john.smith@university.edu',
      category: '1',
      status: 'Active',
      isbn: '978-0-12-345678-9',
    },
    {
      id: 4,
      title: 'John Smith',
      author: 'john.smith@university.edu',
      category: '0',
      status: 'Suspended',
      isbn: '978-9-87-654321-0',
    },
    {
      id: 5,
      title: 'Mark Johnson',
      author: 'mark.johnson@university.edu',
      category: '4',
      status: 'Suspended',
      isbn: '978-4-56-123789-0',
    }
  ];