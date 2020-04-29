import * as React from "react";
import styled from "styled-components";
import { renderRoutes } from "react-router-config";

const Wrapper = styled.div``;

export const Main = (props) => {
  const { route } = props;
  return <Wrapper>{renderRoutes(route.routes)}</Wrapper>;
};
