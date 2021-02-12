import React, { useEffect } from "react";
import "./components.css";
import ProfilePic from "../assets/picture-of-me.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";
import { DownOutlined } from "@ant-design/icons";

gsap.registerPlugin(ScrollTrigger);

const DownArrow = styled.div`
  width: 115px;
  height: 80px;
  background-color: #05386b;
  color: white;
  position: absolute;
  bottom: 0;
  right: 100px;
  text-align: center;
  font-size: 2rem;
`;

const Cover = () => {
  useEffect(() => {
    gsap.to("#arrow", {
      duration: 0.5,
      y: 5,
      repeat: -1,
      yoyo: true,
    });
  }, []);
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
        <DownArrow className="contents">
          <DownOutlined id="arrow" style={{ marginTop: "20px" }} />
        </DownArrow>
      </section>
    </>
  );
};

export default Cover;
