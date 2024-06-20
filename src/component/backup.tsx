import * as React from "react"
import {
    Flex,
    Button,
    useColorMode,
    useDisclosure,
    useMediaQuery,
    useColorModeValue,
    Stack,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerBody,
    IconButton

} from "@chakra-ui/react"

import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons"
import { useState } from "react"

import { Link } from "react-router-dom"
import { ColorModeSwitcher } from "../ColorModeSwitcher"

export const Navbar = () => {

    const [scroll, setScroll] = useState(false);
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [isLargerThanMD] = useMediaQuery("(min-width: 48em)");
    const changeScroll = () =>
        document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
            ? setScroll(true)
            : setScroll(false);

    window.addEventListener("scroll", changeScroll);

    return (
        <>
            <Flex
                bg={useColorModeValue("gray.100", "gray.900")}
                px={4}
                h={16}
                boxShadow={scroll ? "base" : "none"}
                zIndex="sticky"
                position="fixed"
                as="header"
                alignItems={"center"}
                justifyContent={"space-between"}
                w="100%"
            >

                <Flex alignItems={"center"}>
                    <Stack direction={"row"} spacing={7}>
                        {isLargerThanMD ? (
                            <>
                                <Button variant="ghost"><Link to='/'>Home
                                </Link></Button>
                                <Button variant="ghost"><Link to='/services'>Services
                                </Link></Button>
                                <Button variant="ghost"><Link to='/about'>About Us
                                </Link></Button>
                                <Button variant="ghost"><Link to='/our-team'>Our Team
                                </Link></Button>
                                <Button variant="ghost"><Link to='/contact'>Contact
                                </Link></Button>
                            </>
                        ) : (
                            <></>
                        )}
                        <Button onClick={toggleColorMode}>
                            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                        </Button>

                        {isLargerThanMD ? (
                            <></>
                        ) : (
                            <>
                                <Button
                                    as={IconButton}
                                    icon={<HamburgerIcon />}
                                    onClick={onOpen}
                                ></Button>
                                <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
                                    <DrawerOverlay />
                                    <DrawerContent>
                                        <DrawerBody>
                                            <Button variant="ghost"><Link to='/'>Home
                                            </Link></Button>
                                            <Button variant="ghost"><Link to='/services'>Services
                                            </Link></Button>
                                            <Button variant="ghost"><Link to='/about'>About Us
                                            </Link></Button>
                                            <Button variant="ghost"><Link to='/our-team'>Our Team
                                            </Link></Button>
                                            <Button variant="ghost"><Link to='/contact'>Contact
                                            </Link></Button>
                                        </DrawerBody>
                                    </DrawerContent>
                                </Drawer>
                            </>
                        )}
                    </Stack>
                </Flex>
            </Flex>
        </>
    );
}