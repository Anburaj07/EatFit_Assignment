import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import footerLogo from "../images/footerLogo.png";
import styled from "styled-components";
const AboutUs = () => {
  return (
    <DIV id="about">
      <Box>
        <Image src={footerLogo}></Image>
        <Text>
          At Eatfit we offer healthy, yummy, honest & wholesome Indian food,
          made with real ingredients, zero trans fat, and lots of love!
          #HealthyMadeHappier
        </Text>
      </Box>
    </DIV>
  );
};

export default AboutUs;

const DIV=styled.div`
  background-color: #052465;
  padding: 5%;
  color: whitesmoke;
`
