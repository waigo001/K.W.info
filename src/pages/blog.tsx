import {
  Container,
  createStyles,
  Grid,
  makeStyles,
  Paper,
  Theme,
} from "@material-ui/core"
import React from "react"
import Layout from "../components/layout/blog"
import SEO from "../components/seo"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      margin: theme.spacing(1),
    },
  })
)

const BlogPage = () => {
  const classes = useStyles()
  const items = []
  for (let i = 0; i < 3; i++) {
    items.push(
      <Grid item xs={12} key={i}>
        <Paper className={classes.paper}>xs=12</Paper>
      </Grid>
    )
  }
  return (
    <Layout>
      <SEO title="Blog" />
      <Container>
        <Grid container>{items}</Grid>
      </Container>
    </Layout>
  )
}

export default BlogPage
