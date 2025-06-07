import React, { useState } from 'react'

import SubmitButton from '@/resuseable/SubmitButton'
import InputField from '@/resuseable/InputField'

import { toast } from 'react-toastify'
import { useNotificationStore } from '@/store/notificationStore'

const CreateNotif = ({ setShowNotif }) => {



const {postNotification} = useNotificationStore()

    
  const [messages, setMessages] = useState('')

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      const {message,success} = await  postNotification( { messages })

      if(success){
        toast.success(message)
        setMessages(''),
        setShowNotif(false)
      } else {
        toast.error(message)
      }
      
    } catch (error) {
      toast.error(error.message )
      
    }
  }

  return (
    <div className='w-full flex items-center justify-center overflow-hidden'>
      <div className='max-w-[700px] md:max-h-[450px] flex flex-col gap-4 w-full overflow-y-scroll bg-white rounded-lg p-4'>
        <div className='flex items-center justify-between'>
          <h1 className='font-bold text-3xl text-[#111827]'>Post a Notification</h1>
          <i onClick={() => setShowNotif(false)} className="ri-close-line text-[#6B7280] text-2xl cursor-pointer"></i>
        </div>

        <div className='flex flex-col'>
          <form onSubmit={handleSubmit}
           className='flex flex-col gap-2'>

       
             <div className='flex flex-col w-full gap-2'>
      <label htmlFor={messages}
      className='text-[#374151] text-base'>Message </label>
      <div className='border border-[#E5E7EB] flex items-center rounded-lg md:h-[240px]
       p-2 gap-2'>
              <textarea
                name="Book Name"
                placeholder="Message"
                type="text"
                value={messages}
                onChange={(e) => setMessages(e.target.value)}
           
                          className='w-full bg-transparent border-0 outline-none h-full'
              />
            </div>
            </div>

    
          
   

            <div className='w-full flex items-center justify-end pt-3 pb-5 gap-5'>
              <button
                onClick={() => setShowNotif(false)}
                type="button"
                className='bg-white border-[1px] border-[#E5E7EB] w-full rounded-lg text-[#4B5563] h-[46px] flex font-bold items-center justify-center text-base cursor-pointer'>
                Cancel
              </button>

              <SubmitButton label="Create message" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateNotif
