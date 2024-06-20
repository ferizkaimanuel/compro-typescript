import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Services } from "./pages/Services"
import { OurTeam } from "./pages/OurTeam"

export const App = () => (
  <ChakraProvider theme={theme}>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/teams" element={<OurTeam />} />
      </Routes>
    </BrowserRouter>



  </ChakraProvider>
)
