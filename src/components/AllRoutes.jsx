import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Navbar/>}/>
        <Route path='/about' element={<AboutUs/>}/>
    </Routes>
  )
}

export default AllRoutes