import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  max-width: 200px;
  min-height: 200px;
  padding: 30px;
  background: #27182e;
  border-radius: 8px;
`;
const StyledContents = styled.div`
  padding: 30px;
`;

export const Card = () => {
  return (
    <StyledCard>
      <StyledContents>
        <div>hello</div>
      </StyledContents>
    </StyledCard>
  );
};
