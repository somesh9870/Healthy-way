import React from "react";
import { Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Spacer,
  Image,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Grid,
  GridItem,
  Button,
} from "@chakra-ui/react";
// import Logo from "../../";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
const Support = () => {
  return (
    <div>
      {/* <Box>
        <Flex
          alignItems={"center"}
          m={"auto"}
          justifyContent="space-between"
          w={"80%"}
        >
          <Box p="4">
            <Link to={"/"}>
              <Image w="45%" src="./Healthy way logo.png" alt="logo" />
            </Link>
          </Box>

          <Button color={"rgb(255,137,90)"} variant={"ghost"}>
            Submit a request
          </Button>
        </Flex>
      </Box> */}
      <Navbar />

      <Flex
        mb="40px"
        justify="center"
        align="center"
        h="400px"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundImage={`url("https://theme.zdassets.com/theme_assets/197219/8cb952dce29a0cfa7be9db826bb6c865b78c06a7.png")`}
      >
        <InputGroup m="auto" w="50%" bg="white" borderRadius="700%">
          <InputLeftElement w={30}>
            <Search2Icon />
          </InputLeftElement>
          <Input focusBorderColor="#ff763f" pr="4.5rem" placeholder="Search" />
        </InputGroup>
      </Flex>

      <Box h="71px">
        <Box ml="230px" mr="230px">
          <Grid
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(1, 1fr)",
              "repeat(3, 1fr)",
              "repeat(3, 1fr)",
            ]}
            gap={2}
          >
            <GridItem
              w="100%"
              bg="white"
              border={"1px solid rgba(255, 118, 63, 1)"}
              color="rgba(255, 118, 63, 1)"
              borderRadius={"10px"}
              p="20px"
              textAlign={"center"}
              fontWeight="600px"
              _hover={{ bg: "#ff763f", color: "#fff" }}
            >
              <h4>Web Version</h4>
              <Text fontSize="sm"> User Manual for HealthyWay on Web</Text>
            </GridItem>
            <GridItem
              w="100%"
              bg="white"
              border={"1px solid rgba(255, 118, 63, 1)"}
              color="rgba(255, 118, 63, 1)"
              borderRadius={"10px"}
              p="20px"
              textAlign={"center"}
              fontWeight="600px"
              _hover={{ bg: "#ff763f", color: "#fff" }}
            >
              <h4>Mobile App</h4>
              <Text fontSize="sm">
                {" "}
                User Manual for the HealthyWay Mobile App
              </Text>
            </GridItem>
            <GridItem
              w="100%"
              bg="white"
              border={"1px solid rgba(255, 118, 63, 1)"}
              color="rgba(255, 118, 63, 1)"
              borderRadius={"10px"}
              p="20px"
              textAlign={"center"}
              fontWeight="600px"
              _hover={{ bg: "#ff763f", color: "#fff" }}
            >
              <h4>Professional Version</h4>
              <Text fontSize="sm"> User Manual for HealthyWay Pro</Text>
            </GridItem>
          </Grid>
          <br />
          <Box
            border={"1px solid rgba(255, 118, 63, 1)"}
            color="rgba(255, 118, 63, 1)"
            borderRadius={"10px"}
            p="20px"
            textAlign={"center"}
            fontWeight="600px"
            _hover={{ bg: "#ff763f", color: "#fff" }}
          >
            <h4>FAQ</h4>
            <Text fontSize="sm"> HealthyWay Frequently Asked Questions </Text>
          </Box>

          <br />
          <Box mb="100px" mt="100px">
            <hr />
          </Box>
          <br />
        </Box>

        <hr />
        <Box ml="200px" mr="200px" mt="50px" pb="100px">
          <Text>HealthyWay</Text>
        </Box>
      </Box>
    </div>
  );
};

export default Support;
