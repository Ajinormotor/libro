import StaffIndex from '@/components/dashboard/staff'
import React from 'react'
import { ToastContainer } from 'react-toastify'

const StaffPage = () => {
  return (
    <div className='w-full max-w-[1800px] 4xl:h-[70vh]'>
      <ToastContainer />
        <StaffIndex />
    </div>
  )
}

export default StaffPage