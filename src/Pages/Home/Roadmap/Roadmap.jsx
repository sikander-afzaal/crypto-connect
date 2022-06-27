import React from "react";
import { Fade } from "react-awesome-reveal";
import "./Roadmap.css";
function Roadmap() {
  return (
    <div id="road" className="roadmap">
      <Fade triggerOnce direction="down" duration={500} delay={200}>
        <h2 className="kanit section-heading">ROADMAP</h2>
      </Fade>

      <div className="roadmap-grid">
        <div className="line"></div>
        <Fade triggerOnce duration={1500} delay={200} cascade>
          <div className="road-div div1">
            <h2 className="kanit">Phase 1: Meet your sol sister.</h2>
            <p className="futura">
              - Sol sisters will launch in June 15th 2022 on Solana block-chain
            </p>
            <p>
              - Sol sisters are an exclusive mint for whitelist only with 300
              spots only.
            </p>
            <p>
              - Whitelisted users will gain full access to all discord channels.
            </p>
            <p>
              - Once minted holders will gain access to exclusive channels and
              can start applying for internal vacancies in sol sisters and join
              our Sol sisters Dao.
            </p>
            <p>
              - 72 hours after public sale, the mystery of the sol sisters will
              be revealed.
            </p>
          </div>
          <div className="road-div div2">
            <h2 className="kanit">Phase 2: Empowering the sisters.</h2>
            <p className="futura">
              - Holders will be given privilege to attend spaces where they will
              get to learn and examine everything related to web3 by known
              professionals, our goal is to educate women and men more about
              web3 and help them shape new careers
            </p>
            <p className="futura">
              - We will start building our own on chain game with the help of
              the community by hiring professionals from within the community to
              start shaping our meta-verse and future.
            </p>
            <p className="futura">
              - Monthly internal charity work will be conducted where holders
              can apply for support and provide documents which will be reviewed
              by our DAO and if accepted will be granted financial support by us
              to help shape a better future, goal is to help women who really
              are in need within us.
            </p>
          </div>
          <div className="road-div div3">
            <h2 className="kanit">Phase 3: Gift the sisters</h2>
            <p className="futura">
              - Holders will be granted exclusive whitelist spot for our next
              drop merry land, a set of unique mermaids that will serve our
              ecosystem and game plan.
            </p>
            <p className="futura">
              - Weekly giveaways for active sisters and true soul sisters.
            </p>
            <p className="futura">
              - Exclusive access to our beta game version.
            </p>
          </div>
          <div className="road-div div4">
            <h2 className="kanit">Phase 4: Sisters in action</h2>
            <p className="futura">
              - We will build our own Launchpad and help our community and
              holders share their work with the world, by funding them and
              helping them launch, projects will be voted and selected through
              our DAO.
            </p>
            <p className="futura">- Release our game by the end of 2022</p>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Roadmap;
