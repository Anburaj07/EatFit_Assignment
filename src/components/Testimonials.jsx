import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import maleAvatar from "../images/maleAvatar.jpg";
import femaleAvatar from "../images/femaleAvatar.jpg";
import styled from "styled-components";
const Testimonials = () => {
  return (
    <DIV id="testimonials">
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
          EATFIT has transformed my approach to healthy eating. Their delicious
          and nutritious meals make wellness a delightful journey
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
          EATFIT has redefined my dining experience. Flavorful, wholesome meals
          delivered with efficiency—every bite feels like a wellness boost!
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

  #testimonial {
    padding: 10px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  padding-bottom: 20px;
`;
