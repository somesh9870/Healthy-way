import {
  Box,
  Checkbox,
  FormLabel,
  HStack,
  Heading,
  Image,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

let heightvalue = 0;

const Signup = () => {
  const [checkedItems, setCheckedItems] = React.useState([false, false, false]);
  const [isDisableds, setDisables] = useState(false);
  const [form, setform] = useState({});

  const toast = useToast();
  const navigate = useNavigate();

  const allChecked = checkedItems.every(Boolean);

  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;
  const Targetvalue = (e) => {
    let { name, value } = e.target;
    if (name === "weight") {
      value = Number(value);
    }
    if (name === "height") {
      value = Number(value);
    }
    if (name === "birthday") {
      value = new Date(value);
    }
    if (name === "ft") {
      value = Number(value);
      heightvalue += value * 12;
      heightvalue *= 2.54;
    }
    if (name === "in") {
      value = Number(value);
      heightvalue += value * 2.54;
    }
    if (heightvalue > 0) {
      setform({
        ...form,
        [name]: value,
        height: heightvalue,
      });
    } else {
      setform({
        ...form,
        [name]: value,
      });
    }
  };

  const handlesignup = async (e) => {
    e.preventDefault();
    console.log(form);
    const res = await axios.post("https://panicky-crow-cardigan.cyclic.app/users/signup",form);
    const data = res.data;
    console.log(res)

    if (res.status === "error") {
      toast({
        title: "Signup failed",
        description: res.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
    if (data.password !== data.confirmpass) {
      toast({
        title: "Passwords must be same",
        description: res.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
    if (data === "Email already exists") {
      toast({
        title: "Email already exists, please login",
        description: res.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      navigate("/login");
    }
    if (data.status === 500) {
      toast({
        title: "Please enter valid email",
        description: res.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
    if (res.status === 200) {
      toast({
        title: "Verify OTP sent to your mail",
        description: "Your Profile has been creatd on Loseit",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      let info=form
      let otp=res.data.otp
      info.otp=otp;
      localStorage.setItem("info",JSON.stringify(info))
      navigate("/verify-otp");
    }
  };

  useEffect(() => {
    if (allChecked) {
      setDisables(!isDisableds);
    }
  }, [allChecked]);
  return (
    <>
      <HStack bgColor={"#262a3b"} h={"90px"}>
        <Image ml={"30px"} h={"90px"} src="./Healthy way logo.png"></Image>
      </HStack>
      <Box
        bgImage={
          "https://cdn1.cronometer.com/brand2/assets/DotPatternLarge.svg"
        }
        bgColor={"#fffcf6"}
        w={"100%"}
        bgRepeat={"no-repeat"}
        bgPosition={"right bottom"}
      >
        <Box>
          <Box w="41%" m={"auto"}>
            <Heading
              size={"lg"}
              fontWeight="700"
              textAlign={"center"}
              pt={"35px"}
            >
              Create Your Free Account
            </Heading>
            <form onSubmit={handlesignup}>
              <Box
                display="flex"
                alignContent={"center"}
                justifyContent="center"
                p={5}
                w={"100%"}
                m="auto"
                flexDirection={"column"}
              >
                <Box
                  w={"100%"}
                  m={"auto"}
                  p={10}
                  bgColor={"white"}
                  boxShadow={"md"}
                  borderRadius={"8px"}
                >
                  <HStack justifyContent={"space-between"} w={"90%"}>
                    <Text fontSize={"xl"} fontWeight={"500"}>
                      Email
                    </Text>
                    <Input
                      w={"60%"}
                      type="email"
                      onChange={Targetvalue}
                      placeholder="Email Address"
                      name="email"
                    />
                  </HStack>
                  <HStack
                    justifyContent={"space-between"}
                    w={"90%"}
                    mt={"12px"}
                  >
                    <Text fontSize={"xl"} fontWeight={"500"}>
                      Password
                    </Text>
                    <Input
                      w={"60%"}
                      type="password"
                      placeholder="password "
                      name="password"
                      onChange={Targetvalue}
                    />
                  </HStack>
                  <HStack
                    justifyContent={"space-between"}
                    w={"90%"}
                    mt={"12px"}
                  >
                    <Text fontSize={"xl"} fontWeight={"500"}>
                      Confirm Password
                    </Text>
                    <Input
                      w={"60%"}
                      type="password"
                      placeholder=" Confirm password "
                      
           
                    />
                  </HStack>
                </Box>

                <Box
                  borderRadius={"8px"}
                  bgColor={"white"}
                  w={"100%"}
                  display="flex"
                  flexDirection={"column"}
                  my={5}
                  fontSize="16px"
                  fontWeight={"medium"}
                  boxShadow="lg"
                  p={10}
                >
                  <Box
                    display={"flex"}
                    alignItems="center"
                    textAlign="center"
                    flexDirection={"column"}
                    mb={5}
                  >
                    <Heading fontSize={"22px"} mb={"15px"} textAlign={"center"}>
                      Profile Details
                    </Heading>
                    <HStack
                      justifyContent={"space-between"}
                      w={"80%"}
                      mt={"12px"}
                    >
                      <Text fontSize={"xl"} fontWeight={"500"}>
                        Sex
                      </Text>
                      <RadioGroup>
                        <Radio
                          size="lg"
                          name="sex"
                          colorScheme="green"
                          type={"radio"}
                          onChange={Targetvalue}
                          value="male"
                          mr={4}
                        >
                          Male
                        </Radio>
                        <Radio
                          size="lg"
                          name="sex"
                          type={"radio"}
                          value="female"
                          colorScheme="green"
                          onChange={Targetvalue}
                        >
                          Female
                        </Radio>
                      </RadioGroup>
                    </HStack>
                    <HStack
                      justifyContent={"space-between"}
                      w={"80%"}
                      mt={"12px"}
                    >
                      <Text fontSize={"xl"} fontWeight={"500"}>
                        Birthday
                      </Text>
                      <Input
                        w={"60%"}
                        type={"date"}
                        onChange={Targetvalue}
                        name="birthday"
                      />
                    </HStack>

                    <HStack
                      justifyContent={"space-between"}
                      w={"80%"}
                      mt={"12px"}
                      alignItems={"end"}
                    >
                      <Text fontSize={"xl"} fontWeight={"500"}>
                        Height
                      </Text>
                      <Box>
                        <FormLabel fontSize={"13px"}>ft</FormLabel>
                        <Select
                          w={"90px"}
                          size={"md"}
                          type="number"
                          name="ft"
                          onChange={Targetvalue}
                        >
                          <option value="1">1</option>
                          <option value="2"> 2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5"> 5</option>
                          <option value="6">6</option>
                          <option value="7"> 7</option>
                          <option value="8">8</option>
                        </Select>
                      </Box>

                      <Box>
                        <FormLabel fontSize={"13px"}>in</FormLabel>
                        <Select
                          w={"90px"}
                          size={"md"}
                          type="number"
                          name="in"
                          onChange={Targetvalue}
                        >
                          <option value="0">0</option>
                          <option value="1">1</option>
                          <option value="2"> 2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5"> 5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                        </Select>
                      </Box>
                      <Text>or</Text>

                      <Box>
                        <FormLabel fontSize={"13px"}>cm</FormLabel>
                        <Input
                          w={"90px"}
                          type={"number"}
                          onChange={Targetvalue}
                          size={"md"}
                          name="height"
                        />
                      </Box>
                    </HStack>

                    <HStack
                      justifyContent={"space-between"}
                      w={"80%"}
                      mt={"12px"}
                    >
                      <Text fontSize={"xl"} fontWeight={"500"}>
                        Weight
                      </Text>
                      <HStack>
                        <Input
                          type={"number"}
                          w="120px"
                          size={"md"}
                          name="weight"
                          onChange={Targetvalue}
                        />
                        <Select
                          size={"md"}
                          placeContent="select"
                          w="170px"
                          onChange={Targetvalue}
                        >
                          <option value="kg"> Kilograms</option>
                          <option value="Pounds">Pounds</option>
                        </Select>
                      </HStack>
                    </HStack>
                  </Box>
                </Box>

                <Box
                  bgColor={"white"}
                  borderRadius={"8px"}
                  m="auto"
                  my={3}
                  px="5"
                  py={"8"}
                  boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
                >
                  <Text
                    fontWeight={"700"}
                    fontSize={"22px"}
                    mb={"15px"}
                    textAlign={"center"}
                  >
                    {" "}
                    Terms of Service & Privacy Settings
                  </Text>

                  <Box px={5} py={2}>
                    <Checkbox
                      size={"lg"}
                      isChecked={allChecked}
                      isIndeterminate={isIndeterminate}
                      onChange={(e) =>
                        setCheckedItems([e.target.checked, e.target.checked])
                      }
                    >
                      {" "}
                      Check All
                    </Checkbox>
                    <Text fontWeight={"medium"}>
                      By checking the box below you are indicating you have read
                      and agree to our{" "}
                      <Text as={"span"} color={"red"}>
                        {" "}
                        Terms of Service
                      </Text>{" "}
                      and{" "}
                      <Text as={"span"} color={"red"}>
                        Privacy Policy.
                      </Text>
                    </Text>
                  </Box>

                  <Box px={5} py={2}>
                    <Checkbox
                      size={"lg"}
                      isChecked={checkedItems[0]}
                      onChange={(e) =>
                        setCheckedItems([e.target.checked, checkedItems[1]])
                      }
                    >
                      {" "}
                      I agree to the HealthyWay.com{" "}
                      <Text as={"span"} color={"red"}>
                        Terms of Service
                      </Text>
                    </Checkbox>
                    <Text fontWeight={"medium"}>
                      In order to give you the best experience using Healthy
                      Way, we need certain data permissions. (These are optional
                      and can be updated in your settings any time.)
                    </Text>
                  </Box>

                  <Box px={5}>
                    <Checkbox
                      size={"lg"}
                      isChecked={checkedItems[1]}
                      onChange={(e) =>
                        setCheckedItems([checkedItems[0], e.target.checked])
                      }
                    >
                      I agree to receive newsletters and promotional materials.
                    </Checkbox>
                  </Box>
                  <Box px={5}>
                    <Checkbox
                      size={"lg"}
                      isChecked={checkedItems[1]}
                      onChange={(e) =>
                        setCheckedItems([checkedItems[0], e.target.checked])
                      }
                    >
                      {" "}
                      I agree to receive personalized in-app ads. (You will
                      receive less relevant, non-personalized ads if you opt
                      out)
                    </Checkbox>
                  </Box>
                </Box>
                {!isDisableds ? (
                  <Input
                    value={"Sign Up"}
                    type={"submit"}
                    w={"25%"}
                    p={"7px"}
                    cursor="pointer"
                    flex={1}
                    fontSize={"lg"}
                    ml={4}
                    bg={"#005c5c"}
                    color={"white"}
                    _hover={{
                      bg: "#005c5c",
                    }}
                    _focus={{
                      bg: "#005c5c",
                    }}
                    opacity={"0.5"}
                    m={"auto"}
                    mt={"20px"}
                  />
                ) : (
                  <Input
                    p={"7px"}
                    value={"Sign Up"}
                    type={"submit"}
                    w={"25%"}
                    cursor="pointer"
                    flex={1}
                    fontSize={"lg"}
                    ml={4}
                    bg={"#005c5c"}
                    color={"white"}
                    _hover={{
                      bg: "#005c5c",
                    }}
                    _focus={{
                      bg: "#005c5c",
                    }}
                    m={"auto"}
                    mt={"20px"}
                  />
                )}
              </Box>
            </form>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Signup;
