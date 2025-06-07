import React from 'react'
import HomeIndex from '../components/home'
import Navbar from '@/common/Navbar'
import Footer from '@/common/Footer'
import { ToastContainer } from 'react-toastify'

const HomePage = () => {
  return (
    <div className='w-full max-w-[1800px]  4xl:h-[70vh]'>
      <ToastContainer  />
        <Navbar />
    <HomeIndex />
    <Footer />
    </div>
  )
}

export default HomePage