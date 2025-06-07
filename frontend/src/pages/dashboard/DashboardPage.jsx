import DashboardIndex from '@/components/dashboard/home'
import React from 'react'
import { ToastContainer } from 'react-toastify'

const DashboardPage = () => {
  return (
    <div className='overflow-hidden w-full max-w-[1800px] 4xl:h-[70vh]'>
      <ToastContainer />
<DashboardIndex  />

    </div>
  )
}

export default DashboardPage