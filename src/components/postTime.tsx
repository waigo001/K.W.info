import { format, isAfter } from "date-fns"
import { parseISO } from "date-fns/esm"
import React from "react"
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
      <>
        <time dateTime={updatedAt}>
          {format(updatedTime, "yyyy/MM/dd HH:mm")}
        </time>
      </>
    )
  } else {
    returnItem = (
      <>
        <time dateTime={publishedAt}>
          {format(publishedTime, "yyyy/MM/dd HH:mm")}
        </time>
      </>
    )
  }

  return returnItem
}

export default PostTime
