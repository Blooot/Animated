import React from "react";
import styled from "styled-components";
import { Header } from "./Header";

const PublicLayout = ({ children, headerProps }) => {
  return (
    <>
      <Header {...headerProps} />
      <div className="content">{children}</div>
    </>
  );
};

export default PublicLayout;
