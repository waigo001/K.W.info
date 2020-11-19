import React from "react"
import Layout from "../components/layout/home"
import SEO from "../components/seo"

import TodayIcon from "@material-ui/icons/Today"
import InfoIcon from "@material-ui/icons/Info"
import {
  Button,
  Container,
  createStyles,
  Grid,
  makeStyles,
  Theme,
} from "@material-ui/core"

import Carousel from "../components/carousel"
import { Link } from "gatsby"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(2),
      color: theme.palette.text.secondary,
      fontWeight: 700,
    },
  })
)

const IndexPage = () => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Home" />

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
      <Container maxWidth="md" disableGutters>
        <Carousel />
      </Container>
    </Layout>
  )
}

export default IndexPage
