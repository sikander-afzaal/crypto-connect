import React from "react";
import "./HomeIndex.css";
import Team from "./Team/Team";
import Roadmap from "./Roadmap/Roadmap";
import About from "./About/About";
import Faq from "./Faq/Faq";
import Art from "./AboutArt/Art";
import Work from "./Work/Work";
import Header from "../../Layout/Header/Header";
import Footer from "../../Layout/Footer/Footer";
import Mint from "../Mint/Mint";
function Index() {
  return (
    <div className="index-cont">
      <Header />
      <Mint />
      <div className="second-cont">
        <About />
        <Art />
        <Work />
      </div>
      <div className="road-cont">
        <Roadmap />
      </div>
      <div className="second-cont">
        <Team />
        <Faq />
      </div>
      <Footer />
    </div>
  );
}

export default Index;
