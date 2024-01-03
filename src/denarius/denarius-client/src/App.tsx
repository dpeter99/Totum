import React from "react";
import "./App.css";
import { Home } from "./pages/HomePage/Home";
import { Outlet, Route, Router, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
