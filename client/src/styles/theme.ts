import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0074A3",
      light: "#338FB5",
      dark: "#005172",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#424242",
      light: "#616161",
      dark: "#212121",
      contrastText: "#ffffff",
    },
    background: {
      default: "#FAFAFA",
      paper: "#ffffff",
    },
    text: {
      primary: "#212121",
      secondary: "#757575",
      disabled: "#9E9E9E",
    },
    error: {
      main: "#d32f2f",
    },
    warning: {
      main: "#fbc02d",
    },
    info: {
      main: "#0277bd",
    },
    success: {
      main: "#2e7d32",
    },
    action: {
      focus: "#0074A3",
      hover: "#F3F3F3",
    },
  },
});

export default theme;
