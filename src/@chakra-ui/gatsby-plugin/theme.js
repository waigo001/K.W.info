import { extendTheme } from "@chakra-ui/react"
const theme = {
  config: {
    useSystemColorMode: true,
  },
  styles: {
    global: () => ({
      body: {
        fontFeatureSettings: '"palt"',
      },
    }),
  },
}

export default extendTheme(theme)
