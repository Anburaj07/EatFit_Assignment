import { Box, SkeletonText } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import styled from "styled-components";
import Filter from "./Filter";

const Menu = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterType, setFilterType] = useState("");
  const [price, setPrice] = useState(0);
  useEffect(() => {
    fetchFood(filterType);
  }, [filterType, price]);

  const fetchFood = () => {
    setLoading(true);
    let url = "https://eat-fit-server.onrender.com/foods?_page=1&_limit=12";

    if (filterType !== "") {
      url += `&type=${filterType}`;
    }

    if (price > 0) {
      url += `&price_lte=${price}`;
    }
    if (price >0 && price==200) {
      url += `&price_lte=${price}&price_gte=0`;
    }
    if (price >0 && price==300) {
      url += `&price_lte=${price}&price_gte=200`;
    }
    if (price >0 && price==301) {
      url += `&price_gte=300`;
    }
    axios
      .get(url)
      .then((res) => {
        setFoods(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  console.log(filterType);
  return (
    <DIV>
      {loading && (
        <Box>
          {/* <SkeletonText mt='4' noOfLines={4} spacing='4' height='10' /> */}
          Loading...
        </Box>
      )}
      <Filter
        filterType={filterType}
        setFilterType={setFilterType}
        price={price}
        setPrice={setPrice}
      />
      <Box id="foodMenu">
        {foods.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </Box>
    </DIV>
  );
};

export default Menu;

const DIV = styled.div`
  #foodMenu {
    width: 80%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
  #card:hover {
    color: inherit;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }
`;
