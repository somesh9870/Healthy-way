import React, { useState } from 'react'
import { Flex, Text, IconButton, Divider, Avatar, Heading, Image } from '@chakra-ui/react'
import { FiMenu, FiSettings } from 'react-icons/fi'
import {TbLayoutDashboard} from "react-icons/tb";
import {BsFillJournalBookmarkFill} from "react-icons/bs";
import {BiDollarCircle, BiHelpCircle} from "react-icons/bi";
import {AiOutlineBarChart} from "react-icons/ai";
import {FaAppleAlt} from "react-icons/fa";
import NavItem from './Nav_Item'
import Logo from "../Assets/HealthyWay_Logo.png";

export default function Sidebar() {
    const [navSize, changeNavSize] = useState("large")
    return (
        <Flex
            pos="fixed"
            // left="5"
            h="100vh"
            // marginTop="2.5vh"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            // borderRadius={navSize == "small" ? "15px" : "30px"}
            borderRightRadius="20px"
            w={navSize == "small" ? "75px" : "300px"}
            bgColor="#272a3a"
            color="#fcfcfd"
            flexDir="column"
            justifyContent="space-between"
            overflow="auto"
        >
            <Flex
                p={navSize == "small" ? "5%" : "0"}
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                as="nav"
                px={navSize == "small" ? "0" : "3"}
            >
                <Flex flexDir="row" justifyContent="space-around" mb="2">
                    <Image src={Logo} alt='Logo' w="50%" background={"none"} display={navSize == "small" ? "none" : "block"} />
                    <IconButton
                        background="none"
                        // mt={5}
                        size="lg"
                        _hover={{ background: 'none', color : '#44d07b', border: '1px solid #44d07b' }}
                        icon={<FiMenu />}
                        onClick={() => { navSize == "small" ? changeNavSize("large") : changeNavSize("small") }}
                    />
                </Flex>
                <Divider display={navSize == "small" ? "none" : "flex"} mb="5"/>
                
                <NavItem navSize={navSize} icon={TbLayoutDashboard} title="Dashboard" description="This is the description for the dashboard." />
                <NavItem navSize={navSize} icon={BsFillJournalBookmarkFill} title="Diary" active/>
                <NavItem navSize={navSize} icon={AiOutlineBarChart} title="Trends" />
                <NavItem navSize={navSize} icon={FaAppleAlt} title="Foods" />
                <NavItem navSize={navSize} icon={FiSettings} title="Settings" />
                <NavItem navSize={navSize} icon={BiDollarCircle} title="Plans" />
                <NavItem navSize={navSize} icon={BiHelpCircle} title="Help" />
            </Flex>

            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                mb={4}
            >
                <Divider display={navSize == "small" ? "none" : "flex"} />
                <Flex mt={4} align="center">
                    <Avatar size="sm" src="avatar-1.jpg" />
                    {/* <Flex flexDir="column" ml={4} display={navSize == "small" ? "none" : "flex"}>
                        <Heading as="h3" size="sm">Sylwia Weller</Heading>
                        <Text color="gray">Admin</Text>
                    </Flex> */}
                </Flex>
            </Flex>
        </Flex>
    )
}