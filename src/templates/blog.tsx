import React from "react"
import Layout from "../components/layout/blog"
import SEO from "../components/seo"
import { graphql, PageProps } from "gatsby"
import BlogCard from "../components/blogCard"
import { SimpleGrid } from "@chakra-ui/react"

export const query = graphql`
  query BlogPages($statusList: [String!]!) {
    allMdx(
      sort: { fields: frontmatter___UpdatedAt___start, order: DESC }
      filter: { frontmatter: { Status: { name: { in: $statusList } } } }
    ) {
      nodes {
        id
        frontmatter {
          title
          Tags {
            name
            id
          }
          PublishedAt {
            start
          }
          UpdatedAt {
            start
          }
          slug
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`

const BlogPage: React.VFC<PageProps<GatsbyTypes.BlogPagesQuery>> = ({
  data,
}) => {
  return (
    <Layout>
      <SEO title="Blog" description="日常的なブログの一覧" />
      <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={4}>
        {data.allMdx.nodes.map(node => (
          <BlogCard
            node={node}
            key={node.id}
            url={data.site?.siteMetadata?.siteUrl}
          />
        ))}
      </SimpleGrid>
    </Layout>
  )
}

export default BlogPage
