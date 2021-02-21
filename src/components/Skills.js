import React from "react";
import styled from "styled-components";
import { Rate } from "antd";

import "./components.css";

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-column-gap: 40px;
  margin: auto;
`;

const Left = styled.div`
  padding-top: 5px;
  float: left;
`;

const Right = styled.div`
  float: right;
  text-align: right;
  font-size: 5pt;
`;

const SkillItem = styled.div`
  font-size: 12pt;
  padding-right: 10px;
`;
const TempDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TechnicalWrapper = styled.div`
  width: 50%;
`;

const Skills = () => {
  const abilities = [
    { name: "Python", rank: 5 },
    { name: "ReactJs", rank: 4 },
    { name: "HTML", rank: 5 },
    { name: "SQL", rank: 5 },
    { name: "JavaScript", rank: 4 },
    { name: "React Native", rank: 3 },
    { name: "C/C++", rank: 4 },
    { name: "Java", rank: 4 },
    { name: "GSAP", rank: 4 },
    { name: "RESTful API", rank: 4 },
    { name: "NodeJs", rank: 3 },
    { name: "Flask-RESTPlus", rank: 4 },
  ];

  const languages = [
    { name: "Teochew (Chinese)", rank: 4 },
    { name: "Khmer", rank: 3 },
  ];

  return (
    <TempDiv id="skills" className="section">
      <div className="underline title-box">
        <h1>Skills</h1>
        <div>
          "Talent you have naturally. Skill is only developed by hours and hours
          of beating on your craft" - Will Smith
        </div>
      </div>
      <TechnicalWrapper>
        <h2>Technical</h2>
        <SkillGrid>
          {abilities.map((d, idx) => {
            return (
              <SkillItem key={idx}>
                <Left>{d.name}</Left>
                <Right>
                  <Rate
                    style={{ color: "#05386b" }}
                    disabled
                    defaultValue={d.rank}
                  />
                </Right>
              </SkillItem>
            );
          })}
        </SkillGrid>
      </TechnicalWrapper>
      <div className="underline">&nbsp;</div>
      <TechnicalWrapper>
        <h2>Languages</h2>
        <SkillGrid>
          {languages.map((d, idx) => {
            return (
              <SkillItem key={idx}>
                <Left>{d.name}</Left>
                <Right>
                  <Rate
                    style={{ color: "#05386b" }}
                    disabled
                    defaultValue={d.rank}
                  />
                </Right>
              </SkillItem>
            );
          })}
        </SkillGrid>
      </TechnicalWrapper>
    </TempDiv>
  );
};

export default Skills;
