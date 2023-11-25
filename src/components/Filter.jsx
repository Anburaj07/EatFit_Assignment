import { Box, Button, Select } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";

const Filter = () => {
  return (
    <DIV>
      <Box>
        <select>
          <option value="">Select dietary preferences</option>
          <option value="vegan">vegan</option>
          <option value="High fiber">High fiber</option>
          <option value="Vegetarian">Vegetarian</option>
          <option value="Non-vegetarian">Non-vegetarian</option>
        </select>
      </Box>
      <Box>
        <Button>All</Button>
        <Button>0-200</Button>
        <Button>201-300</Button>
        <Button>301-400</Button>
      </Box>
    </DIV>
  );
};

export default Filter;

const DIV = styled.div`
  display: flex;
  justify-content: space-around;
  width: 90%;
  margin: auto;
  padding: 1%;
  select {
    color: white;
    font-size: 17px;
    background-color: #052465;
    padding: 10px;
  }
`;
