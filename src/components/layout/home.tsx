import React, { ReactNode } from "react"

import { Flex, VStack } from "@chakra-ui/react"
import { Button, IconButton } from "@chakra-ui/button"
import { Link as OtherLink, Heading } from "@chakra-ui/layout"
import { Text } from "@chakra-ui/react"

import {
  FaCalendarDay,
  FaGithub,
  FaInfoCircle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa"
import { Link as GatsbyLink } from "gatsby"

import Title from "../title"
import { use100vh } from "react-div-100vh"

type Props = {
  children: ReactNode
}

const indexPage: React.VFC<Props> = ({ children }) => {
  const height = use100vh()

  return (
    <VStack spacing={8} minH={height ? height : "100vh"} justify="center">
      <header>
        <Heading as="h1" size="3xl" m={6}>
          <Title />
        </Heading>
      </header>
      <nav>
        <Flex justify="center" gridGap={4}>
          <GatsbyLink to="/blog">
            <Button leftIcon={<FaCalendarDay />} variant="ghost">
              Blog
            </Button>
          </GatsbyLink>
          <GatsbyLink to="/about">
            <Button variant="ghost" leftIcon={<FaInfoCircle />}>
              About
            </Button>
          </GatsbyLink>
        </Flex>
      </nav>
      <main>{children}</main>
      <footer>
        <Flex justify="center" gridGap={4}>
          <OtherLink href="https://github.com/waigo001" isExternal>
            <IconButton
              aria-label="Github"
              isRound
              size="lg"
              variant="ghost"
              icon={<FaGithub size="1.5em" />}
            />
          </OtherLink>

          <OtherLink href="https://twitter.com/waigo001" isExternal>
            <IconButton
              aria-label="Twitter"
              isRound
              size="lg"
              variant="ghost"
              icon={<FaTwitter size="1.5em" />}
            />
          </OtherLink>

          <OtherLink href="https://www.instagram.com/waigo001/" isExternal>
            <IconButton
              aria-label="Instagram"
              isRound
              size="lg"
              variant="ghost"
              icon={<FaInstagram size="1.5em" />}
            />
          </OtherLink>
        </Flex>
        <Text
          fontSize="xs"
          letterSpacing="1.5px"
          fontWeight="700"
          align="center"
          m={8}
        >
          Copyright &copy; 2020 <Title />
        </Text>
        <Text
          fontSize="xs"
          letterSpacing="1.5px"
          fontWeight="700"
          align="center"
          m={8}
        >
          All rights reserved.
        </Text>
      </footer>
    </VStack>
  )
}

export default indexPage
