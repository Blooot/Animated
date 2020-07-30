import React from "react";
import { Row, Col } from "antd";
import styled from "styled-components";

const StyledTitle = styled.h4`
  margin-top: 20px;
`;

export const HeaderBlock = ({ children }) => {
  return (
    <Row justify="center">
      <Col xs={20} sm={20} md={14}>
        <StyledTitle>{children}</StyledTitle>
      </Col>
    </Row>
  );
};
