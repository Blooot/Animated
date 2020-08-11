import React from "react";
import { Row, Col } from "antd";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 20px 0;
  min-width: 100%;
  ul {
    margin: 15px 0;
  }
`;

export const TextBlock = ({ children }) => {
  return (
    <Row justify="center">
      <Col xs={20} sm={20} md={14}>
        <Wrapper>{children}</Wrapper>
      </Col>
    </Row>
  );
};
