import {
  Box,
  chakra,
  Kbd,
  HTMLChakraProps,
  Alert,
  useColorModeValue,
} from "@chakra-ui/react"
import { MDXProviderComponentsProp } from "@mdx-js/react"
import React from "react"

const Table = (props: HTMLChakraProps<"table">) => (
  <chakra.div overflowX="auto">
    <chakra.table textAlign="left" mt="32px" width="full" {...props} />
  </chakra.div>
)

const THead = (props: HTMLChakraProps<"th">) => (
  <chakra.th
    bg={useColorModeValue("gray.50", "whiteAlpha.100")}
    fontWeight="semibold"
    p={2}
    fontSize="sm"
    {...props}
  />
)

const TData = (props: HTMLChakraProps<"td">) => (
  <chakra.td
    p={2}
    borderTopWidth="1px"
    borderColor="inherit"
    fontSize="sm"
    whiteSpace="normal"
    {...props}
  />
)

const LinkedHeading = (props: HTMLChakraProps<"h2">) => (
  <chakra.h2 data-group="" css={{ scrollMarginBlock: "6.875rem" }} {...props}>
    <span className="content">{props.children}</span>
    {props.id && (
      <chakra.a
        aria-label="anchor"
        color="teal.500"
        fontWeight="normal"
        outline="none"
        _focus={{ opacity: 1, boxShadow: "outline" }}
        opacity={0}
        _groupHover={{ opacity: 1 }}
        ml="0.375rem"
        href={`#${props.id}`}
      >
        #
      </chakra.a>
    )}
  </chakra.h2>
)

const InlineCode = (props: any) => (
  <chakra.code
    apply="mdx.code"
    color={useColorModeValue("cyan.600", "cyan.200")}
    fontFamily="mono"
    {...props}
  />
)

export const PostRenderer: MDXProviderComponentsProp = {
  h1: props => <chakra.h1 apply="mdx.h1" {...props} />,
  h2: props => <LinkedHeading apply="mdx.h2" {...props} />,
  h3: props => <LinkedHeading apply="mdx.h3" {...props} />,
  h4: props => <LinkedHeading as="h4" apply="mdx.h4" {...props} />,
  hr: props => <chakra.hr apply="mdx.hr" {...props} />,
  strong: props => <Box as="strong" fontWeight="semibold" {...props} />,
  inlineCode: InlineCode,
  pre: props => <chakra.div my="2em" borderRadius="sm" {...props} />,
  kbd: Kbd,

  table: Table,
  th: THead,
  td: TData,
  a: React.forwardRef((props: any, ref: any) => (
    <chakra.a ref={ref} apply="mdx.a" {...props} />
  )),
  p: props => <chakra.p apply="mdx.p" {...props} />,
  ul: props => <chakra.ul apply="mdx.ul" {...props} />,
  ol: props => <chakra.ol apply="mdx.ul" {...props} />,
  li: props => <chakra.li pb="4px" {...props} />,
  blockquote: props => (
    <Alert
      mt="4"
      role="none"
      variant="left-accent"
      as="blockquote"
      rounded="4px"
      my="1.5rem"
      colorScheme="gray"
      {...props}
    />
  ),
}
