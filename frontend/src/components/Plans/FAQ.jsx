import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Image,
  ListItem,
  OrderedList,
  Text,
} from "@chakra-ui/react";

import { ArrowForwardIcon } from "@chakra-ui/icons";
const FAQ = () => {
  return (
    <Box w="95%" m="auto" bg="white" borderRadius={"10px"} p="20px">
      <Text fontSize={["m", "l", "xl"]} fontWeight={"bold"} py={"10px"}>
        Frequently Asked Questions
      </Text>
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <AccordionButton>
            <Box
              fontSize={["12px", "15px", "17px"]}
              color={"#005c5c"}
              as="b"
              flex="1"
              textAlign="left"
              py="10px"
            >
              Which plan is right for me?
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Text fontSize={["13px", "15px", "17px"]}>
              Cronometer is free to use with premium plans for individuals and
              healthcare professionals.
            </Text>
            <br />
            <Text fontSize={["13px", "15px", "17px"]} fontWeight={"600"}>
              Basic (free version):
            </Text>
            <Text fontSize={["13px", "15px", "17px"]}>
              This plan has the basic tools to track your nutrition. The free
              version is supported by advertisements which are served to you by
              a third party.
            </Text>
            <br />
            <Text fontSize={["13px", "15px", "17px"]} fontWeight={"600"}>
              Gold:
            </Text>
            <Text fontSize={["13px", "15px", "17px"]}>
              Choose this plan if you’re committed to reaching your health
              goals. Gold gives you more customization, more insights to your
              health, and a bunch of neat features. If you don’t like
              advertisements, then this plan is for you!
            </Text>
            <br />
            <Text fontSize={["13px", "15px", "17px"]} fontWeight={"600"}>
              Pro:
            </Text>
            <Text fontSize={["13px", "15px", "17px"]}>
              Pro is designed for dietitians, nutritionists, physical trainers
              and health coaches. You can invite your clients to join Cronometer
              so you can monitor their accounts. You can also invite clients
              that have existing Cronometer accounts.
            </Text>
            <br />
            <Text fontSize={["13px", "15px", "17px"]} fontWeight={"600"}>
              Enterprise:
            </Text>
            <Text fontSize={["13px", "15px", "17px"]}>
              Enterprise has all the features of Pro but is catered more to
              larger institutions like hospitals, universities and research
              teams. If you are a HIPAA compliant entity, this is the plan for
              you. Please connect with our sales team so we can work with you
              directly.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box
              fontSize={["12px", "15px", "17px"]}
              color={"#005c5c"}
              as="b"
              flex="1"
              textAlign="left"
              py="10px"
            >
              What forms of payment do you accept?
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Text fontSize={["13px", "15px", "17px"]}>
              We accept all major credit cards, except for Discover cards.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box
              fontSize={["12px", "15px", "17px"]}
              color={"#005c5c"}
              as="b"
              flex="1"
              textAlign="left"
              py="10px"
            >
              Will I be charged sales tax?
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Text fontSize={["13px", "15px", "17px"]}>
              If live you live in Canada, you will be charged Canadian sales tax
              (we are a Canadian company).
            </Text>
            <Text fontSize={["13px", "15px", "17px"]}>
              If you live outside of Canada, you will not be charged tax.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box
              fontSize={["12px", "15px", "17px"]}
              color={"#005c5c"}
              as="b"
              flex="1"
              textAlign="left"
              py="10px"
            >
              How secure is Cronometer?
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Text fontSize={["13px", "15px", "17px"]}>
              We take data security seriously at Cronometer. Not only is your
              data protected, we will never sell your data to 3rd parties.
            </Text>
            <Text fontSize={["13px", "15px", "17px"]}>
              You can learn more on security at Cronometer here.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box
              fontSize={["12px", "15px", "17px"]}
              color={"#005c5c"}
              as="b"
              flex="1"
              textAlign="left"
              py="10px"
            >
              How do I cancel or change my subscription?
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Text fontSize={["13px", "15px", "17px"]} fontWeight={"600"}>
              If you purchased gold on our Web version:
            </Text>
            <OrderedList fontSize={["13px", "15px", "17px"]}>
              <ListItem>
                Log into the web version at https://cronometer.com/
              </ListItem>
              <ListItem>
                The Account Tab is the section where you update any sign-up
                information and manage your subscriptions and personal data.
              </ListItem>
              <ListItem>
                Cancel your Gold subscription at any time to prevent your
                subscription from renewing at the end of your current term.
                Select Do Not Auto-Renew from the drop-down menu.
              </ListItem>
            </OrderedList>
            <br />
            <Image
              w="100%"
              src="https://cdn1.cronometer.com/plans/cancel-subscription-screenshot.png"
            />
            <br />
            <Text fontSize={["13px", "15px", "17px"]} fontWeight={"600"}>
              If you purchased gold from with the iOS app::
            </Text>
            <Text fontSize={["13px", "15px", "17px"]}>
              Open system Settings <ArrowForwardIcon /> iTunes & App Store
              <ArrowForwardIcon />
              View Apple ID <ArrowForwardIcon /> Subscriptions
            </Text>
            <br />
            <Text fontSize={["13px", "15px", "17px"]} fontWeight={"600"}>
              If you purchased gold on the Android mobile app:
            </Text>
            <OrderedList fontSize={["13px", "15px", "17px"]}>
              <ListItem>Launch the Google Play Store app</ListItem>
              <ListItem>
                Tap Menu <ArrowForwardIcon /> My Apps <ArrowForwardIcon />
                Subscriptions and tap on our app to manage your subscription
              </ListItem>
            </OrderedList>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default FAQ;
