import DashboardLayout from '@/layout/DashboardLayout'
import React from 'react'
import StaffSummary from './Summary'
import StaffInfo from './StaffInfo'


const StaffIndex = () => {
  return (
    <DashboardLayout>
    <div> 
      <StaffSummary  />
      <StaffInfo  />
       </div>
    </DashboardLayout>

  )
}

export default StaffIndex