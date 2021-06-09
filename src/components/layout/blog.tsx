import { Container, VStack } from "@chakra-ui/react"

import React, { ReactNode } from "react"
import { use100vh } from "react-div-100vh"
import Footer from "../footer"
import Header from "../header"

type Props = {
  children: ReactNode
}

const indexPage: React.VFC<Props> = ({ children }: Props) => {
  const height = use100vh()

  return (
    <VStack minH={height ? height : "100vh"}>
      <Header />

      <Container as="main" maxW="5xl" flex="1">
        {children}
      </Container>

      <Footer />
    </VStack>
  )
}

export default indexPage
