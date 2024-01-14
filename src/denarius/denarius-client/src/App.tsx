import React, { ReactElement } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { useGetUserBrowserTheme } from "./theme/consts";

import { TransactionsProvider } from "./contex/GlobalState";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

function App() {
  const theme = useGetUserBrowserTheme();

  return (
    <TransactionsProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Box
          component="main"
          sx={{
            //backgroundColor: (theme) => theme.palette.background.paper,
            flexGrow: 1,
            height: "calc(100% - 65px)",
            // "-o-calc(100% - 65px)" ||
            // "-webkit-calc(100% - 65px)" ||
            // "-moz-calc(100% - 65px)",
            overflow: "auto",
          }}
        >
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <Outlet />
          </LocalizationProvider>
        </Box>
      </ThemeProvider>
    </TransactionsProvider>
  );
}

export default App;
