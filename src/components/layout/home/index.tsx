import React, { ReactNode } from "react"

import { Flex, VStack } from "@chakra-ui/react"
import { Button } from "@chakra-ui/button"
import { Heading } from "@chakra-ui/layout"
import { Text } from "@chakra-ui/react"

import {
  FaCalendarDay,
  FaGithub,
  FaInfoCircle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa"
import { Link } from "gatsby"

import Title from "../../title"
import { use100vh } from "react-div-100vh"
import IconLink from "../../iconLink"

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
          <Link to="/blog">
            <Button leftIcon={<FaCalendarDay />} variant="ghost">
              Blog
            </Button>
          </Link>
          <Link to="/about">
            <Button variant="ghost" leftIcon={<FaInfoCircle />}>
              About
            </Button>
          </Link>
        </Flex>
      </nav>
      <main>{children}</main>
      <footer>
        <Flex justify="center" gridGap={4}>
          <IconLink
            href="https://github.com/waigo001"
            aria-label="Github"
            isRound
            size="lg"
            variant="ghost"
            icon={<FaGithub size="1.5em" />}
          />

          <IconLink
            href="https://twitter.com/waigo001"
            aria-label="Twitter"
            isRound
            size="lg"
            variant="ghost"
            icon={<FaTwitter size="1.5em" />}
          />

          <IconLink
            href="https://www.instagram.com/waigo001/"
            aria-label="Instagram"
            isRound
            size="lg"
            variant="ghost"
            icon={<FaInstagram size="1.5em" />}
          />
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
