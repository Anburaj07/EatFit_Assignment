import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import footerLogo from "../images/footerLogo.png";
import styled from "styled-components";
import { FaTwitter, FaInstagram } from "react-icons/fa";

// AboutUs component describes the company and provides social media links.
const AboutUs = () => {
  return (
    // Container for AboutUs section
    <DIV id="about">
      {/* Logo and description */}
      <Box>
        <Image src={footerLogo}></Image>
        <Text>
          At Eatfit we offer healthy, yummy, honest & wholesome Indian food,
          made with real ingredients, zero trans fat, and lots of love!
          #HealthyMadeHappier
        </Text>
      </Box>

      {/* Heading for social media links */}
      <Heading as="h3" size={"lg"}>
        Follow us on
      </Heading>

      {/* Social media icons */}
      <Box id="icons">
        {/* Twitter icon */}
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={30} />
        </a>
        {/* Instagram icon */}
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} />
        </a>
      </Box>
    </DIV>
  );
};

export default AboutUs;

// Styled components for styling the AboutUs section
const DIV = styled.div`
  // Styling for the background and padding
  background-color: #052465;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  color: whitesmoke;

  // Styling for social media icons
  #icons {
    width: 10%;
    margin: auto;
    display: flex;
    justify-content: space-around;
  }

   // Styling for the logo image
  img {
    margin: auto;
  }

   // Styling for anchor tags (social media links)
  a {
    text-decoration: none;
    color: white;
  }

  // Styling for anchor tags on hover
  a:hover {
    cursor: pointer;
  }
`;
