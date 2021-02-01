import React, { useEffect } from "react";
import "./components.css";
import ProfilePic from "../assets/picture-of-me.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Cover = () => {
  return (
    <>
      <section class="cover-container">
        <div id="cover">
          <div>
            <img id="profile-picture" src={ProfilePic} alt="a headshot of me" />
          </div>
          <div className="cover-text">Michael Chhuo</div>
          <div className="cover-text sub-text">My interactive resume</div>
        </div>
      </section>
    </>
  );
};

export default Cover;
