import {Doughnut} from "react-chartjs-2"
import {Chart, ArcElement, Tooltip, Legend} from 'chart.js'
import { Box, Flex, Text } from "@chakra-ui/react"
Chart.register(ArcElement, Tooltip, Legend)

export default function ProgressBar({data,bg,sz,middata}) {
    return (
        <Box w={sz} h={sz} position="relative">
            <Doughnut data={{
                labels: [],
                datasets: [{
                    data: data,
                    cutout:40,
                    backgroundColor: bg
                }],
                borderWidth: 1,
                }}                
            />
            <Flex position="absolute" top="5px" zIndex="1" w="100%" h="100%" alignItems="center" justifyContent="center" flexDirection="column" fontSize="18px" as="b">
            <Text>{middata}</Text>
            <Text>kcal</Text>
            </Flex>
        </Box>
    )
}