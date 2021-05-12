import React from "react"

import { makeStyles } from "@material-ui/core"
import { Link } from "gatsby"
import theme from "../styles/theme"

const useStyles = makeStyles({
  root: {
    fontFamily: "Josefin Sans",
    fontWeight: 700,
    color: theme.palette.text.primary,
    textDecoration: "none",
    boxShadow: "none",
    textAlign: "center",
  },
})

const Title = () => {
  const classes = useStyles()

  return (
    <Link to="/" className={classes.root}>
      K.W. info
    </Link>
  )
}

export default Title
