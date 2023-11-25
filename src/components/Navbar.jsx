import { Box, Image, Link } from "@chakra-ui/react";
import React from "react";
import logo from "../images/logo.png";
import styled from "styled-components";
const Navbar = () => {
  return (
    <DIV>
      <Box id="logo">
        <Link href="/">
          <Image src={logo} width={"80%"} />
        </Link>
      </Box>
      <Box>
        <Link href="#about">About Us</Link>
        <Link href="#menu">Menu</Link>
        <Link href="#testmonials">Testimonials</Link>
        <Link href="#about">Contact Us</Link>
      </Box>
    </DIV>
  );
};

export default Navbar;

const DIV = styled.div`
position: sticky;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    font-weight: 500;
    #logo{
        width: 15%;
    }
    div{
        width: 75%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    a{
        color: black;
        text-decoration: none;
    }
`;
