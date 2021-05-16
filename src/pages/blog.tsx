import React from "react"
import Layout from "../components/layout/blog"
import SEO from "../components/seo"
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

const BlogPage: React.FC<PageProps<GatsbyTypes.BlogPagesQuery>> = ({
  data,
}) => {
  return (
    <Layout>
      <SEO title="Blog" description="日常的なブログの一覧" />
      {data.allMicrocmsBlogs.nodes.map(step => (
        <BlogCard
          step={step}
          key={step.slug}
          url={data.site?.siteMetadata?.siteUrl}
        />
      ))}
    </Layout>
  )
}

export default BlogPage
