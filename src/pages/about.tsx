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
      <h1>{data.microcmsAbout?.user}</h1>
      <PostRenderer body={data.microcmsAbout?.body} />
    </Layout>
  )
}

export default AboutPage
