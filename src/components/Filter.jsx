import { Box, Button, Select, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import styled from "styled-components";

const Filter = ({filterType,setFilterType}) => {
  return (
    <DIV>
      <Box>
        <select value={filterType} onChange={(e)=>setFilterType(e.target.value)}>
          <option value="">Select dietary preferences</option>
          <option value="vegan">vegan</option>
          <option value="High fiber">High fiber</option>
          <option value="Vegetarian">Vegetarian</option>
          <option value="Non-vegetarian">Non-vegetarian</option>
        </select>
      </Box>
      <Box id="sort">
        <Text>Sort By Price</Text>
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
    padding: 13px;
    border-radius: 10px;
  }
  option{
    background-color: #ffffff;
    color: black;
  }
  #sort{
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p{
        font-weight: bold;
    }
  }
  button{
    padding: 13px;
    border-radius: 10px;
    background-color: #dbd8d8;
    border: none;
    width: 20%;
  }
`;
