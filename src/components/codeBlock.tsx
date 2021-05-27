import Highlight, { defaultProps, Language } from "prism-react-renderer"
import React, { useState } from "react"

import vsDark from "prism-react-renderer/themes/vsDark"
import nightOwlLight from "prism-react-renderer/themes/nightOwlLight"
import { useColorModeValue } from "@chakra-ui/color-mode"
import { Box } from "@chakra-ui/react"

type Props = {
  children: React.ReactNode
  className?: string
}

const CodeBlock: React.VFC<Props> = ({ children, className }) => {
  const language = className?.replace(/language-/, "") || ""
  const [editorCode, setEditorCode] = useState(children.trim())
  const theme = useColorModeValue(nightOwlLight, vsDark)

  return (
    <Box overflow="hidden">
      <Highlight
        {...defaultProps}
        code={editorCode}
        language={language as Language}
        theme={theme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Box overflowX="scroll" data-language={language}>
            <Box
              as="pre"
              overflowWrap="normal"
              className={className}
              style={style}
            >
              {tokens.map((line, i) => (
                <Box px="5" key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </Highlight>
    </Box>
  )
}

export default CodeBlock
