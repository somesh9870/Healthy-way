import { Box, Flex, Text } from "@chakra-ui/react";
import Bar1 from "./bar1";

export default function NutriStats({data, flag, para}) {
    return (
        <Box w="100%">
            <Flex flexDirection="column" w="100%" gap="10px">
                {
                    data?.map((el,i)=>(
                        <Flex key={i} justifyContent="space-evenly" gap={{base:"10px", md:"10px", lg:"30px"}} w="100%">
                            <Text w="150px">{el}</Text>
                            <Flex w="40px">
                                <Text>{flag==0?"-":Math.random().toFixed(1)}</Text>
                                <Text ml="10px">{para}</Text>
                            </Flex>
                            <Box w="150px" mt="5px">
                                {flag==0?<Bar1 barval={0} barpercent={`0%`} clr={"gray"} spl={0}/>:<Bar1 barval={0} barpercent={`0%`} spl={Math.floor(Math.random() * 100)} clr={"gray"}/>}
                            </Box>
                        </Flex>
                    ))
                }
            </Flex>
        </Box>
    )
}