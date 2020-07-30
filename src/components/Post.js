import styled, { withTheme } from "styled-components";
import { Link } from "react-router-dom";
import React from "react";

const Wrapper = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.text};
  a {
    padding: 5px;
    text-decoration: none;
    display: block;
    &:hover {
      background: ${(props) => props.theme.bodyDark};
      h3 {
        color: ${(props) => props.theme.lightText};
      }
    }
  }
`;
const BasePost = ({ post }) => {
  return (
    <Wrapper>
      <Link to={post.href}>
        <h4>{post.title}</h4>
        <p>{post.body}</p>
      </Link>
    </Wrapper>
  );
};

export const Post = withTheme(BasePost);
