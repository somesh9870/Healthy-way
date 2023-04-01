import React from 'react'
import {Flex, Text, Icon, Link, Menu, MenuButton } from '@chakra-ui/react'

export default function NavItem({ icon, title, description, active, navSize }) {
    return (
        <Flex
            mt={1}
            flexDir="column"
            w="100%"
            alignItems={navSize == "small" ? "center" : "flex-start"}
        >
            <Menu placement="right">
                <Link
                    color={active && "#44d07b"}
                    p={3}
                    borderRadius={8}
                    _hover={{ textDecor: 'none', backgroundColor: "#3b3f4d", color: "#44d07b" }}
                    w={navSize == "large" && "100%"}
                >
                    <MenuButton w="100%">
                        <Flex alignItems="center">
                            <Icon as={icon} fontSize="xl" />
                            <Text ml={5} display={navSize == "small" ? "none" : "flex"} fontSize={{base: "10px",sm: "15px", md: "15px", lg: "15px"}} >{title}</Text>
                        </Flex>
                    </MenuButton>
                </Link>
            </Menu>
        </Flex>
    )
}