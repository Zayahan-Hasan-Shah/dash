import React, { useState } from 'react'
import Login from "../Pages/Login"
import Signup from '../Pages/Signup'
import Home from '../Pages/Home'
import { Routes, Route } from 'react-router-dom'
import Profile from '../Pages/Profile'
import Security from '../Pages/Security'
import Billing from '../Pages/Billing'
import DashboardRoutes from './DashboardRoutes'


const RoutesOfPages = () => {
  const [Authenticated, isAuthenticatd] = useState(false)
  
  return (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/dashboard/*' element={<DashboardRoutes/>} />

    </Routes>
  )
}

export default RoutesOfPages