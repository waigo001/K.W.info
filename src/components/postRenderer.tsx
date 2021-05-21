import React from "react"
import rehypeReact from "rehype-react"
import unified from "unified"

import parser from "rehype-parse"
import rehypeSanitize from "rehype-sanitize"
// @ts-ignore
import github from "hast-util-sanitize/lib/github"
import merge from "deepmerge"
import {
  Heading,
  Text,
  TypographyProps,
  UnorderedList,
  ListItem,
  OrderedList,
  Link,
  Icon,
  Flex,
} from "@chakra-ui/react"
import { FaExternalLinkAlt } from "react-icons/fa"

const schema = merge(github, { attributes: { blockquote: ["className"] } })

const processor = unified()
  .use(parser, { fragment: true })
  .use(rehypeReact, {
    createElement: React.createElement,
    components: {
      h1: (props: TypographyProps) => {
        return <Heading as="h1" size="xl" {...props} my="4" />
      },
      h2: (props: TypographyProps) => {
        return <Heading as="h2" size="md" {...props} my="4" />
      },
      h3: (props: TypographyProps) => {
        return <Heading as="h3" size="sm" {...props} my="3" />
      },
      h4: (props: TypographyProps) => {
        return <Heading as="h4" size="sm" {...props} my="2" />
      },
      h5: (props: TypographyProps) => {
        return <Heading as="h5" size="xs" {...props} my="2" />
      },
      ul: (props: TypographyProps) => {
        return <UnorderedList my="1" {...props} />
      },
      ol: () => {
        return <OrderedList my="1" />
      },
      li: ListItem,
      //@ts-ignore
      a: ({ children, ...props }: { children: React.ReactNode }) => (
        <Link mx="1" {...props}>
          <Text as="ins" color="teal">
            {children} <Icon as={FaExternalLinkAlt} mx="1" />
          </Text>
        </Link>
      ),
      p: Text,
    },
  })
  .use(rehypeSanitize, schema)

const render = (html: string) =>
  processor.processSync(html).result as React.ReactElement

const PostRenderer: React.FC<{ body?: string }> = ({ body = "" }) => (
  <div>{render(body)}</div>
)

export default PostRenderer
