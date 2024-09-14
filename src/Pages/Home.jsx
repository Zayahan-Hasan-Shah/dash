import React, {useState} from 'react'
import Navbar from '../Components/Navbar/Navbar'
import DashboardRoutes from '../RoutesOfPages/DashboardRoutes'

const Home = () => {
  return (
    <>
    <div> <Navbar  /></div>

    <div>
      <DashboardRoutes />
    </div>

    <div>Footer</div>
    
    </>
  )
}

export default Home