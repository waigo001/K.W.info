import {
  chakra,
  Code,
  ListItem,
  OrderedList,
  Table,
  Td,
  Th,
  Tr,
  UnorderedList,
} from "@chakra-ui/react"

export const PostRenderer = {
  code: Code,
  ul: chakra(UnorderedList, { baseStyle: { mb: ".5rem" } }),
  ol: OrderedList,
  li: ListItem,
  table: Table,
  tr: Tr,
  th: Th,
  td: Td,
  h1: chakra("h1", {
    baseStyle: {
      fontSize: "2rem",
      fontWeight: "600",
      borderBottomWidth: "1px",
      borderColor: "gray.600",
      pb: ".5rem",
      marginY: "1.5rem",
    },
  }),
  h2: chakra("h2", {
    baseStyle: {
      fontSize: "1.5rem",
      fontWeight: "600",
      borderBottomWidth: "1px",
      borderColor: "gray.600",
      pb: ".5rem",
      marginY: "1rem",
    },
  }),
  h3: chakra("h3", { baseStyle: { fontSize: "1.25rem", marginY: "0.625rem" } }),
  p: chakra("p", {}),
  blockquote: chakra("blockquote", {
    baseStyle: {
      borderLeft: "2px",
      borderColor: "gray.500",
      pl: "1rem",
      pr: ".5rem",
      my: ".5rem",
      py: ".25rem",
    },
  }),
}
