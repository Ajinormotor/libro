import Footer from '@/common/Footer'
import Navbar from '@/common/Navbar'
import React from 'react'
import BookDetails from './Details'
import RelatedBooks from './RelatedBooks'

const BooksDetailsIndex = () => {
  return (
    <div>
        <Navbar />
   <BookDetails />
   <RelatedBooks/>

        <Footer  />
        
        </div>
  )
}

export default BooksDetailsIndex