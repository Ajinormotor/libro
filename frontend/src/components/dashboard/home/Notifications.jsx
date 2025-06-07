import React, { useEffect, useState} from 'react'
import time from "../../../assets/time.webp"
import { useNotificationStore } from '@/store/notificationStore'
import CreateNotif from './components/CreateNotif'

import {format} from 'timeago.js'

// const button = [
//     {title: 'Todays', id: '1'},
//      {title: 'One Week', id: '2'},
//       {title: 'One Month', id: '3'},
// ]

// const notif = [
//     {title: '3 Cyber security management books are returned.',
//          id: '1', time: '30 mintues', image: time }
// ]

// const doubleNotif = [ ...notif, ...notif, ...notif]
const Notifications = () => {

    const { getNotification, notifications} = useNotificationStore()

    const [showNotif, setShowNotif] = useState(false)

    useEffect(() => {
        getNotification()
    },[getNotification])

    // console.log("Notification details:",notifications)

    
  return (
    <div className='max-w-[550px] w-full rounded-lg bg-white p-5 flex flex-col gap-5'>


        {showNotif && <div className='fixed w-full bg-[#000000] overflow-hidden
         opacity-50 inset-0'></div> }
        
        {showNotif && 
        <div className='absolute md:top-[30px] top-[60px] md:left-[60px] z-10 w-full md:w-[90%]
         py-5 overflow-hidden p-3'> 
            <CreateNotif  setShowNotif={setShowNotif} />
            </div>
        }
        
        <div className='flex items-center justify-between'>
        <h1 className='text-black font-bold text-xl'>Notifications</h1>

         <div onClick={() =>setShowNotif(!showNotif)}
         className=' flex items-center justify-center bg-[#4CAF50] rounded-lg h-10 md:max-w-[172px]
          w-full p-2 gap-2 cursor-pointer'>
                            <i className="ri-add-line text-white"></i>
                            <h1 className='text-white text-sm'>Create Notification</h1>
                        </div>

        </div>

        {/* buttons */}
        {/* <div className={`flex items-center`}>
            {button.map((b,index) => (
                <div key={index} onClick={() => setIsActive(b.id)} 
                className={`h-10 max-w-[100px] w-full border-b-[1px] fex items-center justify-center
                ${isActive === b.id ? "border-b-[#6366F1] border-b-[2px]" : "border-b-[#6B7280]"}`}>
           <h1
 className={`text-base cursor-pointer text-center
       ${isActive === b.id ? "text-[#6366F1]" : "text-[#6B7280]"}`}>{b.title}</h1>
                    </div>
            ))}
        </div> */}
<div className='flex flex-col gap-2'>
  {Array.isArray(notifications) && notifications.map((notif, index) => (

    <div key={index} className='flex gap-4'>


              <div className='flex flex-col gap-1'>
        {notif.message && (

               <div  className='flex gap-4'>
      <img src={time} alt='' loading='lazy' className='w-5 h-6' />
              <div className='flex flex-col gap-1'>
          <h1 className='text-[#111827] text-base font-semibold'>{notif.message}</h1>
               <p className='text-[#6B7280] text-sm'>
            {format(notif.book.createdAt)}
          </p>
              </div>
               </div>
          
        )}

        {notif?.notifMsg?.messages && (

               <div  className='flex gap-4'>
                  <img src={time} alt='' loading='lazy' className='w-5 h-6' />
              <div className='flex flex-col gap-1'>
          <h1 className='text-[#111827] text-base font-semibold'>{notif.notifMsg.messages}</h1>
             <p className='text-[#6B7280] text-sm'>
            {format(notif.notifMsg.createdAt)}
          </p>
          </div>
            </div>
        )}

   
      </div>
    </div>
  ))}
</div>


    </div>
  )
}

export default Notifications