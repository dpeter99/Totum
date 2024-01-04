import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { useGetUserBrowserTheme } from "./theme/consts";

function App() {
  const theme = useGetUserBrowserTheme();

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
