import {
  Container,
  IconButton,
  makeStyles,
  MobileStepper,
  Typography,
} from "@material-ui/core"
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons"
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
    fontSize: "48px",
    fontWeight: 700,
    color: theme.palette.text.secondary,
    margin: theme.spacing(2),
  },
  subTitle: {
    fontWeight: 700,
    fontSize: "12px",
    color: theme.palette.text.secondary,
    letterSpacing: 2,
    margin: theme.spacing(1),
  },
  dot: {
    width: "12px",
    height: "12px",
    margin: "0 6px",
  },
  dotActive: {
    backgroundColor: "#626262",
  },
  tag: {
    margin: theme.spacing(1),
  },
})

const titleSample = [
  {
    publishedDate: "2020/10/20",
    title: "サンプルタイトル",
    tags: ["ブログ", "Gatsby"],
  },
  {
    publishedDate: "2020/10/22",
    title: "PostCoffeeを試してみた件",
    tags: ["PostCoffee", "コーヒー"],
  },
  {
    publishedDate: "2020/10/24",
    title: "ブログを今の環境(Firebase)から移行する",
    tags: ["ブログ", "Gatsby"],
  },
]

const Carousel = () => {
  const classes = useStyles(theme)

  const [activeStep, setActiveStep] = React.useState(0)
  const maxSteps = 3

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
        {titleSample.map((step, index) => (
          <div key={step.title}>
            <Typography className={classes.subTitle} align="center">
              published at
            </Typography>
            <Typography className={classes.subTitle} align="center">
              {step.publishedDate}
            </Typography>
            <Typography className={classes.title} align="center">
              {step.title}
            </Typography>
            <Typography className={classes.subTitle} align="center">
              tags
            </Typography>
            <Typography className={classes.subTitle} align="center">
              {step.tags.map(key => (
                <span className={classes.tag} key={key}>
                  #{key}
                </span>
              ))}
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
