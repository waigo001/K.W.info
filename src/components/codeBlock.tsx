import Highlight, { defaultProps, Language } from "prism-react-renderer"
import React, { useState } from "react"

import darkTheme from "prism-react-renderer/themes/vsDark"
import lightTheme from "prism-react-renderer/themes/github"
import { useColorModeValue } from "@chakra-ui/color-mode"
import { Box } from "@chakra-ui/react"

type Props = {
  children: string
  className?: string
  metastring?: string
}

const RE = /{([\d,-]+)}/

const calculateLinesToHighlight = (meta = "") => {
  if (!RE.test(meta)) {
    return () => false
  }

  //@ts-ignore
  const lineNumbers = RE.exec(meta)[1]
    .split(`,`)
    .map(v => v.split(`-`).map(x => parseInt(x, 10)))

  return (index: number) => {
    const lineNumber = index + 1
    const inRange = lineNumbers.some(([start, end]) =>
      end ? lineNumber >= start && lineNumber <= end : lineNumber === start
    )
    return inRange
  }
}

const getParams = (className = "") => {
  const [language = "", title = ""] = className.split(":")

  return [language.replace(/language-/, ""), title]
}

const CodeBlock: React.VFC<Props> = ({ children, className, metastring }) => {
  const [language, title] = getParams(className)
  const [editorCode] = useState(children.trim())
  const theme = useColorModeValue(lightTheme, darkTheme)

  //const highlightColor = useColorModeValue("blackAlpha.200", "whiteAlpha.200")
  const highlightColor = theme.plain.color + "22"
  const shouldHighlightLine = calculateLinesToHighlight(metastring)

  return (
    <div>
      {title && (
        <Box
          py={1}
          px={3}
          fontFamily="mono"
          fontWeight="semibold"
          fontSize="sm"
          bg={theme.plain.color}
          color={theme.plain.backgroundColor}
          borderTopRadius="md"
          children={title}
          display="inline-block"
        />
      )}
      <Highlight
        {...defaultProps}
        code={editorCode}
        language={language as Language}
        theme={theme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Box
            as="pre"
            overflowX="auto"
            className={className}
            style={style}
            data-language={language}
          >
           

            <Box
              as="code"
              className={className}
              float="left"
              minW="full"
              py={4}
            >
              {tokens.map((line, i) => (
                <Box
                  key={i}
                  {...getLineProps({ line, key: i })}
                  bg={shouldHighlightLine(i) ? highlightColor : undefined}
                  px={4}
                >
                  {line.map((token, key) => (
                    <Box
                      as="span"
                      sx={{ wordWrap: "normal" }}
                      key={key}
                      {...getTokenProps({ token, key })}
                    />
                  ))}
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </Highlight>
    </div>
  )
}

export default CodeBlock
