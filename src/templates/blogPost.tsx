import { graphql, PageProps } from "gatsby"
import React from "react"
import Layout from "../components/layout/blog"
import SEO from "../components/seo"
import Tag from "../components/tag"
import PostTime from "../components/postTime"
import PostRenderer from "../components/postRenderer"

export const query = graphql`
  query BlogPost($id: String!) {
    microcmsBlogs(id: { eq: $id }) {
      body
      publishedAt
      slug
      tags {
        slug
        title
      }
      title
      updatedAt
      description
    }
  }
`

const BlogPost: React.FC<PageProps<GatsbyTypes.BlogPostQuery>> = ({ data }) => {
  return (
    <Layout>
      <SEO
        title={data.microcmsBlogs?.title}
        description={data.microcmsBlogs?.description}
      />
      <div>
        <div>
          <div>
            <PostTime
              updatedAt={data.microcmsBlogs?.updatedAt}
              publishedAt={data.microcmsBlogs?.publishedAt}
            />
          </div>
          <h1>{data.microcmsBlogs?.title}</h1>
          <div>タグ</div>
          <div>
            {data.microcmsBlogs?.tags !== undefined ? (
              data.microcmsBlogs?.tags.map(key => (
                <Tag props={key} key={key?.title} />
              ))
            ) : (
              <></>
            )}
          </div>
          <PostRenderer body={data.microcmsBlogs?.body} />
        </div>
      </div>
    </Layout>
  )
}

export default BlogPost
