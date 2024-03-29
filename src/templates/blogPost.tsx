import { graphql, PageProps } from "gatsby"
import React from "react"
import Layout from "../components/layout/blog"
import SEO from "../components/seo"
import Tag from "../components/tag"
import PostTime from "../components/postTime"
import { Divider, Flex, Text, useColorModeValue, Wrap } from "@chakra-ui/react"
import { FaTags } from "react-icons/fa"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import { PostRenderer } from "../components/postRenderer"

export const query = graphql`
  query BlogPost($id: String!) {
    mdx(id: { eq: $id }) {
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
      }
      body
      excerpt(truncate: true)
      tableOfContents
    }
  }
`

const BlogPost: React.VFC<PageProps<GatsbyTypes.BlogPostQuery>> = ({
  data,
}) => {
  const shadow = useColorModeValue(
    { base: "none", md: "md" },
    { base: "none", md: "xl" }
  )
  return (
    <Layout toc={data.mdx?.tableOfContents}>
      <SEO
        title={data.mdx?.frontmatter?.title}
        description={data.mdx?.excerpt}
      />
      <Flex
        direction="column"
        px={{ base: "0", sm: "4", md: "6" }}
        py="2"
        boxShadow={shadow}
        rounded="lg"
      >
        <PostTime
          updatedAt={data.mdx?.frontmatter?.UpdatedAt?.start}
          publishedAt={data.mdx?.frontmatter?.PublishedAt?.start}
        />
        <Text as="h1" fontSize="xl" fontWeight="semibold" my="2">
          {data.mdx?.frontmatter?.title}
        </Text>
        <Flex align="center" gridGap="2" my="2">
          <FaTags />
          <Text fontSize="sm">タグ</Text>
        </Flex>
        <Wrap spacing="2" my="2">
          {data.mdx?.frontmatter?.Tags ? (
            data.mdx?.frontmatter?.Tags.map(key => (
              <Tag name={key?.name} key={key?.id} id={key?.id} />
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
