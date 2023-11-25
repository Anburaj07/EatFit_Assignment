import { Box, Button, Select, Text } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";

const Filter = ({ filterType, setFilterType, price, setPrice }) => {
  const handleTypeChange = (e) => {
    setFilterType(e.target.value);
  };

  const handlePriceChange = (val) => {
    setPrice(val);
  };

  return (
    <DIV>
      <Box>
        <select value={filterType} onChange={handleTypeChange}>
          <option value="">Select dietary preferences</option>
          <option value="vegan">vegan</option>
          <option value="High fiber">High fiber</option>
          <option value="Vegetarian">Vegetarian</option>
          <option value="Non-vegetarian">Non-vegetarian</option>
        </select>
      </Box>
      <Box id="sort">
        <Text>Sort By Price</Text>
        <Button value={0} onClick={() => handlePriceChange(0)}>
          All
        </Button>
        <Button value={200} onClick={() => handlePriceChange(200)}>
          0-200
        </Button>
        <Button value={300} onClick={() => handlePriceChange(300)}>
          201-300
        </Button>
        <Button value={301} onClick={() => handlePriceChange(301)}>
          301+
        </Button>
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
