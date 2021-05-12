import { createMuiTheme } from "@material-ui/core"
import { grey } from "@material-ui/core/colors"

const theme = createMuiTheme({
  typography: {
    button: {
      textTransform: "none",
    },
    fontFamily: [
      "Roboto",
      '"Noto Sans JP"',
      "-apple-system",
      "BlinkMacSystemFont",
      "Roboto",
      "游ゴシック体",
      "YuGothic",
      '"Yu Gothic Medium"',
      "sans-serif",
    ].join(","),
  },
  palette: {
    type: "light",
    text: {
      primary: grey[800],
      secondary: grey[600],
    },
  },
  props: {
    MuiTextField: {
      variant: "outlined",
    },
  },
})

export default theme
