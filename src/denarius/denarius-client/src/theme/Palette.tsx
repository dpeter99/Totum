import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
      light: "#4791DB",
      dark: "#115293",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#f50057",
      light: "#F73378",
      dark: "#AB003C",
      contrastText: "#FFFFFF",
    },
    text: {
      primary: "#fff",
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      //hint: "#22194D",
    },
    error: {
      main: "#f44336",
      light: "#e57373",
      dark: "#d32f2f",
      contrastText: "#FFFFFF",
    },
    warning: {
      main: "#ffa726",
      light: "#ffb74d",
      dark: "#f57c00",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    info: {
      main: "#29b6f6",
      light: "#4fc3f7",
      dark: "#0288d1",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    success: {
      main: "#66bb6a",
      light: "#81c784",
      dark: "#388e3c",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      default: grey[900],
      paper: "#1A2027",
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
      light: "rgb(71, 145, 219)",
      dark: "rgb(17, 82, 147)",
      contrastText: "#fff",
    },
    secondary: {
      main: "#f50057",
      light: "rgb(247, 51, 120)",
      dark: "rgb(171, 0, 60)",
      contrastText: "#FFFFFF",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
      //hint: "#22194D",
    },
    error: {
      main: "#d32f2f",
      light: "#ef5350",
      dark: "#c62828",
      contrastText: "#fff",
    },
    warning: {
      main: "#ed6c02",
      light: "#ff9800",
      dark: "#e65100",
      contrastText: "#fff",
    },
    info: {
      main: "#0288d1",
      light: "#03a9f4",
      dark: "#01579b",
      contrastText: "#fff",
    },
    success: {
      main: "#2e7d32",
      light: "#4caf50",
      dark: "#1b5e20",
      contrastText: "#fff",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: {
      default: "#fff",
      paper: "#fff",
    },
  },
});
