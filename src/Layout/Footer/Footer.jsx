import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import opensea from "../../Assets/opensea.png";
import etherscan from "../../Assets/etherscan.png";
function Footer() {
  return (
    <footer>
      <div className="logo">
        <h1 className="lulu-bold">CRYPTO CHICKS</h1>
      </div>
      <div className="social-div">
        <a href="https://twitter.com/solsistersclub" target={"blank"}>
          <FontAwesomeIcon icon={faTwitter} className={"header-icon"} />
        </a>
        <a href="https://twitter.com/solsistersclub" target={"blank"}>
          <img src={opensea} alt="" className="header-icon" />
        </a>
        <a
          href="https://etherscan.io/address/0x108c5ee2be6472e2110482801e86c520bbd40bfe"
          target={"blank"}
        >
          <img src={etherscan} alt="" className="header-icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
