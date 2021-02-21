import React, { useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  right: 100px;
`;

const ContentsItem = styled.div`
  color: white;
  text-align: center;
  font-size: 10pt;
  font-weight: bold;
  width: 115px;
  height: 80px;
  padding: 30px 15px 15px 15px;
  background-color: #05386b;
`;

const ContentsBar = () => {
  useEffect(() => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#contents",
        start: "top 10%",
        end: "max",
        pin: true,
        pinType: "fixed",
      },
    });
  });
  return (
    <ContentsWrapper id="contents">
      <ContentsItem>
        <a href="#about-me-section">Profile</a>
      </ContentsItem>
      <ContentsItem>
        <a href="#experience-section">Experiences</a>
      </ContentsItem>
      <ContentsItem>
        <a href="#project-section">Projects</a>
      </ContentsItem>
      <ContentsItem>
        <a href="#extra-curricular-section">Extras</a>
      </ContentsItem>
      <ContentsItem>
        <a href="#skills">Skills</a>
      </ContentsItem>
      <ContentsItem>
        <a href="#footer">Contact</a>
      </ContentsItem>
    </ContentsWrapper>
  );
};

export default ContentsBar;
