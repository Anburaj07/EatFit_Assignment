import React from "react";
import Navbar from "../components/Navbar";
import { Box } from "@chakra-ui/react";
import Menu from "../components/Menu";
import ContactUs from "../components/ContactUs";
import AboutUs from "../components/AboutUs";
import Testimonials from "../components/Testimonials";
import styled from "styled-components";

const HomePage = () => {
  return (
    <DIV>
      <Navbar />
      <Menu />
      <Box id="contacts">
        <ContactUs />
        <Testimonials/>
      </Box>
      <AboutUs />
    </DIV>
  );
};

export default HomePage;

const DIV=styled.div`
  #contacts{
    display: flex;
    justify-content: space-between;
    width: 95%;
    margin: auto;
  }
`