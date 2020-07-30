import React from "react";
import styled from "styled-components";
import PublicLayout from "../themes/PublicLayout";
import { Row, Col } from "antd";

const Wrapper = styled.div`
  margin-top: 30px;
  width: 100%;
`;

export const BlogPost = ({ children }) => {
  return (
    <PublicLayout headerProps={{ text: "<- Blog", to: "/blog" }}>
      <Row justify="center">
        <Col style={{ width: "100%" }}>
          <Wrapper>{children}</Wrapper>
        </Col>
      </Row>
    </PublicLayout>
  );
};
