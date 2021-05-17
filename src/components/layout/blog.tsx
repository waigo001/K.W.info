import { Container } from "@chakra-ui/layout"

import React, { ReactNode } from "react"
import Footer from "../footer"
import Header from "../header"

type Props = {
  children: ReactNode
}

const indexPage: React.VFC<Props> = ({ children }: Props) => {
  return (
    <>
      <Header />

      <main>
        <Container maxW="xl">{children}</Container>
      </main>

      <Footer />
    </>
  )
}

export default indexPage
