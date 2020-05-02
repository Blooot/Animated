import React from "react";
import PublicLayout from "../themes/PublicLayout";
import { Row, Col, Card } from "antd";
import styled from "styled-components";
import { demos } from "../Demos/Demos";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex: 1 0 auto;
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  margin: 50px 0;

  .title-text {
    text-align: center;
    @media (max-width: 900px) {
      max-width: 500px;
    }
    @media (max-width: 400px) {
      max-width: 300px;
    }
    @media (max-width: 200px) {
      max-width: 150px;
    }
    max-width: 800px;
  }
`;
const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  flex: 1 0 auto;
  margin: 30px 0;

  .cards {
    min-height: 200px;
  }
`;

export const DemoList = () => {
  return (
    <PublicLayout headerProps={{ text: "<- Back Home", to: "/" }}>
      <Wrapper>
        <Row gutter={[24, 24]}>
          <Col>
            <Title>
              <div className="title-text">
                Hello! I'm learning about pathfinding and procedural generation
                through animation. Join me!
              </div>
            </Title>
            <CardWrapper>
              {demos.map(({ title, body, href }, i) => {
                return (
                  <Col span={6}>
                    <Card
                      className="cards"
                      title={title}
                      key={i}
                      bordered={true}
                    >
                      {body}
                    </Card>
                  </Col>
                );
              })}
            </CardWrapper>
          </Col>
        </Row>
      </Wrapper>
    </PublicLayout>
  );
};

// 50345b
