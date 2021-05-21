import { graphql, PageProps } from "gatsby"
import React from "react"
import Layout from "../components/layout/blog"
import SEO from "../components/seo"
import Tag from "../components/tag"
import PostTime from "../components/postTime"
import PostRenderer from "../components/postRenderer"
import { Divider, Flex, Text, Wrap } from "@chakra-ui/react"
import { FaTags } from "react-icons/fa"

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

const BlogPost: React.FC<PageProps<GatsbyTypes.BlogPostQuery>> = ({ data }) => {
  return (
    <Layout>
      <SEO
        title={data.microcmsBlogs?.title}
        description={data.microcmsBlogs?.description}
      />
      <Flex direction="column" p="4" boxShadow="xs" rounded="lg">
        <PostTime
          updatedAt={data.microcmsBlogs?.updatedAt}
          publishedAt={data.microcmsBlogs?.publishedAt}
        />
        <Text fontSize="xl" fontWeight="bold" my="2">
          {data.microcmsBlogs?.title}
        </Text>
        <Flex align="center" gridGap="2" my="2">
          <FaTags />
          <Text fontSize="sm">タグ</Text>
        </Flex>
        <Wrap spacing="2" my="2">
          {data.microcmsBlogs?.tags !== undefined ? (
            data.microcmsBlogs?.tags.map(key => (
              <Tag props={key} key={key?.title} />
            ))
          ) : (
            <></>
          )}
        </Wrap>
        <Divider my="2" />
        <PostRenderer body={data.microcmsBlogs?.body} />
      </Flex>
    </Layout>
  )
}

export default BlogPost
