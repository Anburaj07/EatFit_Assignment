import { Box, Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import styled from "styled-components";
import Filter from "./Filter";

const Menu = () => {
  // State to manage food data
  const [foods, setFoods] = useState([]);
  // State to track loading state
  const [loading, setLoading] = useState(false);
  // State for filtering by type
  const [filterType, setFilterType] = useState("");
  // State for sorting order
  const [order, setOrder] = useState("");

  // Fetch food data when filterType or order changes
  useEffect(() => {
    fetchFood(filterType);
  }, [filterType, order]);

  // Function to fetch food data based on filter and order
  const fetchFood = () => {
    setLoading(true);
    let url = "https://eat-fit-server.onrender.com/foods?_page=1&_limit=28";

    // Append filterType to URL if provided
    if (filterType !== "") {
      url += `&type=${filterType}`;
    }

    // Append sorting options to URL
    if (order == "asc") {
      url += `&_sort=price&_order=asc`;
    }
    if (order == "desc") {
      url += `&_sort=price&_order=desc`;
    }

    // Fetch data using Axios
    axios
      .get(url)
      .then((res) => {
        // Update state with fetched data
        setLoading(false);
        setFoods(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <DIV id="menu">
      <Filter
        filterType={filterType}
        setFilterType={setFilterType}
        order={order}
        setOrder={setOrder}
      />
      {loading && (
        <Box
          height={"400px"}
          w={"100%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
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

  // Responsive layout for smaller screens
  @media (max-width: 768px) {
    #foodMenu {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }
  }

  // Hover effect for the Card component
  #card:hover {
    color: inherit;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }
`;
