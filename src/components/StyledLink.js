import React from "react";
import { Link } from "react-router-dom";
import styled, { withTheme } from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.text};

  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  &:hover {
    color: ${(props) => props.theme.lightText};
  }
`;

export default withTheme((props) => <StyledLink {...props} />);
