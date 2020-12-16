import { Container, Grid, makeStyles } from "@material-ui/core"

import React from "react"
import Layout from "../components/layout/blog"
import SEO from "../components/seo"
import theme from "../styles/theme"
import { graphql, PageProps } from "gatsby"
import BlogCard from "../components/blogCard"

export const query = graphql`
  query BlogPages {
    allMicrocmsBlogs(sort: { fields: updatedAt, order: DESC }) {
      nodes {
        body
        description
        slug
        tags {
          slug
          title
        }
        title
        publishedAt
        updatedAt
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`

const useStyles = makeStyles({
  container: {
    padding: theme.spacing(1),
  },
})

const BlogPage: React.FC<PageProps<GatsbyTypes.BlogPagesQuery>> = ({
  data,
}) => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Blog" description="日常的なブログの一覧" />
      <Container maxWidth="md" className={classes.container}>
        <Grid container spacing={2}>
          {data.allMicrocmsBlogs.nodes.map(step => (
            <Grid item xs={12} sm={6} md={4} key={step.title}>
              <BlogCard
                step={step}
                key={step.slug}
                url={data.site?.siteMetadata?.siteUrl}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  )
}

export default BlogPage
