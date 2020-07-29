import React from "react";
import { Row, Col } from "antd";
import styled from "styled-components";

const StyledTitle = styled.h3`
  text-align: center;
`;

export const TitleBlock = ({ children }) => {
  return (
    <Row justify="center">
      <Col span={12}>
        <StyledTitle>{children}</StyledTitle>
      </Col>
    </Row>
  );
};
