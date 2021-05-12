import React from "react"
import Layout from "../components/layout/home"
import SEO from "../components/seo"

import { Container } from "@material-ui/core"

import Carousel from "../components/carousel"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" titleTemplate="K.W.info" />
      <Container maxWidth="md" disableGutters>
        <Carousel />
      </Container>
    </Layout>
  )
}

export default IndexPage
