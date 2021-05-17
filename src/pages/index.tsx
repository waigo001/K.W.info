import React from "react"
import Layout from "../components/layout/home"
import SEO from "../components/seo"
import Carousel from "../components/carousel"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" titleTemplate="K.W.info" />

      <Carousel />
    </Layout>
  )
}

export default IndexPage
