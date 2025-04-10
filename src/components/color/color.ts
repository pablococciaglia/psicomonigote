import { createTheme } from "@mui/material/styles"

export const theme = createTheme({
  palette: {
    primary: {
      light: "#CCE5FF",
      main: "#A6C9EC",
      dark: "#85ABCF",
      contrastText: "#E6F5FF",
    },
    secondary: {
      light: "#FFF7CC",
      main: "#ECE0A6",
      dark: "#CFC285",
      contrastText: "#FFFAE6",
    },
    background: {
      default: "#4F789F",
      paper: "#9F9047",
    },
    action: {
      hover: "#4d7dab",
    },
    warning: {
      main: "#ce3f37",
    },
  },
  components: {},
})
