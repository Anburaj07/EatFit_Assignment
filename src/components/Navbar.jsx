import { Box, Image, Link } from "@chakra-ui/react";
import React, { useState } from "react";
import logo from "../images/logo.png";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <NavbarContainer>
      <Box id="logo">
        <Link href="/">
          <Image src={logo} width={"80%"} />
        </Link>
      </Box>
      {isMobile ? (
        <MobileMenu />
      ) : (
        <Box className="menu">
          <Link href="#about">About Us</Link>
          <Link href="#menu">Menu</Link>
          <Link href="#testimonials">Testimonials</Link>
          <Link href="#contact">Contact Us</Link>
        </Box>
      )}
    </NavbarContainer>
  );
};

const MobileMenu = () => {
  // mobile menu here
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <div>
        
        {menuOpen==true?    <div id="mobileNavBar">
      <Link href="#about" onClick={closeMenu}>About Us</Link>
      <Link href="#menu" onClick={closeMenu}>Menu</Link>
      <Link href="#testimonials" onClick={closeMenu}>Testimonials</Link>
      <Link href="#contact" onClick={closeMenu}>Contact Us</Link>
    </div> :<FaBars className="burger-icon" onClick={toggleMenu} />}
    </div>

  );
};

export default Navbar;

const NavbarContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  font-weight: 500;

  #logo {
    width: 15%;
  }

  .menu {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 60%;

    a {
      color: black;
      text-decoration: none;
    }
  }

  #mobileNavBar{
    width: 50%;
    display: grid;
    grid-template-columns:repeat(1,1fr);
    gap: 10px;
    a{
        color: black;
        text-decoration: none;
    }
  }
  @media (max-width: 768px) {
    .menu {
      display: none;
    }
    #logo{
      width: 35%;
    }
  }

  .burger-icon {
    display: none;
    font-size: 24px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    .burger-icon {
      display: block;
    }
  }
`;
