import React from 'react'
import Hero from './Hero'
import BestBookList from './BestBookList'
// import HighestBookList from './HighestBookList'
import { ToastContainer } from 'react-toastify'
import { Helmet } from 'react-helmet'


const HomeIndex = () => {
  return (
    <div>
      <ToastContainer  />

      <Helmet>
      <title>Libro | Home</title>
      </Helmet>
      
      <Hero  />
      <BestBookList  />
      {/* <HighestBookList  /> */}

    </div>
  )
}

export default HomeIndex