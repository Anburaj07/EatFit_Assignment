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
  // State variables for name, email, and text
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const toast = useToast();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Display toast notification
    toast({
      position: "top",
      title: `Thank you for reaching out ${name}!`,
      description: "We'll get back to you soon",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };
  return (
    <DIV id="contact">
      {/* Contact Us heading */}
      <Heading>Contact Us</Heading>

      {/* Contact form */}
      <form onSubmit={handleSubmit}>
        {/* Input for name */}
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Your Name *"
        />

        {/* Input for email */}
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Email Address *"
        />

        {/* Textarea for message */}
        <Textarea
          w={"62%"}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write Here.."
        />

        {/* Submit button */}
        <Button
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
  // Styling for the container
  width: 40%;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  font-family: BrandonTextWeb-Medium, "Helvetica Neue", Helvetica, Roboto, Arial,
    sans-serif;
  margin-bottom: 15px;
  border-radius: 10px;

  // Styling for the form
  form {
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }

  // Styling for the button
  button {
    width: 60%;
    height: 50px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    background-color: #052465;
  }

  // Styling for input and textarea
  input,
  textarea {
    width: 60%;
    height: 50px;
    border: 0.5px solid gray;
    border-radius: 5px;
    font-size: 18px;
    padding: 5px;
  }

  // Responsive styling for smaller screens
  @media (max-width: 768px) {
    width: 90%;
    margin: auto;
    padding: 20px;
    font-size: 17px;
    margin-bottom: 20px;
    input,
    textarea {
      width: 80%;
      height: 30px;
      margin: auto;
      font-size: 15px;
    }
    button {
      width: 50%;
    }
  }
`;
