import React from "react";
import "./Work.css";
import { Fade } from "react-awesome-reveal";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

import art1 from "../../../Assets/art/art (1).png";
import art2 from "../../../Assets/art/art (2).png";
import art3 from "../../../Assets/art/art (3).png";
import art4 from "../../../Assets/art/art (4).png";
import art5 from "../../../Assets/art/art (5).png";
import art6 from "../../../Assets/art/art (6).png";
import art7 from "../../../Assets/art/art (7).png";
import art8 from "../../../Assets/art/art (8).png";
import art9 from "../../../Assets/art/art (9).png";
import art10 from "../../../Assets/art/art (10).png";
import art11 from "../../../Assets/art/art (11).png";
function Work() {
  return (
    <Fade triggerOnce duration={1000} delay={200}>
      <div className="work">
        <h1 className="section-heading kanit">Art Work</h1>
        <Splide
          options={{
            type: "loop",
            gap: "2rem",
            drag: "free",
            arrows: false,
            pagination: false,
            perPage: 3,
            width: "100%",
            breakpoints: {
              965: {
                perPage: 2,
              },
              650: {
                perPage: 1,
                gap: "0px",
              },
            },
            autoScroll: {
              pauseOnHover: false,
              pauseOnFocus: false,
              rewind: false,
              speed: 1,
            },
          }}
          extensions={{ AutoScroll }}
        >
          <SplideSlide>
            <img src={art1} alt="" className="work-img" />
          </SplideSlide>
          <SplideSlide>
            <img src={art2} alt="" className="work-img" />
          </SplideSlide>
          <SplideSlide>
            <img src={art3} alt="" className="work-img" />
          </SplideSlide>
          <SplideSlide>
            <img src={art4} alt="" className="work-img" />
          </SplideSlide>
          <SplideSlide>
            <img src={art5} alt="" className="work-img" />
          </SplideSlide>
          <SplideSlide>
            <img src={art6} alt="" className="work-img" />
          </SplideSlide>
          <SplideSlide>
            <img src={art7} alt="" className="work-img" />
          </SplideSlide>
          <SplideSlide>
            <img src={art8} alt="" className="work-img" />
          </SplideSlide>
          <SplideSlide>
            <img src={art9} alt="" className="work-img" />
          </SplideSlide>
          <SplideSlide>
            <img src={art10} alt="" className="work-img" />
          </SplideSlide>
          <SplideSlide>
            <img src={art11} alt="" className="work-img" />
          </SplideSlide>
        </Splide>
      </div>
    </Fade>
  );
}

export default Work;
