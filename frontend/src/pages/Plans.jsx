import React from "react";
import { Box, Text } from "@chakra-ui/react";
import GoldPlan from "../components/Plans/GoldPlan";
import GiftSubscription from "../components/Plans/GoldPlanSubs";
import ProfPlan from "../components/Plans/ProfPlan";
import Enterprise from "../components/Plans/Enterprise";
import FAQ from "../components/Plans/FAQ";

const Plans = () => {
  return (
    <>
      {/* <SidebarContent   display={{ base: 'none', md: 'block' }}/> */}
      <Box w={["100%", "100%", "80%"]} float={"right"} bg="#fffcf6">
        {/* <MobileNav /> */}
        <Text
          fontSize={["l", "xl", "3xl"]}
          pt={"15px"}
          fontWeight="bold"
          w="95%"
          m="auto"
        >
          Plans for Individuals
        </Text>
        <br />
        <GoldPlan />
        <br />
        <Text fontSize={["l", "xl", "3xl"]} fontWeight="bold" w="95%" m="auto">
          Gift Subscriptions
        </Text>
        <br />
        <GiftSubscription />
        <br />
        <Text fontSize={["l", "xl", "3xl"]} fontWeight="bold" w="95%" m="auto">
          Plans for Professionals
        </Text>
        <br />
        <ProfPlan />
        <br />
        <Enterprise />
        <br />
        <FAQ />
        <br />
      </Box>
    </>
  );
};

export default Plans;
