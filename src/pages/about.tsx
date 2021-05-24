import { Container, Heading, ListItem, OrderedList } from "@chakra-ui/layout"
import { Text, Flex } from "@chakra-ui/react"
import { graphql, PageProps } from "gatsby"
import React from "react"
import Layout from "../components/layout/blog"
import SEO from "../components/seo"

export const query = graphql`
  query AboutPage {
    image: file(relativePath: { eq: "favicon.png" }) {
      childrenImageSharp {
        fluid(maxWidth: 512) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const AboutPage: React.VFC<PageProps<GatsbyTypes.AboutPageQuery>> = ({
  data,
}) => {
  return (
    <Layout>
      <SEO title="About" description="K.W.infoについて" />
      <Container maxW="md">
        <Flex justify="center">
          {/*<Image alt="K.W." src={kwimage} my="4" w="60%" h="60%" />*/}
        </Flex>
        <Heading
          as="h1"
          fontSize="4xl"
          fontFamily="Josefin Sans"
          textAlign="center"
        >
          K.W.
        </Heading>
        <Heading as="h2">K.W.について</Heading>
        <OrderedList>
          <ListItem>社会人</ListItem>
          <ListItem>カメラ</ListItem>
          <ListItem>コーヒー好き</ListItem>
          <ListItem>パソコン好き</ListItem>
          <ListItem>Vue.jsしか触れません(と思ってた)</ListItem>
        </OrderedList>
        <Heading as="h2">このブログについて</Heading>
        <Text>
          個人的なブログです。ただひたすら徒然なるようにひぐらししていいきます。
        </Text>
      </Container>
    </Layout>
  )
}

export default AboutPage
