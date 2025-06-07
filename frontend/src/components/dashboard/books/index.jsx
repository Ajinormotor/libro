import DashboardLayout from '@/layout/DashboardLayout'
import React from 'react'
import BookSummary from './Summary'
import BooksBookInfo from './BooksBookInfo'

const BookIndex = () => {
  return (
    <DashboardLayout>
    <div>
        <BookSummary  />
        <BooksBookInfo  />
    </div>
    </DashboardLayout>

  )
}

export default BookIndex