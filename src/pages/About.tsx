import * as React from "react"
import {
    Text,
    Card,
    CardBody

} from "@chakra-ui/react"
import { Navbar } from "../component/Navbar"
import { CoAbout } from "../component/CoAbout"
import { Footer } from "../component/Footer"
import { CoOurTeam } from "../component/CoOurTeam"

export const About = () => (
    <>
        <Navbar />
        <CoAbout />
        <CoOurTeam />
        <Footer />
    </>
)
