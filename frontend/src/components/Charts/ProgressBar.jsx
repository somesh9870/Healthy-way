import {Doughnut} from "react-chartjs-2"
import {Chart, ArcElement, Tooltip, Legend} from 'chart.js'
import { Box, Flex, Text } from "@chakra-ui/react"
Chart.register(ArcElement, Tooltip, Legend)

export default function ProgressBar({data,bg,sz,size,midData}) {
    return (
        <Box w={sz} h={sz} position="relative">
            <Doughnut data={{
                labels: [],
                datasets: [{
                    data: data,
                    cutout:size,
                    backgroundColor: bg
                }],
                borderWidth: 10,
                }}                
            />
            <Flex position="absolute" top="5px" zIndex="1" w="100%" h="100%" alignItems="center" justifyContent="center" flexDirection="column" fontSize="18px" as="b">
            <Text fontSize={{base: "10px", sm: "12px", md: "10px", lg: "15px"}}>{midData}</Text>
            <Text fontSize={{base: "10px", sm: "12px", md: "10px", lg: "15px"}}>kcal</Text>
            </Flex>
        </Box>
    )
}