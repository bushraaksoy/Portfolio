import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Contact from "./Contact";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
