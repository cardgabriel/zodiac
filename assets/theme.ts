import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    common: { black: "rgba(0, 0, 0, 1)", white: "rgba(255, 255, 255, 1)" },
    background: {
      paper: "rgba(72, 72, 72, 1)",
      default: "rgba(33, 33, 33, 1)",
    },
    primary: {
      light: "rgba(72, 72, 72, 1)",
      main: "rgba(33, 33, 33, 1)",
      dark: "rgba(0, 0, 0, 1)",
      contrastText: "#fff",
    },
    secondary: {
      light: "rgba(129, 156, 169, 1)",
      main: "rgba(84, 110, 122, 1)",
      dark: "rgba(41, 67, 78, 1)",
      contrastText: "rgba(255, 255, 255, 1)",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
    text: {
      primary: "rgba(250, 250, 250, 1)",
      secondary: "rgba(250, 250, 250, 1)",
      disabled: "rgba(255, 255, 255, 1)",
    },
  },
});

export default theme;
