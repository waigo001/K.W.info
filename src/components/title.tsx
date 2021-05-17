import { Link } from "gatsby"
import { chakra } from "@chakra-ui/react"
import React from "react"

const TitleItem = chakra(Link, {
  baseStyle: {
    fontFamily: "Josefin Sans",
  },
})

const Title = () => {
  return <TitleItem to="/">K.W. info</TitleItem>
}

export default Title
