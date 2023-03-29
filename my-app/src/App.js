import React from "react";
import "./App.css";
import Header from "./Header";

import FeaturesSection from "./FeaturesSection";
import HeroSection from "./Herosection";

import ReactGA from 'react-ga';

ReactGA.initialize('G-DEJRB6HVCS');
ReactGA.pageview(window.location.pathname + window.location.search);
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
