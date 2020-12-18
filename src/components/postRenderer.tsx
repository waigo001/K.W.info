import React from "react"
import rehypeReact from "rehype-react"
import unified from "unified"

import parser from "rehype-parse"
import rehypeSanitize from "rehype-sanitize"
// @ts-ignore
import github from "hast-util-sanitize/lib/github"
import merge from "deepmerge"

const schema = merge(github, { attributes: { blockquote: ["className"] } })

const processor = unified()
  .use(parser, { fragment: true })
  .use(rehypeReact, {
    createElement: React.createElement,
    Fragment: React.Fragment,
  })
  .use(rehypeSanitize, schema)

const render = (html: string) =>
  processor.processSync(html).result as React.ReactElement

const PostRenderer: React.FC<{ body?: string }> = ({ body = "" }) => (
  <div>{render(body)}</div>
)

export default PostRenderer
