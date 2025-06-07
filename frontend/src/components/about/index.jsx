import Footer from '@/common/Footer'
import Navbar from '@/common/Navbar'
import HeadTag from '@/resuseable/HeadTag'
import React from 'react'
import Journey from './Journey'
import Choose from './Choose'
import Faq from './Faq'
import { Helmet } from 'react-helmet'

const AboutIndex = () => {
  return (
    <div>

       <Helmet>
            <title>Libro | About </title>
            </Helmet>
        <Navbar  />
        <HeadTag  label="About Us"  />
        <Journey  />
        <Choose  />
        <Faq />
        <Footer />
        
        </div>
  )
}

export default AboutIndex