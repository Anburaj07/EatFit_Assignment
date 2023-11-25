import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import styled from "styled-components";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      name,
      email,
      text,
    };
    console.log(obj);
  };
  return (
    <DIV id="contact">
      <Heading>Contact Us</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </FormControl>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormControl>
        <FormControl>
          <FormLabel>Write Here...</FormLabel>
          <Textarea value={text} onChange={(e) => setText(e.target.value)} />
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
  }
  input,
  textarea {
    margin-left: 100px;
    width: 300px;
    height: 50px;
    margin-bottom: 15px;
    border-radius: 10px;
    border: 1px solid gray;
  }

  @media (max-width: 768px) {
    width: 90%;
    margin: auto;
    padding: 0;
    input,
    textarea {
      width: 100%;
      margin: auto;
      margin-bottom: 15px;
    }
    #submit{
      width: 100%;
    }
  }
`;
