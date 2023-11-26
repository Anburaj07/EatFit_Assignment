import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import styled from "styled-components";
import { useToast } from "@chakra-ui/react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      name,
      email,
      text,
    };
    toast({
      title: `Thank you for reaching out ${name}!`,
      description: "We'll get back to you soon",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    console.log(obj);
  };
  return (
    <DIV id="contact">
      <Heading>Contact Us</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <Box id="box">
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Box>
        </FormControl>
        <FormControl>
          <Box id="box">
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Box>
        </FormControl>
        <FormControl>
          <Box id="box">
            <FormLabel>Write Here...</FormLabel>
            <Textarea w={"62%"} value={text} onChange={(e) => setText(e.target.value)} />
          </Box>
        </FormControl>
        <FormControl>
          <Input
            type="submit"
            id="submit"
            value="submit"
            // fontSize={"20px"}
            _hover={{
              fontWeight: "bold",
              cursor: "pointer",
              backgroundColor: "gray",
              color: "white",
            }}
          />
        </FormControl>
      </form>
    </DIV>
  );
};

export default ContactUs;

const DIV = styled.div`
  width: 40%;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  font-family: BrandonTextWeb-Medium, "Helvetica Neue", Helvetica, Roboto, Arial,
    sans-serif;
    margin-bottom: 15px;
    border-radius: 10px;

  #box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    margin: auto;
    margin-bottom: 25px;
  }

  input {
    width: 60%;
      height: 30px;
    border-radius: 10px;
    border: 1px solid gray;
  }
  label,
  input,
  textarea {
    border-radius: 10px;
    font-size: 25px;
  }

  #submit {
    width: 50%;
    margin-left: 150px;
  }

  @media (max-width: 768px) {
    width: 90%;
    margin: auto;
    padding: 20px;
    font-size: 17px;
    input {
      width: 60%;
      height: 30px;
      margin: auto;
      margin-left: 55px;
      font-size: 15px;
    }
    #submit{
      width: 40%;
      margin-right: 50px;
    }
  }
`;
