import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { Fade } from "react-awesome-reveal";

import "./Team.css";
import teamImg from "../../../Assets/art/art (7).png";
import teamImg2 from "../../../Assets/art/art (2).png";
import teamNft from "../../../Assets/art/art (3).png";
import teamNft2 from "../../../Assets/art/art (6).png";

function Team() {
  return (
    <div id="team" className="team">
      <Fade
        fraction={0}
        triggerOnce
        direction="down"
        duration={500}
        delay={200}
      >
        <h2 className="kanit section-heading">Team</h2>
      </Fade>

      <div className="coo-row">
        <Fade
          fraction={0}
          direction="left"
          duration={800}
          delay={500}
          triggerOnce
        >
          <div className="coo-div">
            <div className="coo__img-div">
              <img src={teamImg} alt="" className="team-img" />
              <img src={teamNft} alt="" className="team-nft" />
            </div>
            <div className="desc-div">
              <div className="top-desc">
                <div>
                  <h2 className="kanit">FC Villaflores</h2>
                  <p className="futura title"> Artist {"&"} Co-founder</p>
                </div>

                <div className="social-team">
                  <a href="mailto:fcvillaflores@soulsisters.wtf">
                    <FontAwesomeIcon icon={faAt} />
                  </a>
                </div>
              </div>

              <p className="coo-desc futura">
                FC is a known female artist who draws for a known art gallery,
                and brings in a whopping 9 years of experience in illustration,
                art and motion graphics, she surely draws better than she can
                cook, ask me about it the cofounder and her life partner, the
                tech head who is actually building the site and filling in this
                information.
              </p>
            </div>
          </div>
        </Fade>
        <Fade
          fraction={0}
          direction="right"
          duration={800}
          delay={500}
          triggerOnce
        >
          <div className="coo-div">
            <div className="coo__img-div">
              <img src={teamImg2} alt="" className="team-img" />
              <img src={teamNft2} alt="" className="team-nft" />
            </div>
            <div className="desc-div">
              <div className="top-desc">
                <div>
                  <h2 className="kanit">soul Reaper </h2>
                  <p className="futura title">Tech Head {"&"} Co-founder</p>
                </div>

                <div className="social-team">
                  <a href="mailto:soulreaper@soulsisters.wtf">
                    <FontAwesomeIcon icon={faAt} />
                  </a>
                </div>
              </div>

              <p className="coo-desc futura">
                Soul Reaper is a programmer with 11 years of experience, he was
                one of the tech head in HI5, worked for Microsoft as a software
                engineer serving Microsoft Dynamics, and has a soft side for
                web3.
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <Fade
        fraction={0}
        className="team-grid"
        delay={200}
        duration={500}
        triggerOnce
      ></Fade>
    </div>
  );
}

export default Team;
