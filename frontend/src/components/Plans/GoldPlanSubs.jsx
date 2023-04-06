import React from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  Text,
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
import { Link } from "react-router-dom";

const GiftSubscription = () => {
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

  return (
    <Box
      width={"95%"}
      borderRadius={"10px"}
      p={"30px"}
      margin={"auto"}
      bg="white"
      border="1px solid black"
    >
      <Flex
        flexDirection={["column", "column", "row"]}
        justifyContent={["center", "center", "space-between"]}
      >
        <Box>
          <Image
            w={["50%", "40%", "40%"]}
            src="https://cdn1.cronometer.com/plans/gold-no-icon-logo.svg"
          />
          <br />
          <Text fontWeight={"bold"} fontSize={["13px", "15px", "20px"]}>
            Give the gift of Gold and purchase a one-year subscription for a
            friend or family member.
          </Text>
          <br />
        </Box>
        <Box>
          <Text
            fontSize={["l", "xl", "3xl"]}
            fontWeight={"bold"}
            textAlign={["left", "left", "right"]}
          >
            $49.99
          </Text>
          <Text
            textAlign={["left", "left", "right"]}
            fontSize={["10px", "13px", "17px"]}
          >
            USD per Year (non-renewing)
          </Text>
          <br />
          <Button
            fontSize={["10px", "13px", "17px"]}
            _hover={"none"}
            bg="#ff6733"
            color={"white"}
            // onClick={onOpen}
          >
            <Link to={"/payment"}>SUBSCRIBE NOW</Link>
          </Button>
        </Box>
      </Flex>

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

export default GiftSubscription;
