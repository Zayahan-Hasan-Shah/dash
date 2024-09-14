

import './App.css'
import Layout from './Components/Layout/Layout'
import Signup from './Pages/Signup'
import DashboardRoutes from './RoutesOfPages/DashboardRoutes'
import Login from './Pages/Login'
// import DashboardRoutes from './RoutesOf00Pages/DashboardRoutes'
import {Routes, Route } from "react-router-dom"
function App() {

  return (
    <>
      {/* <Layout /> */}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/dashboard/*' element={<DashboardRoutes />} />

      </Routes>
    </>
  )
}

export default App
