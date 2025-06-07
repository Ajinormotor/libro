import Footer from '@/common/Footer'
import Navbar from '@/common/Navbar'
import SearchIndex from '@/components/search'
import React from 'react'
import { ToastContainer } from 'react-toastify'

const SearchPage = () => {
  return (
    <div>    <ToastContainer />
            <Navbar  />
            <SearchIndex />
            <Footer  /></div>
  )
}

export default SearchPage