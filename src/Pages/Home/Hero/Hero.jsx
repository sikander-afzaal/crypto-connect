import React from "react";
import "./Hero.css";
import gif from "../../../Assets/gif.gif";
import { Fade } from "react-awesome-reveal";
function Hero() {
  return (
    <div id="hero" className="hero">
      <Fade triggerOnce direction="left" duration={800} delay={200}>
        <div className="right__hero">
          <img src={gif} alt="" />
        </div>
      </Fade>
      <Fade triggerOnce direction="right" duration={500} delay={700}>
        <div className="left__hero">
          <h1 className="futura">SOL SISTERS</h1>
          <p className="futura">
            Sol Sisters by FC Villaflores, 2222 hand drawn degen chicks from all
            aspects & cultures of the metaverse. A project aiming to be the
            voice of females in web3
          </p>
          <p className="futura">
            mint price is 1.5 sol , whitelist only with a max of 3 mints.
          </p>
          <div className="btn-div-hero">
            <div className="heart-shape"></div>
            <button className="view lulu-bold">Mint Me</button>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Hero;
