import React from "react";
import { Circle } from "../Circle";
import PublicLayout from "../themes/PublicLayout";
import { Row, Col } from "antd";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 0 auto;
`;

export const Home = () => {
  return (
    <PublicLayout headerProps={{ text: "Demos ->", to: "/demos" }}>
      <Wrapper>
        <Row>
          <Col>
            <Circle text="an exploration of algorithms...animated!" />
          </Col>
        </Row>
      </Wrapper>
    </PublicLayout>
  );
};
