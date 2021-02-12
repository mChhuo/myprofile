import React from "react";
import styled from "styled-components";

const StarContainer = styled.div`
  float: right;
`;

const Star = ({ level }) => {
  console.log(level);
  return <StarContainer>test</StarContainer>;
};

export default Star;
