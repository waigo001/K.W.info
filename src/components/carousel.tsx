import { graphql, useStaticQuery } from "gatsby"
import React from "react"


const Carousel: React.FC = () => {
  const data = useStaticQuery<GatsbyTypes.BlogsQuery>(graphql`
    query Blogs {
      allMicrocmsBlogs(limit: 3, sort: { fields: updatedAt, order: DESC }) {
        nodes {
          body
          description
          slug
          tags {
            slug
            title
          }
          title
          publishedAt
        }
      }
    }
  `)

  let maxSteps = 3
  if (data.allMicrocmsBlogs.nodes.length < 3)
    maxSteps = data.allMicrocmsBlogs.nodes.length


  return (
    <>
    </>
  )
}

export default Carousel
