import { format, parseISO } from "date-fns"
import { GatsbyNode } from "gatsby"
import Path from "path"

const BlogPostTemplate = Path.resolve("./src/templates/blogPost.tsx")
const BlogTemplate = Path.resolve("./src/templates/blog.tsx")

export type GatsbyNodeQuery = {
  readonly allMdx: {
    readonly nodes: ReadonlyArray<
      Pick<GatsbyTypes.Mdx, "id"> & {
        readonly frontmatter: GatsbyTypes.Maybe<
          Pick<GatsbyTypes.MdxFrontmatter, "slug"> & {
            readonly PublishedAt: GatsbyTypes.Maybe<
              Pick<GatsbyTypes.MdxFrontmatterPublishedAt, "start">
            >
          }
        >
      }
    >
  }
}

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions: { createPage },
  reporter,
}) => {
  createPage({
    path: "/blog",
    component: BlogTemplate,
    context: {
      statusList:
        process.env.NODE_ENV === "production"
          ? ["Public"]
          : ["Public", "Private"],
    },
  })

  const result = await graphql<GatsbyNodeQuery>(
    /* GraphQL */ `
      query BlogPaths($statusList: [String!]!) {
        allMdx(
          filter: { frontmatter: { Status: { name: { in: $statusList } } } }
        ) {
          nodes {
            id
            frontmatter {
              slug
              PublishedAt {
                start
              }
            }
          }
        }
      }
    `,
    {
      statusList:
        process.env.NODE_ENV === "production"
          ? ["Public"]
          : ["Public", "Private"],
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

  for (const { frontmatter, id } of allMdx.nodes) {
    const slug =
      format(
        parseISO(frontmatter?.PublishedAt?.start || "19700101T000000Z"),
        "yyyy-MM-dd"
      ) +
      "-" +
      frontmatter?.slug

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
