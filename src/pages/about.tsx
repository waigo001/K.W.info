import { Container, Heading } from "@chakra-ui/layout"
import { Image, Flex, Box } from "@chakra-ui/react"
import { graphql, PageProps } from "gatsby"
import React from "react"
import Layout from "../components/layout/blog"
import PostRenderer from "../components/postRenderer"
import SEO from "../components/seo"

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
const AboutPage: React.FC<PageProps<GatsbyTypes.AboutPageQuery>> = ({
  data,
}) => {
  return (
    <Layout>
      <SEO title="About" description={data.microcmsAbout?.description} />
      <Container maxW="md">
        <Flex justify="center">
          <Image
            alt="K.W."
            src={data.microcmsAbout?.image?.url}
            my="4"
            w="60%"
            h="60%"
          />
        </Flex>
        <Heading
          as="h1"
          fontSize="4xl"
          fontFamily="Josefin Sans"
          textAlign="center"
        >
          {data.microcmsAbout?.user}
        </Heading>
        <PostRenderer body={data.microcmsAbout?.body} />
      </Container>
    </Layout>
  )
}

export default AboutPage
