import React from 'react'
import Navbar from '../components/Navbar'
import { Box } from '@chakra-ui/react'
import Menu from '../components/Menu'
import ContactUs from '../components/ContactUs'
import AboutUs from '../components/AboutUs'

const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <Menu/>
        <ContactUs/>
        <AboutUs/>
    </div>
  )
}

export default HomePage