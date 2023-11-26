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
    // alert( `Thank you for reaching out ${name}!`)
    toast({
      position: 'top',
      title: `Thank you for reaching out ${name}!`,
      description: "We'll get back to you soon",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };
  return (
    <DIV id="contact">
      <Heading>Contact Us</Heading>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Your Name *"
        />
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Email Address *"
        />
        <Textarea
          w={"62%"}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write Here.."
        />
        <Button
        onClick={()=>{
          
        }}
          type="submit"
          _hover={{
            fontWeight: "bold",
            cursor: "pointer",
            backgroundColor: "gray",
            color: "white",
          }}
        >
          Submit
        </Button>
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

  form{
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }

  button{
    width: 60%;
    height: 50px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    background-color:#052465;
  }

  input,textarea {
    width: 60%;
    height: 50px;
    border: 0.5px solid gray;
    border-radius: 5px;
    font-size: 18px;
    padding: 5px;
  }


  @media (max-width: 768px) {
    width: 90%;
    margin: auto;
    padding: 20px;
    font-size: 17px;
    margin-bottom: 20px;
    input,textarea {
      width: 80%;
      height: 30px;
      margin: auto;
      font-size: 15px;
    }
    button{
    width: 50%;
    }
  }
`;
