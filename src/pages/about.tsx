import { Container, Heading, ListItem, UnorderedList } from "@chakra-ui/layout"
import { Flex, chakra } from "@chakra-ui/react"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/layout/blog"
import SEO from "../components/seo"

const AboutPage: React.VFC = () => {
  return (
    <Layout>
      <SEO title="About" description="K.W.infoについて" />
      <Container maxW="md">
        <Flex justify="center" my="6" alignContent="center">
          <Flex maxW="60vw">
            <StaticImage
              src="../images/favicon.png"
              alt="User Image"
              placeholder="blurred"
            />
          </Flex>
        </Flex>
        <Heading
          as="h1"
          fontSize="6xl"
          fontFamily="Josefin Sans"
          textAlign="center"
        >
          K.W.
        </Heading>
        <Heading as="h2" apply="mdx.h2">
          K.W.について
        </Heading>
        <UnorderedList>
          <ListItem>社会人</ListItem>
          <ListItem>カメラ</ListItem>
          <ListItem>コーヒー好き</ListItem>
          <ListItem>パソコン好き</ListItem>
          <ListItem>Vue.jsしか触れません(と思ってた)</ListItem>
        </UnorderedList>
        <Heading as="h2" apply="mdx.h2">
          このブログについて
        </Heading>
        <chakra.p apply="mdx.p">
          個人的なブログです。ただひたすら徒然なるようにひぐらししていいきます。
        </chakra.p>
      </Container>
    </Layout>
  )
}

export default AboutPage
