import * as React from "react"
import {
    Box,
    Container,
    Stack,
    Text,
    Heading,
    Button,
    Image,
    SimpleGrid,
    Card

} from "@chakra-ui/react"

import Laundry from '../hero.svg'
import { Fade } from "react-awesome-reveal"
import { Link } from "react-router-dom"


export const Hero = () => (
    <>

        <Stack bg='#00A3C4' id="hero"
            as={Box}
            textAlign={"center"}
            spacing={{ base: 8, md: 14 }}
            pb={{ base: 20, md: 36 }}
            pt={{ base: 36, md: 52 }}
        >
            <Container maxW={"4xl"}  >
                <SimpleGrid columns={[1, 2]} spacing={4}>

                    <Fade>

                        <>
                            <Heading
                                fontWeight={800}
                                fontSize={{ base: "4xl", sm: "6xl", md: "6xl" }}
                                lineHeight={"110%"}
                                marginBottom={30}
                            >
                                Laundry <br />
                                <Text as={"span"} color={`tomato.400`}>
                                    Digital
                                </Text>
                            </Heading>
                            <Text
                                color={"white"}
                                fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
                                marginBottom={50}
                            >
                                Bawa ke outlet laundry terdekat atau kami jemput, cuci & antar laundry kiloan & dry cleaning Anda.
                            </Text>
                            <Stack
                                direction={"column"}
                                spacing={3}
                                align={"center"}
                                alignSelf={"center"}
                                position={"relative"}
                            >
                                <Button
                                    colorScheme='tomato'
                                    bg='tomato'
                                    rounded={"full"}
                                    px={6}
                                    _hover={{
                                        bg: `tomato.500`,
                                    }}
                                >
                                    <Link to='/'>Hubungi Kami</Link>
                                </Button>
                            </Stack>
                        </>
                        <>
                            <Image
                                src={Laundry}
                                alt='Ava'
                                w='md'

                            />
                        </>

                    </Fade>
                </SimpleGrid>
            </Container>

        </Stack>
    </>
)