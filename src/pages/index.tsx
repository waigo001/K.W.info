import React from "react"
import Layout from "../components/layout/home"
import SEO from "../components/seo"

import Carousel from "../components/carousel"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" titleTemplate="K.W.info" />

      <Link to="/blog">Blog</Link>
      <Link to="/about">About</Link>
      <Carousel />
    </Layout>
  )
}

export default IndexPage
