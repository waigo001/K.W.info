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
  Divider,
  useColorModeValue,
  Box,
} from "@chakra-ui/react"
import { FaExternalLinkAlt } from "react-icons/fa"

const schema = merge(github, { attributes: { blockquote: ["className"] } })

const processor = unified()
  .use(parser, { fragment: true })
  .use(rehypeReact, {
    createElement: React.createElement,
    components: {
      h1: ({ children, ...props }: any) => {
        return (
          <>
            <Heading
              as="h1"
              size="2xl"
              fontWeight="600"
              {...props}
              mt="6"
              mb="1"
            >
              {children}
            </Heading>
            <Divider mt="1" mb="4" />
          </>
        )
      },
      h2: ({ children, ...props }: any) => {
        return (
          <>
            <Heading
              as="h2"
              fontSize="1.5em"
              fontWeight="600"
              {...props}
              mt="6"
              mb="1"
            >
              {children}
            </Heading>
            <Divider mt="1" mb="4" />
          </>
        )
      },
      h3: (props: TypographyProps) => {
        return (
          <Heading
            as="h3"
            fontSize="1.25em"
            fontWeight="600"
            {...props}
            mt="6"
            mb="4"
          />
        )
      },
      h4: (props: TypographyProps) => {
        return (
          <Heading
            as="h4"
            fontSize="1em"
            fontWeight="600"
            {...props}
            mt="6"
            mb="4"
          />
        )
      },
      h5: (props: TypographyProps) => {
        return (
          <Heading
            as="h5"
            fontSize=".875em"
            fontWeight="600"
            {...props}
            mt="6"
            mb="4"
          />
        )
      },
      h6: (props: TypographyProps) => {
        return (
          <Heading
            as="h6"
            fontSize=".85em"
            fontWeight="600"
            {...props}
            mt="6"
            mb="4"
          />
        )
      },
      ul: (props: TypographyProps) => {
        return <UnorderedList my="1" {...props} />
      },
      ol: (props: TypographyProps) => {
        return <OrderedList my="1" {...props} />
      },
      li: ListItem,
      a: ({ children, ...props }: any) => {
        const linkColor = useColorModeValue("cyan.700", "cyan.300")

        return (
          <Link mx="1" {...props}>
            <Text as="ins" color={linkColor}>
              {children} <Icon as={FaExternalLinkAlt} mx="1" />
            </Text>
          </Link>
        )
      },
      p: (props: TypographyProps) => {
        return <Text {...props} mb="4" />
      },
      blockquote: ({ children, ...props }: any) => {
        const color = useColorModeValue("gray.500", "gray.400")

        return (
          <Box
            as="blockquote"
            {...props}
            px="1em"
            color={color}
            borderLeftWidth=".25em"
            borderLeftStyle="solid"
            borderLeftColor={color}
          >
            {children}
          </Box>
        )
      },
    },
  })
  .use(rehypeSanitize, schema)

const render = (html: string) =>
  processor.processSync(html).result as React.ReactElement

const PostRenderer: React.FC<{ body?: string }> = ({ body = "" }) => (
  <div>{render(body)}</div>
)

export default PostRenderer
