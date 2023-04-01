import React from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

const Enterprise = () => {
  const handleOpen = () => {};

  return (
    <Box
      width={"95%"}
      borderRadius={"10px"}
      p={"30px"}
      margin={"auto"}
      bg="white"
      border="1px solid black"
      bgImage="url('https://cdn1.cronometer.com/plans/enterprise-panel-circle.svg')"
      bgRepeat={"no-repeat"}
      backgroundPosition="right bottom"
    >
      <Flex
        flexDirection={["column", "column", "row"]}
        justifyContent={["center", "center", "space-between"]}
      >
        <Box>
          <Image
            w={["70%", "55%", "100%"]}
            src="https://cdn1.cronometer.com/brand/logos/enterprise-logo.svg"
          />
          <br />
          <Text fontSize={["13px", "15px", "20px"]}>
            For hospitals, universities and research teams
          </Text>
          <br />
          <UnorderedList fontSize={["10px", "13px", "17px"]}>
            <ListItem>All Cronometer Pro features</ListItem>
            <ListItem>HIPAA compliance</ListItem>
            <ListItem>Risk assessment and compliance review</ListItem>
            <ListItem>MSA and yearly invoicing</ListItem>
            <ListItem>Staff training</ListItem>
            <ListItem>API access</ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <Text
            fontSize={["m", "l", "2xl"]}
            fontWeight={"bold"}
            textAlign={["left", "left", "right"]}
          >
            Custom
          </Text>
          <br />
          <Button
            _hover={"none"}
            bg="#44d07b"
            color={"white"}
            fontSize={["10px", "13px", "17px"]}
          >
            CONTACT US
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Enterprise;
