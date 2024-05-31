import React, { useEffect } from "react";
import HeroSection from "./HeroSection";
import HowItWorks from "./HowItWorks";
import PopulerSection from "./PopulerSection";
import PopulerCompanies from "./PopulerCompanies";
import "../../../public/stylee.css"

const Home = () => {

  useEffect(() => {
    if (!localStorage.getItem('user')) {
      window.location.href = '/login'
    }
  }, [localStorage.getItem('user')]);

  return (
    <div className="body">
      <main>
        <section className="section" id="home">
            <div className ="home_container">
                <h2>Find  a job that suits your interests and skills</h2>
                <p>This is the homepage of my website. Here you can find information about diffrent jobs.</p>
                <button className="btnfindjob-popup">LIVE JOB</button>
                <button className="btnfindjob-popup">COMPANIES</button>
                <button className="btnfindjob-popup">JOB SEEKERS</button>
                <button className="btnfindjob-popup">EMPLOYERS</button>
            </div>
        </section>
        <section className="section" id="about">
            <div className ="home_container">
                <h2>POPULAR CATEGORIES</h2>
                <p></p>
                <button className="btnpopularcat-popup">Graphics & Design</button>
                <button className="btnpopularcat-popup">Mobile App Development</button>
                <button className="btnpopularcat-popup">Frontend Web Development</button>
                <button className="btnpopularcat-popup">Mern Stack Development</button>
                <button className="btnpopularcat-popup">AI JOB</button>
                <button className="btnpopularcat-popup">Account and Finance</button>
                <button className="btnpopularcat-popup">Video Animation</button>
                <button className="btnpopularcat-popup">Game Development</button>
            </div>
        </section>
        <section className="section" id="about">
            <div  className="home_container">
                <h2>TOP COMPANIES</h2>
                <p></p>
                <button className="btntopcompanies-popup"><h3>Google</h3></button>
                <button className="btntopcompanies-popup"><h3>Microsoft</h3></button>
                <button className="btntopcompanies-popup"><h3>Apple</h3></button>
               
            </div>
       </section>

    </main>
    
    </div>
  );
};

export default Home;
