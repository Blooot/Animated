import React from "react";
import { Row, Col } from "antd";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  img {
    max-width: 100%;
    padding: 0 10px;
  }
`;

export const ImageBlock = ({ src, children }) => {
  return (
    <Row justify="center">
      <Col xs={24} sm={20} md={16} lg={16} xl={16}>
        <Wrapper>
          <img src={src} alt={children} />
        </Wrapper>
      </Col>
    </Row>
  );
};
