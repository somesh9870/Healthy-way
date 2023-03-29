import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Box
        bgImage={"https://cdn1.cronometer.com/webflow/dot-pattern.svg"}
        mt="50px"
        pt={"30px"}
        h="535px"
        bgRepeat={"no-repeat"}
        bgPosition="right"
      >
        <Grid
          w={"67%"}
          h="80%"
          margin={"auto"}
          gridTemplateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(2,1fr)",
          }}
          gap={20}
        >
          <GridItem textAlign={"start"}>
            <br />
            <br />
            <Text fontSize={"6xl"} fontWeight="900" lineHeight={"1"}>
              Eat smarter.
              <br />
              Live better.
            </Text>

            <br />
            <Text fontSize={"2xl"}>
              Track your diet, exercise, and health data.
            </Text>
            <br />
            <br />
            <Button
              href={"#"}
              fontSize={"2xl"}
              p={"30px 45px 30px 45px"}
              bg={"#44d07b"}
              _hover={{
                bg: "#44d07b",
                boxShadow: "dark-lg",
              }}
            >
              Sign Up - It's Free!
            </Button>
          </GridItem>
          <GridItem pt={"20px"}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/2QOpxmdgh9c"
              title="Luffy returns to Marineford to send a crazy message to the world"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </GridItem>
        </Grid>
      </Box>
      <Box w={"100%"} mt="20px">
        <Text fontSize={"xl"} textAlign="center">
          As Seen On
        </Text>
        <Flex
          w={["90%", "90%", "70%", "70%"]}
          m="auto"
          justifyContent="space-between"
          mt="20px"
          direction={["column", "column", "row"]}
          align={["center", "center", "none"]}
          gap={["30px", "25px", "0", "0"]}
        >
          <Box w={["70%", "70%", "30%", "20%"]}>
            <Image src="https://cdn1.cronometer.com/webflow/media-mention-2.svg" alt="media2" w={"90%"} />
          </Box>
          <Box w={["70%", "70%", "30%", "25%"]}>
            <Image src="https://cdn1.cronometer.com/webflow/media-mention-1.svg" alt="media1"  w={"80%"} />
          </Box>
          <Box w={["70%", "70%", "30%", "25%"]}>
            <Image src="https://cdn1.cronometer.com/webflow/media-mention-3.svg" alt="media3"  w={"80%"}/>
          </Box>
        </Flex>
        <Text
          fontSize={"xl"}
          textAlign="center"
          mt="35px"
        >
          Available on Web, iOS and Android
        </Text>
        <Flex
          w={["60%", "60%", "30%", "30%"]}
          m="auto"
          justifyContent="space-around"
          mt="30px"
          mb={["0", "0", "70px", "90px"]}
          direction={["column", "column", "row"]}
          gap={["20px", "20px", "none"]}
        >
          <Link to="">
            <Image src={"https://cdn1.cronometer.com/webflow/ios-icon.svg"} alt="ios" w={["80%", "80%", "80%"]} />
          </Link>
          <Link to="">
            <Image
              src={"https://cdn1.cronometer.com/webflow/android-icon.svg"}
              alt="android"
              w={["80%", "80%", "80%"]}
            />
          </Link>
        </Flex>
      </Box>
    </div>
  );
};

export default Home;
