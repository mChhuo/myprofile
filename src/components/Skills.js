import React from "react";
import styled from "styled-components";
import Star from "./Star";

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 40px;
  border: 1px solid red;
  margin: auto;
`;

const SkillItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  text-align: right;
`;

const TempDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

const TechnicalWrapper = styled.div`
  width: 50%;
`;

const Skills = () => {
  return (
    <TempDiv className="section">
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
          <SkillItem>
            <span>Python</span>
            <Star>test</Star>
          </SkillItem>
          <SkillItem>
            <span>Python2</span>
            <Star level={2} />
          </SkillItem>
        </SkillGrid>
      </TechnicalWrapper>
    </TempDiv>
  );
};

export default Skills;
