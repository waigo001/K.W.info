import React from "react"
import PostTime from "./postTime"
import Tag from "./tag"
import { Link } from "gatsby"
import {
  Box,
  Flex,
  IconButton,
  Link as OtherLink,
  Spacer,
  Text,
  Wrap,
} from "@chakra-ui/react"
import { FaClipboard, FaTags, FaTwitter } from "react-icons/fa"

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
  return (
    <Flex direction="column" boxShadow="xs" p="4" rounded="lg" h="100%">
      <PostTime updatedAt={step.updatedAt} publishedAt={step.publishedAt} />
      <Flex my="2">
        <Text
          as={Link}
          to={`/blog/${step.slug}`}
          fontSize="xl"
          fontWeight="bold"
        >
          {step.title}
        </Text>
      </Flex>
      <Flex align="center" gridGap="2" my="2">
        <FaTags />
        <Text fontSize="sm">タグ</Text>
      </Flex>
      <Wrap spacing="2" my="2">
        {step.tags !== undefined ? (
          step.tags.map(key => <Tag props={key} key={key?.title} />)
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
            step.slug +
            `&hashtags=kwinfo` +
            `&text=` +
            step.title
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

        <OtherLink aria-label="copy-to-clipboard">
          <IconButton
            aria-label="copy-to-clipboard"
            isRound
            variant="ghost"
            icon={<FaClipboard />}
          />
        </OtherLink>
      </Flex>
    </Flex>
  )
}

export default BlogCard
