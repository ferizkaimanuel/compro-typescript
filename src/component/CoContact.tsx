import * as React from "react"
import {
    Box,
    Container,
    Stack,
    Text,
    HStack,
    Divider,
    Center,
    Heading

} from "@chakra-ui/react"
import { FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa"

const linkedin = () => {
    window.open('https://www.linkedin.com', "_blank", "noreferrer,noopener");
};
const facebook = () => {
    window.open('https://www.facebook.com', "_blank", "noreferrer,noopener");
};
const email = () => {
    window.open('https://www.gmail.com', "_blank", "noreferrer,noopener");
};

export const CoContact = () => (

    <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        pb={{ base: 20, md: 36 }}
        pt={{ base: 36, md: 52 }}
        bg={"#001011"}
    >
        <Container maxW={"4xl"} id="contact">
            <Stack align="center" direction="row" px={4} py={2}>
                <HStack fontSize={{ base: "lg", sm: "xl", md: "2xl" }}>
                    <Text color='tomato' fontWeight={700}>
                        Contact
                    </Text>
                </HStack>
                <Divider orientation="horizontal" />
            </Stack>
            <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
                <Heading fontSize={"3xl"} color={"#fffffc"} >Hasil Cepat dan Wangi</Heading>
                <Text color={"#fffffc"} fontSize={"xl"} px={4}>
                    Laundry Dig
                </Text>
                <Text color='tomato' fontWeight={600} fontSize={"lg"} px={4}>
                    laundry-dig@gmail.com
                </Text>
                <Center>
                    <HStack pt={4} spacing={4} color={"#fffffc"} >
                        <FaLinkedin onClick={linkedin} size={28} />
                        <FaFacebook onClick={facebook} size={28} />
                        <FaEnvelope onClick={email} size={28} />
                    </HStack>
                </Center>
            </Stack>
        </Container>
    </Stack>

)