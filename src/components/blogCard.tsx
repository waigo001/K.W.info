import {
  Card,
  CardContent,
  Box,
  Typography,
  CardActions,
  IconButton,
  makeStyles,
  Tooltip,
} from "@material-ui/core"

import LinkIcon from "@material-ui/icons/Link"
import TwitterIcon from "@material-ui/icons/Twitter"
import LocalOfferIcon from "@material-ui/icons/LocalOffer"

import React, { useState } from "react"
import theme from "../styles/theme"
import PostTime from "./postTime"
import Tag from "./tag"
import { graphql, Link, useStaticQuery } from "gatsby"
import CopyToClipBoard from "react-copy-to-clipboard"

const useStyles = makeStyles({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  tagIcon: {
    marginRight: theme.spacing(0.5),
    fontSize: "1rem",
  },
  cardTitle: {
    margin: theme.spacing(0.5),
    textDecoration: "none",
    fontSize: "1.5rem",
    color: theme.palette.text.primary,
    fontWeight: 700,
  },
  cardContent: {
    flexGrow: 1,
    paddingBottom: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  iconButton: {
    marginLeft: "auto",
  },
})

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
  const classes = useStyles()

  const [openTip, setOpenTip] = useState<boolean>(false)

  const handleCloseTip = (): void => {
    setOpenTip(false)
  }

  const handleClickButton = (): void => {
    setOpenTip(true)
  }

  return (
    <Card className={classes.card} elevation={2}>
      <CardContent className={classes.cardContent}>
        <Box
          color="text.secondary"
          display="flex"
          alignItems="center"
          fontSize="small"
        >
          <PostTime updatedAt={step.updatedAt} publishedAt={step.publishedAt} />
        </Box>
        <Typography
          className={classes.cardTitle}
          component={Link}
          to={`/blog/${step.slug}`}
        >
          {step.title}
        </Typography>
        <Box
          color="text.secondary"
          display="flex"
          alignItems="center"
          fontSize="small"
          marginTop={1}
          marginBottom={1}
        >
          <LocalOfferIcon className={classes.tagIcon} />
          タグ
        </Box>
        <Box>
          {step.tags !== undefined ? (
            step.tags.map(key => <Tag props={key} key={key?.title} />)
          ) : (
            <></>
          )}
        </Box>
      </CardContent>
      <CardActions>
        <IconButton
          aria-label="twitter"
          className={classes.iconButton}
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
        >
          <TwitterIcon />
        </IconButton>
        <Tooltip
          arrow
          open={openTip}
          onClose={handleCloseTip}
          disableHoverListener
          placement="top"
          title="Copied!"
        >
          <CopyToClipBoard text={url + `/blog/` + step.slug}>
            <IconButton aria-label="link" onClick={handleClickButton}>
              <LinkIcon />
            </IconButton>
          </CopyToClipBoard>
        </Tooltip>
      </CardActions>
    </Card>
  )
}

export default BlogCard
