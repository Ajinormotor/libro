import Footer from '@/common/Footer'
import React from 'react'
import Books from './Books'
import Navbar from '@/common/Navbar'
import HeadTag from '@/resuseable/HeadTag'
import { Helmet } from 'react-helmet'

const BooksIndex = () => {
  return (
    <div>
       <Helmet>
            <title>Libro | Books</title>
            </Helmet>
        <Navbar  />
        <HeadTag   label="Book"/>
        <Books  />
        <Footer  />
    </div>
  )
}

export default BooksIndex