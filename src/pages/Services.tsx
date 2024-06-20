import * as React from "react"
import {
    Text,
    Card,
    CardBody

} from "@chakra-ui/react"
import { Navbar } from "../component/Navbar"
import { CoServices } from "../component/CoServices"
import { Footer } from "../component/Footer"

export const Services = () => (
    <>
        <Navbar />
        <CoServices />
        <Footer />
    </>
)
