import React from "react";
import { Row, Col } from "antd";
import styled from "styled-components";

const StyledTitle = styled.h3`
  text-align: center;
`;

export const TitleBlock = ({ children }) => {
  return (
    <Row justify="center">
      <Col xs={14} sm={14} md={12} lg={8} xl={8}>
        <StyledTitle>{children}</StyledTitle>
      </Col>
    </Row>
  );
};
