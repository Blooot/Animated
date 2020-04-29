import React from "react";
import styled from "styled-components";
import { Header } from "./Header";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .content {
    flex: 1 0 auto;
  }
`;

const PublicLayout = ({ children, headerProps }) => {
  return (
    <Wrapper>
      <Header {...headerProps} />
      <div className="content">{children}</div>
    </Wrapper>
  );
};

export default PublicLayout;
