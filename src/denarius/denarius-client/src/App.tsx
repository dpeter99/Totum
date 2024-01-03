import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "./theme/Palette";

function App() {
  const theme =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? darkTheme
      : lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Box
        component="main"
        sx={{
          //backgroundColor: (theme) => theme.palette.background.paper,
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Outlet />
      </Box>
    </ThemeProvider>
  );
}

export default App;
