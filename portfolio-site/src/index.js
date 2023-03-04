import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import Home from "./components/Home";
import SSCP from "./components/SSCP";
import Reina from "./components/Reina";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <MyNavbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/sscp" element={<SSCP />} />
      <Route path="/projects/reina" element={<Reina />} />
    </Routes>
  </Router>
);
