import React from "react";
import { HStack, Image, Link, Text } from "@chakra-ui/react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const userLogin=async()=>{
    let credentials={
      email,
      password
    }
    let res = await axios.post("https://panicky-crow-cardigan.cyclic.app/users/login",credentials);
    localStorage.setItem("userToken", res.data.token);
    localStorage.setItem("userEmail", credentials.email);

    try {
      if (res.data.token) {
        toast({
          title: `Login Successfull`,
          description: "",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
   
  }
  return (
    <>
      <HStack bgColor={"#262a3b"} h={"90px"}>
        <Image ml={"30px"} h={"90px"} src="./Healthy way logo.png"></Image>
      </HStack>
      <Flex minH={"50vh"} align={"center"} justify={"center"}>
        <Stack
          spacing={4}
          w={"full"}
          maxW={"md"}
          bg={useColorModeValue("white", "gray.700")}
          rounded={"xl"}
          boxShadow={"lg"}
          p={6}
          my={12}
        >
          <Heading
            textAlign={"center"}
            lineHeight={1.1}
            fontSize={{ base: "2xl", md: "3xl" }}
          >
            Welcome Back
          </Heading>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
            onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              _placeholder={{ color: "gray.500" }}
              type="email"
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
          </FormControl>
          <Stack spacing={6}>
            <Button
            onClick={userLogin}
              alignSelf={"center"}
              mt={"30px"}
              w={"50%"}
              size={"lg"}
              bg={"#005c5c"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
            >
              LOG IN
            </Button>
            <Text textAlign={"center"}>
              Not a member? <br />{" "}
              <Link
                href="/signup"
                textDecoration={"underline"}
                color={"#005c5c"}
              >
                Sign Up
              </Link>{" "}
            </Text>
            <Text textAlign={"center"}>
              Admin Login{" "}
              <Link
                href="/admin/login"
                textDecoration={"underline"}
                color={"#005c5c"}
              >
                Here
              </Link>{" "}
            </Text>
          </Stack>
        </Stack>
      </Flex>
    </>
  );
};

export default Login;
