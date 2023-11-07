import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Signup from '../pages/signupForm'
import LoginForm from '../pages/loginForm'

const AllRoutes = () => {
  
  return (
    <Routes>
    <Route path="/" element={<Signup/>}/>
    <Route path="/login" element={<LoginForm/>}/>


   </Routes>
  )
}

export default AllRoutes