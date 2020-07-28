import styled, { withTheme } from "styled-components";
import { Link } from "react-router-dom";
import React from "react";

const Wrapper = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.text};
  a {
    padding: 15px;
    text-decoration: none;
    display: block;
    &:hover {
      background: ${(props) => props.theme.bodyDark};
      h3 {
        color: ${(props) => props.theme.lightText};
      }
    }
  }
  h3 {
    color: ${(props) => props.theme.text};
    font-weight: bold;
    font-size: 1.75rem;
    line-height: 35px;
    text-transform: capitalize;
    margin: 0;
  }
  p {
    font-size: 0.8rem;
    line-height: 35px;
    color: ${(props) => props.theme.text};
    margin: 0;
  }
`;
const BasePost = ({ post }) => {
  return (
    <Wrapper>
      <Link to={post.href}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </Link>
    </Wrapper>
  );
};

export const Post = withTheme(BasePost);
