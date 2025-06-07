
import { lazy } from 'react'
import './App.css'

import {Route, Routes, useLocation} from 'react-router-dom'
import { Suspense } from 'react'
import { useEffect } from 'react'
import { AuthorizedUser } from './provider/AuthorizedUser.jsx'
import { UnAuthorizedUser } from './provider/unAuthorizedUser'


const HomeWrapper = lazy(() => import('./pages/HomePage.jsx'))
const AboutWrapper = lazy(() => import('./pages/AboutPage.jsx'))
const BooksWrapper = lazy(() => import('./pages/BooksPage.jsx'))
const ContactWrapper = lazy(() => import('./pages/ContactPage.jsx'))
const AuthWrapper = lazy(() => import('./pages/AuthPage.jsx'))
const SearchWrapper = lazy(() => import('./pages/SearchPage.jsx'))
const BookDetailsWrapper = lazy(() => import('./pages/BookDetails.jsx'))

const DashboardWrapper = lazy(() => import('./pages/dashboard/DashboardPage.jsx'))
const DashboardBookWrapper = lazy(() => import('./pages/dashboard/BookPage.jsx'))
const DashboardStaffWrapper = lazy(() => import('./pages/dashboard/StaffPage.jsx'))


function App() {
  

const location = useLocation()


useEffect(() => {
window.scrollTo(0,0)
},[location.pathname])
  return (
    <>
  
<Routes>

  <Route index element={
    <Suspense>
      <HomeWrapper  />
    </Suspense>
  } />


<Route path='/about' element={
    <Suspense>
  
       <AboutWrapper />

    </Suspense>
  } />


<Route path='/books' element={
    <Suspense>
  
       <BooksWrapper />

    </Suspense>
  } />

  
 <Route path='/book/:id' element={
    <Suspense>
  
       <BookDetailsWrapper />

    </Suspense>
  } />

  <Route path='/contact' element={
    <Suspense>
  
       <ContactWrapper />

    </Suspense>
  } />



      <Route path='/search' element={
    <Suspense>

       <SearchWrapper  />
 
    </Suspense>
  } />




  <Route path='/auth' element={
    <Suspense>

      <UnAuthorizedUser>
   <AuthWrapper  />
      </UnAuthorizedUser>
   
    </Suspense>
  } />


    <Route path='/dashboard' element={
    <Suspense>
      <AuthorizedUser>
  <DashboardWrapper  />
      </AuthorizedUser>
    
    </Suspense>
  } />

  

    <Route path='/dashboard/books' element={
    <Suspense>
   <AuthorizedUser>
       <DashboardBookWrapper  />
   </AuthorizedUser>
    </Suspense>
  } />

   

      <Route path='/dashboard/books/search' element={
    <Suspense>
   <AuthorizedUser>
       <DashboardBookWrapper  />
   </AuthorizedUser>
    </Suspense>
  } />


   <Route path='/dashboard/staffs' element={
    <Suspense>
      <AuthorizedUser>
 <DashboardStaffWrapper  />
      </AuthorizedUser>
     
    </Suspense>
  } />


</Routes>
  

    </>
  )
}

export default App
