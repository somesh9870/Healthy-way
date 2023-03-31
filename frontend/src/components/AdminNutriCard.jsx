import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Flex,
  Text,
  Badge,
  Center,
  Button,
  Stack,
  useToast,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Modal,
  FormControl,
  FormLabel,
  Select,
  Input,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAdminNutriData,
  getAdminNutriData,
  updateAdminNutriData,
} from "../redux/Admin/admin.action";

const AdminNutriCard = ({
  _id,
  name,
  energy,
  protein,
  carbs,
  fat,
  servingsize,
  filter,
}) => {
  const initialState = {
    name: "",
    energy: "",
    protein: "",
    carbs: "",
    fat: "",
    servingsize: "1",
    filter: "all",
  };
  const { isLoading, isError, nutriData } = useSelector((store) => store.admin);
  const [currentProduct, setCurrentProduct] = useState(initialState);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const dispatch = useDispatch();
  const toast = useToast();

  const handleDelete = (id) => {
    dispatch(deleteAdminNutriData(id));

    toast({
      title: `Food ${id} Removed`,
      description: "",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentProduct({ ...currentProduct, [name]: value });
  };

  const handleClick = (id, onOpen) => {
    onOpen();
    if (id) {
      const toUpdate = nutriData.find((item) => item._id === id);
      setCurrentProduct(toUpdate);
    }
  };

  const handleUpdate = (onClose) => {
    dispatch(updateAdminNutriData(currentProduct._id, currentProduct));
    toast({
      title: `NutriFood No ${currentProduct._id} Updated`,
      description: "",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    onClose();
  };

  useEffect(() => {
    if (nutriData.length === 0) {
      dispatch(getAdminNutriData());
    }
  }, []);

  return (
    <div>
      <Box
        maxW="xs"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="md"
        _hover={{ transform: "translateY(-5px)", shadow: "lg" }}
        transition=".2s ease-in-out"
      >
        <Center h="120px" bg="gray.200">
          <Text fontSize="xl" fontWeight="bold" color="gray.600" ml={"14px"}>
            {name}
          </Text>
        </Center>

        <Box p="6">
          <Flex justify="space-between">
            <Text fontWeight="bold" fontSize="lg" color="gray.800">
              Energy
            </Text>
            <Text fontSize="lg">{energy} kJ</Text>
          </Flex>

          <Flex justify="space-between" mt="4">
            <Text fontWeight="bold" fontSize="lg" color="gray.800">
              Protein
            </Text>
            <Text fontSize="lg">{protein} g</Text>
          </Flex>

          <Flex justify="space-between" mt="4">
            <Text fontWeight="bold" fontSize="lg" color="gray.800">
              Carbs
            </Text>
            <Text fontSize="lg">{carbs} g</Text>
          </Flex>

          <Flex justify="space-between" mt="4">
            <Text fontWeight="bold" fontSize="lg" color="gray.800">
              Fat
            </Text>
            <Text fontSize="lg">{fat} g</Text>
          </Flex>

          <Flex justify="space-between" mt="4">
            <Text fontWeight="bold" fontSize="lg" color="gray.800">
              ServingSize
            </Text>
            <Text fontSize="lg">{servingsize}</Text>
          </Flex>

          <Flex justify="space-between" mt="4">
            <Badge colorScheme="blue" borderRadius="full">
              {filter}
            </Badge>
          </Flex>
        </Box>
        <Stack direction={"row"} spacing={4} p={"6"}>
          <Button
            onClick={() => handleClick(_id, onOpen)}
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            bg={"green.400"}
            color={"white"}
            _focus={{
              bg: "green.400",
            }}
            _hover={{
              bg: "green.600",
            }}
          >
            Update
          </Button>
          <Button
            onClick={() => handleDelete(_id)}
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            color={"white"}
            bg={"red.500"}
            boxShadow={
              "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            }
            _hover={{
              bg: "red.600",
            }}
            _focus={{
              bg: "red.600",
            }}
          >
            Delete
          </Button>
        </Stack>
      </Box>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Nutriants</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                placeholder="Avocado, Black Skin"
                value={currentProduct.name}
                name="name"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired mt={4}>
              <FormLabel>Energy</FormLabel>
              <Input
                type="string"
                placeholder="227"
                value={currentProduct.energy}
                name="energy"
                onChange={handleChange}
              />
            </FormControl>
            <Flex mt={4}>
              <FormControl isRequired mr={4}>
                <FormLabel>Protein</FormLabel>
                <Input
                  type="string"
                  placeholder="9-2.7"
                  value={currentProduct.protein}
                  name="protein"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Carbs</FormLabel>
                <Input
                  type="string"
                  placeholder="42-2.4"
                  value={currentProduct.carbs}
                  name="carbs"
                  onChange={handleChange}
                />
              </FormControl>
            </Flex>
            <Flex mt={4}>
              <FormControl isRequired mr={4}>
                <FormLabel>Fat</FormLabel>
                <Input
                  type="string"
                  placeholder="175-21"
                  value={currentProduct.fat}
                  name="fat"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>ServingSize</FormLabel>
                <Select
                  value={currentProduct.servingsize}
                  name="ss"
                  onChange={handleChange}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </Select>
              </FormControl>
            </Flex>
            <FormControl mt={4}>
              <FormLabel>Filter</FormLabel>
              <Select
                value={currentProduct.filter}
                name="filter"
                onChange={handleChange}
              >
                <option value="all">All</option>
                <option value="vegan">Common Food</option>
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="green"
              mr={3}
              onClick={() => handleUpdate(onClose)}
            >
              Update
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default AdminNutriCard;
