import AuthIndex from '@/components/auth'
import React from 'react'
import { ToastContainer } from 'react-toastify'

const AuthPage = () => {
  return (
    <div className='w-full max-w-[1800px] 4xl:h-[70vh]'>
      <ToastContainer />
<AuthIndex  />
    </div>
  )
}

export default AuthPage