import DashboardLayout from '@/layout/DashboardLayout'
import React from 'react'
import Summary from './Summary'
import Notifications from './Notifications'
// import Report from './Report'
import BookInfo from './BookInfo'
import Chart from './components/Chart'

const DashboardIndex = () => {
  return (

    <DashboardLayout>
    <div className='flex flex-col'>
<Summary  />

<div className='flex flex-col md:flex-row md:p-3 gap-4'>
  <Notifications />
  <Chart />

</div>


<BookInfo  />
    </div>
    </DashboardLayout>

  )
}

export default DashboardIndex