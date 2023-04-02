import { Flex, Grid, Heading, Image, Box, Input, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Tab, TabIndicator, TabList, TabPanel, TabPanels, Table, TableContainer, Tabs, Tbody, Td, Text, Th, Thead, Tr, useDisclosure, CircularProgress, CircularProgressLabel, useToast } from "@chakra-ui/react";
import {BiHelpCircle} from "react-icons/bi";
import Sidebar from "../components/Side_Navbar";
import ProgressBar from "../components/Charts/ProgressBar";
import { useDispatch, useSelector } from "react-redux";
import { addDataDiary, deleteDiaryData, getNutrientData, getUserData } from "../redux/User/user.action";
import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import Bar from "../components/Charts/Bar";
import NutriStats from "../components/Charts/NutriStats";

export default function Diary() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [modalFoot, setModalFoot] = useState(false);
    const [statData, setStatData] = useState({});
    const { nutriData, diary, totalData } = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const toast = useToast();

    useEffect(() => {
        dispatch(getNutrientData());
        dispatch(getUserData());
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
    };

    const handleDelete = (id) => {
        dispatch(deleteDiaryData(id));
        toast({
            title: "Food is removed from Diary.",
            status: "error",
            position: "top",
            isClosable: true,
        })
    };

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

    const mainNutrient = [
        {
            title : "Fiber",
            percentage : "25"
        },
        {
            title : "Iron",
            percentage : "15"
        },
        {
            title : "Calcium",
            percentage : "10"
        },
        {
            title : "Vit.A",
            percentage : "70"
        },
        {
            title : "Vit.C",
            percentage : "50"
        },
        {
            title : "Vit.B12",
            percentage : "35"
        },
        {
            title : "Folate",
            percentage : "40"
        },
        {
            title : "Potassium",
            percentage : "5"
        },
    ];

    const allNutrients = [
        {
            id : 1,
            title : "General",
            parameter : "g",
            data : ["Energy","Alcohol","Caffiene","Water"]
        },
        {
            id : 2,
            title : "Carbohydrates",
            parameter : "g",
            data : ["Carbs","Fiber","Starch","Sugars","Net Carbs"]
        },
        {
            id : 3,
            title : "Lipids",
            parameter : "g",
            data : ["Fat","Monounsaturated","Polyunsaturated","Omega-3","Omega-6","Saturated","Trans-Fats","Cholesterol"]
        },
        {
            id : 4,
            title : "Protein",
            parameter : "g",
            data : ["Protein","Cystine","Histedine","Isoleucine","Leucine","Lysine","Methionine","Phenylalanine","Threonine","Tryptophan","Tyrosine","Valine"]
        },
        {
            id : 5,
            title : "Vitamins",
            parameter : "mg",
            data : ["B1 (Thiamine)","B2 (Riboflavin)","B3 (Niacin)","B5 (Pantothenic)","B6 (Pyridoxine)", "B12 (Cobalamin)", "Folate", "Vitamin A", "Vitamin C", "Vitamin C", "Vitamin E", "Vitamin K"]
        },
        {
            id : 6,
            title : "Minerals",
            parameter : "mg",
            data : ["Calcium","Copper","Iron","Magnesium","Manganese", "Phosphorus", "Potassium", "Selenium", "Sodium", "Zinc"]
        },
    ];

    return (
        <div style={{background: "#fffcf6"}}>

            {/* Side_Navbar */}

            <Sidebar />

            {/* Add and Display section */}

            <Flex justifyContent={{base: "flex-end", lg: "center"}} p="5">
                <Flex w={{base: "90%", sm: "90%", lg: "80%"}} flexDir="column" align="flex-start" p="2" gap="5">

                    {/* Add to Diary links */}

                    <Flex bgColor="#ffffff" w="100%" p="4" justifyContent="space-between" alignItems={{base: "flex-start", lg: "center"}} flexDir={{base: "column", md: "column", lg: "row"}} gap="15px" borderRadius="10px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"> 
                        <Grid w="100%" templateColumns={{base: "repeat(2,1fr)", sm: "repeat(3,100px)", md: "repeat(4,100px)", lg : "repeat(4,120px)"}} justifyContent="space-around" gap="10px">
                            {category.map((e) => 
                                <Flex key={Math.random()} p="2" gap="4px" cursor="pointer" borderRadius="10px" _hover={{bgColor: "#f0f2fa"}} justifyContent="center" alignItems="center" onClick={onOpen}>
                                    <Image src={e.src} alt={e.title} w={{base: "20%", sm: "20%", md: "20%", lg: "25%"}} />
                                    <Text fontWeight="bold" fontSize={{base: "10px", sm: "12px", md: "10px", lg: "15px"}}>{e.title}</Text>
                                </Flex>
                            )}
                        </Grid>
                    </Flex>

                    {/* Display section */}

                    <Flex bgColor="#ffffff" p="4" w="100%" h="330px" borderRadius="10px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
                        {diary.length>0 ? 
                            <Box  borderRadius="15px" w="100%" h="300px" overflowY="scroll">
                                <TableContainer>
                                    <Table variant='striped' colorScheme='gray'>
                                        <Thead fontSize={{base: "10px", sm: "12px", md: "10px", lg: "15px"}}>
                                        <Tr>
                                            <Th>Description</Th>
                                            <Th>Serving</Th>
                                            <Th>Energy</Th>
                                        </Tr>
                                        </Thead>
                                        <Tbody>
                                            {diary?.map((ele) => 
                                                <Tr key={ele._id} onClick={() => handleNutriStat(ele)} fontSize={{base: "10px", sm: "12px", md: "10px", lg: "15px"}}>
                                                    <Td>{ele.name}</Td>
                                                    <Td>{ele.servingsize}</Td>
                                                    <Td>{ele.energy}</Td>
                                                    <Td><FaTrash cursor="pointer" onClick={() => handleDelete(ele._id)}/></Td>
                                                </Tr>
                                            )}
                                        </Tbody>
                                    </Table>
                                </TableContainer>
                            </Box> :
                            <Text fontSize={{base: "10px", sm: "12px", md: "10px", lg: "15px"}}>Add food, exercise, biometrics and notes to see them in your diary.</Text>
                        }
                    </Flex>

                    {/* Energy Summary*/}

                    <Flex p="4" w="100%" justifyContent="space-around" gap="20px" flexWrap="wrap">
                        <Flex flexDir="column" bgColor="#ffffff" p="4" borderRadius="10px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" gap="15px">
                            <Flex gap="10px" alignItems="center" p="2">
                                <Heading size={{base: "sm", md: "md", lg: "md"}}>Energy Summary</Heading><BiHelpCircle size="1rem" color="#648b87"/>
                            </Flex>
                            <Flex flexWrap="wrap" justifyContent="center" align="center" p="4" gap="20px">
                                <Flex flexDirection="column" alignItems="center">
                                    <ProgressBar data={[totalData.protein, totalData.carbs, totalData.fat]} bg={["rgb(68,208,123)", "rgb(28,202,215)","rgb(234,59,4)"]} size="35" sz={{base: "100px", md: "130px"}} midData={totalData.consumed}/>
                                    <Text>Consumed</Text>
                                </Flex>
                                <Flex flexDirection="column" alignItems="center">
                                    <ProgressBar data={[1779,356]} bg={["#ae61c2", "#328e8e"]} size="35" sz={{base: "100px", md: "130px"}} midData={2135}/>
                                    <Text>Burned</Text>
                                </Flex>
                                <Flex flexDirection="column" alignItems="center">
                                    <ProgressBar data={[2135,totalData.consumed]} bg={["rgb(230,232,240)", "rgb(157,160,173)"]} size="35" sz={{base: "100px", md: "130px"}} midData={2135-totalData.consumed}/>
                                    <Text>Remaining</Text>
                                </Flex>
                            </Flex>
                        </Flex>

                        {/* MacroNutrients Target */}

                        <Flex flexDir="column" bgColor="#ffffff" w={{base: "100%", md: "80%", lg: "60%", xl: "45%"}} p="4" borderRadius="10px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" gap="15px">
                            <Flex gap="10px" alignItems="center" p="2">
                                <Heading size={{base: "sm", md: "md", lg: "md"}}>Macronutrient Targets</Heading><BiHelpCircle size="1rem" color="#648b87"/>
                            </Flex>
                            <Flex align="center" p="4" gap="20px">
                                <Flex alignItems="center" w="30%" gap="20px" flexDir="column" >
                                    <Text>Energy</Text>
                                    <Text>Protein</Text>
                                    <Text>Net Carbs</Text>
                                    <Text>Fat</Text>
                                </Flex>
                                <Flex alignItems="center" w="60%" gap="25px" flexDir="column">
                                    <Bar barval={Math.floor((totalData.consumed/2135)*100)} barpercent={`${totalData.consumed} kcal / 2135 kcal ${Math.floor((totalData.consumed/2135)*100)}%`} clr={"gray"} spl={0}/>
                                    <Bar barval={Math.floor((totalData.protein/133)*100)} barpercent={`${totalData.protein} g / 133.4 g ${Math.floor((totalData.protein/133)*100)}%`} clr={"green"} spl={0}/>
                                    <Bar barval={Math.floor((totalData.carbs/240)*100)} barpercent={`${totalData.carbs} g / 240.2 g ${Math.floor((totalData.carbs/240)*100)}%`} clr={"blue"} spl={0}/>
                                    <Bar barval={Math.floor((totalData.fat/71)*100)} barpercent={`${totalData.fat} g / 71.2 g ${Math.floor((totalData.fat/71)*100)}%`} clr={"red"} spl={0}/>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>

                    {/* Nutrient Targets */}

                    <Flex p="4" w="100%" justifyContent="space-around" gap="10px" flexWrap="wrap" flexDir="column" bgColor="#ffffff" borderRadius="10px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
                        <Flex w="100%" gap="10px" justifyContent="center" alignItems="center" p="2">
                            <Heading size={{base: "sm", md: "md", lg: "md"}}>Nutrient Targets</Heading><BiHelpCircle size="1rem" color="#648b87"/>
                        </Flex>
                        <Flex flexDir="column" w="100%" gap="10px" alignItems="center" p="2">
                            <Flex w="100%" gap="10px" alignItems="center" p="2">
                                <Heading size={{base: "sm", md: "md", lg: "md"}}>Nutrition Scores</Heading><BiHelpCircle size="1rem" color="#648b87"/>
                            </Flex>
                            <Flex w="100%" justifyContent="space-around" flexWrap="wrap">
                                <Flex flexDir="column" align="center" p="2">
                                    <CircularProgress value={45} size="80px" color="green.400" >
                                        <CircularProgressLabel>45%</CircularProgressLabel>
                                    </CircularProgress>
                                    <Text fontSize={{base: "10px", sm: "12px", md: "10px", lg: "15px"}}>All Targets</Text>
                                </Flex>
                                <Flex p="2" justifyContent="space-around" alignItems="center" gap="15px" bgColor="#fffcf6" borderRadius="10px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" flexWrap={{base:"wrap", lg: "nowrap"}}>
                                    <Image src="https://cronometer.com/img/nutrition-scores.svg" alt="Advertise" w={{base: "100%", sm: "30%", md: "20%"}} />
                                    <Flex flexDir="column" p="2" gap="5px">
                                        <Heading size={{base: "xs", md: "sm", lg: "sm"}}>Get more with Cronometer Gold</Heading>
                                        <Text fontSize={{base: "10px", sm: "12px", md: "10px", lg: "15px"}}>Upgrade to view full set of nutrition scores representing well researched health concepts.</Text>
                                    </Flex>
                                    <Button backgroundColor="#44d07b" color="#272a3a" _hover={{bgColor: "#3b3f4d", color:"#44d07b"}} fontSize={{base: "10px", sm: "12px", md: "10px", lg: "15px"}}>Upgrade</Button>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex flexDir="column" w="100%" gap="10px" alignItems="center" p="2">
                            <Flex w="100%" gap="10px" alignItems="center" p="2">
                                <Heading size={{base: "sm", md: "md", lg: "md"}}>Highlighted Nutrients</Heading>
                            </Flex>
                            <Flex w="100%" justifyContent="space-around" flexWrap="wrap">
                                {mainNutrient.map((e) => 
                                    <Flex key={Math.random()} flexDir="column" align="center" p="2">
                                        <CircularProgress value={e.percentage} size={{base: "40px", sm: "60px", lg: "80px"}} color="yellow.400" >
                                            <CircularProgressLabel>{e.percentage}%</CircularProgressLabel>
                                        </CircularProgress>
                                        <Text fontSize={{base: "10px", sm: "12px", md: "10px", lg: "15px"}}>{e.title}</Text>
                                    </Flex>
                                )}
                            </Flex>
                        </Flex>
                        <Flex justifyContent="space-around" w="100%" gap="20px" p="2" flexWrap={{base: "wrap", lg: "nowrap"}}>
                            <Flex w={{base: "100%", lg: "50%"}} flexDir="column" gap="15px">
                                {allNutrients.filter((ele) => ele.id<=4).map((e) => 
                                    <Box key={e.id} border="1px solid #ccc" borderRadius="15px" h="fit-content" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
                                        <Text bgColor="#ccc" borderRadius="15px 15px 0px 0px" padding="5px 15px">{e.title}</Text>
                                        <Box padding="0px 15px">
                                            <NutriStats data={e.data} flag={diary.length} para={e.parameter}/>
                                        </Box>
                                    </Box>
                                )}
                            </Flex>
                            <Flex w={{base: "100%", lg: "50%"}} flexDir="column" gap="15px">
                                {allNutrients.filter((ele) => ele.id>4).map((e) => 
                                    <Box key={e.id} border="1px solid #ccc" borderRadius="15px" h="fit-content" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
                                        <Text bgColor="#ccc" borderRadius="15px 15px 0px 0px" padding="5px 15px">{e.title}</Text>
                                        <Box padding="0px 15px">
                                            <NutriStats data={e.data} flag={diary.length} para={e.parameter}/>
                                        </Box>
                                    </Box>
                                )}
                                <Heading size={{base: "sm", md: "md", lg: "md"}}>N/T = No Target</Heading>
                            </Flex>
                        </Flex>
                    </Flex>
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
                                        <Input type="text" w="auto" placeholder={statData.servingsize} />
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