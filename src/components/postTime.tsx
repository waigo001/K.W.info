import { Flex } from "@chakra-ui/layout"
import { format, formatISO, isAfter } from "date-fns"
import { parseISO } from "date-fns/esm"
import React from "react"
import { FaClock, FaRegClock } from "react-icons/fa"
import { Icon, Text } from "@chakra-ui/react"
interface Prop {
  updatedAt?: string
  publishedAt?: string
}

const PostTime: React.VFC<Prop> = ({
  updatedAt = "19700101T000000Z",
  publishedAt = "19700101T000000Z",
}) => {
  const updatedTime = parseISO(updatedAt)
  const publishedTime = parseISO(publishedAt)

  const isUpdated = isAfter(updatedTime, publishedTime)

  return (
    <>
      <Flex align="center" gridGap="2" display={isUpdated ? "flex" : "none"}>
        <Icon as={FaRegClock} />
        <Text fontSize="sm">
          <time dateTime={formatISO(updatedTime)} itemProp="dateModified">
            {format(updatedTime, "yyyy/MM/dd")}
          </time>
        </Text>
      </Flex>

      <Flex align="center" gridGap="2" display={!isUpdated ? "flex" : "none"}>
        <Icon as={FaClock} />
        <Text fontSize="sm">
          <time dateTime={formatISO(publishedTime)} itemProp="datePublished">
            {format(publishedTime, "yyyy/MM/dd")}
          </time>
        </Text>
      </Flex>
    </>
  )
}

export default PostTime
