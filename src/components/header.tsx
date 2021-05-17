import React from "react"

import {
  Button,
  chakra,
  Flex,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react"
import { HTMLChakraProps } from "@chakra-ui/system"
import { Link } from "gatsby"
import { FaCalendarDay, FaInfoCircle } from "react-icons/fa"

import Title from "./title"

const HeaderContent = () => {
  return (
    <>
      <Flex
        w="100%"
        h="100%"
        px="6"
        align="center"
        justify="space-between"
        gridGap={4}
      >
        <Title fontSize="3xl" />
        <Spacer />
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
    </>
  )
}

const Header = (props: HTMLChakraProps<"header">) => {
  const ref = React.useRef<HTMLHeadingElement>(null)
  const bg = useColorModeValue("white", "gray.800")

  return (
    <chakra.header
      pos="sticky"
      transition="box-shadow 0.2s, background-color 0.2s"
      ref={ref}
      width="full"
      top="0"
      left="0"
      right="0"
      shadow="lg"
      bg={bg}
      {...props}
    >
      <chakra.div height="4rem" mx="auto" maxW="8xl">
        <HeaderContent />
      </chakra.div>
    </chakra.header>
  )
}

export default Header
