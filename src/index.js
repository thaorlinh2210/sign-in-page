import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Login from "./components/Login";
import Login from "./components/Login";
import "./Login.css";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* <Navbar /> */}
    <Login />
  </StrictMode>
);
