import {
  Box,
  Button,
  ChakraComponent,
  ListItem,
  UnorderedList,
  Text,
} from "@chakra-ui/react"

import { Link } from "gatsby"

import React from "react"

export type TOC = Readonly<{ items?: TOCItems }>

export type TOCItems = {
  items?: TOCItems
  title: string
  url: string
}[]

const TOCItem: ChakraComponent<
  "ul",
  { items: TOCItems; onItemClick?: () => void }
> = ({ className, items, ml = 0, onItemClick }) => {
  return (
    <div>
      {ml === 0 && (
        <Text fontWeight="black" my="2">
          目次
        </Text>
      )}
      <UnorderedList
        spacing=".25rem"
        ml={ml}
        listStyleType="none"
        className={className}
      >
        {items.map(items => (
          <ListItem key={items.title}>
            <Link to={items.url}>
              <Button
                size="sm"
                variant="ghost"
                w="full"
                rounded="full"
                justifyContent="left"
                onClick={onItemClick}
              >
                {items.title}
              </Button>
            </Link>
            {items.items ? (
              <TOCItem
                ml="1rem"
                items={items.items}
                onItemClick={onItemClick}
              />
            ) : null}
          </ListItem>
        ))}
      </UnorderedList>
    </div>
  )
}

export type TableOfContentsProps = {
  onItemClick?: () => void
  toc: TOC
}

export const TableOfContents: React.VFC<TableOfContentsProps> = ({
  onItemClick,
  toc: { items = null },
}) =>
  items && (
    <Box pb="1rem">
      <TOCItem items={items} onItemClick={onItemClick} />
    </Box>
  )
