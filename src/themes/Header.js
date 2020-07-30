import React from "react";
import { Layout } from "antd";
import styled from "styled-components";
import StyledLink from "../components/StyledLink";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";

const { Header: AntHeader } = Layout;

const StyledHeader = styled(AntHeader)`
  display: flex;
  justify-content: space-between;
  padding: 0;
  line-height: 75px;
  height: fit-content;
  user-select: none;

  .page-title {
    display: flex;
    font-size: 24px;
    font-weight: 400;
    margin: 0 30px;
    @media (max-width: 500px) {
      font-size: 18px;
    }
  }

  .nav-item {
    padding: 0 15px;
  }
`;
const Socials = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 21px;
  @media (max-width: 500px) {
    font-size: 15px;
  }
  .anticon {
    padding: 0 10px;
  }
`;

const LeftWrapper = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  box-shadow: 0 2px 1px #392442;
  z-index: 1;
`;

export const Header = ({ text, to }) => {
  return (
    <Wrapper>
      <StyledHeader>
        <LeftWrapper>
          <StyledLink className="page-title" to={"/"}>
            Animated
          </StyledLink>
          <Socials>
            <a href="https://github.com/Blooot">
              <GithubOutlined />
            </a>
            <a href="https://www.linkedin.com/in/dale-hamilton-2119b5141/">
              <LinkedinOutlined />
            </a>
          </Socials>
        </LeftWrapper>
        <StyledLink className="page-title" to={to}>
          {text}
        </StyledLink>
      </StyledHeader>
    </Wrapper>
  );
};
