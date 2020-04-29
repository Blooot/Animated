import React from "react";
import { Layout, Button } from "antd";
import styled from "styled-components";
import StyledLink from "../components/StyledLink";

const { Header: AntHeader } = Layout;

const StyledHeader = styled(AntHeader)`
  display: flex;
  margin: 0 30px 0 30px;
  justify-content: space-between;
  padding: 0;
  line-height: 75px;
  height: fit-content;

  @media (max-width: 500px) {
    line-height: 30px;
  }

  .page-title {
    display: flex;
    font-size: 24px;
    font-weight: 400;
    margin: 0 30px;
  }

  .nav-item {
    padding: 0 15px;
  }
`;

const Wrapper = styled.div`
  box-shadow: 0 2px 8px #392442;
  z-index: 1;
`;

export const Header = ({ text, to }) => {
  return (
    <Wrapper>
      <StyledHeader>
        <h1 className="page-title">Animated</h1>
        <StyledLink className="page-title" to={to}>
          {text}
        </StyledLink>
      </StyledHeader>
    </Wrapper>
  );
};
