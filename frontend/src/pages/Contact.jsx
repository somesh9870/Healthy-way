import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    software: "",
    deadline: "",
    message: "",
  });

  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://your-backend-url.com/contact",
        formData
      );
      console.log(response.data);
      setIsLoading(false);
      setIsOpen(true);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      toast({
        title: "An error occurred.",
        description: "Please try again later.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleClose = () => {
    setIsOpen(false);
    setFormData({
      fullName: "",
      email: "",
      company: "",
      phone: "",
      software: "",
      deadline: "",
      message: "",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FormControl isRequired>
            <FormLabel>Full Name</FormLabel>
            <Input
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email Address</FormLabel>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Company</FormLabel>
            <Input
              name="company"
              type="text"
              value={formData.company}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Phone #</FormLabel>
            <Input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>What Software Are You Using Now?</FormLabel>
            <Input
              name="software"
              type="text"
              value={formData.software}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>When Do You Need This By?</FormLabel>
            <Input
              name="deadline"
              type="text"
              value={formData.deadline}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Your message</FormLabel>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
            />
          </FormControl>

          <Button type="submit" colorScheme="blue" isLoading={isLoading}>
            Submit
          </Button>
        </VStack>

        <Modal isOpen={isOpen} onClose={handleClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Message Sent!</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              Thank you for contacting us. We will get back to you as soon as
              possible.
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </form>
    </>
  );
};
export default ContactForm;
