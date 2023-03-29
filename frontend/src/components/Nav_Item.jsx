import React from 'react'
import {Flex, Text, Icon, Link, Menu, MenuButton, MenuList } from '@chakra-ui/react'
import NavHoverBox from './Nav_HoverBox'

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
                    // backgroundColor={active && "#3b3f4d"}
                    color={active && "#44d07b"}
                    p={3}
                    borderRadius={8}
                    _hover={{ textDecor: 'none', backgroundColor: "#3b3f4d", color: "#44d07b" }}
                    w={navSize == "large" && "100%"}
                >
                    <MenuButton w="100%">
                        <Flex alignItems="center">
                            <Icon as={icon} fontSize="xl" />
                            <Text ml={5} display={navSize == "small" ? "none" : "flex"} fontSize="1em" >{title}</Text>
                        </Flex>
                    </MenuButton>
                </Link>
                <MenuList
                    py={0}
                    border="none"
                    w={200}
                    h={200}
                    ml={5}
                >
                    {/* <NavHoverBox title={title} icon={icon} description={description} /> */}
                </MenuList>
            </Menu>
        </Flex>
    )
}