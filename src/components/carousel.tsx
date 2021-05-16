import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import SwipeableViews from "react-swipeable-views"
import { autoPlay } from "react-swipeable-views-utils"
import { format, parseISO } from "date-fns"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const Tag: React.FC<{
  props:
    | GatsbyTypes.Maybe<Pick<GatsbyTypes.MicrocmsBlogsTags, "title" | "slug">>
    | undefined
}> = ({ props }) => {
  let contents = <></>
  if (props !== undefined) {
    if (props.slug !== undefined && props.title !== undefined)
      contents = <span>#{props.title}</span>
  }
  return contents
}

const Carousel: React.FC = () => {
  const data = useStaticQuery<GatsbyTypes.BlogsQuery>(graphql`
    query Blogs {
      allMicrocmsBlogs(limit: 3, sort: { fields: updatedAt, order: DESC }) {
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

  let maxSteps = 3
  if (data.allMicrocmsBlogs.nodes.length < 3)
    maxSteps = data.allMicrocmsBlogs.nodes.length

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
    <div>
      <AutoPlaySwipeableViews
        axis="x"
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={5000}
      >
        {data.allMicrocmsBlogs.nodes.map(step => (
          <div key={step.title}>
            <div>published at</div>
            <div>
              {step.publishedAt !== undefined
                ? format(parseISO(step.publishedAt), "yyyy/MM/dd")
                : ""}
            </div>
            <div>
              <Link to={`/blog/${step.slug}`}>{step.title}</Link>
            </div>
            <div>tags</div>
            <div>
              {step.tags !== undefined ? (
                step.tags.map(key => <Tag props={key} key={key?.slug} />)
              ) : (
                <></>
              )}
            </div>
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </div>
  )
}

export default Carousel
