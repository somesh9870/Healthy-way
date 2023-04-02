import { Center, Heading, Image } from "@chakra-ui/react";
import {
  Button,
  FormControl,
  Flex,
  Stack,
  useColorModeValue,
  HStack,
  useToast,
} from "@chakra-ui/react";

import { PinInput, PinInputField } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function VerifyOTP() {
  const toast = useToast();
  const navigate = useNavigate();
  const [otp, setOTP] = useState();

  const verify = async (e) => {
    e.preventDefault();
    let OTP = Number(otp);
    let info = JSON.parse(localStorage.getItem("info"));
    if(info.otp === OTP){

      navigate("/login");
    }
    if (info.otp === OTP) {
      toast({
        title: "Welcome to Healthy Way",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate("/login");
    }else{
      toast({
        title: "Please enter correct OTP",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }

  };
  return (
    <>
      <HStack bgColor={"#262a3b"} h={"90px"}>
        <Image ml={"30px"} h={"90px"} src="./Healthy way logo.png"></Image>
      </HStack>
      <Flex
        minH={"60vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack
          spacing={4}
          w={"full"}
          maxW={"sm"}
          bg={useColorModeValue("white", "gray.700")}
          rounded={"xl"}
          boxShadow={"lg"}
          p={6}
          my={10}
        >
          <Center>
            <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
              Verify your Email
            </Heading>
          </Center>
          <Center
            fontSize={{ base: "sm", sm: "md" }}
            color={useColorModeValue("gray.800", "gray.400")}
          >
            We have sent code to your email
          </Center>
          <FormControl>
            <Center>
              <HStack>
                <PinInput otp size={"lg"} mask onComplete={(e) => setOTP(e)}>
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
              </HStack>
            </Center>
          </FormControl>
          <Stack spacing={6}>
            <Button
              onClick={verify}
              bg={"#005c5c"}
              color={"white"}
              _hover={{
                bg: "#005c5c",
                boxShadow: "lg",
              }}
            >
              Verify
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </>
  );
}
