import React from "react";
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";

const AdminUsercard = ({
  id,
  email,
  password,
  sex,
  birthday,
  height,
  weight,
  role,
  otpVerified,
}) => {
  return (
    <div>
      <Center py={6}>
        <Box
          maxW={"320px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          rounded={"lg"}
          p={6}
          textAlign={"center"}
        >
          <Avatar
            size={"xl"}
            src={
              "https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
            }
            alt={"Avatar Alt"}
            mb={4}
            pos={"relative"}
            _after={{
              content: '""',
              w: 4,
              h: 4,
              bg: "green.300",
              border: "2px solid white",
              rounded: "full",
              pos: "absolute",
              bottom: 0,
              right: 3,
            }}
          />

          <Text fontWeight={600} color={"gray.500"} mb={4}>
            {email}
          </Text>
          <Text fontWeight={600} color={"gray.500"} mb={4}>
            Sex: {sex}
          </Text>
          <Text fontWeight={600} color={"gray.500"} mb={4}>
            Birthday: {birthday}
          </Text>
          <Text fontWeight={600} color={"gray.500"} mb={4}>
            Height: {height}
          </Text>
          <Text fontWeight={600} color={"gray.500"} mb={4}>
            Weight: {weight}
          </Text>
          <Text fontWeight={600} color={"gray.500"} mb={4}>
            Role: {role}
          </Text>

          <Stack mt={8} direction={"row"} spacing={4}>
            {/* <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              _focus={{
                bg: "gray.200",
              }}
            >
              Message
            </Button> */}
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              bg={"red.500"}
              color={"white"}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "red.600",
              }}
              _focus={{
                bg: "red.600",
              }}
            >
              Delete
            </Button>
          </Stack>
        </Box>
      </Center>
    </div>
  );
};

export default AdminUsercard;
