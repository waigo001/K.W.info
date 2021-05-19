import { Link } from "gatsby"
import { chakra, ChakraComponent, HTMLChakraProps } from "@chakra-ui/react"
import React from "react"

const TitleItem = chakra(Link, {
  baseStyle: {
    mt: 1.5,
    fontFamily: "Josefin Sans",
  },
})

const Title = (props: HTMLChakraProps<ChakraComponent<typeof Link, {}>>) => {
  return (
    <TitleItem to="/" {...props}>
      K.W.&nbsp;info
    </TitleItem>
  )
}

export default Title
