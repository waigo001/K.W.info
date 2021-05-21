import { Flex } from "@chakra-ui/layout"
import { format, isAfter } from "date-fns"
import { parseISO } from "date-fns/esm"
import React from "react"
import { FaClock, FaRegClock } from "react-icons/fa"
import { Icon, Text } from "@chakra-ui/react"
interface Prop {
  updatedAt?: string
  publishedAt?: string
}

const PostTime: React.FC<Prop> = ({
  updatedAt = "19700101T000000Z",
  publishedAt = "19700101T000000Z",
}) => {
  const updatedTime = parseISO(updatedAt)
  const publishedTime = parseISO(publishedAt)

  const isUpdated = isAfter(updatedTime, publishedTime)

  let returnItem = <></>

  if (isUpdated) {
    returnItem = (
      <Flex align="center" gridGap="2">
        <Icon as={FaRegClock} />
        <Text fontSize="sm">
          <time dateTime={updatedAt}>
            {format(updatedTime, "yyyy/MM/dd HH:mm")}
          </time>
        </Text>
      </Flex>
    )
  } else {
    returnItem = (
      <Flex align="center" gridGap="2">
        <Icon as={FaClock} />
        <Text fontSize="sm">
          <time dateTime={publishedAt}>
            {format(publishedTime, "yyyy/MM/dd HH:mm")}
          </time>
        </Text>
      </Flex>
    )
  }

  return returnItem
}

export default PostTime
