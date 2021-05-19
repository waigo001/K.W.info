import React from "react"
import {
  chakra,
  Flex,
  HTMLChakraProps,
  useColorModeValue,
  Text,
} from "@chakra-ui/react"
import Title from "./title"

const FooterContent = () => {
  return (
    <Flex
      w="100%"
      h="100%"
      px="8"
      align="center"
      justify="space-between"
      gridGap={4}
    >
      <Text fontSize="xs" letterSpacing="1.5px" fontWeight="700" align="center">
        Copyright &copy; 2021 <Title />
        &nbsp;&nbsp;All rights reserved.
      </Text>
    </Flex>
  )
}

const Footer = (props: HTMLChakraProps<"footer">) => {
  const ref = React.useRef<HTMLHeadingElement>(null)
  const bg = useColorModeValue("white", "gray.800")
  return (
    <chakra.footer
      pos="sticky"
      transition="box-shadow 0.2s, background-color 0.2s"
      ref={ref}
      width="full"
      top="auto"
      bottom="0"
      shadow="dark-lg"
      bg={bg}
      {...props}
    >
      <chakra.div height="3em" mx="auto" maxW="8xl">
        <FooterContent />
      </chakra.div>
    </chakra.footer>
  )
}

export default Footer
