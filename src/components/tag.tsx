import React from "react"
import { Tag as ChakraTag, TagLabel } from "@chakra-ui/react"

const Tag: React.FC<{
  props:
    | GatsbyTypes.Maybe<Pick<GatsbyTypes.MicrocmsBlogsTags, "title" | "slug">>
    | undefined
}> = ({ props }) => {
  let contents = <></>
  if (props !== undefined) {
    if (props.slug !== undefined && props.title !== undefined)
      contents = (
        <ChakraTag key={props.slug} borderRadius="full" variant="outline">
          <TagLabel> {props.title}</TagLabel>
        </ChakraTag>
      )
  }
  return contents
}

export default Tag
