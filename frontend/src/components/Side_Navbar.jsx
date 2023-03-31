import React, { useState } from 'react'
import { Flex, Text, IconButton, Divider, Heading, Image, Button } from '@chakra-ui/react'
import { FiMenu, FiSettings, FiLogOut } from 'react-icons/fi'
import {TbLayoutDashboard} from "react-icons/tb";
import {BsFillJournalBookmarkFill, BsInfoCircle} from "react-icons/bs";
import {BiDollarCircle, BiHelpCircle} from "react-icons/bi";
import {AiOutlineBarChart} from "react-icons/ai";
import {FaAppleAlt} from "react-icons/fa";
import NavItem from './Nav_Item'
import Logo from "../Assets/HealthyWay_Logo.png";

export default function Sidebar() {
    const [navSize, changeNavSize] = useState("small")
    return (
        <>
            <Flex
                pos="fixed"
                zIndex="1"
                // left="5"
                h="100vh"
                // marginTop="2.5vh"
                boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
                // borderRadius={navSize == "small" ? "15px" : "30px"}
                borderRightRadius="20px"
                w={navSize == "small" ? {base: "10%", md: "7%", lg: "5%"} : {base: "40%", sm: "30%", lg: "20%"}}
                bgColor="#272a3a"
                color="#fcfcfd"
                flexDir="column"
                // overflowX="none"
                justifyContent="space-between"
            >
                <Flex
                    p={navSize == "small" ? "5%" : "0"}
                    flexDir="column"
                    w="100%"
                    alignItems={navSize == "small" ? "center" : "flex-start"}
                    as="nav"
                    px={navSize == "small" ? "0" : "3"}
                    // mb="2"
                >
                    <Flex flexDir="row" justifyContent="space-around" alignItems="center" mb="2">
                        <Image src={Logo} alt='Logo' w="60%" background={"none"} display={navSize == "small" ? "none" : "block"} />
                        <IconButton
                            background="none"
                            // mt={5}
                            size={{base: "sm", md: "md", lg: "lg"}}
                            // size="lg"
                            _hover={{ background: 'none', color : '#44d07b', border: '1px solid #44d07b', borderRadius: '50px' }}
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
                    <NavItem navSize={navSize} icon={BsInfoCircle} title="About" />
                </Flex>

                <Flex
                    p="5%"
                    flexDir="column"
                    w="100%"
                    alignItems={navSize == "small" ? "center" : "flex-start"}
                    pb="5"
                >
                    <Divider display={navSize == "small" ? "none" : "flex"} />
                    <Flex flexDir={"column"}>
                        <Flex w="100%" justifyContent={"center"} display={navSize == "small" ? "none" : "flex"}>
                            <Image src='https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg' alt='Apple Store' w={"40%"} />
                            <Image src='https://www.logo.wine/a/logo/Google_Play/Google_Play-Badge-Logo.wine.svg' alt='Google Play' w={"54%"} />
                        </Flex>
                        <Flex>
                            <Button borderRadius="50px" backgroundColor="#44d07b" color="#272a3a" _hover={{bgColor: "transparent", border: "2px solid #44d07b", color:"#44d07b"}} gap="10px" fontSize="15px" size={{base: "xs", md: "sm", lg: "md"}}>
                                <BiHelpCircle size="1em" />{navSize == "small" ? "" : "Support"}
                            </Button>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>

            <Flex py="3" pr="5" justifyContent="flex-end" bgColor="#fafbff" boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" mb="5">
                <Button  backgroundColor="#44d07b" color="#272a3a" _hover={{bgColor: "#3b3f4d", color:"#44d07b"}} gap="10px" fontSize="15px" size={{base: "xs", md: "sm", lg: "md"}}>
                    Logout<FiLogOut />
                </Button>
            </Flex>
        </>
    )
}