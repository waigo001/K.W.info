import React from "react"
import {
  chakra,
  Flex,
  HTMLChakraProps,
  useColorModeValue,
  Text,
  Spacer,
  useBreakpointValue,
  Box,
} from "@chakra-ui/react"
import Title from "../../title"
import IconLink from "../../iconLink"
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa"

const FooterContent = () => {
  const padding = useBreakpointValue({ base: "4", md: "6" })

  return (
    <Flex
      w="100%"
      h="100%"
      px={padding}
      align="center"
      justify="space-between"
      gridGap={4}
    >
      <Text fontSize="xs" letterSpacing="1.5px" fontWeight="700" align="center">
        <Box as="span" display={{ base: "none", sm: "inline" }}>
          Copyright&nbsp;
        </Box>
        &copy; 2021&nbsp;
        <Title />
        <Box as="span" display={{ base: "none", md: "inline" }}>
          &nbsp;&nbsp;All rights reserved.
        </Box>
      </Text>
      <Spacer />
      <Flex gridGap={4}>
        <IconLink
          href="https://github.com/waigo001"
          aria-label="Github"
          isRound
          size="md"
          variant="ghost"
          icon={<FaGithub size="1.5em" />}
        />

        <IconLink
          href="https://twitter.com/waigo001"
          aria-label="Twitter"
          isRound
          size="md"
          variant="ghost"
          icon={<FaTwitter size="1.5em" />}
        />

        <IconLink
          href="https://www.instagram.com/waigo001/"
          aria-label="Instagram"
          isRound
          size="md"
          variant="ghost"
          icon={<FaInstagram size="1.5em" />}
        />
      </Flex>
    </Flex>
  )
}

const Footer = (props: HTMLChakraProps<"footer">) => {
  const bg = useColorModeValue("white", "gray.800")
  return (
    <chakra.footer
      pos="sticky"
      transition="box-shadow 0.2s, background-color 0.2s"
      width="full"
      top="auto"
      bottom="0"
      bg={bg}
      shadow="xs"
      {...props}
    >
      <chakra.div height="3em" mx="auto" maxW="8xl">
        <FooterContent />
      </chakra.div>
    </chakra.footer>
  )
}

export default Footer
