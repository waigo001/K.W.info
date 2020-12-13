import { makeStyles } from "@material-ui/core"
import { format, isAfter } from "date-fns"
import { parseISO } from "date-fns/esm"
import React from "react"
import theme from "../styles/theme"

import UpdateIcon from "@material-ui/icons/Update"
import WatchLaterIcon from "@material-ui/icons/WatchLater"

interface Prop {
  updatedAt?: string
  publishedAt?: string
}

const useStyles = makeStyles({
  timeIcon: {
    marginRight: theme.spacing(0.5),
    fontSize: "1rem",
  },
})

const PostTime: React.FC<Prop> = ({
  updatedAt = "19700101T000000Z",
  publishedAt = "19700101T000000Z",
}) => {
  const classes = useStyles()

  const updatedTime = parseISO(updatedAt)
  const publishedTime = parseISO(publishedAt)

  const isUpdated = isAfter(updatedTime, publishedTime)

  let returnItem = <></>

  if (isUpdated) {
    returnItem = (
      <>
        <UpdateIcon className={classes.timeIcon} />
        <time dateTime={updatedAt}>
          {format(updatedTime, "yyyy/MM/dd HH:mm")}
        </time>
      </>
    )
  } else {
    returnItem = (
      <>
        <WatchLaterIcon className={classes.timeIcon} />
        <time dateTime={publishedAt}>
          {format(publishedTime, "yyyy/MM/dd HH:mm")}
        </time>
      </>
    )
  }

  return returnItem
}

export default PostTime
