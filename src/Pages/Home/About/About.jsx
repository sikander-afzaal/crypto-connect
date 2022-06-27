import React from "react";
import { Fade } from "react-awesome-reveal";
import "./About.css";
function About() {
  return (
    <div id="about" className="about">
      <Fade triggerOnce direction="down" duration={500} delay={200}>
        <h1 className="kanit section-heading">About Us</h1>
      </Fade>
      <Fade triggerOnce direction="up" duration={500} delay={700}>
        <p className="lulu">
          Sol sisters is a set of 2222 hand drawn degen chicks, generated on the
          blockchain representing women from all aspects & cultures of the
          metaverse, we aim to empower women and be there voice in web3
        </p>
      </Fade>
    </div>
  );
}

export default About;
