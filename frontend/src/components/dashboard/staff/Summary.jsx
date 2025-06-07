import React, { useEffect } from 'react'
import iconOne from "../../../assets/summaryStaff_icon (1).webp"
import iconTwo from "../../../assets/summaryStaff_icon (2).webp"
import iconThree from "../../../assets/summaryStaff_icon (3).webp"
import iconFour from "../../../assets/summaryStaff_icon (4).webp"
import { useUserStore } from '@/store/userStore'



const StaffSummary = () => {

    const {users, suspendedUser, activeUser, fetchUsersStats} = useUserStore()

    useEffect(() => {
        fetchUsersStats()
    },[fetchUsersStats])

const summaryData = [
    {
        title: 'Total Students',
        icon: iconOne,
        number:  users?.length
    },

     {
        title: 'Active Students',
        icon: iconTwo,
        number: activeUser?.length
    },

     {
        title: 'Suspended',
        icon: iconThree,
        number: suspendedUser?.length
    },

     {
        title: 'New This month',
        icon: iconFour,
        number: '20'
    },
]


  return (
    <div className='flex flex-col md:flex-row gap-4 w-full md:p-3'>
        {
            summaryData.map((sum,index) => (
                <div key={index}
                className={`min-h-[70px] rounded-lg md:max-w-[350px] w-full bg-white 
                flex   p-4 gap-2
       `}>

          <img src={sum.icon} alt="" loading='lazy'
                    className='w-13 h-13' />
        
        <div className='flex flex-col '>
  
     <h1 className='text-2xl text-black font-bold'>{sum.number}</h1>
   <p className='text-[#6B7280] text-base'>{sum.title}</p>
                    </div>
                 

                    </div>
            ))
        }

    </div>
  )
}

export default StaffSummary