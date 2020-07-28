import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { Header } from "./Header";

import { Layout } from "antd";
const { Content } = Layout;

const PublicLayout = ({ children, headerProps }) => {
  const theme = useContext(ThemeContext);

  return (
    <Layout style={{ background: theme.body }}>
      <Header {...headerProps} />
      <Content>{children}</Content>
    </Layout>
  );
};

export default PublicLayout;
