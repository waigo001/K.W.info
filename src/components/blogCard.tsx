import React from "react"
import PostTime from "./postTime"
import Tag from "./tag"
import { Link } from "gatsby"
import {
  Flex,
  IconButton,
  Link as OtherLink,
  Spacer,
  Text,
  Tooltip,
  useClipboard,
  useColorModeValue,
  Wrap,
} from "@chakra-ui/react"
import { FaClipboard, FaTags, FaTwitter } from "react-icons/fa"

type Props = {
  node: Pick<GatsbyTypes.Mdx, "id" | "slug"> & {
    readonly frontmatter: GatsbyTypes.Maybe<
      Pick<
        GatsbyTypes.MdxFrontmatter,
        "title" | "tags" | "createdAt" | "updatedAt"
      >
    >
  }
  url?: string
}

const BlogCard: React.VFC<Props> = ({ node, url }) => {
  const { hasCopied, onCopy } = useClipboard(
    url ? url + `/blog/` + node.slug : ""
  )

  const bg = useColorModeValue("white", "gray.800")
  const shadow = useColorModeValue("md", "xl")

  return (
    <Flex
      direction="column"
      bg={bg}
      boxShadow={shadow}
      p="4"
      rounded="lg"
      h="100%"
    >
      <PostTime
        updatedAt={node.frontmatter?.updatedAt}
        publishedAt={node.frontmatter?.createdAt}
      />
      <Flex my="2">
        <Text
          as={Link}
          to={`/blog/${node.slug}`}
          fontSize="xl"
          fontWeight="semibold"
        >
          {node.frontmatter?.title}
        </Text>
      </Flex>
      <Flex align="center" gridGap="2" my="2">
        <FaTags />
        <Text fontSize="sm">タグ</Text>
      </Flex>
      <Wrap spacing="2" my="2">
        {node.frontmatter?.tags ? (
          node.frontmatter?.tags.map(key => <Tag props={key} key={key} />)
        ) : (
          <></>
        )}
      </Wrap>
      <Flex flexGrow={1} />
      <Flex top="auto" bottom="0" gridGap="2" align="center">
        <Spacer />
        <OtherLink
          href={
            `http://twitter.com/share?url=` +
            url +
            `/blog/` +
            node.slug +
            `&hashtags=kwinfo` +
            `&text=` +
            node.frontmatter?.title
          }
          isExternal
        >
          <IconButton
            aria-label="share-to-twitter"
            isRound
            variant="ghost"
            icon={<FaTwitter />}
          />
        </OtherLink>

        <Tooltip hasArrow isOpen={hasCopied} placement="top" label="Copied!!">
          <IconButton
            aria-label="copy-to-clipboard"
            isRound
            variant="ghost"
            icon={<FaClipboard />}
            onClick={onCopy}
          />
        </Tooltip>
      </Flex>
    </Flex>
  )
}

export default BlogCard
