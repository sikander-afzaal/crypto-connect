import React from "react";
import "./HomeIndex.css";
import Hero from "./Hero/Hero";
import Team from "./Team/Team";
import Roadmap from "./Roadmap/Roadmap";
import bg from "../../Assets/cool-background.svg";
import About from "./About/About";
import Faq from "./Faq/Faq";
import Art from "./AboutArt/Art";
function Index() {
  return (
    <div className="index-cont">
      <img src={bg} alt="" className="bg" />
      <div className="home-index">
        <Hero />
        <About />
        <Art />
        <Roadmap />
        <Team />
        <Faq />
      </div>
    </div>
  );
}

export default Index;
