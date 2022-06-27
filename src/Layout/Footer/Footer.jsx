import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faDiscord,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <footer>
      <div className="logo">
        <h1 className="lulu-bold">CRYPTO CHICKS</h1>
      </div>
      <div className="social-div">
        <FontAwesomeIcon icon={faTwitter} className={"header-icon"} />
        <FontAwesomeIcon icon={faDiscord} className={"header-icon"} />
        <FontAwesomeIcon icon={faInstagram} className={"header-icon"} />
        <FontAwesomeIcon icon={faLinkedin} className={"header-icon"} />
      </div>
    </footer>
  );
}

export default Footer;
