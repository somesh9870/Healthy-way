import React from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  ListItem,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  UnorderedList,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const ProfPlan = () => {
  const [open, setOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const handleSubmit = () => {
    // Handle payment logic here

    // Show toast on successful payment
    toast({
      title: "Payment Successful",
      description: "Thank you for subscribing!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });

    // Close modal
    onClose();
  };

  const data = [
    {
      title: "Log foods, exercise, biometrics and notes",
      details: "",
      basic: true,
      gold: true,
    },
    {
      title: "Track up to 84 nutrients and other compounds",
      details: "",
      basic: true,
      gold: true,
    },
    {
      title: "Custom macro and micronutrient targets",
      details: "",
      basic: true,
      gold: true,
    },
    {
      title: "Sync with apps and devices",
      details: "",
      basic: true,
      gold: true,
    },
    {
      title: "Manually create custom foods and recipes",
      details: "",
      basic: true,
      gold: true,
    },
    {
      title: "Export your data",
      details: "",
      basic: true,
      gold: true,
    },
    {
      title: "No ads",
      details: "Just a clean, uninterrupted experience.",
      basic: false,
      gold: true,
    },
    {
      title: "Recipe Importer",
      details: "Easily import recipes from your favorite websites.",
      basic: false,
      gold: true,
    },
    {
      title: "Diary Groups and Timestamps",
      details:
        "Organize your diary into groups or meals, and add timestamps to entries.",
      basic: false,
      gold: true,
    },
    {
      title: "Target Scheduler",
      details: "Set different Macro Targets for each day of the week.",
      basic: false,
      gold: true,
    },
    {
      title: "Fasting Timer",
      details: "Track your intermittent fasts and nutrition in one app.",
      basic: false,
      gold: true,
    },
    {
      title: "Nutrition Scores",
      details:
        "Select up to eight scores highlighting important areas of nutrition.",
      basic: false,
      gold: true,
    },
    {
      title: "Custom Charts",
      details:
        "Create custom charts to correlate nutrients and biometrics over time.",
      basic: false,
      gold: true,
    },
    {
      title: "Custom Biometrics",
      details:
        "Create your own biometrics outside of the ones we already offer to track.",
      basic: false,
      gold: true,
    },
    {
      title: "More Insights",
      details: "View Charts and reports for all data entered into your diary.",
      basic: false,
      gold: true,
    },
    {
      title: "Food Suggestions",
      details:
        "Gain valuable insight into which foods can help you meet your targets",
      basic: false,
      gold: true,
    },
    {
      title: "Share Custom Food and Recipes",
      details:
        "Share your custom foods and recipes with your friends who use Cronometer.",
      basic: false,
      gold: true,
    },
    {
      title: "Nutrient Oracle",
      details: "Discover top contributing foods of specific nutrients.",
      basic: false,
      gold: true,
    },
    {
      title: "Print reports",
      details:
        "Create an easy to read PDF to share with your health professionals.",
      basic: false,
      gold: true,
    },
  ];

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <Box
      width={"95%"}
      borderRadius={"10px"}
      p={"30px"}
      margin={"auto"}
      bg="white"
      border="1px solid black"
      bgImage="url('https://cdn1.cronometer.com/plans/pro-plan-circle.svg')"
      bgRepeat={"no-repeat"}
      backgroundPosition="right bottom"
    >
      <Flex
        flexDirection={["column", "column", "row"]}
        justifyContent={["center", "center", "space-between"]}
      >
        <Box>
          <Image
            w={["50%", "40%", "40%"]}
            src="https://cdn1.cronometer.com/plans/pro-no-icon-logo.svg"
          />
          <br />
          <Text fontWeight={"bold"} fontSize={["13px", "15px", "20px"]}>
            Our professional version for health coaches and trainers. Monitor
            your clients Cronometer accounts.
          </Text>
          <br />
          <UnorderedList fontSize={["10px", "13px", "17px"]}>
            <ListItem>
              Includes 10 client seats -- add more for $2.25 per month
            </ListItem>
            <ListItem>Manage clients’ Cronometer settings and data</ListItem>
            <ListItem>
              View your clients’ diary at any time to monitor compliance
            </ListItem>
            <ListItem>
              Share custom foods and recipes with your clients
            </ListItem>
            <ListItem>
              Chat with clients using secure internal messaging
            </ListItem>
            <ListItem>Export reports to review with your clients</ListItem>
            <ListItem>List your business on our public pro directory</ListItem>
            <ListItem>Cronometer Pro tutorial webinars</ListItem>
          </UnorderedList>
          <br />
          <Button
            variant={"outline"}
            colorScheme="orange"
            fontSize={["10px", "13px", "15px"]}
            onClick={() => handleOpen()}
          >
            VIEW ALL FEATURES
          </Button>
        </Box>
        <Box>
          <Text
            fontSize={["l", "xl", "3xl"]}
            fontWeight={"bold"}
            textAlign={["left", "left", "right"]}
          >
            $29.95
          </Text>
          <Text fontSize={["10px", "13px", "17px"]}>USD per month</Text>
          <br />
          <Button
            _hover={"none"}
            bg="#44d07b"
            color={"white"}
            fontSize={["10px", "13px", "17px"]}
            // onClick={onOpen}
          >
            <Link to={"/payment"}>SUBSCRIBE NOW</Link>
          </Button>
        </Box>
      </Flex>
      {open ? (
        <TableContainer>
          <Table>
            <Thead>
              <Tr>
                <Th w="70%">
                  <Text fontSize={["10px", "15px", "25px"]} fontWeight={"bold"}>
                    Gold Features
                  </Text>
                  <br />
                  <Text>USD per Year - billed annually</Text>
                </Th>
                <Th w="15%">
                  <Image src="https://cdn1.cronometer.com/plans/basic-logo.svg" />
                  <Text fontSize={["10px", "13px", "17px"]} fontWeight={"bold"}>
                    $0.00
                  </Text>
                </Th>
                <Th w="15%">
                  <Image src="https://cdn1.cronometer.com/plans/gold-logo.svg" />
                  <Text fontSize={["10px", "13px", "17px"]} fontWeight={"bold"}>
                    $49.99
                  </Text>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((el) => {
                return (
                  <Tr fontSize={["10px", "13px", "17px"]}>
                    <Td w="70%">
                      <Text>{el.title}</Text>
                      <Text>{el.details}</Text>
                    </Td>
                    <Td w="15%">
                      {el.basic ? (
                        <CheckIcon color="green" />
                      ) : (
                        <CloseIcon color="red" />
                      )}
                    </Td>
                    <Td w="15%">
                      {el.gold ? (
                        <CheckIcon color="green" />
                      ) : (
                        <CloseIcon color="red" />
                      )}
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      ) : (
        <Box></Box>
      )}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Subscribe to Our Service</ModalHeader>
          <ModalBody>
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input type="email" placeholder="Enter email" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Credit Card Number</FormLabel>
              <Input type="text" placeholder="Enter card number" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Expiry Date</FormLabel>
              <Input type="text" placeholder="MM / YY" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>CVC</FormLabel>
              <Input type="text" placeholder="Enter CVC" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleSubmit}>Pay Now</Button>
            <Button ml={4} onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ProfPlan;
