import { Link } from "gatsby"
import { chakra, ChakraComponent, HTMLChakraProps } from "@chakra-ui/react"
import React from "react"

const TitleItem = chakra(Link, {
  baseStyle: {
    fontFamily: "Josefin Sans",
  },
})

const Title = (props: HTMLChakraProps<ChakraComponent<typeof Link, {}>>) => {
  return (
    <TitleItem to="/" {...props}>
      K.W. info
    </TitleItem>
  )
}

export default Title
