import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import "./Faq.css";
import { Fade } from "react-awesome-reveal";
function Faq() {
  // if you want to add more questions just add another false here or vice versa
  const [open, setOpen] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  //function to check which faq is opened
  const clickHandler = (e) => {
    const num = e.target.dataset.num;
    setOpen((prev) => {
      let arr = [...prev];
      let newArr = arr.map((elem, index) => {
        if (index === parseInt(num)) {
          return !elem;
        } else {
          return elem;
        }
      });
      return newArr;
    });
  };
  return (
    <div id="faq" className="faq">
      <Fade triggerOnce direction="down" duration={500} delay={200}>
        <h1 className="section-heading kanit">FAQ'S</h1>
      </Fade>

      <div className="faq-div">
        <Fade
          className="faq-q-div"
          triggerOnce
          direction="down"
          duration={600}
          delay={100}
        >
          <>
            <div
              data-num={0}
              onClick={clickHandler}
              className={`faq-btn lulu ${open[0] ? "border-radius" : ""}`}
            >
              <p className={`${open[0] ? "active-btn" : ""}`}>
                What is Soul Sisters?
              </p>
              {open[0] ? (
                <FontAwesomeIcon
                  className={`${open[0] ? "active-btn" : ""}`}
                  icon={faMinus}
                />
              ) : (
                <FontAwesomeIcon icon={faPlus} />
              )}
            </div>
            <div className={`faq-answer ${open[0] ? "active" : ""}`}>
              <p className="answer futura">
                It is a set of 6969 Soul Sisters that grant holders access to
                exclusive dating dapp, community forums & events.
              </p>
            </div>
          </>
        </Fade>
        <Fade
          className="faq-q-div"
          triggerOnce
          direction="down"
          duration={600}
          delay={200}
        >
          <>
            <div
              data-num={1}
              onClick={clickHandler}
              className={`faq-btn lulu ${open[1] ? "border-radius" : ""}`}
            >
              <p className={`${open[1] ? "active-btn" : ""}`}>
                Which block chain are Soul Sisters on?
              </p>
              {open[1] ? (
                <FontAwesomeIcon
                  className={`${open[1] ? "active-btn" : ""}`}
                  icon={faMinus}
                />
              ) : (
                <FontAwesomeIcon icon={faPlus} />
              )}
            </div>
            <div className={`faq-answer ${open[1] ? "active" : ""}`}>
              <p className="answer futura">We are launching on Etherum.</p>
            </div>
          </>
        </Fade>
        <Fade className="faq-q-div" triggerOnce duration={600} delay={600}>
          <>
            <div
              data-num={2}
              onClick={clickHandler}
              className={`faq-btn lulu ${open[2] ? "border-radius" : ""}`}
            >
              <p className={`${open[2] ? "active-btn" : ""}`}>
                Who are the founders?
              </p>
              {open[2] ? (
                <FontAwesomeIcon
                  className={`${open[2] ? "active-btn" : ""}`}
                  icon={faMinus}
                />
              ) : (
                <FontAwesomeIcon icon={faPlus} />
              )}
            </div>
            <div className={`faq-answer ${open[2] ? "active" : ""}`}>
              <p className="answer futura">
                Soul Sister was founded by FC Villaflores the artist and her
                life partner Soul Reaper the tech head.
              </p>
            </div>
          </>
        </Fade>
        <Fade
          className="faq-q-div"
          triggerOnce
          direction="up"
          duration={600}
          delay={300}
        >
          <>
            <div
              data-num={3}
              onClick={clickHandler}
              className={`faq-btn lulu ${open[3] ? "border-radius" : ""}`}
            >
              <p className={`${open[3] ? "active-btn" : ""}`}>How to buy?</p>
              {open[3] ? (
                <FontAwesomeIcon
                  className={`${open[3] ? "active-btn" : ""}`}
                  icon={faMinus}
                />
              ) : (
                <FontAwesomeIcon icon={faPlus} />
              )}
            </div>
            <div className={`faq-answer ${open[3] ? "active" : ""}`}>
              <p className="answer futura">
                You can mint from the website or if you have experience mint
                through etherscan and interact directly with contract.
              </p>
            </div>
          </>
        </Fade>
        <Fade
          className="faq-q-div"
          triggerOnce
          direction="up"
          duration={600}
          delay={400}
        >
          <>
            <div
              data-num={4}
              onClick={clickHandler}
              className={`faq-btn lulu ${open[4] ? "border-radius" : ""}`}
            >
              <p className={`${open[4] ? "active-btn" : ""}`}>
                How to get whitelist?
              </p>
              {open[4] ? (
                <FontAwesomeIcon
                  className={`${open[4] ? "active-btn" : ""}`}
                  icon={faMinus}
                />
              ) : (
                <FontAwesomeIcon icon={faPlus} />
              )}
            </div>
            <div className={`faq-answer ${open[4] ? "active" : ""}`}>
              <p className="answer futura">
                We are going for a public mint no WL required, but winners of
                our twitter events get airdropped a “Sista” for free.
              </p>
            </div>
          </>
        </Fade>
        <Fade
          className="faq-q-div"
          triggerOnce
          direction="up"
          duration={600}
          delay={500}
        >
          <>
            <div
              data-num={5}
              onClick={clickHandler}
              className={`faq-btn lulu ${open[5] ? "border-radius" : ""}`}
            >
              <p className={`${open[5] ? "active-btn" : ""}`}>
                What is the mint price?
              </p>
              {open[5] ? (
                <FontAwesomeIcon
                  className={`${open[5] ? "active-btn" : ""}`}
                  icon={faMinus}
                />
              ) : (
                <FontAwesomeIcon icon={faPlus} />
              )}
            </div>
            <div className={`faq-answer ${open[5] ? "active" : ""}`}>
              <p className="answer futura">
                Mint price is 0.008 ETH and max 5 per wallet.
              </p>
            </div>
          </>
        </Fade>
        <Fade
          className="faq-q-div"
          triggerOnce
          direction="up"
          duration={600}
          delay={500}
        >
          <>
            <div
              data-num={6}
              onClick={clickHandler}
              className={`faq-btn lulu ${open[6] ? "border-radius" : ""}`}
            >
              <p className={`${open[6] ? "active-btn" : ""}`}>
                Will there be discord?
              </p>
              {open[6] ? (
                <FontAwesomeIcon
                  className={`${open[6] ? "active-btn" : ""}`}
                  icon={faMinus}
                />
              ) : (
                <FontAwesomeIcon icon={faPlus} />
              )}
            </div>
            <div className={`faq-answer ${open[6] ? "active" : ""}`}>
              <p className="answer futura">
                We do have a discord server however we are keeping it strictly
                for verified holders to prevent as much as possible any hack
                attempts and keep away people who fud when they arent even
                holders, Discord link will be shared 12 hours after mint is live
                on twitter.
              </p>
            </div>
          </>
        </Fade>
        <Fade
          className="faq-q-div"
          triggerOnce
          direction="up"
          duration={600}
          delay={500}
        >
          <>
            <div
              data-num={7}
              onClick={clickHandler}
              className={`faq-btn lulu ${open[7] ? "border-radius" : ""}`}
            >
              <p className={`${open[7] ? "active-btn" : ""}`}>
                Will you be holding twitter space to introduce the project?
              </p>
              {open[7] ? (
                <FontAwesomeIcon
                  className={`${open[7] ? "active-btn" : ""}`}
                  icon={faMinus}
                />
              ) : (
                <FontAwesomeIcon icon={faPlus} />
              )}
            </div>
            <div className={`faq-answer ${open[7] ? "active" : ""}`}>
              <p className="answer futura">
                we are holding an AMA session on discord for holders only, where
                you will get to meet and greet with the founders, answer all
                your questions and concerns, vibe with you all and end it with a
                movie night.
              </p>
            </div>
          </>
        </Fade>
        <Fade
          className="faq-q-div"
          triggerOnce
          direction="up"
          duration={600}
          delay={500}
        >
          <>
            <div
              data-num={8}
              onClick={clickHandler}
              className={`faq-btn lulu ${open[8] ? "border-radius" : ""}`}
            >
              <p className={`${open[8] ? "active-btn" : ""}`}>
                I have few concerns and want to speak with the founders before
                mint, how to reach them?
              </p>
              {open[8] ? (
                <FontAwesomeIcon
                  className={`${open[8] ? "active-btn" : ""}`}
                  icon={faMinus}
                />
              ) : (
                <FontAwesomeIcon icon={faPlus} />
              )}
            </div>
            <div className={`faq-answer ${open[8] ? "active" : ""}`}>
              <p className="answer futura">
                We are very active on our twitter page, you can dm us and we
                will get back to you right away or you can email us and we will
                get back to you.
              </p>
            </div>
          </>
        </Fade>

        {
          // when you add a new faq make sure to increment the value in the brackets
        }
      </div>
    </div>
  );
}

export default Faq;
