import Footer from '@/common/Footer'
import Navbar from '@/common/Navbar'
import React from 'react'
import Form from './Form'
import HeadTag from '@/resuseable/HeadTag'
import Content from './Content'
import { Helmet } from 'react-helmet'

const ContactIndex = () => {
  return (
    <div>
       <Helmet>
            <title>Libro | Contact</title>
            </Helmet>
        <Navbar  />
        <HeadTag label="Contact Us"  />
       <Content />
        <Footer />
    </div>
  )
}

export default ContactIndex