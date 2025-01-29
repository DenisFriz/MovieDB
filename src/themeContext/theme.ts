import { Theme, createTheme } from "@mui/material";

export const AppLightTheme: Theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "rgb(88,88,88)",
    },
    secondary: {
      main: "rgb(157, 157, 157, 62%)",
    },
    background: {
      default: "rgb(243,244,233)",
    },
  },
});

export const AppDarkTheme: Theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "rgb(66,66,66)",
    },
    secondary: {
      main: "#121212",
    },
    background: {
      default: "rgb(100,100,100)",
    },
  },
});
