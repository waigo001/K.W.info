import { GatsbyNode } from "gatsby"
import Path from "path"

const BlogPostTemplate = Path.resolve("./src/templates/blogPost.tsx")

export type GatsbyNodeQuery = {
  readonly allMdx: {
    readonly edges: ReadonlyArray<{
      readonly node: Pick<GatsbyTypes.Mdx, "id" | "slug">
    }>
  }
}

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions: { createPage },
  reporter,
}) => {
  const result = await graphql<GatsbyNodeQuery>(/* GraphQL */ `
    query BlogPaths {
      allMdx {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(result.errors)
    return
  }

  if (!result.data) {
    reporter.panicOnBuild("result.data is undefined")
    return
  }

  const { allMdx } = result.data

  for (const { node } of allMdx.edges) {
    console.info(`  "creating BlogPostPage - ${node.slug}`)
    createPage({
      path: `/blog/${node.slug}`,
      component: BlogPostTemplate,
      context: {
        id: node.id,
      },
    })
  }
}
