import React from "react"
import { Tag as ChakraTag, TagLabel } from "@chakra-ui/react"

type Props = {
  props?: string
}

const Tag: React.FC<Props> = ({ props }) => {
  let contents = <></>
  if (props) {
    contents = (
      <ChakraTag key={props} borderRadius="full" variant="outline">
        <TagLabel> {props}</TagLabel>
      </ChakraTag>
    )
  }
  return contents
}

export default Tag
