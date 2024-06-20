import * as React from "react"
import {
    Box,
    Container,
    Stack,
    Text,
    HStack,
    Divider,
    Card,
    CardHeader,
    CardBody,
    Heading,
    Flex,
    Avatar,


} from "@chakra-ui/react"
import { Fade } from "react-awesome-reveal"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export const CoTestimonial = () => (

    <Stack
        as={Box}
        spacing={{ base: 8, md: 14 }}
        pb={{ base: 20, md: 36 }}
        pt={{ base: 36, md: 52 }}
        id="services"
        bg='#f7f7f7'
    >

        <Container maxW={"4xl"} id="services">

            <Stack align="center" direction="row" px={4} py={2}>
                <HStack fontSize={{ base: "lg", sm: "xl", md: "2xl" }}>
                    <Text color='tomato' fontWeight={700}>
                        Testimonial
                    </Text>
                </HStack>
                <Divider orientation="horizontal" />
            </Stack>


            <Stack px={4} spacing={4} py={2}>
                <Fade>
                    <Carousel autoPlay interval={3000} infiniteLoop>

                        <Card bg={'#f39237'} color={'white'}>
                            <CardHeader>
                                <Flex >
                                    <Flex gap='4' alignItems='center' flexWrap='wrap' mx='auto'>
                                        <Avatar name='Budi' src='https://bit.ly/code-beast' />

                                        <Box>
                                            <Heading size='md'>Budi</Heading>
                                            <Text>Wiraswasta</Text>
                                        </Box>
                                    </Flex>
                                </Flex>
                            </CardHeader>
                            <CardBody>
                                <Text fontSize={21}>
                                    Hasil cucian bersih dan rapi. Terima kasih laundry dig
                                </Text>
                            </CardBody>
                        </Card>

                        <Card bg={'#f39237'} color={'white'}>
                            <CardHeader>
                                <Flex>
                                    <Flex gap='4' alignItems='center' flexWrap='wrap' mx='auto' >
                                        <Avatar name='Agus He' src='https://bit.ly/dan-abramov' />

                                        <Box >
                                            <Heading size='md'>Agus He</Heading>
                                            <Text>Karyawan Swasta</Text>
                                        </Box>
                                    </Flex>
                                </Flex>
                            </CardHeader>
                            <CardBody>
                                <Text fontSize={21}>
                                    Pilih paket beneran cepet 1 hari. thanks
                                </Text>
                            </CardBody>
                        </Card>
                        <Card bg={'#f39237'} color={'white'}>
                            <CardHeader>
                                <Flex>
                                    <Flex gap='4' alignItems='center' flexWrap='wrap' mx='auto'>
                                        <Avatar name='Eko Co' src='https://bit.ly/kent-c-dodds' />

                                        <Box>
                                            <Heading size='md'>Eko Co</Heading>
                                            <Text>PNS</Text>
                                        </Box>
                                    </Flex>
                                </Flex>
                            </CardHeader>
                            <CardBody>
                                <Text fontSize={21}>
                                    Pelayanannya baik dan ramah, komplain pun direspon cepat.
                                </Text>
                            </CardBody>
                        </Card>

                    </Carousel>

                </Fade>
            </Stack>

        </Container>
    </Stack>

)