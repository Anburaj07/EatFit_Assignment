import React from 'react'
import Navbar from '../components/Navbar'
import { Box } from '@chakra-ui/react'
import Menu from '../components/Menu'
import ContactUs from '../components/ContactUs'

const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <Menu/>
        <ContactUs/>
    </div>
  )
}

export default HomePage