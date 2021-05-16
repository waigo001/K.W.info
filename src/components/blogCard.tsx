import React, { useState } from "react"
import PostTime from "./postTime"
import Tag from "./tag"
import { graphql, Link, useStaticQuery } from "gatsby"
import CopyToClipBoard from "react-copy-to-clipboard"
const BlogCard: React.FC<{
  step: Pick<
    GatsbyTypes.MicrocmsBlogs,
    "title" | "slug" | "body" | "description" | "publishedAt" | "updatedAt"
  > & {
    readonly tags: GatsbyTypes.Maybe<
      readonly GatsbyTypes.Maybe<
        Pick<GatsbyTypes.MicrocmsBlogsTags, "title" | "slug">
      >[]
    >
  }
  url: string | undefined
}> = ({ step, url }) => {
  const [openTip, setOpenTip] = useState<boolean>(false)

  const handleCloseTip = (): void => {
    setOpenTip(false)
  }

  const handleClickButton = (): void => {
    setOpenTip(true)
  }

  return (
    <div>
      <div>
        <div>
          <PostTime updatedAt={step.updatedAt} publishedAt={step.publishedAt} />
        </div>
        <Link to={`/blog/${step.slug}`}>{step.title}</Link>
        <div>タグ</div>
        <div>
          {step.tags !== undefined ? (
            step.tags.map(key => <Tag props={key} key={key?.title} />)
          ) : (
            <></>
          )}
        </div>
      </div>
      <div>
        <a
          aria-label="twitter"
          href={
            `http://twitter.com/share?url=` +
            url +
            `/blog/` +
            step.slug +
            `&hashtags=kwinfo` +
            `&text=` +
            step.title
          }
          target="_blank"
          rel="noreferrer"
        />

        <a title="Copied!"></a>
      </div>
    </div>
  )
}

export default BlogCard
