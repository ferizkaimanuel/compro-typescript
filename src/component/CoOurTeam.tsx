import * as React from "react"
import {
    Box,
    Container,
    Stack,
    Text,
    HStack,
    Divider,
    Card,
    CardBody,
    Heading,
    SimpleGrid,
    Image

} from "@chakra-ui/react"
import { Fade } from "react-awesome-reveal"
import { useState, useEffect } from "react";

type resultProps = {
    name: {
        first: string;
        last: string;
    }
    picture: {
        large: string;
    }
    location: {
        city: string;
    }
};

export const CoOurTeam = () => {

    const [result, setResult] = useState<resultProps[]>([]);

    useEffect(() => {
        const api = async () => {
            const data = await fetch("https://randomuser.me/api?results=3", {
                method: "GET"
            });
            const jsonData = await data.json();
            setResult(jsonData.results);
        };

        api();
    }, []);

    return (

        <>

            <Stack
                as={Box}
                textAlign={"center"}
                spacing={{ base: 8, md: 14 }}
                pb={{ base: 20, md: 36 }}
                pt={{ base: 36, md: 52 }}
                id="our-team"

            >
                <Container maxW={"4xl"} id="team">
                    <Stack align="center" direction="row" px={4} py={2}>
                        <HStack fontSize={{ base: "lg", sm: "xl", md: "2xl" }}>
                            <Text color='tomato' fontWeight={700}>
                                Our Team
                            </Text>
                        </HStack>
                        <Divider orientation="horizontal" />
                    </Stack>

                    <SimpleGrid columns={[1, 2, 3]} px={4} spacing={4}>

                        <Fade>
                            {result.map((value) => {
                                return (
                                    <Card>
                                        <Image
                                            src={value.picture.large}
                                            alt='Ava'

                                        />
                                        <Stack>
                                            <CardBody minH={[null, "15vh"]}  >
                                                <Heading size="sm" mx='auto'>{value.name.first}</Heading>
                                                <HStack spacing={2} py={2} >
                                                    <Text color='tomato' fontWeight={600}
                                                        fontSize={{ base: "lg", sm: "xl", md: "xl" }}
                                                        mx='auto'
                                                    >
                                                        {value.location.city}
                                                    </Text>
                                                </HStack>
                                            </CardBody>
                                        </Stack>
                                    </Card>
                                );
                            })}

                        </Fade>

                    </SimpleGrid>
                </Container>
            </Stack>

        </>
    )

}