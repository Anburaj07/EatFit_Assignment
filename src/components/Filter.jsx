import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";

const Filter = ({ filterType, setFilterType, order, setOrder }) => {
  // Function to handle changes in dietary preferences
  const handleTypeChange = (e) => {
    setFilterType(e.target.value);
  };

  // Function to handle sorting order
  const handleOrder = (val) => {
    setOrder(val);
  };

  return (
    <DIV>
         {/* Dropdown for selecting dietary preferences */}
      <Box id="filter">
        <select value={filterType} onChange={handleTypeChange}>
          <option value="">Select dietary preferences</option>
          <option value="vegan">vegan</option>
          <option value="High fiber">High fiber</option>
          <option value="Vegetarian">Vegetarian</option>
          <option value="Non-vegetarian">Non-vegetarian</option>
        </select>
      </Box>
      {/* Sorting options */}
      <Box id="sort">
        <Text>Sort By Price</Text>
        <Button value={"asc"} onClick={() => handleOrder("asc")}>
          Low-High
        </Button>
        <Button value={"desc"} onClick={() => handleOrder("desc")}>
          High-Low
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
  option {
    background-color: #ffffff;
    color: black;
  }
  #sort {
    width: 45%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    p {
      font-weight: bold;
    }
  }
  button {
    padding: 13px;
    border-radius: 10px;
    background-color: #dbd8d8;
    border: none;
    width: 20%;
  }
  @media (max-width: 768px) {
    flex-direction: column;

    #sort {
      width: 90%;
      margin: auto;
      display: flex;
      justify-content: space-around;
      align-items: center;

      button {
        margin-left: 10px;
        width: 30%;
      }
    }

    #filter {
      margin-top: 10px;
    }
  }
`;
