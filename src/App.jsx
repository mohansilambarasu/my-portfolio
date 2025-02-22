import { useState } from "react";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Work } from "./components/Work";
import { Project } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Home } from "./pages/Home";
import StarCanvas from "./components/StarCanvas";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/my-portfolio/" element={<Home />} />
        </Routes>
        <StarCanvas />
      </BrowserRouter>
    </>
  );
}

export default App;
