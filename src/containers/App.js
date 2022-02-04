import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Academic from "./Academic";
import Contact from "./Contact";
import Home from "./Home/index";
import Media from "./Media";
import Notice from "./Notice";
import Services from "./Services";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/academic" element={<Academic />} />
      <Route path="/media" element={<Media />} />
      <Route path="/notice" element={<Notice />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default App;
