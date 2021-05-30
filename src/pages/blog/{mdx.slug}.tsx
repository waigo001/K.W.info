import { graphql, PageProps } from "gatsby"
import React from "react"
import Layout from "../../components/layout/blog"
import SEO from "../../components/seo"
import Tag from "../../components/tag"
import PostTime from "../../components/postTime"
import { Divider, Flex, Text, Wrap } from "@chakra-ui/react"
import { FaTags } from "react-icons/fa"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import { PostRenderer } from "../../components/postRenderer"

export const query = graphql`
  query BlogPost($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        createdAt
        updatedAt
        tags
        title
      }
      body
      excerpt(truncate: true)
    }
  }
`

const BlogPost: React.VFC<PageProps<GatsbyTypes.BlogPostQuery>> = ({
  data,
}) => {
  return (
    <Layout>
      <SEO
        title={data.mdx?.frontmatter?.title}
        description={data.mdx?.excerpt}
      />
      <Flex
        direction="column"
        p="4"
        boxShadow={{ base: "none", md: "lg" }}
        rounded="lg"
      >
        <PostTime
          updatedAt={data.mdx?.frontmatter?.updatedAt}
          publishedAt={data.mdx?.frontmatter?.createdAt}
        />
        <Text fontSize="xl" fontWeight="bold" my="2">
          {data.mdx?.frontmatter?.title}
        </Text>
        <Flex align="center" gridGap="2" my="2">
          <FaTags />
          <Text fontSize="sm">タグ</Text>
        </Flex>
        <Wrap spacing="2" my="2">
          {data.mdx?.frontmatter?.tags !== undefined ? (
            data.mdx?.frontmatter?.tags.map(key => (
              <Tag props={key} key={key} />
            ))
          ) : (
            <></>
          )}
        </Wrap>
        <Divider my="2" />
        <MDXProvider components={PostRenderer}>
          <MDXRenderer>{data.mdx?.body ? data.mdx?.body : ""}</MDXRenderer>
        </MDXProvider>
      </Flex>
    </Layout>
  )
}

export default BlogPost
