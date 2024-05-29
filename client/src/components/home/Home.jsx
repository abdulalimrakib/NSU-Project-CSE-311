import React, { useEffect } from "react";
import HeroSection from "./HeroSection";
import HowItWorks from "./HowItWorks";
import PopulerSection from "./PopulerSection";
import PopulerCompanies from "./PopulerCompanies";

const Home = () => {

  useEffect(() => {
    if (!localStorage.getItem('user')) {
      window.location.href = '/login'
    }
  }, [localStorage.getItem('user')]);

  return (
    <div>
      <HeroSection />
      <HowItWorks/>
      <PopulerSection/>
      <PopulerCompanies/>
    </div>
  );
};

export default Home;
