import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";

const Card = ({ name, cal, type, price, image }) => {
  return (
    <DIV id="card">
      <Box>
        <Image w={"100%"} src={image} alt={name}/>
      </Box>
      <Text>{name}</Text>
      <Text color={"gray"}>
        {cal}Cal | {type}
      </Text>
      <Box id="price">
        <Text>₹{price}</Text>
        <Button>ADD</Button>
      </Box>
    </DIV>
  );
};

export default Card;

const DIV = styled.div`
  font-family: BrandonTextWeb-Medium, "Helvetica Neue", Helvetica, Roboto, Arial,
    sans-serif;
  font-size: 15px;
  text-align: left;
  padding: 35px;

  #price {
    display: flex;
    justify-content: space-between;

    button {
      border: none;
      width: 35%;
      display: flex;
      align-items: center;
      color: white;
      font-size: 17px;
      font-weight: bold;
      background-color: #052465;
    }
    button:hover{
        cursor: pointer;
    }
  }
`;
