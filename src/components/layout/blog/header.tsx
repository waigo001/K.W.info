import React from "react"

import {
  Button,
  chakra,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  ListItem,
  Spacer,
  UnorderedList,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
  Text,
} from "@chakra-ui/react"
import { HTMLChakraProps } from "@chakra-ui/system"
import { Link } from "gatsby"
import { FaBars, FaCalendarDay, FaInfoCircle } from "react-icons/fa"
import { useMatch } from "@reach/router"

import Title from "../../title"
import { TableOfContents, TOC } from "../../tableOfContents"

type Props = {
  toc?: TOC
}

const HeaderContent: React.VFC<Props> = ({ toc }) => {
  const mobileNav = useDisclosure()

  const padding = useBreakpointValue({ base: "3", md: "6" })
  return (
    <Flex
      w="100%"
      h="100%"
      px={padding}
      align="center"
      justify="space-between"
      gridGap={3}
    >
      <IconButton
        display={{ base: "flex", sm: "none" }}
        aria-label="nav-drawer-open"
        variant="ghost"
        isRound
        onClick={mobileNav.onOpen}
        icon={<FaBars />}
      />

      <Drawer
        isOpen={mobileNav.isOpen}
        placement="top"
        onClose={mobileNav.onClose}
        trapFocus={false}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <Title />
          </DrawerHeader>

          <DrawerBody>
            <nav>
              <UnorderedList spacing="0.25rem" listStyleType="none">
                <Divider />
                <ListItem>
                  <Link to="/blog">
                    <Button
                      leftIcon={<FaCalendarDay />}
                      variant="ghost"
                      w="100%"
                      rounded="full"
                      colorScheme={useMatch("/blog" + "/*") ? "cyan" : "gray"}
                      justifyContent="left"
                      onClick={mobileNav.onClose}
                    >
                      Blog
                    </Button>
                  </Link>
                </ListItem>
                <Divider />
                <ListItem>
                  <Link to="/about">
                    <Button
                      variant="ghost"
                      leftIcon={<FaInfoCircle />}
                      w="100%"
                      rounded="full"
                      colorScheme={useMatch("/about" + "/*") ? "cyan" : "gray"}
                      justifyContent="left"
                      onClick={mobileNav.onClose}
                    >
                      About
                    </Button>
                  </Link>
                </ListItem>
              </UnorderedList>
              <Divider my="2" />
              <Text fontWeight="black" my="2">
                目次
              </Text>
              {toc && (
                <TableOfContents toc={toc} onItemClick={mobileNav.onClose} />
              )}
            </nav>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Title fontSize="3xl" />

      <Spacer />
      <Flex display={{ base: "none", sm: "flex" }} align="center" gridGap="2">
        <Link to="/blog">
          <Button
            leftIcon={<FaCalendarDay />}
            colorScheme={useMatch("/blog" + "/*") ? "cyan" : "gray"}
            variant="ghost"
          >
            Blog
          </Button>
        </Link>
        <Link to="/about">
          <Button
            leftIcon={<FaInfoCircle />}
            colorScheme={useMatch("/about" + "/*") ? "cyan" : "gray"}
            variant="ghost"
          >
            About
          </Button>
        </Link>
      </Flex>
    </Flex>
  )
}

const Header = (props: HTMLChakraProps<"header"> & Props) => {
  const ref = React.useRef<HTMLHeadingElement>(null)
  const bg = useColorModeValue("white", "gray.800")
  const shadow = useColorModeValue("md", "xl")

  return (
    <chakra.header
      pos="sticky"
      ref={ref}
      zIndex="3"
      width="full"
      top="0"
      left="0"
      right="0"
      boxShadow={shadow}
      bg={bg}
      {...props}
    >
      <chakra.div height="4rem" mx="auto" maxW="8xl">
        <HeaderContent toc={props.toc} />
      </chakra.div>
    </chakra.header>
  )
}

export default Header
