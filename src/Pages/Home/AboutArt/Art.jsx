import React from "react";

import "./Art.css";
import { Fade } from "react-awesome-reveal";
import gif from "../../../Assets/gif-box.gif";
function Art() {
  return (
    <div className="art">
      <Fade triggerOnce direction="up" duration={1000} delay={200}>
        <div className="team-grid__box">
          <div className="team-box__left">
            <h1 className="section-heading kanit">About The Art</h1>
          </div>
          <div className="team-box__right">
            <img src={gif} alt="" className="gif-box" />
            <p className="team-box-desc futura">
              VC villaflores has drawn a total of 178 traits to ensure that each
              and every sister is unique and beautiful, these traits are divided
              in to 12 categories ( Type, Eyes, Mouth, Hair, Head item,
              Accessories, Clothes, Earrings, 3rd Eye (rare), Costume (rare),
              necklace, nose piercing, backgrounds.
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Art;
