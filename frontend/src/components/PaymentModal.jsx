import React from "react";
import {
  Button,
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

const SubscribeModal = () => {
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
    <>
      <Button onClick={onOpen}>Subscribe</Button>

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
    </>
  );
};

export default SubscribeModal;
