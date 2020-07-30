import React from "react";
import { Row, Col } from "antd";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 10px 0 30px 0;
  text-transform: uppercase;
`;

export const DateBlock = ({ children }) => {
  return (
    <Row justify="center">
      <Col xs={20} sm={20} md={14}>
        <Wrapper>{children}</Wrapper>
      </Col>
    </Row>
  );
};
