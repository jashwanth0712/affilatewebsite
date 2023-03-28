import React from "react";
import "./App.css";
import Header from "./Header";

import FeaturesSection from "./FeaturesSection";
import HeroSection from "./Herosection";


const App = () => {
  return (
    <div className="app">
      <Header />
    
     <HeroSection/>
      <FeaturesSection />
    
    </div>
  );
};

export default App;
