import {
  Box,
  Card,
  CardActions,
  CardContent,
  Chip,
  Container,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core"
import LinkIcon from "@material-ui/icons/Link"
import TwitterIcon from "@material-ui/icons/Twitter"
import LocalOfferIcon from "@material-ui/icons/LocalOffer"
import WatchLaterIcon from "@material-ui/icons/WatchLater"

import React from "react"
import Layout from "../components/layout/blog"
import SEO from "../components/seo"
import theme from "../styles/theme"
import { graphql, PageProps } from "gatsby"
import { format, parseISO } from "date-fns"

export const query = graphql`
  query BlogPages {
    allMicrocmsBlogs(sort: { fields: updatedAt, order: DESC }) {
      nodes {
        body
        description
        slug
        tags {
          slug
          title
        }
        title
        publishedAt
      }
    }
  }
`

const Tag: React.FC<{
  props:
    | GatsbyTypes.Maybe<Pick<GatsbyTypes.MicrocmsBlogsTags, "title" | "slug">>
    | undefined
}> = ({ props }) => {
  let contents = <></>
  const classes = useStyles()
  if (props !== undefined) {
    if (props.slug !== undefined && props.title !== undefined)
      contents = (
        <Chip
          label={props.title}
          variant="outlined"
          size="small"
          key={props.slug}
          className={classes.chip}
        />
      )
  }
  return contents
}

const useStyles = makeStyles({
  container: {
    padding: theme.spacing(1),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  timeIcon: {
    marginRight: theme.spacing(0.5),
    fontSize: "1rem",
  },
  cardTitle: {
    margin: theme.spacing(0.5),
    fontSize: "1.5rem",
    color: theme.palette.text.primary,
    fontWeight: 700,
  },
  cardContent: {
    flexGrow: 1,
    paddingBottom: 0,
  },
  cardActions: {},
  chip: {
    margin: theme.spacing(0.5),
  },
  iconButton: {
    marginLeft: "auto",
  },
})

const BlogPage: React.FC<PageProps<GatsbyTypes.BlogPagesQuery>> = ({
  data,
}) => {
  const classes = useStyles()
  const items = data.allMicrocmsBlogs.nodes.map(step => (
    <Grid item xs={12} sm={6} md={4} key={step.title}>
      <Card className={classes.card} elevation={2}>
        <CardContent className={classes.cardContent}>
          <Box
            color="text.secondary"
            display="flex"
            alignItems="center"
            fontSize="small"
          >
            <WatchLaterIcon className={classes.timeIcon} />
            <time dateTime={step.publishedAt}>
              {step.publishedAt !== undefined
                ? format(parseISO(step.publishedAt), "yyyy/MM/dd")
                : "NO DATA"}
            </time>
          </Box>
          <Typography className={classes.cardTitle} component="h2">
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
            <LocalOfferIcon className={classes.timeIcon} />
            タグ
          </Box>
          <Box>
            {step.tags !== undefined ? (
              step.tags.map(key => <Tag props={key} />)
            ) : (
              <></>
            )}
          </Box>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <IconButton aria-label="twitter" className={classes.iconButton}>
            <TwitterIcon />
          </IconButton>
          <IconButton aria-label="link">
            <LinkIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  ))

  return (
    <Layout>
      <SEO title="Blog" />
      <Container maxWidth="md" className={classes.container}>
        <Grid container spacing={2}>
          {items}
        </Grid>
      </Container>
    </Layout>
  )
}

export default BlogPage
