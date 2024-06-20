import * as React from "react"
import {
    Box,
    Container,
    Stack,
    Text,
    HStack,
    Divider,
    Image

} from "@chakra-ui/react"
import { Fade } from "react-awesome-reveal"
import aboutImage from '../heroo.svg'

export const CoAbout = () => (

    <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        pb={{ base: 20, md: 36 }}
        pt={{ base: 36, md: 52 }}
        id="about"
    >
        <Container maxW={"4xl"}  >
            <Fade>

               
                <Stack align="center" direction="row" px={4} py={2}>
                    <HStack fontSize={{ base: "lg", sm: "xl", md: "2xl" }}>
                        <Text color='tomato' fontWeight='700'>
                        About Us
                        </Text>
                    </HStack>
                    <Divider orientation="horizontal" />
                </Stack>

                <Image
                    src={aboutImage}
                    alt='Ava'
                    w='100'

                />

                <Text color={"gray.600"} fontSize={{ base: "lg", sm: "xl", md: "2xl" }} px={4}>
                    Laundry Dig adalah platform binatu online berbasis marketplace yang didukung oleh aplikasi mobile yang menghubungkan lebih dari
                    3.500 pengguna aktif setiap bulannya dengan menghubungkan dengan 300+ mitra laundry yang tersebar di 16 kota di Indonesia
                </Text>
            </Fade>
        </Container>
    </Stack>

)