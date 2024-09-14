import React from 'react'
import Home from '../Pages/Home'
import Profile from '../Pages/Profile'
import {Routes, Route} from "react-router-dom"
import Billing from '../Pages/Billing'

const DashboardRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/billing' element={<Billing />} />
    </Routes>
    </>
  )
}

export default DashboardRoutes