import * as React from "react"
import {
    Box,
    Container,
    Stack,
    Text,
    useColorModeValue

} from "@chakra-ui/react"

export const Footer = () => (

    <Box
      bg={useColorModeValue("#fffffc.50", "#fffffc.900")}
      color={useColorModeValue("#fffffc.700", "#fffffc.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        align="center"
      >
        <Text>© 2024 Laundry Dig. All rights reserved</Text>
      </Container>
    </Box>

)