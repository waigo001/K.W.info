import Highlight, { defaultProps, Language } from "prism-react-renderer"
import React, { useState } from "react"

import vsDark from "prism-react-renderer/themes/vsDark"
import nightOwlLight from "prism-react-renderer/themes/github"
import { useColorModeValue } from "@chakra-ui/color-mode"
import { Box } from "@chakra-ui/react"

type Props = {
  children: string
  className?: string
}

const CodeBlock: React.VFC<Props> = ({ children, className }) => {
  const language = className?.replace(/language-/, "") || ""
  const [editorCode] = useState(children.trim())
  const theme = useColorModeValue(nightOwlLight, vsDark)

  return (
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
          p={4}
          className={className}
          style={style}
          borderRadius="lg"
          data-language={language}
        >
          {tokens.map((line, i) => (
            <Box key={i} {...getLineProps({ line, key: i })}>
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
      )}
    </Highlight>
  )
}

export default CodeBlock
