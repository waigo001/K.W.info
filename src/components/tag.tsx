import React from "react"

const Tag: React.FC<{
  props:
    | GatsbyTypes.Maybe<Pick<GatsbyTypes.MicrocmsBlogsTags, "title" | "slug">>
    | undefined
}> = ({ props }) => {
  let contents = <></>
  if (props !== undefined) {
    if (props.slug !== undefined && props.title !== undefined)
      contents = <div key={props.slug}>{props.title}</div>
  }
  return contents
}

export default Tag
