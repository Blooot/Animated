import React from "react";
import PublicLayout from "../themes/PublicLayout";
import styled from "styled-components";
import { Post } from "../components/Post";
import demos from "../Demos/Demos";
let d = demos.reverse();

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  margin-top: 50px;
`;

const Posts = styled.div`
  margin: 10% 15%;
  div {
    padding: 10px 0;
  }
`;

export const DemoList = () => {
  return (
    <PublicLayout headerProps={{ text: "<- Home", to: "/" }}>
      <Wrapper>
        <Title>Thanks for reading :)</Title>
        <Posts>
          {d.map((p) => (
            <Post key={p.title} post={p}></Post>
          ))}
        </Posts>
      </Wrapper>
    </PublicLayout>
  );
};
