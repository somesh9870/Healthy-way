import { Box, Button, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import {FaCalendarAlt} from "react-icons/fa";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


export default function UserStats() {
    const about = [
        {
            id: 1,
            src: "https://braze-images.com/appboy/communication/marketing/content_cards_message_variations/images/64061f703e80bd606cddc139/003efed2205f3929d2b241741c5fb2b628c79477/original.png?1678122869",
            title: "Welcome To Cronometer, Nutrition Nerd In The Making!",
            desc: "Let's get you started by logging your first food. Click here to log your first meal.",
            btn: "LOG A FOOD"
        },
        {
            id: 2,
            src: "https://braze-images.com/appboy/communication/marketing/content_cards_message_variations/images/64061f703e80bd606cddc125/3b3eacdd22f8ef4d005f9a1a66ff90554cb553fe/original.png?1678122868",
            title: "Welcome To Cronometer, Nutrition Nerd In The Making!",
            desc: "Click here for our favourite tips & tricks to get the most out of your Cronometer account.",
            btn: "GET THE TIPS"
        },
        {
            id: 3,
            src: "https://braze-images.com/appboy/communication/marketing/content_cards_message_variations/images/64061f703e80bd606cddc131/57fa6f0ea4ff8e61008175c430038bdff133dc86/original.png?1678122869",
            title: "Create Your First Recipe",
            desc: "Recipes can make tracking the foods you eat on a regular basis a serious breeze! Learn how to create custom recipes with the link below.",
            btn: "LEARN HOW"
        }
    ];

    return (
        <>
        {/* User Stats */}

        <Flex w="100%" justifyContent="space-between" flexDir={{base: "column", md: "column", lg: "row", xl: "row"}} flexWrap={{base: "nowrap", lg: "wrap"}} gap="30px" mt="20px">
            <Flex flexDir="column" p="5" bgColor="#ffffff" gap="20px" borderRadius="15px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
                <Heading size={{base: "sm", md: "sm", lg: "md"}}>Your Streaks</Heading>
                <Box border="1px solid #d5e7e7" bgColor="#fafbff" p="4" borderRadius="15px">
                    <Flex border="1px solid #d5e7e7" flexDir="column" align="center" bgColor="#ffffff" borderRadius="15px" p="4" gap="10px">
                        <Button bgColor="#d5e7e7" size="sm" borderRadius="50px"><FaCalendarAlt size="20px"/></Button>
                        <Text fontWeight="bold" fontSize={{base: "10px", sm: "12px", md: "10px", lg: "15px"}}>5</Text>
                        <Text fontWeight="bold" fontSize={{base: "10px", sm: "12px", md: "10px", lg: "15px"}}>day streak</Text>
                        <Text fontWeight="bold" fontSize={{base: "10px", sm: "12px", md: "10px", lg: "15px"}}>Start logging to begin your streak!</Text>
                    </Flex>
                </Box>
            </Flex>

            <Flex flexDir="column" p="5" bgColor="#ffffff" gap="20px" borderRadius="15px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
                <Heading size={{base: "sm", md: "sm", lg: "md"}}>Energy History (kcal)</Heading>
                <Box border="1px solid #d5e7e7" bgColor="#fafbff" p="4" borderRadius="15px" align="center">
                    <Bar
                        data={{
                            labels: ["31 Mar", "1 April", "2 April", "3 April"],
                            datasets: [
                            {
                                label: "Consumed",
                                data: [60, 760, 520, 20],
                                backgroundColor: "#44d07b",
                                borderColor: "#44d07b",
                            },
                            ],
                        }}
                        options={{
                            responsive: true,
                        }}
                        height={200}
                    />
                </Box>
            </Flex>

            <Flex flexDir="column" p="5" bgColor="#ffffff" gap="20px" borderRadius="15px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
                <Heading size={{base: "sm", md: "sm", lg: "md"}}>Weight Change: 30 kg</Heading>
                <Box border="1px solid #d5e7e7" bgColor="#fafbff" p="4" borderRadius="15px" align="center">
                    <Line
                        data={{
                            labels: ["26 June","4 Sep", "2 Jan", "31 Mar"],
                            datasets: [{
                                label: "Weight(kg)",
                                data: [20,43,50,55],
                                // order: 0,
                                backgroundColor: "#ff6733",
                                borderColor: "#ff6733"
                            }]
                        }}
                        height={200}
                    />
                </Box>
            </Flex>
        </Flex>

        {/* About HealthyWay */}

        <Grid templateColumns={{base: "repeat(1,1fr)",sm: "repeat(2,1fr)", md: "repeat(2,1fr)", lg: "repeat(2,1fr)", xl: "repeat(3,1fr)"}} gap="30px" mt="20px">
            {about.map((e) => 
                <Flex key={e.id} flexDir="column" bgColor="#ffffff" gap="20px" borderRadius="15px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
                    <Image src={e.src} alt={e.btn} borderTopRadius="15px" />
                    <Flex flexDir="column" p="5" gap="20px"> 
                        <Heading size={{base: "sm", md: "sm", lg: "md"}}>{e.title}</Heading>
                        <Text fontSize={{base: "10px", sm: "12px", md: "10px", lg: "15px"}}>{e.desc}</Text>
                        <Button backgroundColor="#44d07b" color="#272a3a" _hover={{bgColor: "#3b3f4d", color:"#44d07b"}} gap="10px" fontSize="15px" size={{base: "xs", md: "sm", lg: "md"}}>
                            {e.btn}
                        </Button>
                    </Flex>
                </Flex>
            )}
        </Grid>
        </>
    )
}