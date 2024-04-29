import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../components/home/Home'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import NotFound from '../components/error/NotFound'
import Navbar from '../components/layouts/Navbar'
import Footer from '../components/layouts/Footer'
import AllJobs from '../components/Job/AllJobs'
import MyJobs from '../components/Job/MyJobs'
import PostJob from '../components/Job/PostJob'
import MyApplications from '../components/application/MyApplications'
import ApplicantsApplications from '../components/application/ApplicantsApplications'

const Index = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/job/all' element={<AllJobs />} />
          <Route path='/job/me' element={<MyJobs />} />
          <Route path='/job/post' element={<PostJob />} />
          <Route path='/application/me' element={<MyApplications />} />
          <Route path='/application/applicants' element={<ApplicantsApplications />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default Index