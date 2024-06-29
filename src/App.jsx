import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import Projects from "./components/projects";
import Collaboration from "./components/Collaboration";
import Navbar from "./components/NavBar";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/collabs" element={<Collaboration />} />
          <Route path="projects" element={<Projects />} />
          <Route path="aboutme" element={<AboutMe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
