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
              • Soul sisters will launch in June 30th 2022 on ETH block-chain
            </p>
            <p>
              • Soul sisters acts as a utility key for access to dating dapp and
              forum being built by our team.
            </p>
            <p>
              • Holders will get access to discord to community till we launch
              our own forum.
            </p>
            <p>
              • 72 hours after public sale, the mystery of the soul sisters will
              be revealed.
            </p>
          </div>
          <div className="road-div div2">
            <h2 className="kanit">Phase 2: Empowering the sisters.</h2>
            <p className="futura">
              • Holders will be given privilege to attend spaces where they will
              get to learn and examine everything related to web3 by known
              professionals, our goal is to educate women and men more about
              web3 and help them shape new careers
            </p>
            <p className="futura">
              • Weekly meeting with the community to share ideas and shape our
              future together.
            </p>
            <p className="futura">
              • Monthly internal charity work will be conducted where holders
              can apply for support and provide documents which will be reviewed
              within the community and if accepted will be granted financial
              support by us to help shape a better future. Our goal is to help
              the ones who really are in need within us.
            </p>
          </div>
          <div className="road-div div3">
            <h2 className="kanit">Phase 3: Gift the sisters</h2>
            <p className="futura">
              • Holders will be granted exclusive whitelist spot for our next
              drop merry land, a set of unique mermaids that will serve our
              ecosystem and game plan.
            </p>
            <p className="futura">
              • Weekly giveaways for active sisters and true soul sisters.
            </p>
            <p className="futura">
              • Exclusive access to our beta game version.
            </p>
          </div>
          <div className="road-div div4">
            <h2 className="kanit">Phase 4: Sisters in action</h2>
            <p className="futura">
              • Once sold out we expect to release a beta version of our dapp
              within this year.
            </p>
            <p className="futura">
              • Community members and holders will be given exclusive access to
              the dating dapp and meet other degens who share the same
              interests.
            </p>
            <p className="futura">
              • Once the dapp is officially in use we will start our marketing
              phase of reaching out to selected projects chosen by our community
              to integrate and collab, giving access to their communities to use
              our dapp, hence increasing the dapps users on steady bases and our
              projects success.
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Roadmap;
