import { createMuiTheme } from "@material-ui/core"

const theme = createMuiTheme({
  typography: {
    button: {
      textTransform: "none",
    },
    fontFamily: ["Roboto", '"Noto Sans JP"'].join(","),
  },
  palette: {
    type: "light",
  },
})

export default theme
