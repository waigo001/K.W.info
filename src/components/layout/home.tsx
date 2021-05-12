import {
  Button,
  CssBaseline,
  Grid,
  IconButton,
  makeStyles,
  ThemeProvider,
  Typography,
} from "@material-ui/core"
import { GitHub, Instagram, Twitter } from "@material-ui/icons"
import React, { ReactNode } from "react"
import theme from "../../styles/theme"
import Title from "../title"
import { Link } from "gatsby"

import TodayIcon from "@material-ui/icons/Today"
import InfoIcon from "@material-ui/icons/Info"

type Props = {
  children: ReactNode
}

const useStyles = makeStyles({
  title: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(2),
    fontWeight: 700,
  },
  linkButton: {
    color: theme.palette.text.primary,
    margin: theme.spacing(1),
  },
  bottomText: {
    margin: theme.spacing(3),
    fontSize: "0.75rem",
    fontWeight: 700,
    letterSpacing: "2px",
  },
})

const indexPage: React.VFC<Props> = ({ children }) => {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <header>
        <Typography
          variant="h2"
          component="h1"
          align="center"
          className={classes.title}
        >
          <Title />
        </Typography>
        <nav>
          <Grid container justify="center">
            <Grid item>
              <Button
                className={classes.button}
                size="large"
                startIcon={<TodayIcon />}
                component={Link}
                to="/blog"
              >
                Blog
              </Button>
            </Grid>
            <Grid item>
              <Button
                className={classes.button}
                size="large"
                startIcon={<InfoIcon />}
                component={Link}
                to="/about"
              >
                About
              </Button>
            </Grid>
          </Grid>
        </nav>
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
              href="https://www.instagram.com/waigo001"
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
    </ThemeProvider>
  )
}

export default indexPage
