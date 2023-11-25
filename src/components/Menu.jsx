import {
  Box,
  CircularProgress,
  Skeleton,
  SkeletonText,
  Spinner,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import styled from "styled-components";
import Filter from "./Filter";

const Menu = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterType, setFilterType] = useState("");
  const [order, setOrder] = useState("");
  useEffect(() => {
    fetchFood(filterType);
  }, [filterType, order]);

  const fetchFood = () => {
    setLoading(true);
    let url = "https://eat-fit-server.onrender.com/foods?_page=1&_limit=28";

    if (filterType !== "") {
      url += `&type=${filterType}`;
    }
    if (order == "asc") {
      url += `&_sort=price&_order=asc`;
    }
    if (order == "desc") {
      url += `&_sort=price&_order=desc`;
    }
    axios
      .get(url)
      .then((res) => {
        setLoading(false);
        setFoods(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(filterType);
  return (
    <DIV>
      <Filter
        filterType={filterType}
        setFilterType={setFilterType}
        order={order}
        setOrder={setOrder}
      />
      {loading && (
        <Box
          height={"200px"}
          w={"100%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <CircularProgress value={59} size="100px" thickness="4px" />
        </Box>
      )}
      {!loading && (
        <Box id="foodMenu">
          {foods.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </Box>
      )}
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
