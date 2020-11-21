import {
  AppBar,
  CssBaseline,
  Hidden,
  IconButton,
  makeStyles,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@material-ui/core"
import { GitHub, Instagram, Twitter } from "@material-ui/icons"

import PropTypes from "prop-types"
import React from "react"
import theme from "../../styles/theme"
import Title from "../title"

const useStyles = makeStyles({
  spacer: {
    margin: theme.spacing(1),
  },

  bottomAppbar: {
    width: "100%",
    position: "fixed",
    top: "auto",
    bottom: 0,
  },
  title: {
    fontSize: "2rem",
    flexGrow: 1,
    textAlign: "center",
  },
  bottomText: {
    fontSize: "0.75rem",
    fontWeight: 700,
    color: theme.palette.text.secondary,
    letterSpacing: "2px",
    flexGrow: 1,
  },
})

const indexPage = ({ children }) => {
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar color="transparent">
        <Toolbar variant="dense">
          <div className={classes.title}>
            <Title />
          </div>
        </Toolbar>
      </AppBar>

      <main>
        <Toolbar variant="dense" />
        {children}
      </main>
      <footer className={classes.bottomAppbar}>
        <Toolbar variant="dense">
          <Typography className={classes.bottomText}>
            <Hidden xsDown>Copyright</Hidden> &copy; 2020 <Title />
            <Hidden xsDown>
              <span className={classes.spacer}>All rights reserved.</span>
            </Hidden>
          </Typography>

          <IconButton
            aria-label="Github"
            href="https://github.com/waigo001"
            target="_blank"
            rel="noreferrer"
          >
            <GitHub />
          </IconButton>

          <IconButton
            aria-label="Twitter"
            href="https://twitter.com/waigo001"
            target="_blank"
            rel="noreferrer"
          >
            <Twitter />
          </IconButton>

          <IconButton
            aria-label="Instagram"
            href="https://www.instagram.com/waigo001/"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram />
          </IconButton>
        </Toolbar>
      </footer>
    </ThemeProvider>
  )
}

indexPage.propTypes = {
  children: PropTypes.node.isRequired,
}

export default indexPage
