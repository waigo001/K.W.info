import { Box, Container, Flex, VStack } from "@chakra-ui/react"

import React, { ReactNode } from "react"
import { use100vh } from "react-div-100vh"
import { TableOfContents } from "../../tableOfContents"
import Footer from "./footer"
import Header from "./header"

type Props = {
  children: ReactNode
  toc?: any
}

const indexPage: React.VFC<Props> = ({ children, toc }: Props) => {
  const height = use100vh()

  return (
    <VStack minH={height ? height : "100vh"}>
      <Header toc={toc} />
      <Container maxW="5xl" flex="1">
        <Flex
          direction="row-reverse"
          justifyContent="space-around"
          gridGap="1rem"
        >
          {toc && (
            <Box
              display={{ base: "none", md: "flex" }}
              position="sticky"
              h="min-content"
              top="5rem"
              flexBasis={"200px"}
              flexShrink={0}
            >
              <TableOfContents toc={toc} />
            </Box>
          )}
          <Box as="main" minW="0" flexGrow={1} flexShrink={1}>
            {children}
          </Box>
        </Flex>
      </Container>

      <Footer />
    </VStack>
  )
}

export default indexPage
