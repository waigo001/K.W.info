import {
  Avatar,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core"
import { graphql, PageProps } from "gatsby"
import React from "react"
import Layout from "../components/layout/blog"
import PostRenderer from "../components/postRenderer"
import SEO from "../components/seo"
import theme from "../styles/theme"

export const query = graphql`
  query AboutPage {
    microcmsAbout {
      body
      description
      updatedAt
      user
      image {
        url
      }
    }
  }
`
const useStyles = makeStyles({
  icon: {
    width: "60%",
    height: "60%",
    maxWidth: "320px",
    margin: theme.spacing(1),
  },
  user: {
    fontFamily: "Josefin Sans",
    fontWeight: 700,
    fontSize: "4rem",
  },
})

const AboutPage: React.FC<PageProps<GatsbyTypes.AboutPageQuery>> = ({
  data,
}) => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="About" description={data.microcmsAbout?.description} />
      <Container maxWidth="md">
        <Grid container justify="center" alignItems="center" direction="column">
          <Grid item container justify="center">
            <Avatar
              alt="User Image"
              src={data.microcmsAbout?.image?.url}
              className={classes.icon}
            />
          </Grid>
          <Grid item>
            <Typography align="center" className={classes.user}>
              {data.microcmsAbout?.user}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={8}>
            <PostRenderer body={data.microcmsAbout?.body} />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

export default AboutPage
