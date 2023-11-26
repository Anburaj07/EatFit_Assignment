import React from "react";
import Navbar from "../components/Navbar";
import { Box } from "@chakra-ui/react";
import Menu from "../components/Menu";
import ContactUs from "../components/ContactUs";
import AboutUs from "../components/AboutUs";
import Testimonials from "../components/Testimonials";
import styled from "styled-components";

// HomePage component represents the main landing page of the website.
const HomePage = () => {
  return (
    // Container for the entire home page
    <DIV>
      {/* Navigation bar component */}
      <Navbar />

      {/* Menu component displaying food items */}
      <Menu />

      {/* Section for ContactUs and Testimonials components */}
      <Box id="contacts">
        {/* ContactUs component for user inquiries */}
        <ContactUs />

        {/* Testimonials component displaying customer testimonials */}
        <Testimonials />
      </Box>

      {/* AboutUs component providing information about the company */}
      <AboutUs />
    </DIV>
  );
};

export default HomePage;

// Styled components for styling the HomePage
const DIV = styled.div`
  // Styling for the box model
  box-sizing: border-box;

  // Styling for the contact section
  #contacts {
    display: flex;
    justify-content: space-between;
    width: 95%;
    margin: auto;
  }

  // Responsive styling for smaller screens
  @media (max-width: 768px) {
    #contacts {
      flex-direction: column;
    }
  }
`;
