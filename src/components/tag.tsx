import React from "react"
import { Tag as ChakraTag, TagLabel } from "@chakra-ui/react"

type Props = {
  name?: string
  id?: string
}

const Tag: React.FC<Props> = ({ name, id }) => {
  let contents = <></>
  if (name && id) {
    contents = (
      <ChakraTag key={id} borderRadius="full" variant="outline">
        <TagLabel> {name}</TagLabel>
      </ChakraTag>
    )
  }
  return contents
}

export default Tag
