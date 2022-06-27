import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import "./Team.css";
import teamImg from "../../../Assets/team/team1.webp";
import teamNft from "../../../Assets/team/team-nft.webp";

import { Fade } from "react-awesome-reveal";
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
            <div className="top-desc">
              <div>
                <h2 className="kanit">FC Villaflores</h2>
                <p className="futura title"> Artist {"&"} Co-founder</p>
              </div>

              <div className="social-team">
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
            </div>

            <p className="coo-desc futura">
              FC is a known female artist who draws for a known art gallery, and
              brings in a whopping 9 years of experience in illustration, art
              and motion graphics, she surely draws better than she can cook,
              ask me about it the cofounder and her life partner, the tech head
              who is actually building the site and filling in this information.
            </p>
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
              <img src={teamImg} alt="" className="team-img" />
              <img src={teamNft} alt="" className="team-nft" />
            </div>
            <div className="top-desc">
              <div>
                <h2 className="kanit">Soul Reaper </h2>
                <p className="futura title">Tech Head {"&"} Co-founder</p>
              </div>

              <div className="social-team">
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
            </div>

            <p className="coo-desc futura">
              Soul Reaper is a business development manager with 11 years of
              experience; however he has a soft side for tech and web3
            </p>
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
