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
    CardFooter,
    Image,
    Heading,
    List,
    ListItem,
    ListIcon,
    Button,
    SimpleGrid,

} from "@chakra-ui/react"
import { Fade } from "react-awesome-reveal"
import { ChevronRightIcon } from '@chakra-ui/icons'
import ImageWoman from '../image1.jpg'
import { Link } from "react-router-dom"

export const CoServices = () => (

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
                        Services
                    </Text>
                </HStack>
                <Divider orientation="horizontal" />
            </Stack>

            <Stack px={4} spacing={4} py={2}>
                <Fade>
                    <Card>
                        <Image objectFit="cover" src={ImageWoman} />
                        <Stack>
                            <CardBody textAlign='center'>
                                <Heading size="lg">Cuci Kilat</Heading>
                                <Text py={2}>1 Hari Selesai</Text>
                                <HStack py={2}>
                                    <a href='#'>
                                        <Button color='tomato'><Link to='/'>Hubungi Sekarang</Link></Button></a>
                                </HStack>
                            </CardBody>
                        </Stack>
                    </Card>
                </Fade>
            </Stack>

            <Stack px={4} spacing={4} py={2}>
                <Fade>
                    <SimpleGrid columns={[1, 2, 3]} spacing={4}>
                        <Card bg='#48bf84'>
                            <CardHeader>
                                <Heading size='lg' color='#fffffc' textAlign='center'> Paket 1 </Heading>
                            </CardHeader>
                            <CardBody>
                                <List spacing={3}>
                                    <ListItem color='#fffffc' fontWeight={500} fontSize={20} >
                                        <ListIcon
                                            boxSize={6}
                                            as={ChevronRightIcon}
                                            color={'tomato'}
                                        />
                                        Cuci
                                    </ListItem>
                                    <ListItem color='#fffffc' fontWeight={500} fontSize={20} >
                                        <ListIcon
                                            boxSize={6}
                                            as={ChevronRightIcon}
                                            color={'tomato'}
                                        />
                                        Setrika
                                    </ListItem>
                                    <ListItem color='#fffffc' fontWeight={500} fontSize={20} >
                                        <ListIcon
                                            boxSize={6}
                                            as={ChevronRightIcon}
                                            color={'tomato'}
                                        />
                                        2 Hari
                                    </ListItem>
                                </List>
                            </CardBody>
                            <CardFooter >
                                <Button colorScheme='tomato'
                                    bg='tomato'
                                    px={6}
                                    _hover={{
                                        bg: `tomato.500`,
                                    }} mx='auto'><Link to='/'>Hubungi Sekarang</Link></Button>
                            </CardFooter>
                        </Card>
                        <Card bg='#48bf84'>
                            <CardHeader>
                                <Heading size='lg' color='#fffffc' textAlign='center'> Paket 2 </Heading>
                            </CardHeader>
                            <CardBody>
                                <List spacing={3}>
                                    <ListItem color='#fffffc' fontWeight={500} fontSize={20} >
                                        <ListIcon
                                            boxSize={6}
                                            as={ChevronRightIcon}
                                            color={'tomato'}
                                        />
                                        Cuci
                                    </ListItem>
                                    <ListItem color='#fffffc' fontWeight={500} fontSize={20} >
                                        <ListIcon
                                            boxSize={6}
                                            as={ChevronRightIcon}
                                            color={'tomato'}
                                        />
                                        Setrika
                                    </ListItem>
                                    <ListItem color='#fffffc' fontWeight={500} fontSize={20} >
                                        <ListIcon
                                            boxSize={6}
                                            as={ChevronRightIcon}
                                            color={'tomato'}
                                        />
                                        3 Hari
                                    </ListItem>
                                </List>
                            </CardBody>
                            <CardFooter>
                                <Button colorScheme='tomato'
                                    bg='tomato'
                                    px={6}
                                    _hover={{
                                        bg: `tomato.500`,
                                    }} mx='auto'><Link to='/'>Hubungi Sekarang</Link></Button>
                            </CardFooter>
                        </Card>
                        <Card bg='#48bf84'>
                            <CardHeader>
                                <Heading size='lg' color='#fffffc' textAlign='center'> Paket 3 </Heading>
                            </CardHeader>
                            <CardBody>
                                <List spacing={3}>
                                    <ListItem color='#fffffc' fontWeight={500} fontSize={20} >
                                        <ListIcon
                                            boxSize={6}
                                            as={ChevronRightIcon}
                                            color={'tomato'}
                                        />
                                        Cuci
                                    </ListItem>
                                    <ListItem color='#fffffc' fontWeight={500} fontSize={20} >
                                        <ListIcon
                                            boxSize={6}
                                            as={ChevronRightIcon}
                                            color={'tomato'}
                                        />
                                        Setrika
                                    </ListItem>
                                    <ListItem color='#fffffc' fontWeight={500} fontSize={20} >
                                        <ListIcon
                                            boxSize={6}
                                            as={ChevronRightIcon}
                                            color={'tomato'}
                                        />
                                        4 Hari
                                    </ListItem>
                                </List>
                            </CardBody>
                            <CardFooter>
                                <Button colorScheme='tomato'
                                    bg='tomato'
                                    px={6}
                                    _hover={{
                                        bg: `tomato.500`,
                                    }} mx='auto'><Link to='/'>Hubungi Sekarang</Link></Button>
                            </CardFooter>
                        </Card>
                    </SimpleGrid>
                </Fade>

            </Stack>
        </Container>
    </Stack>

)