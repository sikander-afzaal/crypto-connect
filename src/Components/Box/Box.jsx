import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import "./Box.css";
function Box({ img, title, desc, name }) {
  return (
    <div className="team-grid__box">
      <div className="team-box__left">
        <img src={img} alt="" className="team-nft" />
        <div className="social-team">
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
      </div>
      <div className="team-box__right">
        <h2 className="futura">{name}</h2>
        <p className="team-box-title kanit">{title}</p>
        <p className="team-box-desc futura">{desc}</p>
      </div>
    </div>
  );
}

export default Box;
