import * as React from "react"
import {

    ChakraProvider

} from "@chakra-ui/react"

import { Navbar } from "../component/Navbar"
import { Footer } from "../component/Footer"
import { Hero } from "../component/Hero"
import { CoAbout } from "../component/CoAbout"
import { CoServices } from "../component/CoServices"
import { CoOurTeam } from "../component/CoOurTeam"
import { CoContact } from "../component/CoContact"
import { CoTestimonial } from "../component/CoTestimonial"


export const Home = () => (
<>
        <Navbar />
        <Hero />
        <CoAbout />
        <CoServices />
        <CoOurTeam />
        <CoTestimonial />
        <CoContact />
        <Footer />
    </>
)
