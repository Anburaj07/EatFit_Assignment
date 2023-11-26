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
          <Box>
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
          <Box>
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
          <Box>
            <FormLabel>Write Here...</FormLabel>
            <Textarea value={text} onChange={(e) => setText(e.target.value)} />
          </Box>
        </FormControl>
        <FormControl>
          <Input
            type="submit"
            id="submit"
            value="submit"
            fontSize={"20px"}
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
  margin-bottom: 30px;
  width: 40%;
  padding: 30px;
  padding-left: 20px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  font-family: BrandonTextWeb-Medium, "Helvetica Neue", Helvetica, Roboto, Arial,
    sans-serif;
  font-size: 20px;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }
  input,
  textarea {
    height: 50px;
    margin-bottom: 20px;
    border-radius: 10px;
    border: 1px solid gray;
    font-size: 20px;
  }

  @media (max-width: 768px) {
    width: 90%;
    margin: auto;
    padding: 0;
    font-size: 17px;
    input,
    textarea {
      /* border: 1px solid red; */
      width: 80%;
      height: 30px;
      margin: auto;
      margin-left: 15px;
      font-size: 15px;
    }
    div {
      /* border: 1px solid red; */
      margin-bottom: 15px;
      display: flex;
      justify-content: space-around;

    width: 80%;
    }
    #submit {
      width: 100%;
    }
  }
  div {
    width: 90%;
    display: flex;
    /* border: 1px solid red; */
    justify-content: space-between;
    align-items: center;    
  
    #submit {
      width: 50%;
      margin: auto;
    }}
`;
