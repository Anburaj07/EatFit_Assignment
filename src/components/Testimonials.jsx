import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import maleAvatar from "../images/maleAvatar.jpg";
import femaleAvatar from "../images/femaleAvatar.jpg";
import styled from "styled-components";
const Testimonials = () => {
  return (
    <DIV>
      <Heading>Testimonials</Heading>
      <Box id="testimonial">
        <Box w={"80%"} m={"auto"}>
          <Box w={"100px"} borderRadius={"50%"} height={"100px"}>
            <Image
              borderRadius={"50%"}
              src={maleAvatar}
              w={"100%"}
              height={"100%"}
              objectFit={"cover"}
            />
          </Box>
          <Heading as={"h4"} size={"lg"}>
            Mahendra Virat
          </Heading>
        </Box>
        <Text>
          Joining EATFIT was a game-changer for me. In just a short span, I
          gained invaluable knowledge about nutrition and healthy living. EATFIT
          has truly been a transformative experience for my well-being.
        </Text>
      </Box>
      <br />
      <Box id="testimonial">
        <Box w={"80%"} m={"auto"}>
          <Box w={"100px"} borderRadius={"50%"} height={"100px"}>
            <Image
              borderRadius={"50%"}
              src={femaleAvatar}
              w={"100%"}
              height={"100%"}
              objectFit={"cover"}
            />
          </Box>
          <Heading as={"h4"} size={"lg"}>
            Anushka Sakshi
          </Heading>
        </Box>
        <Text>
          EATFIT has been a wellness revelation for me. In a brief time, I
          acquired essential knowledge about nutrition and health. Grateful for
          this enriching journey towards a healthier lifestyle!
        </Text>
      </Box>
    </DIV>
  );
};

export default Testimonials;

const DIV = styled.div`
  width: 40%;
  div > div {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  #testimonial{
    padding: 10px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  padding-bottom: 20px;
`;
