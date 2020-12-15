import { Chip, makeStyles } from "@material-ui/core"
import React from "react"
import theme from "../styles/theme"

const useStyles = makeStyles({
  chip: {
    margin: theme.spacing(0.5),
  },
})

const Tag: React.FC<{
  props:
    | GatsbyTypes.Maybe<Pick<GatsbyTypes.MicrocmsBlogsTags, "title" | "slug">>
    | undefined
}> = ({ props }) => {
  let contents = <></>
  const classes = useStyles()
  if (props !== undefined) {
    if (props.slug !== undefined && props.title !== undefined)
      contents = (
        <Chip
          label={props.title}
          variant="outlined"
          size="small"
          key={props.slug}
          className={classes.chip}
        />
      )
  }
  return contents
}

export default Tag
