import { Box, SkeletonText } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import styled from 'styled-components';
import Filter from './Filter';

const Menu = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://eat-fit-server.onrender.com/foods?_page=1&_limit=12')
      .then((res) => {
        setFoods(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <DIV>
      {loading && (
        <Box>
          {/* <SkeletonText mt='4' noOfLines={4} spacing='4' height='10' /> */}
          Loading...
        </Box>
      )}
      <Filter/>
      <Box id='foodMenu'>
        {foods.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </Box>
    </DIV>
  );
};

export default Menu;

const DIV=styled.div`
  #foodMenu{
    width: 80%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 20px;
  }  
  #card:hover {
    color: inherit;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }
`
