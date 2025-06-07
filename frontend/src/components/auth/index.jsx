import React from 'react'
import Content from './Content'
import { ToastContainer } from 'react-toastify'
import { Helmet } from 'react-helmet'

const AuthIndex = () => {
  return (
    <div>
       <Helmet>
            <title>Libro | Authentication</title>
            </Helmet>
      <ToastContainer  />
        <Content  />
    </div>
  )
}

export default AuthIndex