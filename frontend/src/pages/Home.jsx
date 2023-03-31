import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Footer from "../components/Home.footer";
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
              as={"a"}
              fontSize={"2xl"}
              p={"30px 45px 30px 45px"}
              bg={"#44d07b"}
              href={"/signup"}
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
      <Box w={"100%"} mt="20px" bgColor={"#f0f2fa"} pt={"30px"} pb={"20px"}>
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
            <Image
              src="https://cdn1.cronometer.com/webflow/media-mention-2.svg"
              alt="media2"
              w={"90%"}
            />
          </Box>
          <Box w={["70%", "70%", "30%", "25%"]}>
            <Image
              src="https://cdn1.cronometer.com/webflow/media-mention-1.svg"
              alt="media1"
              w={"80%"}
            />
          </Box>
          <Box w={["70%", "70%", "30%", "25%"]}>
            <Image
              src="https://cdn1.cronometer.com/webflow/media-mention-3.svg"
              alt="media3"
              w={"80%"}
            />
          </Box>
        </Flex>
        <Text fontSize={"xl"} textAlign="center" mt="35px">
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
            <Image
              src={"https://cdn1.cronometer.com/webflow/ios-icon.svg"}
              alt="ios"
              w={["80%", "80%", "80%"]}
            />
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
      <Box mt={"150px"} textAlign="center">
        <Text fontSize={"4xl"} fontWeight="800">
          Develop healthy habits
        </Text>
        <Text fontSize={"xl"}>
          Count your calories, ensure you're meeting nutrient <br />
          targets, and see your progress over time.
        </Text>
        <Grid
          pt={"80px"}
          w={"67%"}
          h="80%"
          margin={"auto"}
          gridTemplateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(3,1fr)",
          }}
          gap={20}
          align="center"
        >
          <GridItem>
            <Image
              h={"70px"}
              src="https://cdn1.cronometer.com/webflow/cronometer-features-11.svg"
            ></Image>
            <Text fontSize={"2xl"} fontWeight="500">
              Log meals, exercise and <br />
              health metrics
            </Text>
            <Text>
              Plus, you can create custom foods, recipes, exercises and metrics.
            </Text>
          </GridItem>
          <GridItem>
            {" "}
            <Image
              h={"70px"}
              src="https://cdn1.cronometer.com/webflow/cronometer-features-14.svg"
            ></Image>
            <Text fontSize={"2xl"} fontWeight="500">
              Get valuable health reports <br />
              and charts
            </Text>
            <Text>Learn how nutrients and metrics correlate over time</Text>
          </GridItem>

          <GridItem>
            {" "}
            <Image
              h={"70px"}
              src="https://cdn1.cronometer.com/webflow/cronometer-features-13.svg"
            ></Image>
            <Text fontSize={"2xl"} fontWeight="500">
              Get valuable health reports <br />
              and charts
            </Text>
            <Text>Learn how nutrients and metrics correlate over time.</Text>
          </GridItem>
          <GridItem>
            {" "}
            <Image
              h={"70px"}
              src="https://cdn1.cronometer.com/webflow/cronometer-features-16.svg"
            ></Image>
            <Text fontSize={"2xl"} fontWeight="500">
              Custom diet settings
            </Text>
            <Text>
              Set weight, macro and nutrient targets to meet your goals.
            </Text>
          </GridItem>
          <GridItem>
            {" "}
            <Image
              h={"70px"}
              src="https://cdn1.cronometer.com/webflow/cronometer-features-15.svg"
            ></Image>
            <Text fontSize={"2xl"} fontWeight="500">
              Fasting timer
            </Text>
            <Text>
              Track your intermittent fasts and see their effect over time.
            </Text>
          </GridItem>
          <GridItem>
            {" "}
            <Image
              h={"70px"}
              src="https://cdn1.cronometer.com/webflow/cronometer-features-12.svg"
            ></Image>
            <Text fontSize={"2xl"} fontWeight="500">
              Diet support
            </Text>
            <Text>
              Whether you’re Keto, Vegan, or on one recommended by your doctor.
            </Text>
          </GridItem>
        </Grid>
        <Text mt={"180px"} fontSize={"4xl"} fontWeight="800">
          Discover your nutrition
        </Text>
        <Text fontSize={"xl"}>
          Cronometer encourages you to not just count your calories but to{" "}
          <br /> focus on your nutrition as a whole.
        </Text>
        <Grid
          pt={"50px"}
          w={"67%"}
          margin={"auto"}
          gridTemplateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(2,1fr)",
          }}
          gap={20}
          align="center"
        >
          <GridItem>
            <Image
              h={"100%"}
              src="https://cdn1.cronometer.com/webflow/crono-hero-img-22x-1.png"
            ></Image>
          </GridItem>
          <GridItem mt={"100px"}>
            <VStack h={"85%"} justifyContent={"space-between"}>
              <HStack align="start" gap={"12px"}>
                <Image
                  w={"37px"}
                  src="https://cdn1.cronometer.com/webflow/checkmark.svg"
                ></Image>
                <Box textAlign="start">
                  <Text fontSize={"2xl"} fontWeight="500">
                    Over 6 million users
                  </Text>
                  <Text fontSize={"18px"}>
                    Join the community to get tips and inspiration from other
                    users on our forums and Facebook group.
                  </Text>
                </Box>
              </HStack>
              <HStack align="start" gap={"12px"}>
                <Image
                  w={"37px"}
                  src="https://cdn1.cronometer.com/webflow/checkmark.svg"
                ></Image>
                <Box textAlign="start">
                  <Text fontSize={"2xl"} fontWeight="500">
                    Accurate nutrition data
                  </Text>
                  <Text fontSize={"18px"}>
                    Be confident that the food you log has the correct nutrition
                    data. We verify every food submission for accuracy.
                  </Text>
                </Box>
              </HStack>
              <HStack align="start" gap={"12px"}>
                <Image
                  w={"37px"}
                  src="https://cdn1.cronometer.com/webflow/checkmark.svg"
                ></Image>
                <Box textAlign="start">
                  <Text fontSize={"2xl"} fontWeight="500">
                    Data privacy & security
                  </Text>
                  <Text fontSize={"18px"}>
                    We don't sell your account data to third parties and take
                    the security of our users' accounts seriously.
                  </Text>
                </Box>
              </HStack>
            </VStack>
          </GridItem>
        </Grid>
        <Box h={"230px"} mt="200px" bgColor={"#262a3b"} pt="35px">
          <Text color={"white"} fontSize={"21px"}>
            Find out if you're getting the vitamins and minerals you need <br />{" "}
            with our food diary app.
          </Text>
          <Button
            as={"a"}
            mt={"30px"}
            href={"/signup"}
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
        </Box>
        <Text mt={"180px"} fontSize={"4xl"} fontWeight="800">
          Sync with apps and devices
        </Text>
        <Image
          m="auto"
          mt={"30px"}
          w="50%"
          src="https://cdn1.cronometer.com/webflow/cronometer-devices-3-p-1600.png"
        ></Image>
        <Box
          h={"80vh"}
          mt={"150px"}
          bgColor="#f0f2fa"
          display={"flex"}
          flexDirection="column"
          justifyContent={"space-evenly"}
        >
          <Text fontSize={"4xl"} fontWeight="800">
            Healthy Way reviews
          </Text>
          <Box textAlign={"start"}>
            <HStack
              bgColor={"white"}
              w="57%"
              m="auto"
              p="30px"
              borderRadius={"6px"}
              boxShadow="sm"
              justifyContent={"space-around"}
            >
              <Box>
                <Text color={"#005c5c"} fontSize="xl" fontWeight="700">
                  A great all-in-one health app!
                </Text>
                <Image
                  m={"auto"}
                  mt="20px"
                  w="150px"
                  src="https://cdn1.cronometer.com/webflow/ios-icon.svg"
                ></Image>
              </Box>
              <Box>
                <Text>
                  After leaving SparkPeople, I came here. I love that it is
                  Canadian,
                  <br /> includes fasting, can import recipes, gives me macro
                  details, and <br /> more. This is my daily tracking app.
                </Text>
                <Text color={"#005c5c"} mt="20px" fontSize={"xl"}>
                  iOS Review
                </Text>
              </Box>
            </HStack>
            <HStack
              bgColor={"white"}
              w="57%"
              m="auto"
              mt="30px"
              p="30px"
              borderRadius={"6px"}
              boxShadow="sm"
              justifyContent={"space-around"}
            >
              <Box>
                <Text>
                  Awesome. Getting direct feedback when you track your food{" "}
                  <br />
                  really opens your eyes to what you're putting in your body.{" "}
                  <br />
                  The modularity and ability to track macros, micros, and
                  calories in - <br /> calories out makes this an invaluable
                  tool for any nutritional goal.
                </Text>
                <Text color={"#005c5c"} mt="20px" fontSize={"xl"}>
                  Android Review
                </Text>
              </Box>
              <Box>
                <Text color={"#005c5c"} fontSize="xl" fontWeight="700">
                  Whether that's bodybuilding, weight <br /> loss, endurance
                  training, or just <br /> maintenance – everyone should be{" "}
                  <br /> using Cronometer.
                </Text>
                <Image
                  m={"auto"}
                  mt="20px"
                  w="150px"
                  src="https://cdn1.cronometer.com/webflow/android-icon.svg"
                ></Image>
              </Box>
            </HStack>
          </Box>
        </Box>
        <Grid
          w={"65%"}
          margin={"auto"}
          mt={"100px"}
          gridTemplateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(2,1fr)",
          }}
          gap={20}
          align="center"
        >
          <GridItem>
            <VStack mt={"60px"}>
              <Text fontSize={"5xl"} fontWeight="700">
                Healthy Way <span style={{ color: "#44d07b" }}>Pro</span>
              </Text>
              <Text fontSize={"2xl"} fontWeight="500">
                For Health Professionals
              </Text>
              <Text pb={"20px"} fontSize={"17px"}>
                Client diet management for nutritionists, dietitians, research{" "}
                <br /> teams, schools, and hospitals.
              </Text>
              <Button
                _hover={{
                  bgColor: "white",
                  boxShadow: "md",
                }}
                bgColor={"white"}
                border="1px"
                size={"lg"}
              >
                Learn About Pro
              </Button>
            </VStack>
          </GridItem>{" "}
          <GridItem>
            <Image
              h={"95%"}
              src="https://cdn1.cronometer.com/webflow/pro-hero-1-1.png"
            ></Image>
          </GridItem>
        </Grid>
        <hr style={{ width: "65%", margin: "auto", marginTop: "30px" }} />
        <Text fontSize={"xl"} mt={"50px"}>
          Help us spread the good word about nutrition.
        </Text>
        <Link color={"#44d07b"} textDecoration="underline">
          Become and Affiliate
        </Link>
      </Box>
      <Footer />
    </div>
  );
};

export default Home;
