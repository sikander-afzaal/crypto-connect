import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import "./Header.css";
import opensea from "../../Assets/opensea.png";
import etherscan from "../../Assets/etherscan.png";
function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <div className="header">
      <div className="top-header">
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
        <FontAwesomeIcon
          onClick={() => setMenu(true)}
          icon={faBars}
          className="menu-icon mobile"
        />
      </div>
      <div className="logo">
        <h1 className="lulu-bold">SOL SISTERS</h1>
      </div>
      <FontAwesomeIcon
        onClick={() => setMenu(true)}
        icon={faBars}
        className="menu-icon desktop"
      />
      <div className={`slide-menu ${menu ? "open-slide-menu" : ""}`}>
        <FontAwesomeIcon
          onClick={() => setMenu(false)}
          icon={faXmark}
          className="cross"
        />
        {/* <div className="row-menu">
          <img src={menuImg} alt="" />
          <h2 className="lulu-bold">MENU</h2>
        </div> */}
        <div className="menu-links-div">
          <a
            href="#hero"
            onClick={() => setMenu(false)}
            className="futura menu-link active"
          >
            Home
          </a>

          <a
            href="#about"
            onClick={() => setMenu(false)}
            className="futura menu-link"
          >
            About Us
          </a>

          <a
            href="#road"
            onClick={() => setMenu(false)}
            className="futura menu-link"
          >
            Roadmap
          </a>

          <a
            href="#team"
            onClick={() => setMenu(false)}
            className="futura menu-link"
          >
            Team
          </a>

          <a
            href="#faq"
            onClick={() => setMenu(false)}
            className="futura menu-link"
          >
            Faq
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
