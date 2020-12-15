/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      query BlogPaths {
        allMicrocmsBlogs {
          edges {
            node {
              slug
              id
            }
          }
        }
      }
    `
  )
  if (result.errors) {
    throw result.errors
  }

  result.data.allMicrocmsBlogs.edges.forEach(edge => {
    createPage({
      path: `/blog/${edge.node.slug}`,
      component: path.resolve("./src/templates/blogPost.tsx"),
      context: {
        id: edge.node.id,
      },
    })
  })
}
