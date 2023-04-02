import { Box, Flex, Text } from "@chakra-ui/react";
import Bar from "./Bar";

export default function NutriStats({data, flag, para}) {
    return (
        <Box w="100%">
            <Flex flexDirection="column" w="100%" gap="10px" mb="10px">
                {
                    data?.map((el,i)=>(
                        <Flex key={i} justifyContent="space-evenly" gap={{base:"10px", md:"10px", lg:"30px"}} w="100%">
                            <Text w="30%" fontSize={{base: "10px", sm: "12px", md: "15px", lg: "15px"}}>{el}</Text>
                            <Flex gap="10px">
                                <Text fontSize={{base: "10px", sm: "12px", md: "15px", lg: "15px"}}>{flag==0?"-":Math.random().toFixed(1)}</Text>
                                <Text fontSize={{base: "10px", sm: "12px", md: "15px", lg: "15px"}}>{para}</Text>
                            </Flex>
                            <Box w="50%" mt="5px">
                                {flag==0?<Bar barval={0} barpercent={`0%`} clr={"gray"} spl={0}/>:<Bar barval={0} barpercent={`0%`} spl={Math.floor(Math.random() * 100)} clr={"gray"}/>}
                            </Box>
                        </Flex>
                    ))
                }
            </Flex>
        </Box>
    )
}