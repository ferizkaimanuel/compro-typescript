import * as React from "react"
import {
    Box,
    Flex,
    HStack,
    IconButton,
    Button,
    useDisclosure,
    Container,
    Stack,
    useColorMode,

} from "@chakra-ui/react"

import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'

import { Link } from "react-router-dom"

export const Navbar = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const { colorMode, toggleColorMode } = useColorMode();
    

    return (
        <>
            <Box bg={'#00A3C4'} >
                <Container maxW={"6xl"}  >
                    <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>

                        <IconButton
                            variant="navBar"
                            size={'md'}
                            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                            aria-label={'Open Menu'}
                            display={{ md: 'none' }}
                            onClick={isOpen ? onClose : onOpen}
                        />
                        <HStack spacing={8} alignItems={'center'}>
                            <Box fontWeight={800} color={'#ffffff'} fontSize={'26'}><Link to='/'>Laundry Dig</Link></Box>
                            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}  color={'#ffffff'} >
                                <Button variant="navBar"><Link to='/'>Home
                                </Link></Button>
                                <Button variant="navBar"><Link to='/about-us'>About Us
                                </Link></Button>
                                <Button variant="navBar"><Link to='/services'>Services
                                </Link></Button>
                                <Button variant="navBar"><Link to='/teams'>Teams
                                </Link></Button>
                            </HStack>
                        </HStack>

                        <Button onClick={toggleColorMode} variant="navBar">
                            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                        </Button>

                    </Flex>

                    {isOpen ? (
                        <Box pb={4} display={{ md: 'none' }} bg={'white'}>
                            <Stack as={'nav'} spacing={4}>
                            <Button variant="navBar"><Link to='/'>Home
                                </Link></Button>
                                <Button variant="navBar"><Link to='/about-us'>About Us
                                </Link></Button>
                                <Button variant="navBar"><Link to='/services'>Services
                                </Link></Button>
                                <Button variant="navBar"><Link to='/teams'>Teams
                                </Link></Button>
                            </Stack>
                        </Box>
                    ) : null}
                </Container>
            </Box>

        </>
    );
}