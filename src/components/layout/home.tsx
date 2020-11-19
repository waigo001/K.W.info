import {
  Grid,
  IconButton,
  makeStyles,
  MuiThemeProvider,
  Typography,
} from "@material-ui/core"
import { GitHub, Instagram, Twitter } from "@material-ui/icons"
import PropTypes from "prop-types"
import React from "react"
import theme from "../../styles/theme"
import Title from "../title"

const useStyles = makeStyles({
  title: {
    margin: theme.spacing(3),
  },
  linkButton: {
    margin: theme.spacing(1),
  },
  bottomText: {
    margin: theme.spacing(3),
    fontSize: "12px",
    fontWeight: 700,
    color: theme.palette.text.secondary,
    letterSpacing: "2px",
  },
})

const indexPage = ({ children }) => {
  const classes = useStyles()

  return (
    <MuiThemeProvider theme={theme}>
      <header>
        <Typography
          variant="h2"
          component="h1"
          align="center"
          className={classes.title}
        >
          <Title />
        </Typography>
      </header>
      <main>{children}</main>
      <footer>
        <Grid container justify="center">
          <Grid item>
            <IconButton
              aria-label="Github"
              className={classes.linkButton}
              href="https://github.com/waigo001"
              target="_blank"
              rel="noreferrer"
            >
              <GitHub fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              aria-label="Twitter"
              className={classes.linkButton}
              href="https://twitter.com/waigo001"
              target="_blank"
              rel="noreferrer"
            >
              <Twitter fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              aria-label="Instagram"
              className={classes.linkButton}
              href="https://www.instagram.com/waigo001/"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
        <Typography align="center" className={classes.bottomText}>
          Copyright &copy; 2020 <Title />
        </Typography>
        <Typography align="center" className={classes.bottomText}>
          All rights reserved.
        </Typography>
      </footer>
    </MuiThemeProvider>
  )
}
indexPage.propTypes = {
  children: PropTypes.node.isRequired,
}

export default indexPage
