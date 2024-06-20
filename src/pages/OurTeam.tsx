import * as React from "react"
import {
    Text,
    Card,
    CardBody

} from "@chakra-ui/react"
import { Navbar } from "../component/Navbar"
import { CoOurTeam } from "../component/CoOurTeam"
import { Footer } from "../component/Footer"

export const OurTeam = () => (
    <>
        <Navbar />
        <CoOurTeam />
        <Footer />
    </>

)
