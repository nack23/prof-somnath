import React from "react";
import HeaderBanner from "./components/HeaderBanner";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import "./App.css"; 
import Research from "./components/Research";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <HeaderBanner />
      <Navbar />
      <Hero />
      <Research />
      <Footer />
     
      
    </div>
  );
}

export default App;