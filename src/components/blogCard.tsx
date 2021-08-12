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
import { format, parseISO } from "date-fns"

type Props = {
  node: Pick<GatsbyTypes.Mdx, "id"> & {
    readonly frontmatter: GatsbyTypes.Maybe<
      Pick<GatsbyTypes.MdxFrontmatter, "title" | "slug"> & {
        readonly Tags: GatsbyTypes.Maybe<
          ReadonlyArray<
            GatsbyTypes.Maybe<
              Pick<GatsbyTypes.MdxFrontmatterTags, "name" | "id">
            >
          >
        >
        readonly PublishedAt: GatsbyTypes.Maybe<
          Pick<GatsbyTypes.MdxFrontmatterPublishedAt, "start">
        >
        readonly UpdatedAt: GatsbyTypes.Maybe<
          Pick<GatsbyTypes.MdxFrontmatterUpdatedAt, "start">
        >
      }
    >
  }
  url?: string
}

const BlogCard: React.VFC<Props> = ({ node, url }) => {
  const slug =
    format(
      parseISO(node.frontmatter?.PublishedAt?.start || "19700101T000000Z"),
      "yyyy-MM-dd"
    ) +
    "-" +
    node.frontmatter?.slug

  const { hasCopied, onCopy } = useClipboard(url ? url + `/blog/` + slug : "")

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
        updatedAt={node.frontmatter?.UpdatedAt?.start}
        publishedAt={node.frontmatter?.PublishedAt?.start}
      />
      <Flex my="2">
        <Text
          as={Link}
          to={`/blog/${slug}`}
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
        {node.frontmatter?.Tags ? (
          node.frontmatter?.Tags.map(key => (
            <Tag name={key?.name} key={key?.id} id={key?.id} />
          ))
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
            slug +
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
