import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core"
import { graphql, PageProps } from "gatsby"
import React from "react"
import Layout from "../components/layout/blog"
import SEO from "../components/seo"
import theme from "../styles/theme"
import LocalOfferIcon from "@material-ui/icons/LocalOffer"
import Tag from "../components/tag"
import PostTime from "../components/postTime"
import PostRenderer from "../components/postRenderer"

export const query = graphql`
  query BlogPost($id: String!) {
    microcmsBlogs(id: { eq: $id }) {
      body
      publishedAt
      slug
      tags {
        slug
        title
      }
      title
      updatedAt
      description
    }
  }
`

const useStyles = makeStyles({
  card: {},
  cardTitle: {
    margin: theme.spacing(0.5),
    fontSize: "1.5rem",
    color: theme.palette.text.primary,
    fontWeight: 700,
  },
  timeIcon: {
    marginRight: theme.spacing(0.5),
    marginLeft: theme.spacing(0.5),
    fontSize: "1rem",
  },
})

const BlogPost: React.FC<PageProps<GatsbyTypes.BlogPostQuery>> = ({ data }) => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO
        title={data.microcmsBlogs?.title}
        description={data.microcmsBlogs?.description}
      />
      <Container maxWidth="lg">
        <Grid container justify="center">
          <Grid item xs={12} sm={8}>
            <Card className={classes.card}>
              <CardContent>
                <Box
                  color="text.secondary"
                  display="flex"
                  alignItems="center"
                  fontSize="small"
                  marginBottom={1}
                >
                  <PostTime
                    updatedAt={data.microcmsBlogs?.updatedAt}
                    publishedAt={data.microcmsBlogs?.publishedAt}
                  />
                </Box>
                <Typography className={classes.cardTitle} component="h1">
                  {data.microcmsBlogs?.title}
                </Typography>
                <Box
                  color="text.secondary"
                  display="flex"
                  alignItems="center"
                  fontSize="small"
                  marginTop={2}
                  marginBottom={1}
                >
                  <LocalOfferIcon className={classes.timeIcon} />
                  タグ
                </Box>
                <Box>
                  {data.microcmsBlogs?.tags !== undefined ? (
                    data.microcmsBlogs?.tags.map(key => (
                      <Tag props={key} key={key?.title} />
                    ))
                  ) : (
                    <></>
                  )}
                </Box>
              </CardContent>
              <Divider />
              <CardContent>
                <PostRenderer body={data.microcmsBlogs?.body} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

export default BlogPost
