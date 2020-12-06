import {
  Box,
  Container,
  createStyles,
  IconButton,
  makeStyles,
  MobileStepper,
  Typography,
} from "@material-ui/core"
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import SwipeableViews from "react-swipeable-views"
import { autoPlay } from "react-swipeable-views-utils"
import theme from "../styles/theme"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const useStyles = makeStyles({
  spacer: {
    margin: theme.spacing(2),
  },
  title: {
    fontSize: "3rem",
    fontWeight: 700,
    color: theme.palette.text.secondary,
    margin: theme.spacing(2),
  },
  subTitle: {
    fontWeight: 700,
    fontSize: "0.8rem",
    color: theme.palette.text.secondary,
    letterSpacing: 2,
    margin: theme.spacing(1),
  },
  dot: {
    width: "0.8rem",
    height: "0.8rem",
    margin: "0 6px",
  },
  dotActive: {
    backgroundColor: "#626262",
  },
  tag: {
    margin: theme.spacing(1),
  },
})

const Tag: React.FC<{
  props:
    | GatsbyTypes.Maybe<Pick<GatsbyTypes.MicrocmsBlogsTags, "title" | "slug">>
    | undefined
}> = ({ props }) => {
  let contents = <></>
  if (props !== undefined) {
    if (props.slug !== undefined && props.title !== undefined)
      contents = (
        <Box component="span" margin={1}>
          #{props.title}
        </Box>
      )
  }
  return contents
}

const Carousel: React.FC = () => {
  const classes = useStyles(theme)

  const data = useStaticQuery<GatsbyTypes.BlogsQuery>(graphql`
    query Blogs {
      allMicrocmsBlogs {
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
  `)

  const [activeStep, setActiveStep] = React.useState(0)
  const maxSteps = data.allMicrocmsBlogs.nodes.length

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleStepChange = (step: number) => {
    setActiveStep(step)
  }

  return (
    <div className={classes.spacer}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={5000}
      >
        {data.allMicrocmsBlogs.nodes.map(step => (
          <div key={step.title}>
            <Typography className={classes.subTitle} align="center">
              published at
            </Typography>
            <Typography className={classes.subTitle} align="center">
              {step.publishedAt}
            </Typography>
            <Typography className={classes.title} align="center">
              {step.title}
            </Typography>
            <Typography className={classes.subTitle} align="center">
              tags
            </Typography>
            <Typography className={classes.subTitle} align="center">
              {step.tags !== undefined ? (
                step.tags.map(key => <Tag props={key} />)
              ) : (
                <></>
              )}
            </Typography>
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <Container maxWidth="xs">
        <MobileStepper
          steps={maxSteps}
          position="static"
          variant="dots"
          activeStep={activeStep}
          classes={{
            dotActive: classes.dotActive,
            dot: classes.dot,
          }}
          nextButton={
            <IconButton
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </IconButton>
          }
          backButton={
            <IconButton onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
            </IconButton>
          }
        />
      </Container>
    </div>
  )
}

export default Carousel
