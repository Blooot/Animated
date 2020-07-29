import React from "react";
import styled from "styled-components";
import PublicLayout from "../themes/PublicLayout";
import { Row, Col } from "antd";

const Wrapper = styled.div`
  margin-top: 30px;
`;

export const BlogPost = ({ children }) => {
  return (
    <PublicLayout headerProps={{ text: "<- Demos", to: "/demos" }}>
      <Row justify="center">
        <Col>
          <Wrapper>{children}</Wrapper>
        </Col>
      </Row>
    </PublicLayout>
  );
};
