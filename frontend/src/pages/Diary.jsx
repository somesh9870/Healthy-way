import { Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import {BiHelpCircle} from "react-icons/bi";
import Sidebar from "../components/Side_Navbar";
import ProgressBar from "../components/Charts/ProgressBar";


export default function Diary() {
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

            {/* Add and Display section */}

            <Flex border="1px solid red" justifyContent="center" p="5">
                <Flex border="1px solid blue" w={{base: "70%", sm: "70%", lg: "80%"}} flexDir="column" align="flex-start" p="2" gap="5">

                    {/* Add to Diary links */}

                    <Flex bgColor="#ffffff" w="100%" p="4" justifyContent="space-between" alignItems={{base: "flex-start", lg: "center"}} flexDir={{base: "column", md: "column", lg: "row"}} gap="15px" borderRadius="10px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"> 
                        <Grid w="100%" templateColumns={{base: "repeat(2,1fr)", sm: "repeat(3,100px)", md: "repeat(4,100px)", lg : "repeat(4,120px)"}} justifyContent="space-around" gap="10px">
                            {category.map((e) => 
                                <Flex key={Math.random()} p="2" gap="4px" cursor="pointer" borderRadius="10px" _hover={{bgColor: "#f0f2fa"}} justifyContent="center" alignItems="center">
                                    <Image src={e.src} alt={e.title} w={{base: "20%", sm: "20%", md: "20%", lg: "25%"}} />
                                    <Text fontWeight="bold" fontSize={{base: "10px", sm: "12px", md: "10px", lg: "15px"}}>{e.title}</Text>
                                </Flex>
                            )}
                        </Grid>
                    </Flex>

                    {/* Display section */}

                    <Flex border="1px solid orange" bgColor="#ffffff" p="4" w="100%" borderRadius="10px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
                        <h1>hello</h1>
                    </Flex>

                    {/* Energy Summary*/}

                    <Flex border="1px solid orange" bgColor="#ffffff" p="4" w="100%" borderRadius="10px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
                        <Flex border="1px solid black" flexDir="column">
                            <Flex gap="10px" alignItems="center" p="2">
                                <Heading size={{base: "sm", md: "md", lg: "md"}}>Energy Summary</Heading><BiHelpCircle size="1rem" color="#648b87"/>
                            </Flex>
                            <Flex border="2px solid green">
                                {/* <Flex flexDirection="column" alignItems="center">
                                    <ProgressBar datas={[totalprotein,totalcarbs,totalfat]} bgc={["rgb(68,208,123)", "rgb(28,202,215)","rgb(234,59,4)"]} sz={{base:"90px",md:"130px"}} middata={totalcunsumed}/>
                                    <Text>Consumed</Text>
                                </Flex>
                                <Flex flexDirection="column" alignItems="center">
                                    <ProgressBar datas={[1779,356]} bgc={["rgb(174,97,194)", "rgb(50,142,142)"]} sz={{base:"90px",md:"130px"}} middata={2135}/>
                                    <Text>Burned</Text>
                                </Flex>
                                <Flex flexDirection="column" alignItems="center">
                                    <ProgressBar datas={[2135,totalcunsumed]} bgc={["rgb(230,232,240)", "rgb(157,160,173)"]} sz={{base:"90px",md:"130px"}} middata={2135-totalcunsumed}/>
                                    <Text>Remaining</Text>
                                </Flex> */}
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </div>
    )
}