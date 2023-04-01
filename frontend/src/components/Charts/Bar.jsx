import { Box, Flex, Progress, Text } from "@chakra-ui/react";

export default function Bar({barval,barpercent,clr, spl}) {
    return (
        <Box w="100%" position="relative">
            {spl==0?<Progress colorScheme={clr} size='lg' value={barval} borderRadius="10px"/>:<Progress colorScheme={clr} size='lg' value={spl} borderRadius="10px"/>}
            <Flex position="absolute" top="0" w="100%" justifyContent="center">
                {spl==0?<Text fontSize="12px">{barpercent}</Text>:<Text fontSize="12px">{spl}%</Text>}
            </Flex>
        </Box>
    )
}