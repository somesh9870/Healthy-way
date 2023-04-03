import { Box, Button, Flex, Grid, Heading, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Tab, TabIndicator, TabList, TabPanel, TabPanels, Table, TableContainer, Tabs, Tbody, Td, Text, Tfoot, Th, Thead, Tr, useDisclosure, useToast } from "@chakra-ui/react";
import Sidebar from "../components/Side_Navbar";
import {BiHelpCircle} from "react-icons/bi";
import { useEffect, useState } from "react";
import UserStats from "../components/UserStats";
import { useDispatch, useSelector } from "react-redux";
import { addDataDiary, getNutrientData } from "../redux/User/user.action";
import ProgressBar from "../components/Charts/ProgressBar";

export default function Dashboard() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [modalFoot, setModalFoot] = useState(false);
    const [statData, setStatData] = useState({});
    const { isLoading, isError, nutriData } = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const toast = useToast();

    useEffect(() => {
        dispatch(getNutrientData());
    },[]);

    const handleNutriStat = (data) => {
        setModalFoot(true);
        setStatData(data);
    };

    const handleAdd = () => {
        dispatch(addDataDiary(statData));
        setModalFoot(false);
        toast({
            title: "Food is added to the Diary.",
            status: "success",
            position: "top",
            isClosable: true,
        })
        onClose();
    }
    
    const category = [
        {
            title: "FOOD",
            src: "https://cdn1.cronometer.com/brand/svg/add-food-icon.svg"
        },
        {
            title: "EXERCISE",
            src: "https://cdn1.cronometer.com/brand/svg/add-exercise-icon.svg"
        },
        {
            title: "BIOMETRIC",
            src: "https://cdn1.cronometer.com/brand/svg/add-biometric-icon.svg"
        },
        {
            title: "NOTE",
            src: "https://cdn1.cronometer.com/brand/svg/add-note-icon.svg"
        }
    ];

    return (
        <div style={{background: "#fffcf6"}}>

            {/* Side_Navbar */}

            <Sidebar />

            {/* Dashboard  */}

            <Flex justifyContent={{base: "flex-end", lg: "center"}} p="5">
                <Flex w={{base: "90%", sm: "90%", lg: "80%"}} flexDir="column" align="flex-start" p="2" gap="5">
                    <Flex gap="10px" alignItems="center" p="2">
                        <Heading size={{base: "sm", md: "md", lg: "lg"}}>Your Dashboard</Heading><BiHelpCircle size="1rem" color="#648b87"/>
                    </Flex>

                    {/* Add to Diary links */}

                    <Flex bgColor="#ffffff" w="100%" p="4" justifyContent="space-between" alignItems={{base: "flex-start", lg: "center"}} flexDir={{base: "column", md: "column", lg: "row"}} gap="15px" borderRadius="10px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"> 
                        <Heading size={{base: "sm", md: "sm", lg: "md"}}>Quick Add to Diary</Heading>
                        <Grid w={{base: "100%", md: "100%", lg: "70%"}} templateColumns={{base: "repeat(2,1fr)", sm: "repeat(3,100px)", md: "repeat(4,100px)", lg : "repeat(4,120px)"}} justifyContent="space-around" gap="10px">
                            {category.map((e) => 
                                <Flex key={Math.random()} p="2" gap="4px" cursor="pointer" borderRadius="10px" _hover={{bgColor: "#f0f2fa"}} justifyContent="center" alignItems="center" onClick={onOpen}>
                                    <Image src={e.src} alt={e.title} w={{base: "20%", sm: "20%", md: "20%", lg: "25%"}} />
                                    <Text fontWeight="bold" fontSize={{base: "10px", sm: "12px", md: "10px", lg: "15px"}}>{e.title}</Text>
                                </Flex>
                            )}
                        </Grid>
                    </Flex>

                    {/* UserStats */}

                    <UserStats />

                </Flex>
            </Flex>

            {/* Modal */}

            <Modal
                size={{base:'xl',sm:'2xl',md:'3xl',lg:"4xl"}}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>Add Food to Diary</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <Tabs position="relative" variant="unstyled" >
                        <TabList color="#66a7a7" fontWeight="bold" display='flex' flexWrap='wrap'>
                        <Tab fontSize={{base: "10px", sm: "12px", md: "10px", lg: "15px"}}>All</Tab>
                        <Tab fontSize={{base: "10px", sm: "12px", md: "10px", lg: "15px"}}>Common Foods</Tab>
                        <Tab fontSize={{base: "10px", sm: "12px", md: "10px", lg: "15px"}}>Supplements</Tab>
                        <Tab fontSize={{base: "10px", sm: "12px", md: "10px", lg: "15px"}}>Brands</Tab>
                        <Tab fontSize={{base: "10px", sm: "12px", md: "10px", lg: "15px"}}>Restaurants</Tab>
                        </TabList>
                        <TabIndicator
                        mt="-1.5px"
                        height="2px"
                        bg="blue.500"
                        borderRadius="1px"
                        />
                        <TabPanels>
                            <TabPanel>
                                <Box  borderRadius="15px" h="300px" overflowY="scroll">
                                    <TableContainer>
                                        <Table variant='striped' colorScheme='gray'>
                                            <Thead fontSize={{base: "10px", sm: "12px", md: "10px", lg: "15px"}}>
                                            <Tr>
                                                <Th>Description</Th>
                                                <Th>Source</Th>
                                            </Tr>
                                            </Thead>
                                            <Tbody>
                                                {nutriData?.map((ele) => 
                                                    <Tr key={ele._id} onClick={() => handleNutriStat(ele)} cursor="pointer" fontSize={{base: "10px", sm: "12px", md: "10px", lg: "15px"}}>
                                                        <Td>{ele.name}</Td>
                                                        <Td>NCCDB</Td>
                                                    </Tr>
                                                )}
                                            </Tbody>
                                        </Table>
                                    </TableContainer>
                                </Box>
                            </TabPanel>
                            <TabPanel>
                                <Box  borderRadius="15px" h="300px" overflowY="scroll">
                                    <TableContainer>
                                        <Table variant='striped' colorScheme='gray'>
                                            <Thead fontSize={{base: "10px", sm: "12px", md: "10px", lg: "15px"}}>
                                            <Tr>
                                                <Th>Description</Th>
                                                <Th>Source</Th>
                                            </Tr>
                                            </Thead>
                                            <Tbody>
                                                {nutriData?.map((ele) => 
                                                    <Tr key={ele._id} onClick={() => handleNutriStat(ele)} cursor="pointer" fontSize={{base: "10px", sm: "12px", md: "10px", lg: "15px"}}>
                                                        <Td>{ele.name}</Td>
                                                        <Td>NCCDB</Td>
                                                    </Tr>
                                                )}
                                            </Tbody>
                                        </Table>
                                    </TableContainer>
                                </Box>
                            </TabPanel>
                            <TabPanel>
                                <Box  borderRadius="15px" h="300px" overflowY="scroll">
                                    <TableContainer>
                                        <Table variant='striped' colorScheme='gray'>
                                            <Thead fontSize={{base: "10px", sm: "12px", md: "10px", lg: "15px"}}>
                                            <Tr>
                                                <Th>Description</Th>
                                                <Th>Source</Th>
                                            </Tr>
                                            </Thead>
                                            <Tbody>
                                                {nutriData?.map((ele) => 
                                                    <Tr key={ele._id} onClick={() => handleNutriStat(ele)} cursor="pointer" fontSize={{base: "10px", sm: "12px", md: "10px", lg: "15px"}}>
                                                        <Td>{ele.name}</Td>
                                                        <Td>NCCDB</Td>
                                                    </Tr>
                                                )}
                                            </Tbody>
                                        </Table>
                                    </TableContainer>
                                </Box>
                            </TabPanel>
                            <TabPanel>
                                <Box  borderRadius="15px" h="300px" overflowY="scroll">
                                    <TableContainer>
                                        <Table variant='striped' colorScheme='gray'>
                                            <Thead fontSize={{base: "10px", sm: "12px", md: "10px", lg: "15px"}}>
                                            <Tr>
                                                <Th>Description</Th>
                                                <Th>Source</Th>
                                            </Tr>
                                            </Thead>
                                            <Tbody>
                                                {nutriData?.filter((e) => e.filter==="brands").map((ele) => 
                                                    <Tr key={ele._id} onClick={() => handleNutriStat(ele)} cursor="pointer" fontSize={{base: "10px", sm: "12px", md: "10px", lg: "15px"}}>
                                                        <Td>{ele.name}</Td>
                                                        <Td>NCCDB</Td>
                                                    </Tr>
                                                )}
                                            </Tbody>
                                        </Table>
                                    </TableContainer>
                                </Box>
                            </TabPanel>
                            <TabPanel>
                                <Box  borderRadius="15px" h="300px" overflowY="scroll">
                                    <TableContainer>
                                        <Table variant='striped' colorScheme='gray'>
                                            <Thead fontSize={{base: "10px", sm: "12px", md: "10px", lg: "15px"}}>
                                            <Tr>
                                                <Th>Description</Th>
                                                <Th>Source</Th>
                                            </Tr>
                                            </Thead>
                                            <Tbody>
                                                {nutriData?.filter((e) => e.filter==="rest").map((ele) => 
                                                    <Tr key={ele._id} onClick={() => handleNutriStat(ele)} cursor="pointer" fontSize={{base: "10px", sm: "12px", md: "10px", lg: "15px"}}>
                                                        <Td>{ele.name}</Td>
                                                        <Td>NCCDB</Td>
                                                    </Tr>
                                                )}
                                            </Tbody>
                                        </Table>
                                    </TableContainer>
                                </Box>
                            </TabPanel>
                            
                        </TabPanels>
                    </Tabs>
                </ModalBody>
                <ModalFooter>
                    {modalFoot ? 
                        <Flex border="1px solid #edf2f7" borderRadius="15px" p="2" w="100%" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" flexDir="column" align="center">
                            <Text fontWeight="bold" fontSize={{base: "10px", sm: "12px", md: "10px", lg: "20px"}}>{statData.name}</Text>
                            <Flex flexWrap="wrap" w="100%" p="2" justifyContent="space-around" gap="20px">
                                <Flex p="4" borderRadius="15px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
                                    <ProgressBar
                                        data = {[statData.protein.split("-")[0],statData.carbs.split("-")[0],statData.fat.split("-")[0]]}
                                        bg = {["green", "blue", "red"]}
                                        sz = "100px"
                                        midData = {statData?.energy}
                                        size = "35"
                                    />
                                    <Flex flexDir="column" p="4">
                                        <Box display="flex" alignItems="center" gap="10px">
                                            <Box h="12px" w="12px" borderRadius="50px" bgColor="#008000" />
                                            <Text>Proteins : {statData.protein.split("-")[1]} g (
                                                <Text as="span" color="#008000">{statData.protein.split("-")[0]}%</Text>
                                            )</Text>
                                        </Box>
                                        <Box display="flex" alignItems="center" gap="10px">
                                            <Box h="12px" w="12px" borderRadius="50px" bgColor="#0000ff" />
                                            <Text>Net carbs : {statData.carbs.split("-")[1]} g (
                                                <Text as="span" color="#0000ff">{statData.carbs.split("-")[0]}%</Text>
                                            )</Text>
                                        </Box>
                                        <Box display="flex" alignItems="center" gap="10px">
                                            <Box h="12px" w="12px" borderRadius="50px" bgColor="#ff1c1c" />
                                            <Text>Fat : {statData.fat.split("-")[1]} g (
                                                <Text as="span" color="#ff1c1c">{statData.fat.split("-")[0]}%</Text>
                                            )</Text>
                                        </Box>
                                    </Flex>
                                </Flex>
                                <Flex p="4" borderRadius="15px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" flexDir="column" gap="20px">
                                    <Flex alignItems="center" gap="20px">
                                        <Text>Serving Size</Text>
                                        <Input type="text" w="auto" placeholder={statData.servingsize} value={statData.servingsize} onChange={(e) => setStatData({...statData, servingsize : e.target.value})} />
                                    </Flex>
                                    <Flex justifyContent="space-around" alignItems="center">
                                        <Button backgroundColor="#44d07b" color="#272a3a" _hover={{bgColor: "#3b3f4d", color:"#44d07b"}} onClick={handleAdd}>Add to Diary</Button>
                                        <Button backgroundColor="#44d07b" color="#272a3a" _hover={{bgColor: "#3b3f4d", color:"#44d07b"}} onClick={() => setModalFoot(false)}>Close</Button>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Flex> : null
                    }
                </ModalFooter>
                </ModalContent>
            </Modal>

        </div>
    )
}