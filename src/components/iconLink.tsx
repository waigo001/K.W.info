import { Link } from "@chakra-ui/layout"
import { IconButton, IconButtonProps } from "@chakra-ui/react"
import React from "react"

interface Props extends IconButtonProps {
  href: string
}

const IconLink = ({ href, ...props }: Props) => {
  return (
    <Link href={href} isExternal>
      <IconButton {...props} />
    </Link>
  )
}

export default IconLink
