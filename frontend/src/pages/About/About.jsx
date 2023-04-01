import { Container, Box, Image, Center, Text, Heading } from "@chakra-ui/react";

// import Footer from "../Home/Footer";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Home.footer";

function About() {
  return (
    <>
      <Navbar />

      <Container maxW="100%" h="auto" bg="white" pb="100px">
        <Heading
          color="blackAlpha.800"
          textAlign="center"
          as={"h1"}
          size={["lg", "lg", "xl", "xl"]}
          fontWeight="extrabold"
          mt={"50px"}
        >
          About the Company
        </Heading>
        <Text
          color="black"
          margin="auto"
          width="75%"
          mt="70px"
          fontSize={["md", "md", "lg", "lg"]}
        >
          HealthyWay is the most accurate, comprehensive nutrition tracking app
          on earth. Unlike other apps on the market, our nutritional data is
          curated from verified, accurate sources. We aim to provide a complete
          solution – no matter what diet you choose to be on.
        </Text>
        <Text
          color="black"
          margin="auto"
          width="75%"
          mt="25px"
          fontSize={["md", "md", "lg", "lg"]}
        >
          Our CEO, Aaron Davidson, built HeathyWay as a side project in 2005. He
          was following the CRON diet (Calorie Restriction with Optimal
          Nutrition) and being the nutrition nerd/software developer that he is,
          decided to build an app to track his diet. Thus, HealthyWay was born.
          It was several years later before he came to the conclusion that maybe
          he was onto something and quit his six-figure corporate job to focus
          on improving HealthyWay.
        </Text>
        <Text
          color="black"
          margin="auto"
          width="75%"
          mt="25px"
          fontSize={["md", "md", "lg", "lg"]}
        >
          There are now over 5 million users who are happy he did.
        </Text>
        <Text
          color="black"
          margin="auto"
          width="75%"
          mt="25px"
          fontSize={["md", "md", "lg", "lg"]}
        >
          HealthyWay's success has hinged entirely on positive word-of-mouth
          from its users. The company is still – and plans to continue being – a
          bootstrap startup to this day.
        </Text>
        <Image
          src="https://cdn1.cronometer.com/webflow/crono-team-1-p-2000.jpeg"
          width="75%"
          m="auto"
          mt="75px"
        />

        <Heading
          color="blackAlpha.800"
          textAlign="center"
          as={"h1"}
          size={["lg", "lg", "xl", "xl"]}
          fontWeight="extrabold"
          mt={["2rem", "2rem", "3rem", "3rem"]}
          mb="50px"
        >
          Who We Are
        </Heading>

        <Text
          color="black"
          margin="auto"
          width="75%"
          mt="25px"
          fontSize={["md", "md", "lg", "lg"]}
        >
          While our staff spans the globe our headquarters is based in the
          small-town of Revelstoke, British Columbia, Canada. Revelstoke is a
          health-centric mountain town brimming with endless options for staying
          active and a growing tech community – the perfect combination to call
          home.
        </Text>
        <Text
          color="black"
          margin="auto"
          width="75%"
          mt="25px"
          fontSize={["md", "md", "lg", "lg"]}
        >
          We are an eclectic mix of web developers, designers, nutrition
          scientists, business majors and personal trainers brought together by
          a love of nutrition. While our company has grown our mission and
          values have remained the same; we believe full spectrum nutrition is
          the best way to understand your diet’s effect on your health. We also
          believe in empowering everyone by ensuring they have access to
          accurate and comprehensive data to make informed decisions.
        </Text>
        <Text
          color="black"
          margin="auto"
          width="75%"
          mt="25px"
          fontSize={["md", "md", "lg", "lg"]}
        >
          Our goal is to build the best software for people and professionals to
          manage their nutrition. And we have the passion to make that happen;
          amazing data paired with awesome customer support truly are the
          HealthyWay difference.
        </Text>
        <Text
          color="black"
          margin="auto"
          width="75%"
          mt="25px"
          fontSize={["md", "md", "lg", "lg"]}
        >
          If you have interest in your personal nutrition or working with your
          client’s nutrition check us out!
        </Text>
        <Text
          color="black"
          margin="auto"
          width="75%"
          mt="25px"
          fontSize={["md", "md", "lg", "lg"]}
        >
          Have questions? We would love to hear from you. Email us at:
          support@HealthyWay.com
        </Text>

        <Box
          h="100px"
          maxW="75%"
          borderBottom="1px solid black"
          margin="auto"
          pb="50px"
        ></Box>
        <Text
          color="blackAlpha.800"
          margin="auto"
          width="75%"
          mt="75px"
          fontSize={["md", "md", "xl", "xl"]}
          textAlign="center"
        >
          Help us spread the good word about nutrition and become an affiliate.
        </Text>
        <Center
          height="50px"
          width="300px"
          margin="auto"
          boxShadow="dark-lg"
          p="6"
          rounded="md"
          bg="white"
          color="tomato"
          mt="50px"
          border="2px solid tomato"
          fontWeight="bold"
        >
          Become An Affiliate
        </Center>
      </Container>
      <Footer />
    </>
  );
}
export default About;
