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

export const ImageBlock = ({ src, children, credit }) => {
  return (
    <Row justify="center">
      <Col xs={24} sm={20} md={14} lg={14} xl={14}>
        <Wrapper>
          <img src={src} alt={children} />
          <div>
            {credit && (
              <p>
                <a href={credit}>Reference</a>
              </p>
            )}
          </div>
        </Wrapper>
      </Col>
    </Row>
  );
};
