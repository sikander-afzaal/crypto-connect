import React from "react";
import "./HomeIndex.css";
import Hero from "./Hero/Hero";
import Team from "./Team/Team";
import Roadmap from "./Roadmap/Roadmap";
import bg from "../../Assets/cool-background.svg";
import About from "./About/About";
import Faq from "./Faq/Faq";
import Art from "./AboutArt/Art";
import Work from "./Work/Work";
import Header from "../../Layout/Header/Header";
import Footer from "../../Layout/Footer/Footer";
function Index() {
  return (
    <div className="index-cont">
      <img src={bg} alt="" className="bg" />
      <Header />
      <div className="home-index">
        <Hero />
        <About />
        <Art />
        <Work />
        <Roadmap />
        <Team />
        <Faq />
      </div>
      <Footer />
    </div>
  );
}

export default Index;
