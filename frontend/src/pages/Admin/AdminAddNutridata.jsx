import { Heading, useToast } from "@chakra-ui/react";
import React from "react";
import SidebarWithNav from "../../components/SidebarWithNav";
import { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Flex,
  Button,
  Select,
  Box,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addAdminNutriData } from "../../redux/Admin/admin.action";

const AdminAddNutridata = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const initialState = {
    name: "",
    energy: "",
    protein: "",
    carbs: "",
    fat: "",
    servingsize: "1",
    filter: "all",
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addAdminNutriData(formData));
    toast({
      title: `Data Added`,
      description: "",
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    setFormData(initialState);
  };
  return (
    <div>
      <SidebarWithNav />
      <Heading textAlign={"center"} mb={"30px"} mt={"40px"}>
        Add Nutriants
      </Heading>

      <Box
        maxW="md"
        margin={"auto"}
        marginLeft={"20%"}
        mx="auto"
        my={10}
        px={4}
      >
        <form onSubmit={handleSubmit}>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              placeholder="Avocado, Black Skin"
              value={formData.name}
              name="name"
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired mt={4}>
            <FormLabel>Energy</FormLabel>
            <Input
              type="string"
              placeholder="227"
              value={formData.energy}
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
                value={formData.protein}
                name="protein"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Carbs</FormLabel>
              <Input
                type="string"
                placeholder="42-2.4"
                value={formData.carbs}
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
                value={formData.fat}
                name="fat"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>ServingSize</FormLabel>
              <Select
                value={formData.ss}
                name="servingsize"
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
              value={formData.filter}
              name="filter"
              onChange={handleChange}
            >
              <option value="all">All</option>
              <option value="vegan">Common Food</option>
            </Select>
          </FormControl>
          <Button
            marginLeft={"35%"}
            px={"10%"}
            type="submit"
            colorScheme="green"
            mt={4}
          >
            Submit
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default AdminAddNutridata;
