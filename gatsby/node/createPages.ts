import { GatsbyNode } from "gatsby"
import Path from "path"

const BlogPostTemplate = Path.resolve("./src/templates/blogPost.tsx")

export type GatsbyNodeQuery = {
  readonly allMdx: {
    readonly nodes: ReadonlyArray<Pick<GatsbyTypes.Mdx, "id" | "slug">>
  }
}

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions: { createPage },
  reporter,
}) => {
  const result = await graphql<GatsbyNodeQuery>(
    /* GraphQL */ `
      query BlogPaths($statusList: [String!]!) {
        allMdx(filter: { frontmatter: { status: { in: $statusList } } }) {
          nodes {
            id
            slug
          }
        }
      }
    `,
    {
      statusList:
        process.env.NODE_ENV === "production"
          ? ["public"]
          : ["public", "private"],
    }
  )

  if (result.errors) {
    reporter.panicOnBuild(result.errors)
    return
  }

  if (!result.data) {
    reporter.panicOnBuild("result.data is undefined")
    return
  }

  const { allMdx } = result.data

  for (const { slug, id } of allMdx.nodes) {
    console.info(`  "creating BlogPostPage - ${slug}`)
    createPage({
      path: `/blog/${slug}`,
      component: BlogPostTemplate,
      context: {
        id,
      },
    })
  }
}
