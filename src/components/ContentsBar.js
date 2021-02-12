import React, { useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 115px;
  color: white;
  position: absolute;
  top: 100%;
  right: 100px;
`;

const ContentsItem = styled.div`
  text-align: center;
  font-size: 10pt;
  font-weight: bold;
  height: 35px;
  padding: 30px 15px;
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
      <ContentsItem>Profile</ContentsItem>
      <ContentsItem>Experiences</ContentsItem>
      <ContentsItem>Skills</ContentsItem>
      <ContentsItem>Projects</ContentsItem>
      <ContentsItem>Extras</ContentsItem>
    </ContentsWrapper>
  );
};

export default ContentsBar;
