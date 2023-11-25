import { Button, FormControl, FormLabel, Heading, Input, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'
import styled from 'styled-components'

const ContactUs = () => {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [text,setText]=useState('')

  const handleSubmit=(e)=>{
    e.preventDefault();
    let obj={
      name,email,text
    }
    console.log(obj)
  }
  return (
    <DIV>
      <Heading>Contact Us</Heading>
      <form onSubmit={handleSubmit}>
      <FormControl>
          <FormLabel>Name</FormLabel>
          <Input type="text" value={name}  onChange={(e)=>setName(e.target.value)} required/>
        </FormControl>
      <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input type="email" value={email}  onChange={(e)=>setEmail(e.target.value)} required/>
        </FormControl>
        <FormControl>
          <FormLabel>Write Here...</FormLabel>
          <Textarea value={text} onChange={(e)=>setText(e.target.value)}/>
        </FormControl>
        <FormControl>
          <Input type="submit" id='submit' value='submit' borderRadius={"10px"} _hover={{fontWeight:"bold",cursor:"pointer",backgroundColor:'gray'}} />
        </FormControl>
      </form>
    </DIV>
  )
}

export default ContactUs

const DIV=styled.div`
  margin-bottom: 30px;
  width: 40%;
  padding: 30px;
  border-radius: 15px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
font-family: BrandonTextWeb-Medium, "Helvetica Neue", Helvetica, Roboto, Arial,
    sans-serif;
  font-size: 18px;
  justify-content: center;

  input{
    height: 30px;
  }
  #submit{
    width: 17%;
    margin: auto;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`