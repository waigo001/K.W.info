import React from "react"

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

type Props = {
  children: React.ReactNode
}

const indexPage: React.VFC<Props> = ({ children }) => {
  return (
    <VStack spacing={8}>
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
          m={6}
        >
          Copyright &copy; 2020 <Title />
        </Text>
        <Text
          fontSize="xs"
          letterSpacing="1.5px"
          fontWeight="700"
          align="center"
          m={6}
        >
          All rights reserved.
        </Text>
      </footer>
    </VStack>
  )
}

export default indexPage
