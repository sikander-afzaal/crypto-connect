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
          Sol sisters is a set of 6969 degen sistas, generated on the blockchain
          representing women from all aspects & cultures of the metaverse.
          Holding a “Sista” acts as a utility providing the holder an exclusive
          access to a dating dapps and forum being built by our team.
        </p>
      </Fade>
    </div>
  );
}

export default About;
